import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/VueUse.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: 'usePinia',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/usePinia.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;