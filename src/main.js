import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import Pager from './components/Pagination'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import { ValidationProvider, extend, localize, ValidationObserver, configure } from 'vee-validate'
import { required, email, numeric } from 'vee-validate/dist/rules'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import directives from './plugins/directives.js'
import FilterCurrency from './filters/currency'
import TimestamptoDate from './filters/date'
import './bus'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(directives)
Vue.use(Vuex)

// axios
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true

Vue.component('Loading', Loading)
Vue.component('Pager', Pager)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// filter
Vue.filter('currency', FilterCurrency)
Vue.filter('date', TimestamptoDate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// vee-validate
localize('zh_TW', TW)
extend('email', email)
extend('numeric', numeric)
extend('required', {
  ...required,
  message: '{_field_} 為必填'
})
configure({
  classes: {
    invalid: 'is-invalid'
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
