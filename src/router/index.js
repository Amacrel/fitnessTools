import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Imc from "../views/Imc"
import MetabolismeBase from "../views/MetabolismeBase"
import MethodeMifflinStJeor from "../views/MethodeMifflinStJeor";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/imc',
    name: 'Imc',
    component: Imc
  },
  {
    path: '/metabolismebase',
    name: 'MetabolismeBase',
    component: MetabolismeBase
  },
  {
    path: '/metabolismebase/mifflinStJeor',
    name: 'MifflinStJeor',
    component: MethodeMifflinStJeor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
