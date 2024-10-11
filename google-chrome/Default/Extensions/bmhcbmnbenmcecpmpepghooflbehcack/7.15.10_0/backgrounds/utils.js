function messageToBeApp(tabId, { name, data }) {
  chrome.tabs.sendMessage(tabId, { name, data, isBEApp: true });
}
