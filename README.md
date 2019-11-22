# react-jiaoshoujia
搭配的一个脚手架


# 1.初始化 npm，然后 在本地安装 webpack，接着安装 webpack-cli

```
npm init -y
npm install webpack webpack-cli --save-dev
```

# 2.要在 index.js 中打包 lodash 依赖，我们需要在本地安装 library：

```
npm install --save lodash
```

# 3.加载 css,less,图片,字体

```
npm install --save-dev style-loader css-loader
npm install --save-dev less-loader less
npm install --save-dev file-loader
npm install --save-dev file-loader
```

# 4.自动生成html，清理 /dist 文件夹

```
npm install html-webpack-plugin --save-dev
npm install clean-webpack-plugin --save-dev

npm i --save-dev mini-css-extract-plugin
npm i --save-dev optimize-css-assets-webpack-plugin
```

# 5.webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。

```
npm install --save-dev webpack-dev-server
```

# 6.安装react需要的一系列包

```
npm i react
npm i react-dom -S
npm install -D babel-loader@7 babel-core babel-preset-env
npm i babel-preset-es2015 babel-preset-es2015-loose babel-preset-react -D
npm install react-router-dom

npm i babel-plugin-dynamic-import-webpack -D // 解析 import()

npm i redux react-redux -D

npm install --save-dev babel-preset-stage-3 // 解析 {...obj} 问题

npm install antd --save

npm install babel-plugin-import --save-dev

npm install --save-dev babel-plugin-react-html-attrs // 解决  Invalid DOM property `class`. Did you mean `className`?问题


npm install --save-dev babel-preset-stage-0  // 解决 handle = () => {} 报错问题

```

# 7.开发环境和生产环境

```
npm install --save-dev webpack-merge
```