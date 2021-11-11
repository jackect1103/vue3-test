// 新写法
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
console.log(`process.env.BASE_URL`, process.env.BASE_URL);

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router