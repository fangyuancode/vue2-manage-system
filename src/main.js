import Vue from 'vue'
import App from './App.vue'
// 按需引入
// import { Button, Select } from 'element-ui';
import router from '@/router/index'
import store from "@/store/index"
import VueRouter from 'vue-router';
import './api/mock'
import Cookies from 'js-cookie';
Vue.config.productionTip = false
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

// 全部引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(VueRouter);

// 添加全局前置路由导航
router.beforeEach((to, from, next) => {
  // 判断token存不存在
  const token = Cookies.get("token")
  // 如果token不存在，说明当前用户是未登录，应该跳转至登录
  if (!token && to.name !== 'login') {
    next({ name: "login" })
  } else if (token && to.name === 'login') {
    // token存在，说明用户登录，此时跳转至首页
    next({ name: 'home' })
  } else {
    next();
  }
})
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
