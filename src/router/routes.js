const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/403',
    component: () => import('@/views/errorPage/403.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404.vue')
  }
]

export default routes
