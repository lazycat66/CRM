<template>
<div>
    <section>
      <div class="login-popup">
        <h4 class="ui header">login</h4>
        <div>
          <label>Username</label>
          <input type="text" name="username" placehoder="username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placehoder="password" />
        </div>
        <button class="ui primary button" @click="signUp()">sign up</button>
      </div>
    </section>
</div>
</template>
<script>
import 'assets/less/home.less';
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    signUp() {
      console.log(this.$store)
      this.$store.dispatch('LOGIN');
        this.$router.push({
            path: '/platform',
            params: {
                userID: '111'
            }
        })
    }
  }
}
</script>
