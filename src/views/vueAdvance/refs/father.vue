
<template>
  <div class="auto fs14 h100vh">
    父组件
    <div @click="doClick" class="pl10 pb10 pt10 pl15 pr15 bg1890ff gf w60 rds20 f ac xc fs14">执行子组件事件</div>
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