# tibetanDiffUI
tibetan diff ui (char diff)

![tibetanDiff-demo](https://raw.githubusercontent.com/karmapa/tibetanDiffUI/master/assets/img/tibetanDiff-demo.png)
##Usage
####build environment
```
npm install
```


####pack
It will pack js files in "src" and export to "dist" folder.
```
npm install webpack --global
webpack
```


####webpack-dev-server
demo at http://localhost:8080
```
npm start
```

---

## 部署 / Deployment

### 前置要求
- 需要安装 [Git](https://git-scm.com/downloads)（用于安装 `react-codemirror` 依赖）

### 本地构建
```bash
npm install
npm run build
```
构建完成后，`dist` 文件夹包含可部署的静态文件（`index.html`、`bundle.js`）。

### 部署方式

**1. Netlify**
- 将项目推送到 GitHub
- 在 [Netlify](https://netlify.com) 导入项目，自动使用 `netlify.toml` 配置

**2. Vercel**
- 将项目推送到 GitHub
- 在 [Vercel](https://vercel.com) 导入项目，自动使用 `vercel.json` 配置

**3. 传统服务器（Nginx / Apache）**
- 将 `dist` 文件夹内容上传到网站根目录
- 配置静态文件服务即可
