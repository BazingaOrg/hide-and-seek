<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.3.4-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vitejs/vite">
    <img src="https://img.shields.io/badge/vite-4.4.5-blue" alt="vite">
  </a>
</p>

> 藏猫猫😺是一个可以直观、方便、扁平化展示您曾经收藏在浏览器书签栏上所有网页的导航网站。

## 简介
项目目的：
+ 熟悉vue3+vite等
+ 保持 composition api 风格

## 功能
```javascript
- 用户
  - 访客
	- 注册
	- 登录
  - 注销
- 错误页面
  - 401
  - 404
```

## 目录结构
```javascript
hide-and-seek
├─ .env.dev.build     # 开发环境
├─ .env.dev.serve     # 开发环境本地
├─ .env.prod.build    # 生产环境
├─ .env.prod.serve    # 生产环境本地
├─ .env.test.build    # 测试环境
├─ .env.test.serve    # 测试环境本地
├─ .eslintrc.js       # eslint
├─ README.md          
├─ dist               # 打包dist
├─ public             # 静态资源
├─ src                # 源码
│  ├─ apis            # 接口请求
│  ├─ assets          # webpack打包的资源
│  ├─ components      # 公共组件
│  ├─ layout          # 全局Layout
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # 全局store管理
│  ├─ styles          # 全局样式
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有业务页面
└─ vite.config.js     # vite 配置
```

## 亮点

## 运行
+ 前端
  ```javascript
  npm i
  npm run dev
  ```
+ 后端
  ```javascript
  ```

## License

[MIT](https://github.com/rcyj-FED/vue3-composition-admin/blob/main/LICENSE)

Copyright (c) 2023-present