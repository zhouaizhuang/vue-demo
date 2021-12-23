
<template>
  <div class="auto fs20r fs30r mt30r">
    <div class="f ac">
      <div>兄弟组件二：</div>
      <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行父组件事件</div>
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