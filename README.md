# 郑轨云麓 · 云麓家园（yunlu-community）

郑轨云麓业主线上交流社区网站，Vue3 + Vite + Vue Router 构建，纯前端、零后端依赖，可免费部署到 Cloudflare Pages / 任意静态托管。

> 本站为业主自发搭建的社区站点，楼盘资料整理自房天下等公开信息，**非开发商官方站点**，最终以政府批文与买卖合同为准。

## 功能模块
- 首页：项目介绍 + **交房倒计时**（按 `预计交房 2026-09-30` 实时计算）
- 小区介绍：项目参数表 + TOD 说明
- 户型中心（重点）：6 款户型（101/112/118 三房，132/133/144 四房），含空间亮点与装修预算参考
- 装修专区：装修分类 + 101㎡ 装修方案（经济 / 中档 / 高端）
- 周边地图：以小区为中心的配套示意（地铁 / 商业 / 医疗 / 教育）
- 业主论坛：板块导航 + 本地发帖演示（数据存于本机，后续可接入后端与微信登录）

## 本地开发
```bash
npm install
npm run dev      # 本地预览 http://localhost:5173
npm run build    # 产出 dist/ 用于部署
```

## 部署到 Cloudflare Pages（免费，0 元/月）
1. 把本仓库推送到 GitHub。
2. 登录 Cloudflare Dashboard → Pages → 连接 Git 仓库 `yunlu-community`。
3. 构建设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
4. 部署后，在「自定义域」绑定你的域名 `huxingshji.888.moe`（需在该域名商处把 DNS 交给 Cloudflare）。
5. SPA 路由回退：项目已包含 `public/_redirects`（`/*    /index.html   200`），确保深链接刷新正常。

## 目录结构
```
yunlu-community
├── index.html
├── package.json
├── vite.config.js
├── public/_redirects
├── src
│   ├── main.js
│   ├── App.vue
│   ├── router/index.js
│   ├── assets/style.css
│   ├── data/site.js          # 全部楼盘/户型/论坛数据集中管理
│   ├── components/           # Header / Footer / HouseCard / NewsCard
│   └── views/                # Home / About / House / Decoration / Map / Forum
└── README.md
```

## 后续可扩展
- 微信登录 + 后端（Spring Boot + MySQL）实现真实发帖、评论、点赞
- AI 云麓管家（物业费 / 户型装修问答）
- 二手房行情、真实小区鸟瞰图与施工进度相册
