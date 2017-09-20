<template>
  <div class="crm-home">
  <header>
    <img :src="logo" width="40" height="40"/>
  </header>
  <section>
    <div class="ui secondary vertical pointing menu">
      <a class="item active">login </a>
      <a class="item">Messages </a>
      <a class="item">好友 </a>
    </div>
    <div class="login-popup">
      <h4 class="ui header">login</h4>
    </div>
  </section>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li @click="jump()">go test page</li>
      <li>value={{username}}</li>
    </ul>
    <list :val="username"></list>
  </div>
</template>

<script>
import List from '@/components/list/List.vue';
import '@/assets/less/home.less';
// import img_logo from '@/assets/img_logo';
import { mapState } from 'vuex';
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      logo: ''
    }
  },
  computed:{
    ...mapState(['username'])
  },
  methods:{
    jump(){
      this.$router.push({
        path: '/test',
        name: 'Test',
        params: {
          id: '1111'
        },
        hash:'#hash'
      })
    }
  },
  components:{
    List
  }
}
</script>
