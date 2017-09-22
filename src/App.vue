<template>
  <div id="app">
    <header>
      <img class="logo" :src="logo" width="40" height="40" />
      <label>客户关系管理系统</label>
      <div class="info-bar">
          <span v-if="username">{{username}}</span>
          <button @click="signOut()" v-if="isLogin">退出</button>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import 'assets/less/base.less';
import 'assets/less/home.less';
import img_logo from 'assets/img/logo.jpg';
import {mapGetters,mapState} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      logo: img_logo
    }
  },
  methods: {
    signOut(){
      this.$store.dispatch('LOGOUT');
        this.$router.push({
            path: '/'
        })
    }
  },
  computed:mapState(['username','isLogin'])
}
</script>
