<template>
  <div id="app">
    <header>
      <img class="logo" :src="logo" width="40" height="40" />
      <label>客户关系管理系统</label>
      <div class="channel-bar">
          <span class="btn" :class="{'active': (subtitle=='platform' || subtitle=='consultation')}" @click="switchChannel('platform')">Platform</span>
          <span class="btn" :class="{'active': subtitle=='im'}" @click="switchChannel('im')">IM</span>
      </div>
      <div class="info-bar">
          <span v-if="username" @click="switchChannel('account')">{{username}}</span>
          <button @click="signOut()" v-if="isLogin">退出</button>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import 'assets/less/base.less'
import 'assets/less/home.less'
import img_logo from 'assets/img/logo.jpg'
import {mapGetters,mapState} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      logo: img_logo
    }
  },
  methods: {
      switchChannel(type){
          let path = '/' + type
          this.$router.push({
              path: path
          })
      },
    signOut(){
      this.$store.dispatch('logout');
        this.$router.push({
            path: '/'
        })
    }
  },
  computed:mapGetters(['username','isLogin','subtitle'])
}
</script>
