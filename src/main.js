import Vue from 'vue'
import Vuex from 'vuex'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store/Store'

Vue.use(vueResource);
Vue.config.productionTip = false
// Vue.http.interceptors.push((request, next) => {
//     next();
// });

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
