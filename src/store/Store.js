import Vue from 'vue'
import Vuex from 'vuex'
import vueResource from 'vue-resource'

Vue.use(Vuex)
const store = {
  state: {
    username: '',
    isLogin: false,
    tableSubtitle: '',
    tableType: '',
    tableData: []
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
      },
      SWITCH_TABLE_TYPE: ({commit},item) => {
        //   vueResource.$http.post('http://localhost:9999/api/' + item.belong,{type:item.name}).then((json) => {
        //       return json.body
        //   }).then((res) => {
        //       commit('CHANGE_PLATFORM_SUBTITLE', item, res.data)
        //   })
          commit('CHANGE_PLATFORM_SUBTITLE', item, {})
      },
      ADD_TABLE_DATA: () => {

      },
      DELETE_TABLE_DATA: () => {

      },
      EDIT_TABLE_DATA: () => {

      },
      VIEW_TABLE_DATA: () => {

      }
  },
  mutations: {
    CHANGE_NAME(state,data) {
      state.username = data.name
    },
    CHANGE_LOGIN_STATUS(state,status){
        state.isLogin = status
        state.username = ''
    },
    CHANGE_PLATFORM_SUBTITLE(state,item,data){
        state.tableSubtitle = item.tab
        state.tableType = item.name
        state.tableData = data
    }
  },
  getters: {
      authorizd: state => state.isLogin,
      username: state => state.username,
      tableDate: state => {
          return {
              type: state.tableType,
              title: state.tableSubtitle,
              data: state.tableData
          }
      }
  }
};

export default new Vuex.Store(store);
