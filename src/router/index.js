import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: Routers
});

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user');
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  }
  next()
})

export default router
