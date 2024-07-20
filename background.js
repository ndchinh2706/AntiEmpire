chrome.runtime.setUninstallURL("https://nguyenchinh.dev/tinhtaolaidi.png");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, {
      message: 'TabUpdated'
    });
  }
})