
<template>
  <div class="fs14 mt15 ml15 mr15 pl15 bdc">
    <div class="fs15 b">子组件</div>
    <div class="mb10">{{name}}</div>
    <div class="mb10">{{age}}</div>
    <div @click="doClick" class="pl10 pb10 pt10 pl15 pr15 bg1890ff gf w60 rds20 f ac xc fs14">执行父组件事件</div>
    <sonOfChild v-on="$listeners"/>
  </div>
</template>
<script>
import sonOfChild from "./sonOfChild.vue"
export default {
  name: 'child',
  components:{
    sonOfChild
  },
  inject: ['name', 'age'],
  data(){
    return {
    }
  },
  methods:{
    doClick(){
      this.$listeners.sayHello('我是子组件数据')
    }
  },
  created(){
  },
  mounted(){
  }
}
</script>
<style scoped>

</style>