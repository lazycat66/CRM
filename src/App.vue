<template>
  <div id="app">
    <header>
      <img class="logo" :src="logo" width="40" height="40" />
      <label>This your life here</label>
      <div class="info-bar">
          <span v-if="username">{{username}}</span>
          <button @click="signOut()" v-if="isLogin">sign out</button>
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
