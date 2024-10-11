const camelLeftCountRegex = /{"decision":[\s\S]*?"leftCount":\d{1,3}}/gm;
const camelStatusCodeRegex = /{"result"[\s\S]*?"statusCode":\d{3}}/gm;
const camelAnswerRegex = /{"answer"[\s\S]*?"statusCode":\d{3}}/gm;
const snakeStatusCodeRegex = /{"result"[\s\S]*?"status_code":\d{3}}/gm;
const v3AnswerRegex = /{"decision":[\s\S]*?"statusCode":\d{1,3}}/gm;

const camelStatusCodeType = 'statusCode';
const snakeStatusCodeType = 'status_code';

const getRandomIntInMinMax = (min, max) => {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);

  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin; // 최댓값도 포함, 최솟값도 포함
};

const getMessageWithModifiedModelType = (message) => {
  return {
    ...message,
    modelType: message.modelType.includes('gpt-4') ? 'gpt-4' : 'gpt-3.5',
  };
};

const modify = (message) => {
  return message.paragraph
    ? `<quotation>${message.paragraph}</quotation>${message.answer}`
    : message.answer;
};

const abortControllers = {};

const messageFetchWithTimeout = ({ url, options, timeout = 15000, tabId }) => {
  return new Promise((resolve) => {
    const controller = new AbortController();
    abortControllers[tabId] = { controller, reason: null };

    const timeoutId = setTimeout(() => {
      abortControllers[tabId] = { controller, reason: 'timeout' };
      controller.abort();
    }, timeout);

    fetchWith(url, { ...options, signal: controller.signal })
      .then((response) => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch(() => {
        clearTimeout(timeoutId);
        resolve({ ok: false, status: 500 });
      });
  });
};

const messageFetchWithRetry = async ({ url, options, timeout = 15000, tabId }) => {
  const res = await messageFetchWithTimeout({ url, options, timeout, tabId });

  if (!res.ok && abortControllers[tabId]?.reason !== 'stop') {
    return await messageFetchWithTimeout({ url, options, timeout, tabId });
  }

  return res;
};

const fetchStream = async ({ url, body, data, regex, statusCodeType, tabId }) => {
  const { threadId, order, query, ampThreadValue, openType } = data;

  let message = {};
  try {
    const res = await messageFetchWithRetry({
      url,
      options: {
        method: 'POST',
        body,
      },
      tabId,
    }).catch(() => {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ERROR,
        data: { status: 500 },
      });
    });
    if (!res) {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ABORT_BY_TEXT,
        data: { threadId, message, prevMessageOrder: order, hasResult: false, query },
      });
    } else if (res.ok) {
      const reader = res.body.getReader();
      let response = '';
      let isReceived = false;

      while (true) {
        // eslint-disable-next-line no-await-in-loop
        const { done, value } = await reader.read();

        if (done) {
          const found = response.match(regex);
          if (found) {
            const lastResult = found[found.length - 1];
            message = JSON.parse(lastResult);

            if (message[statusCodeType] === 200) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_END_BY_TEXT,
                data: { threadId, query, message, prevMessageOrder: order, ampThreadValue },
              });
            } else {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_ERROR,
                data: { status: message[statusCodeType] },
              });
            }
          }
          return;
        }

        const data = new TextDecoder().decode(value);
        const found = data.match(regex);

        if (found) {
          const lastResult = found[found.length - 1];
          message = JSON.parse(lastResult);

          if (message[statusCodeType] === 200) {
            if (!isReceived) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_RECEIVE_BY_TEXT,
                data: { query, message, ampThreadValue, openType },
              });
              isReceived = true;
            }
            messageToBeApp(tabId, {
              name: MESSAGE_NAME.CHAT_ON_RESPONSE_BY_TEXT,
              data: { message, query },
            });

            response = data;
          } else {
            messageToBeApp(tabId, {
              name: MESSAGE_NAME.CHAT_ON_ERROR,
              data: { status: message[statusCodeType] },
            });
            return;
          }
        } else {
          response += data;
        }
      }
    } else if (abortControllers[tabId]?.reason === 'stop') {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ABORT_BY_TEXT,
        data: { threadId, message, prevMessageOrder: order, hasResult: true, query },
      });
    } else {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ERROR,
        data: { status: res.status },
      });
    }
  } catch (err) {
    if (err?.name === 'AbortError') {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ABORT_BY_TEXT,
        data: { threadId, message, prevMessageOrder: order, hasResult: true, query },
      });
    } else {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ERROR,
        data: { status: res.status },
      });
    }
  }
};

const fetchStreamRegeneration = async ({ url, body, data, regex, statusCodeType, tabId }) => {
  const { threadId, messageId, query, ampThreadValue, openType } = data;

  let message = {};
  try {
    const res = await messageFetchWithRetry({
      url,
      options: {
        method: 'POST',
        body,
      },
      tabId,
    }).catch(() => {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ERROR,
        data: { status: 500 },
      });
    });

    if (!res) {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ABORT_REGENERATION_BY_TEXT,
        data: { threadId, message, messageId, hasResult: false, query },
      });
    } else if (res.ok) {
      const reader = res.body.getReader();
      let response = '';
      let isReceived = false;

      while (true) {
        // eslint-disable-next-line no-await-in-loop
        const { done, value } = await reader.read();

        if (done) {
          const found = response.match(regex);
          if (found) {
            const lastResult = found[found.length - 1];
            message = JSON.parse(lastResult);

            if (message[statusCodeType] === 200) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_END_REGENERATION_BY_TEXT,
                data: { threadId, query, message, messageId, ampThreadValue },
              });
            } else {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_ERROR,
                data: { status: message[statusCodeType] },
              });
            }
          }
          return;
        }

        const data = new TextDecoder().decode(value);
        const found = data.match(regex);

        if (found) {
          const lastResult = found[found.length - 1];
          message = JSON.parse(lastResult);

          if (message[statusCodeType] === 200) {
            if (!isReceived) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_RECEIVE_BY_TEXT,
                data: { query, message, ampThreadValue, openType },
              });
              isReceived = true;
            }
            messageToBeApp(tabId, {
              name: MESSAGE_NAME.CHAT_ON_RESPONSE_BY_TEXT,
              data: { message, query },
            });

            response = data;
          } else {
            messageToBeApp(tabId, {
              name: MESSAGE_NAME.CHAT_ON_ERROR,
              data: { status: message[statusCodeType] },
            });
            return;
          }
        } else {
          response += data;
        }
      }
    } else {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ERROR,
        data: { status: res.status },
      });
    }
  } catch (err) {
    if (err?.name === 'AbortError') {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ABORT_REGENERATION_BY_TEXT,
        data: { threadId, message, messageId, hasResult: false, query },
      });
    } else {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ERROR,
        data: { status: res.status },
      });
    }
  }
};

const CHAT_APIS = {
  postCommandStream: async ({ tabId, data }) => {
    const { query } = data;

    const extensionArguments = {
      action: 'custom',
      content: query.text,
    };

    CHAT_APIS.postV3Answer({ tabId, data: { ...data, extensionArguments } });
  },
  postParaphraseStream: async ({ tabId, data }) => {
    const { query } = data;

    const extensionArguments = {
      action: 'paraphrase',
      content: query.text,
    };

    CHAT_APIS.postV3Answer({ tabId, data: { ...data, extensionArguments } });
  },
  postSimplifyStream: async ({ tabId, data }) => {
    const { query } = data;

    const extensionArguments = {
      action: 'simplify',
      content: query.text,
    };

    CHAT_APIS.postV3Answer({ tabId, data: { ...data, extensionArguments } });
  },
  postExplainStream: async ({ tabId, data }) => {
    const { query } = data;

    const extensionArguments = {
      action: 'explain',
      content: query.text,
    };

    CHAT_APIS.postV3Answer({ tabId, data: { ...data, extensionArguments } });
  },
  postTranslate: async ({ tabId, data }) => {
    const { query } = data;

    const extensionArguments = {
      action: 'translate',
      content: query.text,
      targetLanguage: query.targetLang || 'EN',
    };

    CHAT_APIS.postV3Answer({ tabId, data: { ...data, extensionArguments } });
  },
  postAnswerUserQuery: async ({ tabId, data }) => {
    const { threadId, order, query, ampThreadValue, openType, lang, html, url, userId, uuid } =
      data;

    const body = JSON.stringify({
      uniqueId: userId >= 0 ? `${userId}` : uuid,
      query: query.text,
      lang,
      html,
      url,
    });

    let message = {};
    try {
      const res = await messageFetchWithRetry({
        url: `${SERVER.API}/extension/copilot/v2/hook/answer-user-query`,
        options: {
          method: 'POST',
          body,
        },
        tabId,
      }).catch(() => {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: 500 },
        });
      });

      if (!res) {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ABORT_BY_TEXT,
          data: { threadId, message, prevMessageOrder: order, hasResult: false, query },
        });
      } else if (res.ok) {
        const reader = res.body.getReader();
        let response = '';
        let isReceived = false;

        while (true) {
          // eslint-disable-next-line no-await-in-loop
          const { done, value } = await reader.read();

          if (done) {
            const found = response.match(camelAnswerRegex);
            if (found) {
              const lastResult = found[found.length - 1];
              message = JSON.parse(lastResult);

              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_END_BY_TEXT,
                data: {
                  threadId,
                  query,
                  message: {
                    ...message,
                    result: message.answer,
                  },
                  prevMessageOrder: order,
                  ampThreadValue,
                },
              });
            }
            return;
          }

          const data = new TextDecoder().decode(value);
          const found = data.match(camelAnswerRegex);

          if (found) {
            const lastResult = found[found.length - 1];
            message = JSON.parse(lastResult);

            if (!isReceived) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_RECEIVE_BY_TEXT,
                data: {
                  query,
                  message: {
                    ...message,
                    result: message.answer,
                  },
                  ampThreadValue,
                  openType,
                },
              });
              isReceived = true;
            }
            messageToBeApp(tabId, {
              name: MESSAGE_NAME.CHAT_ON_RESPONSE_BY_TEXT,
              data: {
                message: {
                  ...message,
                  result: message.answer,
                },
                query,
              },
            });

            response = data;
          } else {
            response += data;
          }
        }
      } else {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: res.status },
        });
      }
    } catch (err) {
      if (err?.name === 'AbortError') {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ABORT_BY_TEXT,
          data: {
            threadId,
            message: {
              ...message,
              result: message.answer,
            },
            prevMessageOrder: order,
            hasResult: true,
            query,
          },
        });
      } else {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: res.status },
        });
      }
    }
  },
  postExtractKeyParagraph: async ({ tabId, data }) => {
    const { threadId, order, query, ampThreadValue, openType, lang, html, url, userId, uuid } =
      data;

    const body = JSON.stringify({
      uniqueId: userId >= 0 ? `${userId}` : uuid,
      lang,
      html,
      url,
    });

    let message = {};

    try {
      const res = await messageFetchWithRetry({
        url: `${SERVER.API}/extension/copilot/v2/hook/extract-key-paragraph`,
        options: {
          method: 'POST',
          body,
        },
        tabId,
      }).catch(() => {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: 500 },
        });
      });

      if (!res) {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ABORT_BY_TEXT,
          data: { threadId, message, prevMessageOrder: order, hasResult: false, query },
        });
      } else if (res.ok) {
        const reader = res.body.getReader();
        let response = '';
        let isReceived = false;

        while (true) {
          // eslint-disable-next-line no-await-in-loop
          const { done, value } = await reader.read();

          if (done) {
            const found = response.match(camelAnswerRegex);
            if (found) {
              const lastResult = found[found.length - 1];
              message = JSON.parse(lastResult);

              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_END_BY_TEXT,
                data: {
                  threadId,
                  query,
                  message: {
                    ...message,
                    result: modify(message),
                  },
                  prevMessageOrder: order,
                  ampThreadValue,
                },
              });
            }
            return;
          }

          const data = new TextDecoder().decode(value);
          const found = data.match(camelAnswerRegex);

          if (found) {
            const lastResult = found[found.length - 1];
            message = JSON.parse(lastResult);

            if (!isReceived) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_RECEIVE_BY_TEXT,
                data: {
                  query,
                  message: {
                    ...message,
                    result: modify(message),
                  },
                  ampThreadValue,
                  openType,
                },
              });
              isReceived = true;
            }
            messageToBeApp(tabId, {
              name: MESSAGE_NAME.CHAT_ON_RESPONSE_BY_TEXT,
              data: {
                message: {
                  ...message,
                  result: modify(message),
                },
                query,
              },
            });

            response = data;
          } else {
            response += data;
          }
        }
      } else {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: res.status },
        });
      }
    } catch (err) {
      if (err?.name === 'AbortError') {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ABORT_BY_TEXT,
          data: {
            threadId,
            message: {
              ...message,
              result: modify(message),
            },
            prevMessageOrder: order,
            hasResult: true,
            query,
          },
        });
      } else {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: res.status },
        });
      }
    }
  },
  postRecommendContents: async ({ tabId, data }) => {
    const { threadId, order, query, ampThreadValue, lang, url, userId, uuid } = data;

    const body = JSON.stringify({
      uniqueId: userId >= 0 ? `${userId}` : uuid,
      lang,
      url,
    });

    try {
      const res = await messageFetchWithRetry({
        url: `${SERVER.API}/extension/copilot/v2/hook/recommend-contents`,
        options: {
          method: 'POST',
          body,
        },
        tabId,
      }).catch(() => {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: 500 },
        });
      });

      if (!res) {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: 500 },
        });
      } else if (res.ok) {
        const { items } = await res.json();
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_END_REFERENCE,
          data: {
            threadId,
            query,
            items,
            prevMessageOrder: order,
            ampThreadValue,
          },
        });
      } else {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { status: res.status },
        });
      }
    } catch (err) {
      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_ERROR,
        data: { status: 500 },
      });
    }
  },
  postImageStream: async ({ tabId, data }) => {
    const { sourceUrl } = data;

    const extensionArguments = {
      action: 'imageCustom',
      content: sourceUrl,
    };

    CHAT_APIS.postV3Answer({ tabId, data: { ...data, extensionArguments } });
  },
  postRegenerateImageStream: async ({ tabId, data }) => {
    const { threadId, query, url, userId, uuid, sourceUrl } = data;
    const body = JSON.stringify({
      uniqueId: userId >= 0 ? `${userId}` : uuid,
      sourceUrl,
      url,
      command: query.all,
      threadId,
    });
    await fetchStreamRegeneration({
      url: `${SERVER.API}/extension/tooltip/image-stream`,
      body,
      data,
      regex: camelStatusCodeRegex,
      statusCodeType: camelStatusCodeType,
      tabId,
    });
  },
  postV1SpaceThreadMessageCancel: ({ _, data }) => {
    const { spaceId, threadId, messageId } = data;
    messageFetchWithRetry({
      url: `${SERVER.API}/v1/space/${spaceId}/thread/${threadId}/agent-message/${messageId}/cancel`,
      options: {
        method: 'POST',
      },
    });
  },
  putV1SpaceThreadMessage: ({ tabId, data }) => {
    const { spaceId, threadId, messageId, metadata, messagePieces, attachments } = data;
    messageFetchWithRetry({
      url: `${SERVER.API}/v1/space/${spaceId}/thread/${threadId}/message/${messageId}`,
      options: {
        method: 'PUT',
        body: JSON.stringify({
          metadata,
          messagePieces,
          attachments,
        }),
      },
      tabId,
    });
  },
  postV3Answer: async ({ tabId, data }) => {
    const {
      userId,
      experimentId,
      spaceId,
      threadId,
      userMessageId,
      agentMessageId,
      modelType,
      query,
      mode,
      showReferenceChunks,
      regenerate,
      extensionArguments,
    } = data;

    const body = JSON.stringify({
      userId,
      experimentId,
      spaceId,
      threadId,
      userMessageId,
      agentMessageId,
      modelType,
      query: query.all,
      agentId: 'liner',
      mode: mode || 'general',
      platform: 'be',
      showReferenceChunks: !!showReferenceChunks,
      regenerate,
      extensionArguments,
    });
    const responseQueue = [];
    let queueTimer;

    const clearQueueTask = () => {
      clearTimeout(queueTimer);
      responseQueue.length = 0;
    };

    const processQueue = () => {
      const v3Answer = responseQueue.shift();

      // responseQueue 의 길이가 양수가 아니거나, v3Answer가 없을 때 early return
      if (!responseQueue.length || !v3Answer) {
        return;
      }

      messageToBeApp(tabId, {
        name: MESSAGE_NAME.CHAT_ON_RESPONSE,
        data: { v3Answer, reqData: data, extensionArguments },
      });
      queueTimer = setTimeout(() => processQueue(), getRandomIntInMinMax(10, 50) * 10);
    };

    const onFlushData = (founds) => {
      // founds 가 없을 때 early return..인데 애초에 founds 가 있을 때 호출중이긴 합니다.
      if (!founds) {
        return;
      }

      const v3Answers = founds.map((found) => JSON.parse(found));
      const beforeAnswerStreaming = v3Answers?.every((data) => !data.answer);

      if (beforeAnswerStreaming) {
        v3Answers?.forEach((v3Answer) => {
          messageToBeApp(tabId, {
            name: MESSAGE_NAME.CHAT_ON_RESPONSE,
            data: { v3Answer, reqData: data, extensionArguments },
          });
        });

        return;
      }

      const cutVolume = Math.ceil(founds.length * 0.05);

      founds.forEach((found, index) => {
        if (index % cutVolume === 0) {
          responseQueue.push(JSON.parse(found));
        }
      });

      processQueue();
    };

    try {
      const controller = new AbortController();

      CHAT_APIS.putV1SpaceThreadMessage({
        tabId,
        data: {
          spaceId,
          threadId,
          messageId: userMessageId,
          messagePieces: null,
          attachments: null,
          metadata: { request: JSON.parse(body) },
        },
      });

      const res = await messageFetchWithRetry({
        url: `${SERVER.API}/platform/copilot/v3/answer`,
        options: {
          signal: controller.signal,
          method: 'POST',
          body,
        },
        tabId,
      }).catch((err) => {
        clearQueueTask();

        if (err?.name === 'AbortError') {
          messageToBeApp(tabId, {
            name: MESSAGE_NAME.CHAT_ON_ERROR,
            data: { v3Answer: {}, status: err?.status },
          });
        } else {
          messageToBeApp(tabId, {
            name: MESSAGE_NAME.CHAT_ON_ERROR,
            data: { v3Answer: {}, status: err?.status, err },
          });
        }
      });

      if (!res) {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ABORT,
          data: { v3Answer: {}, status: 500 },
        });
      } else if (res.ok && extensionArguments?.action === 'translate') {
        const reader = res.body.getReader();
        let response = '';
        let hasFirstResponse = false;
        let isReceived = false;

        while (true) {
          const { done, value } = await reader.read();
          const decodeData = new TextDecoder().decode(value);

          response += decodeData;

          const founds = response.match(v3AnswerRegex);

          if (done) {
            const lastFound = founds[founds.length - 1];
            const v3Answer = JSON.parse(lastFound);

            let index = 0;

            if (v3Answer.statusCode === 200) {
              const type = () => {
                index += Math.floor(5 + Math.random() * 10);
                const nextV3Answer = {
                  ...v3Answer,
                  answer: v3Answer.answer.substring(0, index),
                };

                if (index >= v3Answer.answer.length) {
                  setTimeout(() => {
                    messageToBeApp(tabId, {
                      name: MESSAGE_NAME.CHAT_ON_END,
                      data: { v3Answer: nextV3Answer, reqData: data, extensionArguments },
                    });
                  }, 1500);
                  clearInterval(intervalRef);

                  return true;
                }

                messageToBeApp(tabId, {
                  name: MESSAGE_NAME.CHAT_ON_RESPONSE,
                  data: { v3Answer: nextV3Answer, reqData: data, extensionArguments },
                });

                return false;
              };

              const intervalRef = setInterval(type, 50);
            } else {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_ERROR,
                data: { v3Answer, status: v3Answer.statusCode },
              });
            }

            return;
          }

          if (founds) {
            const v3Answer = JSON.parse(founds[0]);

            if (!isReceived && !!v3Answer.answer) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_RECEIVE,
                data: { v3Answer, reqData: data, extensionArguments },
              });
              isReceived = true;
            }

            if (!hasFirstResponse) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_RESPONSE,
                data: { v3Answer, reqData: data, extensionArguments },
              });

              hasFirstResponse = true;
            }
          }
        }
      } else if (res.ok) {
        const reader = res.body.getReader();
        let response = '';
        let isReceived = false;

        while (true) {
          const { done, value } = await reader.read();
          const decodeData = new TextDecoder().decode(value);

          response += decodeData;

          const founds = response.match(v3AnswerRegex);

          if (done) {
            if (founds) {
              clearQueueTask();
              founds.some((found, idx) => {
                const v3Answer = JSON.parse(found);

                if (v3Answer.statusCode === 200) {
                  if (idx === founds.length - 1) {
                    messageToBeApp(tabId, {
                      name: MESSAGE_NAME.CHAT_ON_END,
                      data: { v3Answer, reqData: data, extensionArguments },
                    });

                    return true;
                  }

                  messageToBeApp(tabId, {
                    name: MESSAGE_NAME.CHAT_ON_RESPONSE,
                    data: { v3Answer, reqData: data, extensionArguments },
                  });

                  return false;
                }

                messageToBeApp(tabId, {
                  name: MESSAGE_NAME.CHAT_ON_ERROR,
                  data: { v3Answer, status: v3Answer.statusCode },
                });

                return true;
              });

              return;
            }

            return;
          }

          if (founds) {
            const v3Answer = JSON.parse(founds[0]);

            if (!isReceived && !!v3Answer.answer) {
              messageToBeApp(tabId, {
                name: MESSAGE_NAME.CHAT_ON_RECEIVE,
                data: { v3Answer, reqData: data, extensionArguments },
              });
              isReceived = true;
            }

            onFlushData(founds);

            response = founds.reduce((acc, cur, idx) => {
              if (idx === founds.length - 1) {
                return acc;
              }

              return acc.replace(cur, '').trim();
            }, response);
          }
        }
      } else {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { v3Answer: {}, status: 500 },
        });
      }
    } catch (err) {
      console.error(err);
      clearQueueTask();

      if (err?.name === 'AbortError') {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ABORT,
          data: { v3Answer: {}, status: err?.status, err },
        });
      } else {
        messageToBeApp(tabId, {
          name: MESSAGE_NAME.CHAT_ON_ERROR,
          data: { v3Answer: {}, status: err.status, err },
        });
      }
    }
  },
};
