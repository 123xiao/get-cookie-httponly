// 安装插件时触发
chrome.runtime.onInstalled.addListener(function () {
  console.log("Cookie获取工具已安装");
});

// 监听来自popup的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getCookies") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length === 0) {
        sendResponse({ success: false, message: "无法获取当前标签页" });
        return;
      }

      const currentTab = tabs[0];
      const url = new URL(currentTab.url);
      const domain = url.hostname;

      chrome.cookies.getAll({ domain: domain }, function (cookies) {
        sendResponse({ success: true, cookies: cookies });
      });
    });

    // 返回true表示异步响应
    return true;
  }
});
