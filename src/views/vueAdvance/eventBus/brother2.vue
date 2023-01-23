
<template>
  <div class="auto fs15 mt15">
    <div class="f ac">
      <div>兄弟组件二：</div>
      <div @click="doClick" class="pl10 pb10 pt10 pl15 pr15 bg1890ff gf w40 rds10 f ac xc fs14">执行父组件事件</div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "./bus.js"
export default {
  name: 'brother2',
  data(){
    return {
      name: '兄弟组件2'
    }
  },
  methods:{
    brother2(){
      console.log('brother2')
    },
    doClick(){
      eventBus.$emit('busClick', '执行了兄弟组件一的函数')
    }
  },
  created() {
    
  },
  mounted() {
    // const children = this.$children[0]
    // console.log('=====父组件开始操作======')
    // console.log(children.name) // 1、父组件访问子组件的数据
    // children.doChild() // 2、父组件调用子组件的方法
  },
}
</script>
<style scoped>

</style>