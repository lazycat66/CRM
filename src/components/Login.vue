<template>
<div>
  <section @keyup.enter="signUp">
    <div class="login-popup">
      <h4 class="ui header">登录</h4>
      <label>Username</label>
      <div class="ui input">
        <input type="text" name="username" placeholder="username" v-model="username" />
      </div>
      <label>Password</label>
      <div class="ui input">
        <input type="password" name="password" placeholder="password" v-model="password" />
      </div>
      <div class="forgat">
        <a>忘记密码</a>
      </div>
      <button class="ui primary button" @click="signUp">sign up</button>
    </div>
  </section>
</div>
</template>
<script>
import 'assets/less/login.less'
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      let _this = this;
      if (!this.username) {
        return false;
      }
      if (!this.password) {
        return false;
      }
      this.$http.post('http://localhost:9999/api/login', {
        username: this.username,
        pwd: this.password
      }).then(json => {
        return json.body
      }).then(res => {
        if (res.code == 200) {
          _this.$store.dispatch('login',_this.username);
          _this.$router.push({
            path: '/platform',
            params: {
              userID: '111'
            }
          })
        } else {
          // TODO toast
        }
      })
    }
  }
}
</script>
