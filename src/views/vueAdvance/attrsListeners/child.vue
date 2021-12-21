
<template>
  <div class="auto fs20r mt30r pl30r bdc">
    <div class="fs30r b">子组件</div>
    <div class="mb20r">{{$attrs['msg']}}</div>
    <div class="mb20r">年龄: {{$attrs['age']}}</div>
    <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行父组件事件</div>
    <div class="pl30r pr30r">
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
  props: {
    // msg: { // 没有接受的数据就存放在$attrs中
    //   type: [Number, String], // 数据类型
    //   require: true, // 必填
    //   default: ''
    // },
    // age: {
    //   type: Number, // 数据类型
    //   default: 18
    // },
  },
  data(){
    return {
      name:'子组件名称'
    }
  },
  methods:{
    doClick(){
      // this.$emit('sayHello', '我是子组件数据') // 
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