# tibetan Diff UI
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

