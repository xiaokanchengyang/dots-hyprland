const MESSAGE_NAME = {
  V2_GET_USER_THEME: 'V2_GET_USER_THEME',
  V2_POST_PAGE_INFO: 'V2_POST_PAGE_INFO',
  V2_POST_SAVED_PAGE: 'V2_POST_SAVED_PAGE',
  V2_POST_PAGE: 'V2_POST_PAGE',
  POST_RECOMMENDATION_VALIDATE: 'POST_RECOMMENDATION_VALIDATE',
  POST_EXTENSION_RECOMMENDATION_CONTENT: 'POST_EXTENSION_RECOMMENDATION_CONTENT',
  GET_USERS_ME: 'GET_USERS_ME',
  PATCH_HIGHLIGHT_SLOT_ID: 'PATCH_HIGHLIGHT_SLOT_ID',
  DELETE_HIGHLIGHT: 'DELETE_HIGHLIGHT',
  V2_UPLOAD_PDF: 'V2_UPLOAD_PDF',
  PDF_UPLOAD_PROGRESS: 'PDF_UPLOAD_PROGRESS',
  GET_PDF_UPLOAD_PROGRESS: 'GET_PDF_UPLOAD_PROGRESS',
  GET_PDF_CONTROLLER_NUDGE: 'GET_PDF_CONTROLLER_NUDGE',
  SET_PDF_CONTROLLER_NUDGE: 'SET_PDF_CONTROLLER_NUDGE',
  GET_PDF_CHAT_LEFT_COUNT: 'GET_PDF_CHAT_LEFT_COUNT',
  POST_PDF_CHAT_NEXT_QUERIES: 'POST_PDF_CHAT_NEXT_QUERIES',
  GET_IS_LINER_CHAT_NEW_TAB_COHORT: 'getIsLINERChatNewTabCohort',
  GET_TRANSLATOR_LANGUAGES: 'GET_TRANSLATOR_LANGUAGES',
  SET_DEFAULT_TRANSLATOR_LANGUAGES: 'SET_DEFAULT_TRANSLATOR_LANGUAGES',
  POST_COPILOT_ACTIVATION: 'POST_COPILOT_ACTIVATION',
  POST_COPILOT_YTB_ACTIVATION: 'POST_COPILOT_YTB_ACTIVATION',
  GET_COPILOT_YTB_LEFT_COUNT: 'GET_COPILOT_YTB_LEFT_COUNT',
  GET_SERP_CHAT_LEFT_COUNT: 'GET_SERP_CHAT_LEFT_COUNT',
  GET_UUID: 'GET_UUID',
  POST_SERP_CHAT_SEARCH: 'POST_SERP_CHAT_SEARCH',
  POST_SERP_CHAT_RELATED_QUERIES: 'POST_SERP_CHAT_RELATED_QUERIES',
  GET_USER_ME_MEMBERSHIP_LIMITS: 'GET_USER_ME_MEMBERSHIP_LIMITS',
  GET_CONFIG_JSON: 'GET_CONFIG_JSON',
  GET_SEARCH_EXTRACT_KEYWORDS: 'GET_SEARCH_EXTRACT_KEYWORDS',
  GET_EXTENSION_SETTINGS_YTB_BOOKMARK: 'GET_EXTENSION_SETTINGS_YTB_BOOKMARK',
  POST_USER_PAGE_SAVED: 'POST_USER_PAGE_SAVED',
  DELETE_SAVED_PAGE: 'DELETE_SAVED_PAGE',
  GET_DEVICE_ID: 'GET_DEVICE_ID',
  GET_GOOGLE_SERP: 'GET_GOOGLE_SERP',
  SET_POPUP: 'SET_POPUP',
  UPDATE_GOOGLE_SEARCH_COUNT: 'UPDATE_GOOGLE_SEARCH_COUNT',
  GET_GOOGLE_SEARCH_COUNT: 'GET_GOOGLE_SEARCH_COUNT',
  POST_EXTRACT_HIGHLIGHT: 'POST_EXTRACT_HIGHLIGHT',
  GET_DAILY_BANNER_USAGE: 'GET_DAILY_BANNER_USAGE',
  UPDATE_DAILY_BANNER_USAGE: 'UPDATE_DAILY_BANNER_USAGE',
  POST_COPILOT_GMAIL_DRAFT_REPLY_OPTIONS: 'POST_COPILOT_GMAIL_DRAFT_REPLY_OPTIONS',
  GET_ANONYMOUS_USER_SELECTION_TOOLTIP_USAGE: 'GET_ANONYMOUS_USER_SELECTION_TOOLTIP_USAGE',
  UPDATE_ANONYMOUS_USER_SELECTION_TOOLTIP_USAGE: 'UPDATE_ANONYMOUS_USER_SELECTION_TOOLTIP_USAGE',
  POST_COMMON_LOGS: 'POST_COMMON_LOGS',
  GET_AUTH_COOKIE: 'GET_AUTH_COOKIE',
  GET_USER_ME_MEMBERSHIP: 'GET_USER_ME_MEMBERSHIP',
  GET_USER_ME_VIRAL_HOST_KEY: 'GET_USER_ME_VIRAL_HOST_KEY',
  GET_USER_ME_VIRAL_HOST_KEY_FOR_PROJECT: 'GET_USER_ME_VIRAL_HOST_KEY_FOR_PROJECT',
  POST_SEARCH_FIND_ENTITIES: 'POST_SEARCH_FIND_ENTITIES',
  GET_OPT_IN: 'GET_OPT_IN',
  GET_OPT_IN_FAMILY: 'GET_OPT_IN_FAMILY',
  POST_OPT_IN_FAMILY: 'POST_OPT_IN_FAMILY',
  GET_HTML: 'GET_HTML',
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PREV_GOOGLE_SEARCH_QUERY: 'GET_PREV_GOOGLE_SEARCH_QUERY',
  POST_PREV_GOOGLE_SEARCH_QUERY: 'POST_PREV_GOOGLE_SEARCH_QUERY',
  GET_HAS_BEEN_COPILOT_ACTIVE_FOR_N_DAYS: 'GET_HAS_BEEN_COPILOT_ACTIVE_FOR_N_DAYS',
  POST_COPILOT_THREAD: 'POST_COPILOT_THREAD',
  POST_COPILOT_USER_MESSAGE: 'POST_COPILOT_USER_MESSAGE',
  POST_COPILOT_BOT_MESSAGE: 'POST_COPILOT_BOT_MESSAGE',
  GET_GEO: 'GET_GEO',
  UPDATE_USER_LOCATION_ON_FIRST_LOGIN: 'UPDATE_USER_LOCATION_ON_FIRST_LOGIN',
  GET_USER_LOCATION_ON_FIRST_LOGIN: 'GET_USER_LOCATION_ON_FIRST_LOGIN',
  GET_MAKE_CHAT_TIMESTAMP: 'GET_MAKE_CHAT_TIMESTAMP',
  GET_LAST_BANNER_SHOWN_TIMESTAMP: 'GET_LAST_BANNER_SHOWN_TIMESTAMP',
  UPDATE_LAST_BANNER_SHOWN_TIMESTAMP: 'UPDATE_LAST_BANNER_SHOWN_TIMESTAMP',
  GET_PDF_SOURCE_BY_URL: 'GET_PDF_SOURCE_BY_URL',
  GET_IS_COMMAND_BANNER_SHOWN: 'GET_IS_COMMAND_BANNER_SHOWN',
  CLOSE_COMMAND_BANNER: 'CLOSE_COMMAND_BANNER',
  GET_ALL_COMMANDS: 'GET_ALL_COMMANDS',
  GET_ZENDESK_ARTICLES: 'GET_ZENDESK_ARTICLES',
  GET_IS_RENDER_EXTENSION_PIN: 'GET_IS_RENDER_EXTENSION_PIN',
  GET_GEO_CACHE: 'GET_GEO_CACHE',
  MOVE_THREAD: 'MOVE_THREAD',
  GET_PRODUCT_CANDIDATES: 'GET_PRODUCT_CANDIDATES',
  GET_V1_SPACE_PRODUCT_CANDIDATES: 'GET_V1_SPACE_PRODUCT_CANDIDATES',
  GET_USER_ME_IS_FREE_TRIAL_RECURRING_FAILED: 'GET_USER_ME_IS_FREE_TRIAL_RECURRING_FAILED',
  GET_USER_ME_PAYMENT_LATEST_FAILED: 'GET_USER_ME_PAYMENT_LATEST_FAILED',
  GET_SPACE_LIST: 'GET_SPACE_LIST',
  POST_SPACE: 'POST_SPACE',
  LINER_TO_CHATGPT: 'LINER_TO_CHATGPT',
  GET_THREAD_DATA_BY_URL: 'GET_THREAD_DATA_BY_URL',
  POST_COPILOT_MESSAGE_REC_QUERIES: 'POST_COPILOT_MESSAGE_REC_QUERIES',
  POST_THREAD_SHARE_HASH: 'POST_THREAD_SHARE_HASH',
  GET_MASTER_PLAN_THREAD_INFO: 'GET_MASTER_PLAN_THREAD_INFO',
  POST_PDF_COPILOT_ACTIVATION: 'POST_PDF_COPILOT_ACTIVATION',
  GET_PLATFORM_CHAT_LEFT_COUNT: 'GET_PLATFORM_CHAT_LEFT_COUNT',
  POST_COPILOT_THREAD_BOT_MESSAGE: 'POST_COPILOT_THREAD_BOT_MESSAGE',
  POST_COPILOT_THREAD_USER_MESSAGE: 'POST_COPILOT_THREAD_USER_MESSAGE',
  POST_V1_SPACE_THREAD_MESSAGE: 'POST_V1_SPACE_THREAD_MESSAGE',
  POST_COPILOT_MESSAGE_SEARCH_ENTITIES: 'POST_COPILOT_MESSAGE_SEARCH_ENTITIES',
  PATCH_COPILOT_THREAD_MESSAGE: 'PATCH_COPILOT_THREAD_MESSAGE',
  PATCH_COPILOT_THREAD_MESSAGE_REACTION: 'PATCH_COPILOT_THREAD_MESSAGE_REACTION',
  CHAT_ON_ERROR: 'CHAT_ON_ERROR',
  CHAT_ON_RECEIVE: 'CHAT_ON_RECEIVE',
  CHAT_ON_RECEIVE_BY_TEXT: 'CHAT_ON_RECEIVE_BY_TEXT',
  CHAT_ON_RESPONSE: 'CHAT_ON_RESPONSE',
  CHAT_ON_RESPONSE_BY_TEXT: 'CHAT_ON_RESPONSE_BY_TEXT',
  CHAT_ON_END: 'CHAT_ON_END',
  CHAT_ON_END_BY_TEXT: 'CHAT_ON_END_BY_TEXT',
  CHAT_ON_END_REGENERATION: 'CHAT_ON_END_REGENERATION',
  CHAT_ON_END_REGENERATION_BY_TEXT: 'CHAT_ON_END_REGENERATION_BY_TEXT',
  CHAT_ON_END_REFERENCE: 'CHAT_ON_END_REFERENCE',
  CHAT_ON_ABORT: 'CHAT_ON_ABORT',
  CHAT_ON_ABORT_BY_TEXT: 'CHAT_ON_ABORT_BY_TEXT',
  CHAT_ON_ABORT_REGENERATION: 'CHAT_ON_ABORT_REGENERATION',
  CHAT_ON_ABORT_REGENERATION_BY_TEXT: 'CHAT_ON_ABORT_REGENERATION_BY_TEXT',
  POST_V3_ANSWER_STREAM: 'POST_V3_ANSWER_STREAM',
  POST_COMMAND_STREAM: 'POST_COMMAND_STREAM',
  POST_PARAPHRASE_STREAM: 'POST_PARAPHRASE_STREAM',
  POST_EXPLAIN_STREAM: 'POST_EXPLAIN_STREAM',
  POST_SIMPLIFY_STREAM: 'POST_SIMPLIFY_STREAM',
  POST_TRANSLATE: 'POST_TRANSLATE',
  POST_ANSWER_USER_QUERY: 'POST_ANSWER_USER_QUERY',
  POST_EXTRACT_KEY_PARAGRAPH: 'POST_EXTRACT_KEY_PARAGRAPH',
  POST_RECOMMEND_CONTENTS: 'POST_RECOMMEND_CONTENTS',
  STOP_STREAM: 'STOP_STREAM',
  TOGGLE_COPILOT_CHAT: 'TOGGLE_COPILOT_CHAT',
  POST_V1_WEB_UPLOAD: 'POST_V1_WEB_UPLOAD',
  POST_V1_THREAD: 'POST_V1_THREAD',
  POST_V3_ANSWER: 'POST_V3_ANSWER',
  POST_IMAGE_STREAM: 'POST_IMAGE_STREAM',
  UPLOAD_IMAGE: 'UPLOAD_IMAGE',
  POST_REGENERATE_IMAGE_STREAM: 'POST_REGENERATE_IMAGE_STREAM',
  SPACE_INVALID_DATE: 'SPACE_INVALID_DATE',
  POST_AUTO_HIGHLIGHT: 'POST_AUTO_HIGHLIGHT',
  POST_USER_TIMEZONE: 'POST_USER_TIMEZONE',
  GET_V1_SPACE_FEATURE_AVAILABLE: 'GET_V1_SPACE_FEATURE_AVAILABLE',
  POST_V1_SPACE_FEATURE_USED: 'POST_V1_SPACE_FEATURE_USED',
  GET_USER_ME_PROPERTY: 'GET_USER_ME_PROPERTY',
  PUT_USER_ME_PROPERTY: 'PUT_USER_ME_PROPERTY',
  POST_EXTENSION_TOOLTIP_DETECT_AI: 'POST_EXTENSION_TOOLTIP_DETECT_AI',
  GET_CREDIT_INCOME_TOTAL_BALANCE: 'GET_CREDIT_INCOME_TOTAL_BALANCE',
  GET_AI_MODELS: 'GET_AI_MODELS',
  POST_V1_SPACE_THREAD_MESSAGE_CANCEL: 'POST_V1_SPACE_THREAD_MESSAGE_CANCEL',
  PUT_V1_SPACE_THREAD_MESSAGE: 'PUT_V1_SPACE_THREAD_MESSAGE',
  POST_USER_EMAIL_DIRECT_INVITATION: 'POST_USER_EMAIL_DIRECT_INVITATION',
  POST_INVITATION_COMPLETE: 'POST_INVITATION_COMPLETE',
  GET_INVITATION_TARGET: 'GET_INVITATION_TARGET',
  GET_USER_ME_VIRAL_INVITED_USERS: 'GET_USER_ME_VIRAL_INVITED_USERS',
};

const STORAGE_KEY = {
  PDF_CONTROLLER_NUDGE: 'PDF_CONTROLLER_NUDGE',
  // 예전 스토리지 값을 그대로 이어받기 위해 카멜 케이스로 사용
  OPT_IN: 'optIn',
};

const TRANSLATE_LANGUAGES = [
  { lang: 'English', targetLang: 'EN', isDefault: false, engName: 'English' },
  { lang: '한국어', targetLang: 'KO', isDefault: false, engName: 'Korean' },
  { lang: '中文 (简体)', targetLang: 'ZH', isDefault: false, engName: 'Simplified Chinese' },
  { lang: '日本語', targetLang: 'JA', isDefault: false, engName: 'Japanese' },
  { lang: 'español', targetLang: 'ES', isDefault: false, engName: 'Spanish' },
  { lang: 'français', targetLang: 'FR', isDefault: false, engName: 'French' },
  { lang: 'български', targetLang: 'BG', isDefault: false, engName: 'Bulgarian' },
  { lang: 'čeština', targetLang: 'CS', isDefault: false, engName: 'Czech' },
  { lang: 'dansk', targetLang: 'DA', isDefault: false, engName: 'Danish' },
  { lang: 'Deutsch', targetLang: 'DE', isDefault: false, engName: 'German' },
  { lang: 'Ελληνικά', targetLang: 'EL', isDefault: false, engName: 'Greek' },
  { lang: 'eesti', targetLang: 'ET', isDefault: false, engName: 'Estonian' },
  { lang: 'suomi', targetLang: 'FI', isDefault: false, engName: 'Finnish' },
  { lang: 'magyar', targetLang: 'HU', isDefault: false, engName: 'Hungarian' },
  { lang: 'Indonesia', targetLang: 'ID', isDefault: false, engName: 'Indonesian' },
  { lang: 'italiano', targetLang: 'IT', isDefault: false, engName: 'Italian' },
  { lang: 'lietuvių', targetLang: 'LT', isDefault: false, engName: 'Lithuanian' },
  { lang: 'latviešu', targetLang: 'LV', isDefault: false, engName: 'Latvian' },
  { lang: 'Norsk bokmål', targetLang: 'NB', isDefault: false, engName: 'Norwegian Bokmål' },
  { lang: 'Nederlands', targetLang: 'NL', isDefault: false, engName: 'Dutch' },
  { lang: 'polski', targetLang: 'PL', isDefault: false, engName: 'Polish' },
  {
    lang: 'português (Brasil)',
    targetLang: 'PT-BR',
    isDefault: false,
    engName: 'Portuguese (Brazil)',
  },
  {
    lang: 'português (Portugal)',
    targetLang: 'PT-PT',
    isDefault: false,
    engName: 'Portuguese (Portugal)',
  },
  { lang: 'română', targetLang: 'RO', isDefault: false, engName: 'Romanian' },
  { lang: 'русский', targetLang: 'RU', isDefault: false, engName: 'Russian' },
  { lang: 'slovenčina', targetLang: 'SK', isDefault: false, engName: 'Slovak' },
  { lang: 'slovenščina', targetLang: 'SL', isDefault: false, engName: 'Slovenian' },
  { lang: 'svenska', targetLang: 'SV', isDefault: false, engName: 'Swedish' },
  { lang: 'Türkçe', targetLang: 'TR', isDefault: false, engName: 'Turkish' },
  { lang: 'українська', targetLang: 'UK', isDefault: false, engName: 'Ukrainian' },
];

const NATIVE_MESSAGE_NAME = {
  OPT_IN_SAFARI_EXTENSION: 'OPT_IN_SAFARI_EXTENSION',
  REQUEST_IAP: 'REQUEST_IAP',
};
