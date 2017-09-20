<template>
<div>
<div>test page {{msg}}</div>
<button @click="back()">back</button>
</div>
</template>
<script>
  export default {
    name: 'Platform',
    data () {
      return {
        msg: 'Welcome'
      }
    },
    mounted(){
      console.log(this.$route)
    },
    methods: {
      back () {
        this.$router.push({
         name:'Hello'
        })
      }
    }
  }
</script>
