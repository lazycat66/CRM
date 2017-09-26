<template>
<div>
  <section class="ui grid">
    <div class="eight wide column">
      <h3>待办列表</h3>
      <div class="ui relaxed divided list">
        <div class="item" v-for="list in todoList">
          <i class="tag middle aligned icon"></i>
          <div class="content">
            <a class="header">{{list.content}}</a>
            <div class="description">{{list.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="eight wide column">
      <h3>Message</h3>
      <div class="ui relaxed divided list">
        <div class="item" v-for="(list,$index) in messageList" v-if="$index < 5">
          <i class="comment middle aligned icon" :class="{'outline': list.isRead}"></i>
          <div class="content">
            <a class="header">{{list.content}}</a>
            <div class="description">{{list.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="ui section divider"></div>
  <section class="ui grid">
    <div class="sixteen wide column">
      <h3>执行记录</h3>
      <div class="ui list">
        <div class="item" v-for="list in recordList">
          <i class="folder open outline icon"></i>
          <div class="content">
            <a class="header">{{list.title}}</a>
            <div class="description">{{list.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="ui section divider"></div>
  <section class="ui grid">
    <div class="eight wide column">
      <h3>最新资讯</h3>
      <div class="ui relaxed divided list">
        <div class="item" v-for="(list,$index) in newsList" v-if="$index < 5">
          <i class="rss square middle aligned icon"></i>
          <div class="content">
            <a class="header">{{list.content}}</a>
            <div class="description">已被{{list.content}}人阅读</div>
          </div>
        </div>
      </div>
    </div>
    <div class="eight wide column">
      <h3>企业动态</h3>
      <div class="ui relaxed divided list">
        <div class="item" v-for="list in companyNewsList">
          <i class="send outline middle aligned icon"></i>
          <div class="content">
            <a class="header">{{list.content | stringLength}}</a>
            <div class="description">{{list.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import api from '@/axios/api'
const serverHost = 'http://localhost:9999'
export default {
  name: 'PlatformInfo',
  data() {
    return {
      todoList: [],
      messageList: [],
      recordList: [],
      newsList: [],
      companyNewsList: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let _this = this;
      api.getTodoData().then(res => {
        if (res.code == 200) {
          _this.todoList = res.data;
        }
      }, error => {
        console.log(error)
      })

      api.getMessageData({
        type: 'received'
      }).then(res => {
        if (res.code == 200) {
          _this.messageList = res.data;
        }
      }, error => {
        console.log(error)
      })

      api.getRecordData().then(res => {
        if (res.code == 200) {
          _this.recordList = res.data;
        }
      }, error => {
        console.log(error)
      })

      api.getNewsData().then(res => {
        if (res.code == 200) {
          _this.newsList = res.data;
        }
      }, error => {
        console.log(error)
      })

      api.getCompanyNewsData().then(res => {
        if (res.code == 200) {
          _this.companyNewsList = res.data;
        }
      }, error => {
        console.log(error)
      })
    }
  },
  filters: {
    stringLength(str) {
      if (str) {
        let result = str.toString()
        return result.substring(0, 15)
      }
    }
  }
}
</script>
