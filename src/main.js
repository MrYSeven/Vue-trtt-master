// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mintui from 'mint-ui'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import '../static/css/neat-min.css'
import './assets/css/style.css'


Vue.use(VueResource)
Vue.use(mintui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
