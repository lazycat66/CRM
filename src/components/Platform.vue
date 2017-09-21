<template>
<div>
  <section>
    <div class="ui grid">
      <div class="ui secondary vertical pointing menu">
        <a class="item">Home </a>
        <a class="item">Messages </a>
        <a class="item active">好友 </a>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'Platform',
  data() {
    return {
      msg: 'Welcome'
    }
  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    signOut() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
