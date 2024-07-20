import useUser from '@/composables/useUser'
import HomeView from '@/views/HomeView.vue'
import LogIn from '@/views/LogIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
  ],
})

const user = useUser()

router.beforeEach((to) => {
  if (!user.value && to.name !== 'login') {
    return { name: 'login' }
  } else if (user.value && to.name === 'login') {
    return { name: 'home' }
  }
})

export default router
