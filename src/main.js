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

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
