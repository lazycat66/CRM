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
const serverHost = 'http://localhost:9999'
export default {
    name: 'PlatformInfo',
    data(){
        return {
            todoList: [],
            messageList : [],
            recordList: [],
            newsList: [],
            companyNewsList: []
        }
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            let _this = this;
              this.$http.post(serverHost + '/api/todo',{}).then(json => {
                return {code:json.status,data:json.body}
              }).then(res => {
                if(res.code == 200){
                  _this.todoList = res.data;
                }
              })

                this.$http.post(serverHost + '/api/message',{type: 'received'}).then(json => {
                  return {code:json.status,data:json.body}
                }).then(res => {
                  if(res.code == 200){
                    _this.messageList = res.data;
                  }
                })

              this.$http.post(serverHost + '/api/record',{}).then(json => {
                return {code:json.status,data:json.body}
              }).then(res => {
                if(res.code == 200){
                  _this.recordList = res.data;
                }
              })

            this.$http.post(serverHost + '/api/news',{}).then(json => {
              return {code:json.status,data:json.body}
            }).then(res => {
              if(res.code == 200){
                _this.newsList = res.data;
              }
            })

              this.$http.post(serverHost + '/api/companyNews',{}).then(json => {
                return {code:json.status,data:json.body}
              }).then(res => {
                if(res.code == 200){
                  _this.companyNewsList = res.data;
                }
              })
        }
    },
    filters: {
        stringLength(str){
            if(str){
                let result = str.toString()
                return result.substring(0,15)
            }
        }
    }
}
</script>
