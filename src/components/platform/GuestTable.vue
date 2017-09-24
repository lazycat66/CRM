<template>
<div>
    <h3>{{tableDate.title}}</h3>
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
            <tr>
              <td class="positive"><i class="icon checkmark"></i> 正常</td>
              <td>张晓明</td>
              <td>24</td>
              <td>出纳</td>
              <td>北京华美集团</td>
              <td>2年</td>
              <td>2016-05-23</td>
              <td>2018-05-23</td>
              <td>VIP</td>
              <td>
                  <a>编辑</a>
                  <a>删除</a>
              </td>
            </tr>
            <tr>
              <td class="positive"><i class="icon checkmark"></i> 正常</td>
              <td>张晓明</td>
              <td>24</td>
              <td>出纳</td>
              <td>北京华美集团</td>
              <td>4年</td>
              <td>2016-05-23</td>
              <td>2018-05-23</td>
              <td></td>
              <td>
                  <a>编辑</a>
                  <a>删除</a>
              </td>
            </tr>
            <tr>
              <td class="negative"><i class="attention icon"></i> 已暂停</td>
              <td>张晓明</td>
              <td>24</td>
              <td>出纳</td>
              <td>北京华美集团</td>
              <td>1年</td>
              <td>2016-05-23</td>
              <td>2018-05-23</td>
              <td></td>
              <td>
                  <a>编辑</a>
                  <a>删除</a>
              </td>
            </tr>
            <tr class="disabled">
              <td>已完成</td>
              <td>张晓明</td>
              <td>24</td>
              <td>出纳</td>
              <td>北京华美集团</td>
              <td>半年</td>
              <td>2016-05-23</td>
              <td>2018-05-23</td>
              <td></td>
              <td>
                  <a>查看记录</a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <div></div>
</div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex';
    export default {
        name: 'Table',
        data(){
            return {
                title: ''
            }
        },
        methods: {
            editItem(){},
            deleteItem(){},
            viewItem(){}
        },
        computed: mapGetters(['tableDate'])
    }
</script>
