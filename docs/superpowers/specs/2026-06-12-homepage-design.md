# 个人主页实现规格

**日期**：2026-06-12
**域名**：eliottxu.top
**方案**：纯静态 HTML/CSS/JS，Cloudflare Pages 部署

---

## 定位

个人主页作为博客与作品展示平台，风格偏设计师审美（参考 femke.design）。Hero 标签：**Tinkerer & Creator**。子应用通过链接跳转，主页不承载应用逻辑。

---

## 文件结构

```
homepage/
├── index.html              ← 单页主体，包含所有 section
├── styles/
│   ├── main.css            ← 全局变量、reset、排版
│   ├── layout.css          ← 顶部导航、section 布局
│   └── components.css      ← 卡片、按钮、动效
├── js/
│   ├── nav.js              ← 导航高亮（Intersection Observer）
│   └── animations.js       ← 入场动效
├── assets/
│   ├── fonts/              ← 字体文件（或 Google Fonts CDN）
│   └── projects/           ← 项目截图
└── _redirects              ← Cloudflare Pages 路由规则（暂时留空）
```

---

## 布局

顶部固定导航 + 全页单列滚动。导航项：About · Projects · Blog · Contact。移动端收起为汉堡菜单。

---

## 视觉规格

| 用途 | 色值 |
|------|------|
| 背景 | `#FAFAF8` |
| 主文字 | `#1A1A1A` |
| 强调色 | `#C8A882` |
| 次要文字 | `#888880` |
| 分割线 | `#EBEBE8` |

- **标题字体**：Playfair Display（Google Fonts CDN）
- **正文/导航**：Inter（Google Fonts CDN）

---

## 动效

- 初次加载：文字淡入上移（opacity 0→1, translateY 20px→0）
- 导航 hover：下划线从左滑出
- Project 卡片 hover：轻微 scale + 阴影加深

---

## 各 Section 内容

### Hero
- 大字标题：`Eliott Xu`
- 标签：`Tinkerer & Creator`
- 副标题：占位符，用户后续自填
- CTA 按钮：滚动到 Projects

### Projects
- SSM 卡片：封面占位图 + 项目名 + 一句话描述占位 + 技术标签 + 链接 `https://ssm.eliottxu.top`

### Blog
- 空列表，显示"Coming soon"占位

### About
- 内容占位符，用户后续自填

### Contact
- GitHub：`https://github.com/Arthur1ha`
- Email：占位符

---

## 部署

Cloudflare Pages 连接独立公开 GitHub repo，Build command 和 Output directory 留空，绑定自定义域名 `eliottxu.top`。

---

## 超出范围

- 博客 CMS / Markdown 渲染
- 暗色模式
- 多语言
- 评论系统
