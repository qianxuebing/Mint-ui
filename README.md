# Mint-ui
Vue2.X + Mint-ui
## vue-cli搭建项目

````
* 全局安装vue-cli

cnpm install vue-cli  

* 创建一个基于webpack的新项目

vue init webpack projectName

* 安装依赖

cd projectName

cnpm install

* 启动项目

cnpm run dev
````
### Mint-UI 配置

````
* 安装插件
cnpm install mint-ui -S

* 在main.js文件中全局引入

import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.use(MintUI)
````   
