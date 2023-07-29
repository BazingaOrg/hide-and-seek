const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/errorPage/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorPage/404.vue')
  }
]

export default routes
