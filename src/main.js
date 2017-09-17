// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    username: 'liu'
  },
  actions: {
    CHANGE: ({commit},data) => {
      commit('CHANGE_NAME',data)
    }
  },
  mutations: {
    CHANGE_NAME(state,data) {
      state.username = data.name
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
