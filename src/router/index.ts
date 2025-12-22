import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SoliDeoTech from '../views/SoliDeoTech.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/solideotech',
      name: 'SoliDeoTech',
      component: SoliDeoTech
    }
  ]
})

export default router

