import * as types from '@/store/types'
const state = {
    username: '',
    isLogin: false,
    subtitle: ''
}

const actions = {
      changeUsername({commit},data){
        commit('CHANGE_NAME',data)
      },
      login({commit},name){
          commit(types.SET_LOGIN_STATUS,true)
          commit(types.SET_USERNAME,{name: name})
          window.localStorage.setItem('login',JSON.stringify({username: name}))
      },
      logout({commit}){
          commit(types.SET_LOGIN_STATUS,false)
          window.localStorage.setItem('login','')
      }
}

const mutations = {
    [types.SET_USERNAME](state,data) {
      state.username = data.name
    },
    [types.SET_LOGIN_STATUS](state,status){
        state.isLogin = status
        state.username = ''
    }
}

const getters = {
      username: state => state.username,
      isLogin: state => state.isLogin,
      subtitle: state => state.subtitle
}

export default {
    state,
    actions,
    mutations,
    getters
}
