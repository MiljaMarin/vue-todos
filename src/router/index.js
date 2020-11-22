import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Alternativschreibweise: '../components/Test.vue' (@ is an alias to src)
import Test from "@/components/Test";
import Authors from "@/components/Authors";
import Movies from "@/components/Movies";
import Todos from "@/components/Todos";
import Default from "@/components/Default";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/test',
      name: 'Test',
      component: Test
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
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
    path: '*',
    name: 'default',
    component: Default
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
