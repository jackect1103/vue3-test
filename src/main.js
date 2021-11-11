import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import 'amfe-flexible'
import 'amfe-flexible/index.js';




createApp(App).use(router).mount('#app')


/**
 * 全局前置守卫
 */
router.beforeEach((to, from) => {
  // ...
  console.log(to, from)
  // 返回 false 以取消导航
})