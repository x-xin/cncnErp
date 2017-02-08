// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  // for IE Promise

import Vue from 'vue'
import App from './App'
import './element-ui'
import Router from './router'
import Store from './store'

import './less/style.less'

/* eslint-disable no-new */

const app = new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
