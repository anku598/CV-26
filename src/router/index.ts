import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/works',
    name: 'Works',

    component: () => import('../views/Works.vue')
  },

  {
    path: '/education',
    name: 'Education',

    component: () => import('../views/Education.vue')
  },

  {
    path: '/skills',
    name: 'DesignSkills',

    component: () => import('../views/DesignSkills.vue')
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
