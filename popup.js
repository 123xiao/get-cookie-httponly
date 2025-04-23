document.addEventListener("DOMContentLoaded", function () {
  const getCookiesButton = document.getElementById("getCookiesButton");
  const copyButton = document.getElementById("copyButton");
  const cookieContainer = document.getElementById("cookieContainer");
  let allCookies = [];

  getCookiesButton.addEventListener("click", function () {
    // 获取当前标签页URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      const url = new URL(currentTab.url);
      const domain = url.hostname;
      //获取顶级域名
      const topDomain = domain.split(".").slice(-2).join(".");
      // 使用chrome.cookies API获取cookie（包括HttpOnly）
      chrome.cookies.getAll({ domain: topDomain }, function (cookies) {
        allCookies = cookies;
        displayCookies(cookies);
      });
    });
  });

  copyButton.addEventListener("click", function () {
    if (allCookies.length === 0) {
      alert("没有可复制的Cookie");
      return;
    }

    let cookieText = "";
    allCookies.forEach((cookie) => {
      cookieText += `${cookie.name}=${cookie.value}; `;
    });

    // 去除最后的分号和空格
    cookieText = cookieText.slice(0, -2);

    // 复制到剪贴板
    navigator.clipboard
      .writeText(cookieText)
      .then(() => {
        alert("Cookie已复制到剪贴板");
      })
      .catch((err) => {
        console.error("复制失败:", err);
        alert("复制失败，请重试");
      });
  });

  function displayCookies(cookies) {
    // 清空容器
    cookieContainer.innerHTML = "";

    if (cookies.length === 0) {
      cookieContainer.innerHTML =
        '<div class="empty-message">未找到Cookie</div>';
      return;
    }

    // 按名称排序
    cookies.sort((a, b) => a.name.localeCompare(b.name));

    // 创建表格显示cookie
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    // 添加表头
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr style="background-color: #f3f3f3; text-align: left;">
        <th style="padding: 8px; border-bottom: 1px solid #ddd;">名称</th>
        <th style="padding: 8px; border-bottom: 1px solid #ddd;">值</th>
        <th style="padding: 8px; border-bottom: 1px solid #ddd;">域</th>
        <th style="padding: 8px; border-bottom: 1px solid #ddd;">HttpOnly</th>
      </tr>
    `;
    table.appendChild(thead);

    // 添加表格内容
    const tbody = document.createElement("tbody");
    cookies.forEach((cookie) => {
      const row = document.createElement("tr");
      row.className = "cookie-item";

      // 如果是HttpOnly，添加高亮样式
      if (cookie.httpOnly) {
        row.classList.add("httpOnly");
      }

      row.innerHTML = `
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(
          cookie.name
        )}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; word-break: break-all;">${escapeHtml(
          cookie.value
        )}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(
          cookie.domain
        )}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${
          cookie.httpOnly ? "是" : "否"
        }</td>
      `;

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    cookieContainer.appendChild(table);
  }

  // 用于转义HTML，防止XSS攻击
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
