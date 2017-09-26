<template>
<div>
  <h3>{{tableData.title}}</h3>
  <div class="ui section divider"></div>
  <div>
    <div class="ui calendar" @click="test($event)">
        <div class="ui input left icon">
            <i class="calendar icon"></i>
            <input type="text" placeholder="Date" value="2017-06-01">
        </div>
    </div>
    <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" ></calendar>
  </div>
  <div class="ui section divider"></div>
  <div>
    <table class="ui very compact table">
      <thead>
        <tr>
          <th>状态</th>
          <th>名称</th>
          <th>年龄</th>
          <th>职务</th>
          <th>所属公司</th>
          <th>服务周期</th>
          <th>开始时间</th>
          <th>结束时间</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData.data" :class="{'finish': !item.status}">
          <td :class="{'positive': item.status=='1','negative': item.status=='-1','disabled': !item.status}">
            <i class="icon checkmark" v-if="item.status=='1'"></i>
            <i class="icon attention" v-if="item.status=='-1'"></i> {{item.statusDesc}}
          </td>
          <td>{{item.username}}</td>
          <td>{{item.age}}</td>
          <td>{{item.position}}</td>
          <td>{{item.owned}}</td>
          <td>{{item.serviceCycle}}</td>
          <td>{{item.beginTime}}</td>
          <td>{{item.endTime}}</td>
          <td>{{item.remarks}}</td>
          <td class="align-center">
            <a v-if="item.status == '1'" @click="editItem(item)">编辑</a>
            <a v-if="item.status == '1'" @click="deleteItem(item)">删除</a>
            <a v-if="item.status != '1'" @click="viewItem(item)">查看记录</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div></div>
</div>
</template>
<script>
import {
  mapState,
  mapGetters
} from 'vuex';
import 'assets/less/platform.less'
import Calendar from '@/utils/Calendar'
export default {
  name: 'Table',
  data() {
    return {
      title: ''
    }
  },
  mounted(){
      if(!this.tableData.title){
          let params = {
              tab: '我的客户',
              name: 'my',
              api: 'guest'
          }
          this.$store.dispatch('getGuestDefaultData', params)
      }
      let p = document.getElementById('example1')
      console.log(p)
  },
  methods: {
    editItem(item) {
        console.log(item)
    },
    deleteItem(item) {
        item.type = 'DELETE'
        this.$store.dispatch('editTable', item)
    },
    viewItem(item) {
        console.log(item)
    },
    test(e){
        console.log(e)
        e.target.calendar()
    }
  },
  computed: mapGetters(['tableData'])
}
</script>
