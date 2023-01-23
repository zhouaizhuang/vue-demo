
<template>
  <div class="fs14 mt15 pl15 bdc ml15 mr15 pt15">
    <div class="fs15 b">子组件</div>
    <div class="mb10">{{$attrs['name']}}</div>
    <div class="mb10">{{$attrs['age']}}</div>
    <div @click="doClick" class="pl10 pb10 pt10 pl15 pr15 bg1890ff gf w60 rds10 f ac xc fs14">执行父组件事件</div>
    <div class="pl15 pr15">
      <sonOfChild v-bind="$attrs" v-on="$listeners" />
    </div>
  </div>
</template>
<script>
import sonOfChild from "./sonOfChild.vue"
export default {
  name: 'child',
  components:{
    sonOfChild
  },
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