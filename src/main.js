import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"

import "normalize.css/normalize.css"  //引入normalize.css 保存浏览器统一

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入svg
import "@/icons"
// 引入路由鉴权
import "@/permission"

import "@/styles/index.scss" //引入全局样式

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
