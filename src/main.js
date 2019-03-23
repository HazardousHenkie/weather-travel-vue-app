import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store/store'
import NProgress from 'nprogress'
import VueMoment from 'vue-moment'
import Round from './components/plugins/round'
import Fahrenheit from './components/plugins/fahrenheit'
import WeatherIcon from './components/plugins/weatherIcon'
import VueScrollTo from 'vue-scrollto';
 
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(NProgress)
Vue.use(VueMoment)
Vue.use(Round)
Vue.use(Fahrenheit)
Vue.use(WeatherIcon)
Vue.use(VueScrollTo)

library.add(fas)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/nprogress/nprogress.css'

import './styles/main.scss'

import routes from './routes';

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  //to deploy on github pages set base url
  base: 'weather-travel',
  mode: 'history',
  routes
})

//to start page loading indicator
router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

//to end page loading indicator
router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
