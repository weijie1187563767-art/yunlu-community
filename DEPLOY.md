# 部署郑轨云麓社区 → zhengguiyunlu.888.moe

## 域名分配（最终）
| 域名 | 指向站点 | 项目目录 |
|------|----------|----------|
| **zhengguiyunlu.888.moe** | 郑轨云麓业主社区（本项目） | `D:\网站\yunlu-community` |
| huxingshji.888.moe | 宇宙模型站 | `D:\网站\cosmos` |

两个站点相互独立，互不覆盖。

---

## 方案一：Cloudflare Pages（推荐，免费）

### 前置条件
- ✅ GitHub 仓库已建好并推送代码：`https://github.com/weijie1187563767-art/yunlu-community`
- ✅ Cloudflare 账号已登录：`Weijie1187563767@gmail.com`
- ⏳ 域名 `zhengguiyunlu.888.moe` 待绑定 DNS

### 第 1 步：在 Cloudflare 创建 Pages 项目
1. 登录 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 点 **Workers and Pages** 卡片 → **Start building**
3. 或左侧菜单 **Build** → **Compute** → **Create** → **Pages** → **Connect to Git**
4. 授权 GitHub 并选择 `yunlu-community` 仓库

### 第 2 步：构建设置
| 设置项 | 值 |
|--------|-----|
| 框架预设 | `Vite` |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| Node 版本 | `20`（如有选项） |

点击 **Save and Deploy**，等待构建完成（约 1–2 分钟）。
构建成功后会得到一个 `*.pages.dev` 临时地址，先访问确认页面正常。

> SPA 回退说明：本项目的 `public/_redirects` 已就位；同时 GitHub Actions 构建时也会自动复制 `index.html` 为 `404.html`，双重保障刷新子页面不会 404。

### 第 3 步：绑定自定义域名
1. 在 Pages 项目页面 → **Custom domains** → **Set up a custom domain**
2. 输入 `zhengguiyunlu.888.moe` → 继续
3. Cloudflare 会给出一条 CNAME 目标值

### 第 4 步：DNS 解析（域名注册商后台）
登录你注册 `888.moe` 的商家后台：
- **方式 A（仅加 CNAME）**：为 `zhengguiyunlu` 添加一条 **CNAME** 记录，值填第 3 步 Cloudflare 给的地址
- **方式 B（NS 托管，推荐）**：在 Cloudflare 添加该域名，把域名的 **NS 记录**改成 Cloudflare 提供的两条 NS；SSL/HTTPS、缓存全部归 Cloudflare 管
- 等 DNS 生效（几分钟 ~ 48 小时）
- 生效后访问 **https://zhengguiyunlu.888.moe**

---

## 方案二：GitHub Pages（备选，无需 Cloudflare 后台）

项目已内置 GitHub Actions 自动部署（`.github/workflows/deploy.yml`）：
- 推送到 `main` 分支即自动触发构建 + 发布到 GitHub Pages
- 自动生成 `404.html` 做 SPA 回退

### 开启步骤
1. 打开仓库 `github.com/weijie1187563767-art/yunlu-community/settings/pages`
2. Source 选择 **GitHub Actions**（不是 Deploy from branch）
3. 推送一次代码即可自动部署
4. 绑定自定义域名：同一 Settings/Pages 页面 → Custom domain 输入 `zhengguiyunlu.888.moe`
5. 在域名注册商添加 CNAME 指向 `<username>.github.io`（或按 Pages 给的具体目标）

---

## 本地预览 / 自行构建
```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
npm run build      # 产出 dist/
npm run preview    # 本地预览构建产物
```

## ⚠️ 运营注意
- 本站内容基于**公开楼盘资料（房天下）**，非开发商官方发布。
- 正式对外运营前，建议补充：官方信息源标注、免责声明、住户隐私与论坛管理规范。
