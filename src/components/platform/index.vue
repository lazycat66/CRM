<template>
<div>
    <section class="ui grid">
        <div class="eight wide column">
            <h3>待办列表</h3>
            <div class="ui relaxed divided list">
              <div class="item">
                <i class="tag middle aligned icon"></i>
                <div class="content">
                  <a class="header">Semantic-Org/Semantic-UI</a>
                  <div class="description">Updated 10 mins ago</div>
                </div>
              </div>
            </div>
        </div>
        <div class="eight wide column">
            <h3>Message</h3>
            <div class="ui relaxed divided list">
              <div class="item">
                <i class="comment middle aligned icon"></i>
                <div class="content">
                  <a class="header">Semantic-Org/Semantic-UI</a>
                  <div class="description">Updated 10 mins ago</div>
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
              <div class="item">
                <i class="folder open outline icon"></i>
                <div class="content">
                  <a class="header">Krowlewskie Jadlo</a>
                  <div class="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
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
              <div class="item">
                <i class="rss square middle aligned icon"></i>
                <div class="content">
                  <a class="header">Semantic-Org/Semantic-UI</a>
                  <div class="description">Updated 10 mins ago</div>
                </div>
              </div>
            </div>
        </div>
        <div class="eight wide column">
            <h3>企业动态</h3>
            <div class="ui relaxed divided list">
              <div class="item">
                <i class="send outline middle aligned icon"></i>
                <div class="content">
                  <a class="header">Semantic-Org/Semantic-UI</a>
                  <div class="description">Updated 10 mins ago</div>
                </div>
              </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import requestData from '$api'
export default {
    name: 'PlatformInfo',
    data(){
        return {

        }
    },
    mounted(){
        setTimeout(() => {
            this.getMessageData();
        },2000)
    },
    methods:{
        getMessageData(){
            this.$http.get('/api').then(json => {
                console.log(json)
            })

            // this.$http.post(requestData).then(json => {
            //     console.log(json)
            // })
        }
    }
}
</script>
