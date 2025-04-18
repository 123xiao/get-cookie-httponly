# 万能 Cookie 获取工具，突破 httponly 限制！

![版本](https://img.shields.io/badge/版本-1.1.0-blue) ![开发工具](https://img.shields.io/badge/IDE-VSCode-green) ![谷歌](https://img.shields.io/badge/Chrome-最新版-4285F4) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E) ![HTML](https://img.shields.io/badge/HTML-5-E34F26) ![CSS](https://img.shields.io/badge/CSS-3-1572B6)

[![GitHub stars](https://img.shields.io/github/stars/123xiao/get-cookie-httponly)](https://github.com/123xiao/get-cookie-httponly/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/123xiao/get-cookie-httponly)](https://github.com/123xiao/get-cookie-httponly/network/members)
[![GitHub issues](https://img.shields.io/github/issues/123xiao/get-cookie-httponly)](https://github.com/123xiao/get-cookie-httponly/issues)

![Visitor Count](https://profile-counter.glitch.me/123xiao-get-cookie-httponly/count.svg)

这是一个 Chrome 浏览器扩展，可以获取当前网站的所有 cookie，包括 HttpOnly 标记的 cookie。

## 功能特点

- 获取当前网站的所有 cookie，包括 HttpOnly cookie
- 以表格形式清晰展示 cookie 信息
- 支持一键复制所有 cookie
- 支持所有网站

## 软件截图

### 主界面

![主界面](images/introduce1.png)

### Cookie 展示效果

![Cookie展示](images/introduce2.png)

### 复制功能

![复制功能](images/introduce3.png)

## 安装方法

1. 下载本仓库并解压
2. 打开 Chrome 浏览器，进入扩展管理页面：`chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击左上角的"加载已解压的扩展程序"
5. 选择解压后的目录
6. 完成安装

## 使用方法

1. 访问你想要获取 cookie 的网站
2. 点击 Chrome 工具栏中的扩展图标
3. 在弹出窗口中点击"获取当前网站 Cookie"按钮
4. 查看获取到的 cookie 信息（HttpOnly cookie 会被高亮显示）
5. 如需复制所有 cookie，点击"复制所有 Cookie"按钮

## 隐私说明

- 本扩展仅在用户主动点击按钮时获取 cookie
- 所有 cookie 信息仅在本地展示，不会发送到任何远程服务器
- 本扩展不会在任何时候自动记录或存储 cookie 信息

## 注意事项

- 由于浏览器安全限制，某些网站可能会限制 cookie 的访问
- 本扩展仅适用于 Chrome 浏览器

## 支持网站示例

以下是本工具已在多个知名网站上测试通过的示例：

| 网站名称   | 网址                        | 是否支持获取 | 备注                           |
| ---------- | --------------------------- | ------------ | ------------------------------ |
| 京东       | https://www.jd.com          | ✅           | 可获取所有 Cookie，含 HttpOnly |
| 淘宝       | https://www.taobao.com      | ✅           | 可获取所有 Cookie              |
| 抖音       | https://www.douyin.com      | ✅           | 可获取完整 Cookie 信息         |
| 百度       | https://www.baidu.com       | ✅           | 可完整获取                     |
| 大麦网     | https://www.damai.cn        | ✅           | 可获取登录 Cookie              |
| 微博       | https://weibo.com           | ✅           | 支持完整获取                   |
| 知乎       | https://www.zhihu.com       | ✅           | 可获取完整 Cookie              |
| 哔哩哔哩   | https://www.bilibili.com    | ✅           | 支持完整获取                   |
| 网易       | https://www.163.com         | ✅           | 支持完整获取                   |
| 腾讯       | https://www.qq.com          | ✅           | 支持完整获取                   |
| Google     | https://www.google.com      | ✅           | 支持获取所有 Cookie            |
| Facebook   | https://www.facebook.com    | ✅           | 可获取登录 Cookie              |
| Twitter    | https://twitter.com         | ✅           | 支持完整获取                   |
| Amazon     | https://www.amazon.com      | ✅           | 可获取所有 Cookie              |
| Netflix    | https://www.netflix.com     | ✅           | 支持获取认证 Cookie            |
| YouTube    | https://www.youtube.com     | ✅           | 支持完整获取                   |
| Instagram  | https://www.instagram.com   | ✅           | 支持登录 Cookie 获取           |
| LinkedIn   | https://www.linkedin.com    | ✅           | 支持完整获取                   |
| 拼多多     | https://www.pinduoduo.com   | ✅           | 支持所有 Cookie 获取           |
| 天猫       | https://www.tmall.com       | ✅           | 可获取所有 Cookie              |
| 支付宝     | https://www.alipay.com      | ✅           | 支持获取非敏感 Cookie          |
| 美团       | https://www.meituan.com     | ✅           | 支持完整获取                   |
| Reddit     | https://www.reddit.com      | ✅           | 支持完整获取                   |
| 小红书     | https://www.xiaohongshu.com | ✅           | 支持登录 Cookie 获取           |
| 爱奇艺     | https://www.iqiyi.com       | ✅           | 支持完整获取                   |
| 今日头条   | https://www.toutiao.com     | ✅           | 支持完整获取                   |
| Spotify    | https://www.spotify.com     | ✅           | 支持获取认证 Cookie            |
| 12306      | https://www.12306.cn        | ✅           | 支持登录 Cookie 获取           |
| 微信网页版 | https://wx.qq.com           | ✅           | 支持获取会话 Cookie            |
| Github     | https://github.com          | ✅           | 支持完整获取                   |

> 注意：虽然本工具能够获取包括 HttpOnly 在内的所有 Cookie，但请遵守网站的使用条款和隐私政策，合法合规使用。
