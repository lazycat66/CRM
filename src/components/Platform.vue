<template>
<div class="main-body" flex="dir:left">
  <section class="ui vertical menu main-menu" flex-box="0">
    <div class="item" v-for="menu in menuData">
      <div class="header">{{menu.title}}</div>
      <div class="menu">
        <a class="item" v-for="children in menu.children" :class="{'active': children.tab == tableData.title}" @click="switchChannel(children)">{{children.tab}}</a>
      </div>
    </div>
  </section>
  <section class="main-content" flex-box="1">
      <router-view></router-view>
  </section>
</div>
</template>
<script>
import 'assets/less/platform.less';
import Menu from '@/options/menu';
import {
  mapState,
  mapGetters
} from 'vuex';
export default {
  name: 'Platform',
  data() {
    return {
        menuData: Menu.main,
        index: ''
    }
  },
  methods: {
    switchChannel(type) {
        this.index = type.tab;
        this.$router.push({
            path: '/' + type.belong
        });
        this.$store.dispatch('switchTable', type)
    }
    },
    computed: mapGetters(['tableData'])
}
</script>
