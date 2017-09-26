import api from '@/axios/api'
import * as types from '@/store/types'
const state = {
    tableSubtitle: '',
    tableType: '',
    tableData: []
}

const actions = {
      switchTable({commit},item) {
          api.getTableData(item.belong, {type:item.name}).then(res => {
              item.data = res.data
              commit(types.SET_TABLE_DATA, item)
          }, err => {
              console.log(err)
          })
      },
      getGuestDefaultData({commit,state},item) {
          api.getTableData(item.api, {type:item.name}).then(res => {
              item.data = res.data
              commit(types.SET_TABLE_DATA, item)
          }, err => {
              console.log(err)
          })
      },
      editTable({commit}, data){
          switch(data.type){
              case 'ADD':
                commit(types.ADD_TABLE_DATA, data)
              break;
              case 'DELETE':
                commit(types.DELETE_TABLE_DATA, data)
              break;
              default:
              break;
          }
      }
}

const mutations = {
    [types.SET_TABLE_DATA](state,item){
        state.tableSubtitle = item.tab
        state.tableType = item.name
        state.tableData = item.data
    },
    [types.ADD_TABLE_DATA](state,data){},
    [types.DELETE_TABLE_DATA](state,data){
        for(let i=0;i<state.tableData.length;i++){
            if(state.tableData[i].id == data.id){
                state.tableData.splice(i,1)
            }
        }
    }
}

const getters = {
      tableData: state => {
          return {
              type: state.tableType,
              title: state.tableSubtitle,
              data: state.tableData
          }
      }
}

export default {
    state,
    actions,
    mutations,
    getters
}
