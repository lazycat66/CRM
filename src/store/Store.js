import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: 'liu',
    isLogin: false
  },
  actions: {
    CHANGE: ({commit},data) => {
      commit('CHANGE_NAME',data)
      },
      LOGIN: ({commit}) => {
          commit('CHANGE_LOGIN_STATUS',true)
      }
  },
  mutations: {
    CHANGE_NAME(state,data) {
      state.username = data.name
  },
  CHANGE_LOGIN_STATUS(state,status){
      state.isLogin = status
  }
  },
  getters: {
      authorizd: state => state.isLogin
  }
});
