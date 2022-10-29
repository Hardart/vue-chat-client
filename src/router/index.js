import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/Chat-View.vue'
import LoginView from '../views/Login-View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { auth: true },
    component: ChatView
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: async (to, from, next) => {
      store.dispatch('user/autoLogin')
      await store.getters['user/isReady']
      if (store.getters['user/isLogin']) return next({ name: 'home' })
      next()
    },
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    store.dispatch('user/autoLogin')
    await store.getters['user/isReady']
    if (!store.getters['user/isLogin']) return next({ name: 'login' })
  }
  next()
})

export default router
