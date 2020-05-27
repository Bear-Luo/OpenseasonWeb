// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import './bus';
import Pager from './components/Pagination';
import FilterCurrency from './filters/currency';
import TimestamptoDate from './filters/date';
import { ValidationProvider, extend, localize, ValidationObserver} from 'vee-validate';
import { required, email, numeric } from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import { configure } from 'vee-validate';
import directives from "./plugins/directives.js";


Vue.config.productionTip = false;


// axios
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;

Vue.use(directives);

Vue.component('Loading', Loading);
Vue.component('Pager', Pager);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.filter('currency',FilterCurrency);
Vue.filter('date',TimestamptoDate);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from, 'next', next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }

  if (to.meta.title) {
    document.title = to.meta.title
  } else{
    next();
  }
});

// vee-validate
localize('zh_TW', TW);
extend('email', email);
extend('numeric', numeric);
extend('required', {
  ...required,
  message: '{_field_} 為必填'
});
configure({
  classes: {
    // valid: 'is-valid',
    invalid: 'is-invalid'
  }
})


