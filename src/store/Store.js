import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/axios/api'
import login from '@/store/login'
import table from '@/store/table'

Vue.use(Vuex)

 export default new Vuex.Store({
    modules: {
        login,
        table
    }
})
