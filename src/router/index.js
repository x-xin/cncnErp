import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: Routers
});

const user = sessionStorage.getItem('user');

router.beforeEach((to, from, next) => {
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  }
  next()
})

export default router
