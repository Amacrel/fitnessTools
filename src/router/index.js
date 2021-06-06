import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Imc from "../views/Imc"
import MetabolismeBase from "../views/MetabolismeBase"
import MethodeMifflinStJeor from "../views/MethodeMifflinStJeor";
import Login from "../views/Login";
import Profile from "../views/Profile";
import PagePro from "../views/PagePro";

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/pagepro',
    name: 'PagePro',
    component: PagePro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
