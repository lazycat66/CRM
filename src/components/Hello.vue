<template>
  <div class="hello">
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
import { mapState } from 'vuex';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
