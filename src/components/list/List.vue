<template>
  <div>
    <div>childen</div>
    <input type="text" v-model="inputValue" />
    <span @click="change()">change vlaue</span>
  </div>
</template>

<script>
export default {
  name: 'list',
  props:['val'],
  data(){
    return {
      inputValue: ''
    }
  },
  methods:{
    change(){
      this.$store.dispatch('changeUsername',{name: this.inputValue})
    }
  }
}
</script>
