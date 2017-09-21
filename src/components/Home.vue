<template>
<div class="crm-home">
  <header>
    <img :src="logo" width="40" height="40" />
    <div>
        <span>{{username}}</span>
    <button @click="signOut()" v-if="isLogin">sign out</button>
    </div>
  </header>
  // <!-- <h1>{{ msg }}</h1>
  //   <h2>Essential Links</h2>
  //   <ul>
  //     <li @click="jump()">go test page</li>
  //     <li>value={{username}}</li>
  //   </ul>
    // <list :val="username"></list> -->
</div>
</template>

<script>
import img_logo from 'assets/img/logo.jpg';
// import List from '@/components/list/List.vue';
import 'assets/less/home.less';
import {mapState} from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      logo: img_logo
    }
  },
  computed: {
    ...mapState(['username','isLogin'])
  },
  methods: {
    jump() {
      this.$router.push({
        path: '/test',
        name: 'Test',
        params: {
          id: '1111'
        },
        hash: '#hash'
      })
    },
      signOut(){
          this.$router.push({
              path: '/'
          })
      }
  }
}
</script>
