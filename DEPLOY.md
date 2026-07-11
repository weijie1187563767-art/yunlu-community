# 部署郑轨云麓社区 → zhengguiyunlu.888.moe

## 域名分配（最终）
| 域名 | 指向站点 | 项目目录 |
|------|----------|----------|
| **zhengguiyunlu.888.moe** | 郑轨云麓业主社区（本项目） | `D:\网站\yunlu-community` |
| huxingshji.888.moe | 宇宙模型站 | `D:\网站\cosmos` |

两个站点相互独立，互不覆盖。

---

## 推荐方案：Cloudflare Pages（免费，0 元/月）
项目已 `git init`，按以下步骤即可上线并绑定自定义域名。

### 第 1 步：推送到 GitHub
1. 在 GitHub 新建一个**空仓库**（如 `yunlu-community`），不要勾选 README。
2. 在本项目目录执行：
   ```bash
   git remote add origin https://github.com/<你的用户名>/yunlu-community.git
   git branch -M main
   git push -u origin main
   ```
   （`.gitignore` 已排除 `node_modules/` 和 `dist/`，只推源码。）

### 第 2 步：Cloudflare Pages 连接仓库
1. 登录 Cloudflare → 左侧 **Workers & Pages** → **创建** → **Pages** → **连接到 Git**。
2. 授权并选择 `yunlu-community` 仓库。
3. 构建设置：
   - **框架预设**：`Vite`
   - **构建命令**：`npm run build`
   - **输出目录**：`dist`
   - **Node 版本**（可选，如面板有）：选 18+ 或 20+
4. 点击 **保存并部署**，等待构建完成（约 1–2 分钟）。
5. 会得到 `*.pages.dev` 临时地址，先访问确认页面正常。

> 说明：`public/_redirects` 已就位，用于 Cloudflare Pages 的 SPA 路由回退（刷新子页面不会 404）。

### 第 3 步：绑定自定义域名 zhengguiyunlu.888.moe
1. 在 Cloudflare Pages 项目 → **自定义域** → 输入 `zhengguiyunlu.888.moe` → 继续。
2. Cloudflare 会给出一条 **CNAME 目标**（形如 `yunlu-community.pages.dev` 或 `xxx.cloudflare-pages.com`）。

### 第 4 步：在域名注册商后台加 DNS
登录你注册 `888.moe` 的商家后台，做以下任一操作：
- **方式 A（仅加 CNAME，最简单）**：为 `zhengguiyunlu` 添加一条 **CNAME** 记录，值填第 3 步 Cloudflare 给的地址。
- **方式 B（把域名整体托管给 Cloudflare，推荐）**：在 Cloudflare 添加该域名，把域名的 **NS 记录**改成 Cloudflare 提供的两条 NS；之后 SSL/HTTPS、缓存都在 Cloudflare 管。
3. 等待 DNS 生效（通常几分钟，最长 48 小时）。
4. 生效后访问 **https://zhengguiyunlu.888.moe** 即可。

---

## 备选方案：CloudStudio 自定义域名
当前项目已部署在 CloudStudio 沙箱（预览地址见对话）。若 CloudStudio 面板支持「自定义域名」绑定：
1. 在沙箱设置里添加 `zhengguiyunlu.888.moe`。
2. 在域名注册商后台把 `zhengguiyunlu` 的 **CNAME** 指向 CloudStudio 给的地址。
（优点：改动最小，沿用当前部署；缺点：自定义域名能力取决于平台是否开放。）

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
