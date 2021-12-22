
<template>
  <div class="auto fs20r h100vh fs50r">
    我是父组件:
    <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行子组件方法</div>
    <child />
  </div>
</template>
<script>
import child from "./child.vue"
export default {
  name: 'father',
  components: {
    child
  },
  data(){
    return {
      name: '张三',
      age: 20
    }
  },
  methods:{
    doParent(){
      alert('执行了父组件方法')
    },
    doClick(){
      this.$children[0].doChild() // 2、父组件调用子组件的方法
    }
  },
  created(){
  },
  mounted(){
    const children = this.$children[0]
    console.log('=====父组件开始操作======')
    console.log(children.name) // 1、父组件访问子组件的数据
  },
}
</script>
<style scoped>

</style>