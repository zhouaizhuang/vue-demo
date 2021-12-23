
<template>
  <div class="auto fs20r h100vh fs50r">
    父组件
    <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行子组件事件</div>
    <child :name="'张三'" :age="20" ref="childRef" />
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
    }
  },
  methods:{
    doClick(){
      this.$refs.childRef.doClick() // 父组件可以获取子组件中的数据
    }
  },
  created(){
    
  },
  mounted(){
  },
}
</script>
<style scoped>

</style>