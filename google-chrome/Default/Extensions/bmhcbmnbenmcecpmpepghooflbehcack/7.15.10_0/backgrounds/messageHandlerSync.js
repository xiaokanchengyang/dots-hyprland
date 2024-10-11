const messageHandlerSync = (message, sender, sendResponse) => {
  const { name: messageName, data, isSync } = message;
  const { tab } = sender;

  if (!isSync) {
    return;
  }
  if (messageName === MESSAGE_NAME.POST_V3_ANSWER_STREAM) {
    CHAT_APIS.postV3Answer({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_COMMAND_STREAM) {
    CHAT_APIS.postCommandStream({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_PARAPHRASE_STREAM) {
    CHAT_APIS.postParaphraseStream({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_EXPLAIN_STREAM) {
    CHAT_APIS.postExplainStream({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_SIMPLIFY_STREAM) {
    CHAT_APIS.postSimplifyStream({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_TRANSLATE) {
    CHAT_APIS.postTranslate({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_ANSWER_USER_QUERY) {
    CHAT_APIS.postAnswerUserQuery({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_EXTRACT_KEY_PARAGRAPH) {
    CHAT_APIS.postExtractKeyParagraph({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_RECOMMEND_CONTENTS) {
    CHAT_APIS.postRecommendContents({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_IMAGE_STREAM) {
    CHAT_APIS.postImageStream({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_REGENERATE_IMAGE_STREAM) {
    CHAT_APIS.postRegenerateImageStream({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.POST_V1_SPACE_THREAD_MESSAGE_CANCEL) {
    CHAT_APIS.postV1SpaceThreadMessageCancel({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.PUT_V1_SPACE_THREAD_MESSAGE) {
    CHAT_APIS.putV1SpaceThreadMessage({ tabId: tab.id, data });
  } else if (messageName === MESSAGE_NAME.STOP_STREAM) {
    if (abortControllers[tab.id] && abortControllers[tab.id].controller) {
      abortControllers[tab.id].controller.abort();
      abortControllers[tab.id] = { ...abortControllers[tab.id], reason: 'stop' };
    }
  }
};

chrome.runtime.onMessage.addListener(messageHandlerSync);
