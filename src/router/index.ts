import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage.vue'
import ConvertPage from '@/views/ConvertPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },   
    {
      path: '/convert',
      name: 'convert',
      component: ConvertPage
    }
  ]
})

export default router
