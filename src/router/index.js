import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

// Vite 中的环境变量 import.meta.env.BASE_URL 就是vite.config.js 中的 base 配置项
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') }, //登录页(懒加载写法，函数)
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        }
      ]
    }
  ]
})

// 登录访问拦截  => 默认直接放行的
// 根据返回值决定，是放行还是拦截
router.beforeEach((to) => {
  const useStore = useUserStore()
  if (!useStore.token && to.path !== '/login') return '/login'

  return true
})

export default router
