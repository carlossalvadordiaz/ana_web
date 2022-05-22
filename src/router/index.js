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
    path: '/animales',
    name: 'animales',
    // route level code-splitting
    // this generates a separate chunk (animales.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "animales" */ '../views/animales.vue')
  },
  {
    path: '/zodiaco',
    name: 'zodiaco',
    // route level code-splitting
    // this generates a separate chunk (zodiaco.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "zodiaco" */ '../views/zodiaco.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
