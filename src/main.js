import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThermometerHalf, faTemperatureLow, faTemperatureHigh, faTint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store/store'
import NProgress from 'nprogress'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(NProgress)

library.add(faThermometerHalf, faTemperatureLow, faTemperatureHigh, faTint)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/nprogress/nprogress.css'

import './styles/main.scss'

import routes from './routes';

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
