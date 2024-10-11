const isProduction = true;

const BASE_URL = isProduction ? 'https://getliner.com' : 'https://dev-stage.getliner.com';
const LKS_URL = isProduction ? 'https://lks.getliner.com' : 'https://dev.lks.getliner.com';
const LINERVA_URL = isProduction ? 'https://getliner.com' : 'https://dev-stage.getliner.com';
const PROD_HOSTNAMES = ['getliner.com', 'liner.space', 'liner.com'];
const DEV_HOSTNAMES = ['dev-stage.getliner.com', 'dev.liner.space', 'dev.liner.com'];
const ALLOWED_HOSTNAMES = isProduction ? PROD_HOSTNAMES : DEV_HOSTNAMES;

const URI = {
  LINER: BASE_URL,
};

const SERVER = {
  API: BASE_URL,
  LKS: LKS_URL,
  SLACK: 'https://slack.com',
  ADS: 'https://ads.getliner.com',
  IPIFY: 'https://api.ipify.org',
  GCP_CONFIG: 'https://static.getliner.com/liner-service-bucket/config/be',
  AUTO_COMPLETE_GOOGLE: 'https://suggestqueries.google.com/complete',
  LINERVA: LINERVA_URL,
};

// handler.js 'LOGIN' 참고
let loginHostname = '';

// SERVER.API로 보내는 요청에 사용되는 fetch api
const fetchWith = (url, options) => {
  const fetchUrl = new URL(url);

  if (!url.includes('lks') && ALLOWED_HOSTNAMES.includes(loginHostname)) {
    fetchUrl.hostname = loginHostname;
  }

  return fetch(fetchUrl.href, {
    headers: {
      'Content-Type': 'application/json',
      'X-Liner-Platform-Type': 'be',
    },
    ...options,
  });
};

function http(server, endpoint, proto, params, callback) {
  fetchWith(`${server}${endpoint}`, {
    method: proto.toUpperCase(),
    body: proto.toUpperCase() !== 'GET' ? JSON.stringify(params) : undefined,
  })
    .then((res) => {
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return res.json();
      }
      return res.text();
    })
    .then((json) => callback(json));
}

function httpLKSWithoutSidCookie(endpoint, proto, params, callback) {
  fetch(`${SERVER.LKS}${endpoint}`, {
    method: proto.toUpperCase(),
    body: proto.toUpperCase() == 'POST' ? JSON.stringify(params) : undefined,
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((json) => callback(json));
}

function httpLKS(endpoint, proto, params, callback) {
  if (sidCookie !== undefined || params.override_login === true) {
    fetch(`${SERVER.LKS}${endpoint}`, {
      method: proto.toUpperCase(),
      headers: {
        Authorization: `Bearer ${sidCookie ?? ''}`,
        'Content-Type': 'application/json',
      },
      body: proto.toUpperCase() == 'POST' ? JSON.stringify(params) : undefined,
    })
      .then((res) => res.json())
      .then((json) => callback(json));
    return;
  }
  callback({});
}

// liner knowledge system endpoints
async function lksGetDocuments(urls, filterOption, numOfPhrase, topK, userId) {
  const response = await fetch(`${SERVER.LKS}/documents?top_k=${topK ?? urls.length}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      urls,
      filter_option: filterOption,
      num_of_phrase: numOfPhrase,
      user_id: userId,
    }),
  });
  return await response.json();
}

function lksGetDocument(url, numOfPhrase, userId, callback) {
  const params = {
    url,
    num_of_phrase: numOfPhrase,
    user_id: userId,
  };

  httpLKSWithoutSidCookie(`/document`, 'POST', params, function (json) {
    callback(json);
  });
}

function lksGetVideos(urls, views, screen_type, numOfPhrase, topK, userId, callback) {
  const params = {
    urls,
    views,
    screen_type: screen_type,
    num_of_phrase: numOfPhrase,
    user_id: userId,
  };

  httpLKSWithoutSidCookie(`/videos?top_k=${topK ?? urls.length}`, 'POST', params, function (json) {
    callback(json);
  });
}

function lksDocClick(userId, clickType, document, accessType, accessMethod, referrer, callback) {
  const params = getLKSBaseParams();
  params.user_id = parseInt(userId);
  params.action_type = clickType;
  params.resource_type = 'document';
  params.detail_info = {
    document,
  };
  params.access_type = accessType;
  params.access_method = accessMethod;
  params.referrer = referrer;

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

function lksVideoClick(userId, clickType, document, accessType, accessMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = parseInt(userId);
  params.action_type = clickType;
  params.resource_type = 'video';
  params.detail_info = {
    document,
  };
  params.access_type = accessType;
  params.access_method = accessMethod;

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

function lksDocCreate(userId, document, accessType, accessMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = parseInt(userId);
  params.action_type = 'create';
  params.resource_type = 'document';
  params.detail_info = {
    document,
  };
  params.access_type = accessType;
  params.access_method = accessMethod;

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

function lksVideoCreate(userId, resourceType, document, accessType, accessMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = parseInt(userId);
  params.action_type = 'create';
  params.resource_type = resourceType;
  params.detail_info = {
    document,
  };
  params.access_type = accessType;
  params.access_method = accessMethod;

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

function lksMomentCreate(userId, document, moment, accessType, accessMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = parseInt(userId);
  params.action_type = 'create';
  params.resource_type = 'moment';
  params.detail_info = {
    document,
    moment,
  };
  params.access_type = accessType;
  params.access_method = accessMethod;

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

function lksHighlightCreate(userId, document, phrase, accessType, accessMethod, callback) {
  const params = getLKSBaseParams();
  params.user_id = parseInt(userId);
  params.action_type = 'create';
  params.resource_type = 'phrase';
  params.detail_info = {
    document,
    phrase,
  };
  params.access_type = accessType;
  params.access_method = accessMethod;

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

function lksSERP(userId, platform, query, pageNumber, section, documents, callback) {
  const params = getLKSBaseParams();
  params.user_id = parseInt(userId);
  params.action_type = 'search';
  params.resource_type = 'document';
  params.detail_info = {
    platform,
    query,
    page_num: pageNumber,
    section,
    documents,
  };

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

function lksReaction(
  userId,
  actionType,
  resourceType,
  reactionType,
  document,
  accessType,
  accessMethod,
  callback,
) {
  const params = getLKSBaseParams();
  params.user_id = +userId;
  params.action_type = actionType;
  params.resource_type = resourceType;
  params.detail_info = {
    reaction_type: reactionType,
    document,
  };
  params.access_type = accessType;
  params.access_method = accessMethod;

  httpLKS('/log/user', 'POST', params, function (json) {
    callback(json);
  });
}

// user endpoints
function getUsersMe(callback) {
  let getUsersMeCounter = 0;

  const tryGetUsersMe = () => {
    http(SERVER.API, '/users/me', 'GET', {}, function (json) {
      const { status, reason } = json;
      if (status === 'success') {
        callback(json);
      } else if (reason !== 'not_auth') {
        if (getUsersMeCounter < 3) {
          getUsersMeCounter += 1;
          setTimeout(() => {
            tryGetUsersMe();
          }, 500);
        } else {
          callback(json);
        }
      } else {
        callback(json);
      }
    });
  };

  tryGetUsersMe();
}

// auth endpoints
function postAuthCookie(callback) {
  http(SERVER.API, '/auth/cookie', 'GET', {}, function (json) {
    callback(json);
  });
}

function postAuthLocal(email, password, callback) {
  const params = {
    email: email,
    passwd: password,
  };

  http(SERVER.API, '/auth/local', 'POST', params, function (json) {
    callback(json);
  });
}

function getAuthFacebook(accessToken, callback) {
  const params = {
    access_token: accessToken,
  };

  http(SERVER.API, '/auth/facebook', 'GET', params, function (json) {
    callback(json);
  });
}

function getAuthTwitter(oauthToken, oauthTokenSecret, userID, callback) {
  const params = {
    oauth_token: oauthToken,
    oauth_token_secret: oauthTokenSecret,
    user_id: userID,
  };

  http(SERVER.API, '/auth/twitter', 'GET', params, function (json) {
    callback(json);
  });
}

function postAuthGoogle(code, callback) {
  const params = {
    code: code,
  };

  http(SERVER.API, '/auth/google', 'POST', params, function (json) {
    callback(json);
  });
}

function deleteAuth(callback) {
  http(SERVER.API, '/auth', 'DELETE', {}, function (json) {
    callback(json);
  });
}

// index endpoints
function getCheckServer(platform, info, appVersion, callback) {
  const params = {
    device: platform,
    info: info,
    app_version: appVersion,
  };

  http(SERVER.API, '/checkServer', 'GET', params, function (json) {
    callback(json);
  });
}

function postLinerVersion(platform, version, callback) {
  const params = {
    platform: platform,
    version: version,
  };

  http(SERVER.API, '/liner-version', 'POST', params, function (json) {
    callback(json);
  });
}

// page endpoints
function postPagesInfos(pageID, originalURL, status, callback) {
  let params = {};
  if (pageID != null) {
    params = {
      page_id: pageID,
    };
  } else {
    params = {
      original_url: originalURL.split('?openLinerExtension')[0].split('&openLinerExtension')[0],
      status: status,
    };
  }

  http(SERVER.API, '/pages/infos', 'POST', params, function (json) {
    callback(json);
  });
}

function postPagesSummary(originalURL, status, callback) {
  const params = {
    original_url: originalURL.split('?openLinerExtension')[0].split('&openLinerExtension')[0],
    status: status,
  };

  http(SERVER.API, '/pages/summary', 'POST', params, function (json) {
    callback(json);
  });
}

function postPagesAnnotations(originalURL, styleItemID, content, callback) {
  const params = {
    original_url: originalURL.split('?openLinerExtension')[0].split('&openLinerExtension')[0],
    style_item_id: styleItemID,
    content: content,
  };

  http(SERVER.API, '/pages/annotations', 'POST', params, function (json) {
    callback(json);
  });
}

// Luke - 페이지 최초 저장 할 때 부르는 함수
function postPages(title, url, imageURL, styleItems, lang, localDate, callback) {
  const params = {
    title,
    url,
    image: imageURL,
    engineVersion: '0.2.0',
    styleItems,
    lang,
    localDate,
  };

  http(SERVER.API, '/pages', 'POST', params, function (json) {
    callback(json);
  });
}

function postPagesPageID(pageID, styleItems, callback) {
  const params = {
    style_items: styleItems,
  };

  http(SERVER.API, '/pages/' + pageID, 'POST', params, function (json) {
    callback(json);
  });
}

function postPagesPageIDHighlightID(pageId, highlightId, slotId, callback) {
  const params = {
    slotId,
  };

  http(SERVER.API, '/pages/' + pageId + '/' + highlightId, 'POST', params, function (json) {
    callback(json);
  });
}

function putPage(pageIDs, originalStatus, newStatus, callback) {
  const params = {
    page_ids: pageIDs,
    original_status: originalStatus,
    new_status: newStatus,
  };

  http(SERVER.API, '/pages', 'PUT', params, function (json) {
    callback(json);
  });
}

// pdf endpoints
function postUserFilePdfWithUrl(fileUrl, callback) {
  const params = {
    fileUrl: fileUrl,
  };

  http(SERVER.API, '/user/file/pdf/withUrl', 'POST', params, function (json) {
    callback(json);
  });
}

async function postUserFilePdf(pdfInfo, callback) {
  const { pdfBlobUrl, fileName } = pdfInfo;
  let pdfBlob = await fetch(pdfBlobUrl).then((r) => r.blob());
  var formData = new FormData();
  formData.append('file', pdfBlob, fileName); // 파일 한 개만 허용

  fetchWith(`${SERVER.API}/user/file/pdf`, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((json) => callback(json));
}

// tag endpoints
function getUserTag(callback) {
  http(SERVER.API, '/user/tag', 'GET', {}, function (json) {
    callback(json);
  });
}

function postPageSaveSaveIdTag(saveId, tagTitle, callback) {
  const params = {
    tagTitle,
  };
  http(SERVER.API, `/page/save/${saveId}/tag`, 'POST', params, function (json) {
    callback(json);
  });
}

// Community

function setAmplitudeUserId() {
  try {
    if (user.id !== undefined && user.id > 0) {
      amplitude.then((res) => res.getInstance().setUserId(user.id));
    }
  } catch (e) {}
}

function setAmplitudeUserDevice(installationToken) {
  try {
    setAmplitudeUserId();
    amplitude.then((res) => res.getInstance().setDeviceId(installationToken));
  } catch (e) {}
}

function setAmplitudeUserProperties(properties) {
  try {
    setAmplitudeUserId();
    amplitude.then((res) => res.getInstance().setUserProperties(properties));
  } catch (e) {}
}

function setAmplitudeUserProperty(property, value) {
  try {
    setAmplitudeUserId();
    amplitude.then((res) => res.getInstance().identify(new res.Identify().set(property, value)));
  } catch (e) {}
}

function incrementAmplitudeUserProperty(property, count) {
  try {
    setAmplitudeUserId();
    amplitude.then((res) => res.getInstance().identify(new res.Identify().add(property, count)));
  } catch (e) {}
}

function isAmpInit() {
  return amplitude.then((res) => !!res.getInstance()).catch(() => false);
}

function sendAmplitudeData(eventName, props = {}) {
  try {
    setAmplitudeUserId();
    const defaultProps = {
      browser: getBrowserName(),
      liner_service: 'be',
      liner_extension_version: linerExtensionVersion,
      os: getOS() === 'macos' ? 'mac' : getOS(),
      is_logged_in: isLoggedIn(),
      network_settings: (
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection
      )?.effectiveType,
    };

    const eventProperties = {
      ...defaultProps,
      ...props,
    };

    amplitude.then((res) => res.getInstance().logEvent(eventName, eventProperties));

    if (!isProduction) {
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach((page) => {
          messageTo(page, 'AMPLITUDE_DEBUG', {
            id: uuidv4(),
            eventName,
            time: new Date().toLocaleString(),
            userId: user.id,
            properties: eventProperties,
          });
        });
      });
    }
  } catch (e) {
    console.error(e);
  }
}

function postAnnotation(highlightId, annotationInfo, callback) {
  fetchWith(`${SERVER.API}/v3/highlight/${highlightId}/annotation`, {
    method: 'POST',
    body: JSON.stringify(annotationInfo),
  })
    .then((response) => response.json())
    .then(callback);
}

function postAnnotationV3(highlightId, content) {
  return fetchWith(`${SERVER.API}/v3/highlight/${highlightId}/annotation`, {
    method: 'POST',
    body: JSON.stringify({ message: { content } }),
  }).then((response) => response.json());
}

function editAnnotation(highlightId, annotationId, annotationInfo) {
  return fetchWith(`${SERVER.API}/v3/highlight/${highlightId}/annotation/${annotationId}`, {
    method: 'PUT',
    body: JSON.stringify(annotationInfo),
  });
}

function putAnnotationV3(highlightId, annotationId, content) {
  return fetchWith(`${SERVER.API}/v3/highlight/${highlightId}/annotation/${annotationId}`, {
    method: 'PUT',
    body: JSON.stringify({ message: { content } }),
  });
}

async function getSavedPageCommunity(savedPageId) {
  const response = await fetchWith(`${SERVER.API}/saved-page/${savedPageId}/community`, {
    method: 'GET',
  });
  return await response.json();
}

function getHighlightInfo(highlightId) {
  return fetchWith(`${SERVER.API}/highlight/${highlightId}/community`, {
    method: 'GET',
  }).then((response) => response.json());
}

function deleteAnnotation(highlightId, annotationId) {
  return fetchWith(`${SERVER.API}/highlight/${highlightId}/annotation/${annotationId}`, {
    method: 'DELETE',
  });
}

function getExtensionConfigFromGCP(callback) {
  http(SERVER.GCP_CONFIG, '/config.json', 'GET', {}, (json) => {
    callback(json);
  });
}

async function postPblPagesHighlightUsers(pageUrls, size) {
  const response = await fetchWith(`${SERVER.API}/pbl/pages/highlight-users?size=${size}`, {
    method: 'POST',
    body: JSON.stringify({ pageUrls }),
  });
  return await response.json();
}

async function postUserPageSaved({ pageUrl, pageId }) {
  const response = await fetchWith(`${SERVER.API}/user/page/saved`, {
    method: 'POST',
    body: JSON.stringify({ pageUrl, pageId }),
  });
  const savedPage = await response.json();
  return { savedPage, ok: response.ok };
}

async function postUserPagesSaved(pageUrls) {
  const response = await fetchWith(`${SERVER.API}/user/pages/saved`, {
    method: 'POST',
    body: JSON.stringify({ pageUrls }),
  });
  return await response.json();
}

async function postRecommendationValidate(url, text) {
  const linerUUID = await getLinerUUIDStorage();
  const response = await fetch(`${SERVER.LKS}/recommendation/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, text, liner_uuid: linerUUID, device_type: 'be' }),
  });
  return await response.json();
}

async function getUserFolders() {
  const response = await fetchWith(`${SERVER.API}/user/me/folders?sort-by=used-time`, {
    method: 'GET',
  });
  return await response.json();
}

async function postFolder(folderName, folderEmoji) {
  const response = await fetchWith(`${SERVER.API}/user/me/folder`, {
    method: 'POST',
    body: JSON.stringify({ name: folderName, emoji: folderEmoji }),
  });
  return await response.json();
}

async function postCollection({ name, emoji, description, openState }) {
  const response = await fetchWith(`${SERVER.API}/user/me/folder`, {
    method: 'POST',
    body: JSON.stringify({ name, emoji, description, openState }),
  });
  return await response.json();
}

function deleteUserSavedPage(savedPageId) {
  return fetchWith(`${SERVER.API}/user/me/saved-page/${savedPageId}`, {
    method: 'DELETE',
  });
}

async function putSavedPageFolder(savedPageId, folderId) {
  const response = await fetchWith(`${SERVER.API}/user/me/saved-page/${savedPageId}/folder`, {
    method: 'PUT',
    body: JSON.stringify({ folderId }),
  });
  return await response.json();
}

function getFavicon(domain, size) {
  return fetch(`https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
}

async function savedPageHighlightSnapshot(savedPageId, styleId, snapshot) {
  return await fetchWith(`${SERVER.API}/page/save/${savedPageId}/highlights/${styleId}/snapshot`, {
    method: 'POST',
    body: snapshot,
  });
}

async function postSyncFolder(savedPageId, collectionIds) {
  return fetchWith(`${SERVER.API}/saved-page/${savedPageId}/sync/folders`, {
    method: 'POST',
    body: JSON.stringify({ folderIds: collectionIds }),
  });
}

async function getDocument(pageUrl) {
  const response = await fetch(pageUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.text();
}

function getReadAmazonNotebook() {
  return fetch(`https://read.amazon.com/notebook`, { method: 'GET' });
}

function getAmazonDpBook(bookAsin, state) {
  return fetch(
    `https://read.amazon.com/notebook?asin=${bookAsin}&contentLimitState=${
      state?.contentLimitState ?? ''
    }&token=${state?.token ?? ''}`,
    { method: 'GET' },
  )
    .then((res) => res.text())
    .then((html) => html);
}

function getUserIntegrationKindleBooks() {
  return fetchWith(`${SERVER.API}/user/integration/kindle/books`, {
    method: 'GET',
  });
}

function postUserIntegrationKindleBookHighlights(book, highlights) {
  return fetchWith(`${SERVER.API}/user/integration/kindle/book/highlights`, {
    method: 'POST',
    body: JSON.stringify({ book, highlights }),
  });
}

function getUserIntegrationSettingKindle() {
  return fetchWith(`${SERVER.API}/user/integration/setting/kindle`, {
    method: 'GET',
  });
}

function postUserIntegrationSettingKindle() {
  return fetchWith(`${SERVER.API}/user/integration/setting/kindle`, {
    method: 'POST',
  });
}

const fetchWithTimeout = (url, options, timeout = 15000) => {
  return new Promise((resolve) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);

    fetchWith(url, { ...options, signal: controller.signal })
      .then((response) => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch(() => {
        clearTimeout(timeoutId);
        resolve({ ok: false });
      });
  });
};

function handleClickVideoTimestamp(videoSeconds) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs.forEach((page) => {
      messageTo(page, 'CLICK_VIDEO_TIMESTAMP', {
        videoSeconds,
      });
    });
  });
}

function handleClickSummaryContent({ refChunks, sourceType }) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs.forEach((page) => {
      messageTo(page, 'CLICK_SUMMARY_CONTENT', {
        refChunks,
        sourceType,
      });
    });
  });
}

const APIS = {
  getV2UserTheme: async () => {
    const res = await fetchWith(`${SERVER.API}/v2/user/slots`, {
      method: 'GET',
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postV2PageInfo: async (pageUrl) => {
    const res = await fetchWith(`${SERVER.API}/v2/page/info`, {
      method: 'POST',
      body: JSON.stringify({ pageUrl }),
    }).catch({ ok: false });

    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  postV2SavedPage: async ({ savedPageId, highlights }) => {
    const res = await fetchWith(`${SERVER.API}/v2/saved-page/${savedPageId}`, {
      method: 'POST',
      body: JSON.stringify({ highlights }),
    }).catch({ ok: false });
    const json = await res.json();
    return {
      ok: res.ok,
      ...json,
    };
  },
  postV2Page: async (page) => {
    const res = await fetchWith(`${SERVER.API}/v2/page`, {
      method: 'POST',
      body: JSON.stringify(page),
    }).catch({ ok: false });
    const json = await res.json();
    return {
      ok: res.ok,
      ...json,
    };
  },
  postSnippet: async ({ imageUrl, title, description, faviconUrl, localDate }) => {
    const res = await fetchWith(`${SERVER.API}/save/snippet`, {
      method: 'POST',
      body: JSON.stringify({ imageUrl, title, description, faviconUrl, localDate }),
    });
    return await res.json();
  },
  postSummarize: async ({ html, url }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/summarize`, {
      method: 'POST',
      body: JSON.stringify({ html, url }),
    });
    return await res.json();
  },
  postSimplify: async ({ html, url }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/simplify`, {
      method: 'POST',
      body: JSON.stringify({ html, url }),
    });
    return await res.json();
  },
  postExtensionChat: async ({ uniqueId, query, references, conversationId }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/extension/chat`, {
      method: 'POST',
      body: JSON.stringify({
        unique_id: uniqueId,
        query,
        references,
        conversation_id: conversationId,
      }),
    });
    return res.ok ? await res.json() : { ok: res.ok, status: res.status };
  },
  postExtensionRecommendationQuery: async ({ uniqueId, conversationId }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/extension/recommendation/query`, {
      method: 'POST',
      body: JSON.stringify({
        unique_id: uniqueId,
        conversation_id: conversationId,
      }),
    });
    return res.ok ? await res.json() : { ok: res.ok, status: res.status };
  },
  postExtensionRelatedContent: async ({ conversationId, withSearch }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/extension/recommendation/content`, {
      method: 'POST',
      body: JSON.stringify({ conversation_id: conversationId, with_search: withSearch }),
    });
    return res.ok ? await res.json() : { ok: res.ok, status: res.status };
  },
  getUsersMe: async () => {
    const res = await fetchWith(`${SERVER.API}/users/me`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  patchHighlightSlotId: async ({ savedPageId, highlightId, slotId }) => {
    const res = await fetchWith(
      `${SERVER.API}/page/save/${savedPageId}/highlights/${highlightId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ slotId }),
      },
    ).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  deleteHighlight: async ({ highlightId }) => {
    const res = await fetchWith(`${SERVER.API}/highlight/${highlightId}`, {
      method: 'DELETE',
    }).catch({ ok: false });
    return { ok: res.ok };
  },
  postUserFilePdf: async ({ formData }) => {
    const res = await fetchWith(`${SERVER.API}/pdf/upload`, {
      method: 'POST',
      body: formData,
      headers: { 'X-Liner-Platform-Type': 'be' },
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getPDFSourceByUrl: async ({ url }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/saved-pdf/search-by-url`, {
      method: 'POST',
      body: JSON.stringify({ sourceUrl: url }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getPDFUploadProgress: async ({ savedPageId }) => {
    const res = await fetchWith(`${SERVER.API}/pdf/${savedPageId}/upload/progress`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/pdf', 'X-Liner-Platform-Type': 'be' },
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getPDFChatLeftCount: async (timezoneOffset) => {
    const res = await fetchWith(
      `${SERVER.API}/chat/ai/pdf/left-count?timezoneOffset=${timezoneOffset}`,
      { method: 'GET' },
    ).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postPDFChatNextQueries: async (savedPageId, query) => {
    const res = await fetchWith(`${SERVER.API}/chat/ai/pdf/${savedPageId}/next-queries`, {
      method: 'POST',
      body: JSON.stringify({ query, numOfNextQueries: 3 }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postExtensionChatLimitRefill: async ({ uniqueId }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/extension/chat/limit/refill`, {
      method: 'POST',
      body: JSON.stringify({
        unique_id: uniqueId,
      }),
    });
    return res.ok ? await res.json() : { ok: res.ok, status: res.status };
  },
  postCopilotActivation: async ({ html, url }) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/activate/web`, {
      method: 'POST',
      body: JSON.stringify({ html, sourceUrl: url }),
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  postYtbCopilotActivation: async ({ transcript, url }) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/activate/youtube`, {
      method: 'POST',
      body: JSON.stringify({ transcript, sourceUrl: url }),
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  getYtbCopilotLeftCount: async ({ uniqueId }) => {
    const res = await fetchWith(
      `${SERVER.LINERVA}/extension/copilot/video/left-count?unique_id=${uniqueId}`,
      { method: 'GET' },
    );
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },

  postCopilotRecommendationContent: async ({ uniqueId, url, lang }) => {
    const res = await fetchWithTimeout(
      `${SERVER.LINERVA}/extension/copilot/v2/hook/recommend-contents`,
      {
        method: 'POST',
        body: JSON.stringify({
          uniqueId: `${uniqueId}`,
          url,
          lang,
        }),
      },
    );
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getSERPChatLeftCount: async (uuid, userId) => {
    const res = await fetchWith(
      `${SERVER.LINERVA}/search/liner-ai/left-count?uuid=${uuid}&user_id=${userId}`,
      { method: 'GET' },
    ).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postSERPChatRelatedQueries: async ({ query, answer }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/search/follow-up-question`, {
      method: 'POST',

      body: JSON.stringify({ q: query, answer }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postSERPChatSearch: async (page, { query, references, modelType }, signal) => {
    const abortController = new AbortController();
    let queryTemplate = '';
    let splitResult = [];
    let splitLast = '';
    const res = await fetchWith(`${SERVER.LINERVA}/linerva/v1/search/liner-ai`, {
      signal,
      method: 'POST',
      body: JSON.stringify({ modelType, q: query, references }),
    }).catch((e) => {
      abortController.abort();
      messageTo(page, 'POST_SERP_CHAT_SEARCH', {
        requestModelType: modelType,
        rawQuery: query,
        status_code: 500,
        done: true,
      });
    });

    const reader = res.body.getReader();
    let response = '';
    while (true) {
      const { done, value } = await reader.read();
      const resValue = new Response(value);

      if (done) {
        if (res.status === 403) {
          messageTo(page, 'POST_SERP_CHAT_SEARCH', {
            requestModelType: modelType,
            rawQuery: query,
            done,
            statusCode: 403,
          });

          return;
        }

        messageTo(page, 'POST_SERP_CHAT_SEARCH', {
          ...JSON.parse(`${queryTemplate}${splitLast}`),
          requestModelType: modelType,
          rawQuery: query,
          done,
        });
        return;
      }

      try {
        const data = await resValue.text();
        response += data;
        queryTemplate = `{"q":${JSON.stringify(query)}`;
        splitResult = response.split(queryTemplate);
        splitLast = splitResult[splitResult.length - 1];

        if (response.includes(queryTemplate)) {
          messageTo(page, 'POST_SERP_CHAT_SEARCH', {
            ...JSON.parse(`${queryTemplate}${splitLast}`),
            requestModelType: modelType,
            rawQuery: query,
            done,
          });
          response = '';
        }
      } catch (e) {
        if (e?.name !== 'SyntaxError') {
          messageTo(page, 'POST_SERP_CHAT_SEARCH', {
            requestModelType: modelType,
            rawQuery: query,
            status_code: 500,
            done: true,
          });
          abortController.abort();
          return;
        }
      }
    }
  },
  getUserMeMembershipLimits: async () => {
    if (isLoggedIn()) {
      if (Object.keys(membershipLimits).length) {
        return { ok: true, ...membershipLimits };
      }

      const res = await fetchWith(`${SERVER.API}/user/me/membership/limits`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Liner-Requester': 'be',
          'X-Liner-Platform-Type': 'be',
        },
      }).catch({ ok: false });
      return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
    } else {
      membershipLimits = {};
      return { ok: false };
    }
  },
  getSearchExtractKeywords: async (query) => {
    const res = await fetchWith(`${SERVER.LINERVA}/search/extract-keywords?q=${query}`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getConfigJSON: async () => {
    const res = await fetch(`${SERVER.GCP_CONFIG}/config.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  deleteSavedPage: async (savedPageId) => {
    const res = await fetchWith(`${SERVER.API}/user/me/saved-page/${savedPageId}`, {
      method: 'DELETE',
    }).catch({ ok: false });
    return { ok: res.ok };
  },
  postExtractHighlight: async ({ uniqueId, html, url }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/extension/copilot/v2/hook/extract-highlight`, {
      method: 'POST',
      body: JSON.stringify({ unique_id: `${uniqueId}`, html, url }),
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postCopilotGmailDraftCompose: async (
    page,
    { uniqueId, conversationId, query, lang, order },
    signal,
  ) => {
    const abortController = new AbortController();
    let queryTemplate = '';
    let splitResult = [];
    let splitLast = '';
    const queryKeyObj = { query, order };

    const res = await fetchWith(`${SERVER.LINERVA}/extension/copilot/gmail/draft/compose`, {
      signal,
      method: 'POST',
      body: JSON.stringify({
        unique_id: `${uniqueId}`,
        conversation_id: conversationId,
        query,
        lang,
      }),
    }).catch((e) => {
      abortController.abort();
      messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_COMPOSE', {
        ...queryKeyObj,
        status_code: 500,
        done: true,
      });
    });

    const reader = res.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      const res = new Response(value);

      if (done) {
        messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_COMPOSE', {
          ...queryKeyObj,
          ...JSON.parse(`${queryTemplate}${splitLast}`),
          rawQuery: query,
          done,
        });
        return;
      }

      try {
        const data = await res.text();
        queryTemplate = `{"conversation_id":${JSON.stringify(conversationId)}`;
        splitResult = data.split(queryTemplate);
        splitLast = splitResult[splitResult.length - 1];

        messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_COMPOSE', {
          ...queryKeyObj,
          ...JSON.parse(`${queryTemplate}${splitLast}`),
          done,
        });
      } catch (e) {
        if (e?.name !== 'SyntaxError') {
          messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_COMPOSE', {
            ...queryKeyObj,
            status_code: 500,
            done: true,
          });
          abortController.abort();
          return;
        }
      }
    }
  },
  postCopilotGmailDraftReply: async (
    page,
    { uniqueId, conversationId, query, emailThread, order },
    signal,
  ) => {
    const abortController = new AbortController();
    let queryTemplate = '';
    let splitResult = [];
    let splitLast = '';
    const queryKeyObj = { query, order };

    const res = await fetchWith(`${SERVER.LINERVA}/extension/copilot/gmail/draft/reply`, {
      signal,
      method: 'POST',
      body: JSON.stringify({
        unique_id: `${uniqueId}`,
        conversation_id: conversationId,
        query,
        email_thread: emailThread,
      }),
    }).catch((e) => {
      abortController.abort();
      messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_REPLY', {
        ...queryKeyObj,
        status_code: 500,
        done: true,
      });
    });

    const reader = res.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      const res = new Response(value);

      if (done) {
        messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_REPLY', {
          ...queryKeyObj,
          ...JSON.parse(`${queryTemplate}${splitLast}`),
          done,
        });
        return;
      }

      try {
        const data = await res.text();
        queryTemplate = `{"conversation_id":${JSON.stringify(conversationId)}`;
        splitResult = data.split(queryTemplate);
        splitLast = splitResult[splitResult.length - 1];

        messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_REPLY', {
          ...queryKeyObj,
          ...JSON.parse(`${queryTemplate}${splitLast}`),
          done,
        });
      } catch (e) {
        if (e?.name !== 'SyntaxError') {
          messageTo(page, 'POST_COPILOT_GMAIL_DRAFT_REPLY', {
            ...queryKeyObj,
            status_code: 500,
            done: true,
          });
          abortController.abort();
          return;
        }
      }
    }
  },
  postCopilotGmailDraftReplyOptions: async ({ uniqueId, emailThread, lang }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/extension/copilot/gmail/draft/reply/options`, {
      method: 'POST',
      body: JSON.stringify({ unique_id: `${uniqueId}`, email_thread: emailThread, lang }),
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getUserMeMembership: async () => {
    if (isLoggedIn()) {
      const res = await fetchWith(`${SERVER.API}/user/me/membership`, {
        method: 'GET',
      }).catch({ ok: false });
      return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
    } else {
      return { ok: false };
    }
  },
  postCommonLogs: (cookie, props) => {
    fetch(`${SERVER.LKS}/common-logs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookie}` },
      body: JSON.stringify(props),
    });
  },
  getAuthCookie: async () => {
    const res = await fetchWith(`${SERVER.API}/auth/cookie`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getUserMeViralHostKey: async (viralType = 'act-22') => {
    const res = await fetchWith(`${SERVER.API}/user/me/viral-host-key?type=${viralType}`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postSearchFindEntities: async ({ answer }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/search/find-entities`, {
      method: 'POST',
      body: JSON.stringify({ generated_answer: answer }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getHasBeenActiveForNDays: async (uniqueId) => {
    const res = await fetchWith(`${SERVER.LINERVA}/user/is-active?uniqueId=${uniqueId}`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getHTML: async (url) => {
    const res = await fetch(url);
    const html = await res.text();
    return {
      ok: res.ok,
      html: html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ''),
    };
  },
  postUserMeSafariExtensionAppAccountToken: async (appAccountToken) => {
    await fetchWith(`${SERVER.API}/user/me/safari-extension/app-account-token`, {
      method: 'POST',
      body: JSON.stringify({ appAccountToken }),
    }).catch({ ok: false });
  },
  getProducts: async () => {
    if (products.length) {
      return { ok: true, products };
    }

    const res = await fetchWith(`${SERVER.API}/products`, {
      method: 'GET',
    }).catch({ ok: false });

    const productsResponse = await res.json();
    products = productsResponse;

    return res.ok ? { ok: res.ok, products: productsResponse } : { ok: res.ok };
  },
  postCopilotThread: async (data) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/threads`, {
      method: 'POST',
      body: JSON.stringify(data),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postCopilotBotMessage: async (data) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/threads/${data.threadId}/bot/messages`, {
      method: 'POST',
      body: JSON.stringify(data),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postCopilotUserMessage: async (data) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/threads/${data.threadId}/user/messages`, {
      method: 'POST',
      body: JSON.stringify(data),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getGeo: async () => {
    const res = await fetchWith(`${SERVER.API}/geo`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, countryCode: null };
  },
  getMakeChatTimestamp: async (uniqueId, signUpDate) => {
    const res = await fetch(
      `${SERVER.LINERVA}/user/make-chat-timestamps?uniqueId=${uniqueId}&signUpDate=${signUpDate}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    ).catch({ ok: false });
    return { ok: res.ok, ...(await res.json()) };
  },
  getZendeskArticles: async () => {
    const res = await fetchWith(`${SERVER.API}/zendesk/articles`, {
      method: 'GET',
    });
    try {
      return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
    } catch {
      return { ok: false };
    }
  },
  getSpaces: async () => {
    const res = await fetchWith(`${SERVER.API}/v1/spaces`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  moveThread: async ({ spaceId, threadId, targetSpaceId }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/${spaceId}/thread/${threadId}/move`, {
      method: 'PUT',
      body: JSON.stringify({ targetSpaceId }),
    }).catch({ ok: false });
    return { ok: res.ok };
  },
  getProductCandidates: async () => {
    const res = await fetchWith(`${SERVER.API}/product-candidates`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getV1SpaceProductCandidates: async () => {
    const res = await fetchWith(`${SERVER.API}/v1/space/product-candidates?v=240614`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getUserMeIsFreeTrialRecurringFailed: async () => {
    const res = await fetchWith(`${SERVER.API}/user/me/is-free-trial-recurring-failed`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getUserMePaymentLatestFailed: async () => {
    const res = await fetchWith(`${SERVER.API}/user/me/payment/latest-failed`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getSpace: async () => {
    const res = await fetchWith(`${SERVER.API}/v1/spaces`, {
      method: 'GET',
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postSpace: async (name) => {
    const res = await fetchWith(`${SERVER.API}/v1/space`, {
      method: 'POST',
      body: JSON.stringify({ name }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postChatGPTThreadToLiner: async (body, spaceId) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/${spaceId}/thread/from-chatgpt`, {
      method: 'POST',
      body: JSON.stringify(body),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getThreadDataByUrl: async (url, attachmentType) => {
    const searchByUrl = await fetchWith(`${SERVER.API}/v1/thread/search-by-url`, {
      method: 'POST',
      body: JSON.stringify({ url, attachmentType }),
    }).catch({ ok: false });
    const searchByUrlJSON = await searchByUrl.json();

    if (searchByUrl.ok) {
      const { spaceId, threadId } = searchByUrlJSON;
      const threadMainMsg = await fetchWith(
        `${SERVER.API}/v1/space/${spaceId}/thread/${threadId}`,
        { method: 'GET' },
      )
        .then((res) => res.json())
        .catch({ ok: false });

      const threadSubMsg = await fetchWith(
        `${SERVER.API}/v1/space/${spaceId}/thread/${threadId}/sub-messages?`,
        {
          method: 'GET',
          params: { direction: 'forward', size: 100 },
        },
      )
        .then((res) => res.json())
        .catch({ ok: false });

      const subMessages = threadSubMsg.messages;
      const threadData = {
        ...threadMainMsg,
        subMessages,
        messages: [threadMainMsg.mainMessage, ...subMessages],
      };

      return { ok: searchByUrl.ok, ...threadData };
    } else {
      return { ok: searchByUrl.ok, status: searchByUrl.status };
    }
  },
  postCopilotMessageRecQueries: async (body) => {
    const res = await fetchWith(`${SERVER.API}/platform/copilot/v1/recommendation/query`, {
      method: 'POST',
      body: JSON.stringify({ ...body, platform: 'web' }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postThreadShareHash: async ({ spaceId, threadId }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/${spaceId}/thread/${threadId}/share`, {
      method: 'POST',
      body: JSON.stringify({}),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getMasterPlanThreadInfo: async ({ threadId, sourceId }) => {
    const res = await fetchWith(
      `${SERVER.API}/v1/copilot/threads/${threadId}/source/${sourceId}/space-thread-id`,
      { method: 'GET' },
    ).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postPDFCopilotActivation: async ({ formData }) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/pdf/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Liner-Platform-Type': 'be',
      },
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getPlatformChatLeftCount: async ({ uniqueId, chatPlatform = 'web' }) => {
    const res = await fetchWith(
      `${SERVER.API}/platform/copilot/v1/left-count?user-id=${uniqueId}&platform=${chatPlatform}`,
      { method: 'GET' },
    ).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postCopilotThreadBotMessage: async ({ threadId, body }) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/threads/${threadId}/bot/messages`, {
      method: 'POST',
      body: JSON.stringify(body),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postCopilotThreadUserMessage: async ({ threadId, body }) => {
    const res = await fetchWith(`${SERVER.API}/v1/copilot/threads/${threadId}/user/messages`, {
      method: 'POST',
      body: JSON.stringify(body),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postV1SpaceThreadMessage: async ({ spaceId, threadId, message }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/${spaceId}/thread/${threadId}/message`, {
      method: 'POST',
      body: JSON.stringify({ ...message, deviceType: 'be' }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postCopilotMessageSearchEntities: async ({ generatedAnswer }) => {
    const res = await fetchWith(`${SERVER.API}/search/find-entities`, {
      method: 'POST',
      body: JSON.stringify({ generated_answer: generatedAnswer }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  patchCopilotThreadMessage: async ({ threadId, messageId, body }) => {
    const res = await fetchWith(
      `${SERVER.API}/v1/copilot/threads/${threadId}/bot/messages/${messageId}`,
      {
        method: 'PATCH',
        body: JSON.stringify(body),
      },
    ).catch({ ok: false });
    return { ok: res.ok };
  },
  patchCopilotThreadMessageReaction: async ({ spaceId, threadId, messageId, reactionType }) => {
    const res = await fetchWith(
      `${SERVER.API}/v1/space/${spaceId}/thread/${threadId}/message/${messageId}/reaction`,
      {
        method: 'PATCH',
        body: JSON.stringify({ reaction: reactionType }),
      },
    ).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postV1WebUpload: async ({ sourceUrl }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/upload/web`, {
      method: 'POST',
      body: JSON.stringify({ sourceUrl }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postV1ImageUpload: async ({ formData }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/upload/image`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Liner-Platform-Type': 'be',
      },
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postV1Thread: async ({ spaceId, message }) => {
    const threadCreationResponse = await fetchWith(`${SERVER.API}/v1/space/${spaceId}/thread`, {
      method: 'POST',
      body: JSON.stringify({ ...message, deviceType: 'be' }),
    }).catch({ ok: false });

    if (threadCreationResponse.ok) {
      const threadCreationJSON = await threadCreationResponse.json();

      const { spaceId, id: threadId } = threadCreationJSON;
      const threadMainMsg = await fetchWith(
        `${SERVER.API}/v1/space/${spaceId}/thread/${threadId}`,
        { method: 'GET' },
      )
        .then((res) => res.json())
        .catch({ ok: false });

      const threadData = {
        ...threadMainMsg,
        subMessages: [],
        messages: [threadMainMsg.mainMessage],
      };

      return { ok: threadCreationResponse.ok, ...threadData };
    } else {
      return { ok: threadCreationResponse.ok, status: threadCreationResponse.status };
    }
  },
  postV3Answer: async (body) => {
    const res = await fetchWith(`${SERVER.LINERVA}/platform/copilot/v3/answer`, {
      method: 'POST',
      body: JSON.stringify(body),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  postAutoHighlight: async ({ html, url, title }) => {
    const res = await fetchWith(`${SERVER.LINERVA}/linerva/api/v1/auto-highlight`, {
      method: 'POST',
      body: JSON.stringify({ html, url, title }),
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  postUserTimezone: async () => {
    const res = await fetchWith(`${SERVER.API}/user/timezone`, {
      method: 'POST',
      body: JSON.stringify({ timezone: Intl.DateTimeFormat().resolvedOptions().timeZone }),
    }).catch({ ok: false });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok };
  },
  getV1SpaceFeatureAvailable: async ({ type }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/feature-available?type=${type}`, {
      method: 'GET',
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  postV1SpaceFeatureUsed: async ({ type }) => {
    const res = await fetchWith(`${SERVER.API}/v1/space/feature-used?type=${type}`, {
      method: 'POST',
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  getUserMeProperty: async () => {
    const res = await fetchWith(`${SERVER.API}/user/me/property`, {
      method: 'GET',
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  putUserMeProperty: async (property) => {
    const res = await fetchWith(`${SERVER.API}/user/me/property`, {
      method: 'PUT',
      body: JSON.stringify({ ...property }),
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  postExtensionTooltipDetectAi: async ({ query }) => {
    const res = await fetchWith(`${SERVER.API}/extension/tooltip/detect-ai`, {
      method: 'POST',
      body: JSON.stringify({ text: query }),
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  getCreditIncomeTotalBalance: async () => {
    const res = await fetchWith(`${SERVER.API}/v1/credit/income/total-balance`, {
      method: 'GET',
    });

    if (res.ok) {
      const reader = res.body.getReader();
      let body = '';
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          return JSON.parse(body);
        }

        body += new TextDecoder().decode(value);
      }
    }

    return { ok: res.ok, status: res.status };
  },
  getAIModels: async () => {
    const res = await fetchWith(`${SERVER.API}/v1/ai-models`, {
      method: 'GET',
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  postUserEmailDirectInvitation: async ({ targetEmail, eventCode }) => {
    const res = await fetchWith(`${SERVER.API}/user/email/direct-invitation`, {
      method: 'POST',
      body: JSON.stringify({ targetEmail, eventCode }),
    });
    return res.ok ? { ok: res.ok, status: 200 } : { ok: res.ok, status: res.status };
  },
  postInvitationComplete: async () => {
    const res = await fetchWith(`${SERVER.API}/event/ac-30/complete`, {
      method: 'POST',
      body: JSON.stringify({}),
    });
    return res.ok ? { ok: res.ok, status: 200 } : { ok: res.ok, status: res.status };
  },
  getInvitationTarget: async () => {
    const res = await fetchWith(`${SERVER.API}/event/ac-30/target`, {
      method: 'GET',
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
  getUserMeViralInvitedUsers: async () => {
    const res = await fetchWith(`${SERVER.API}/user/me/viral/invited-users`, {
      method: 'GET',
    });
    return res.ok ? { ok: res.ok, ...(await res.json()) } : { ok: res.ok, status: res.status };
  },
};
