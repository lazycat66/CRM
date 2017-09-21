import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = {
  state: {
    username: '',
    isLogin: false
  },
  actions: {
      CHANGE: ({commit},data) => {
        commit('CHANGE_NAME',data)
      },
      LOGIN: ({commit}) => {
          commit('CHANGE_LOGIN_STATUS',true)
            commit('CHANGE_NAME',{name: 'Liu Liu'})
      },
      LOGOUT: ({commit}) => {
        commit('CHANGE_LOGIN_STATUS',false)
      }
  },
  mutations: {
    CHANGE_NAME(state,data) {
      state.username = data.name
    },
    CHANGE_LOGIN_STATUS(state,status){
        state.isLogin = status
        state.username = ''
    }
  },
  getters: {
      authorizd: state => state.isLogin,
      username: state => state.username
  }
};

export default new Vuex.Store(store);
