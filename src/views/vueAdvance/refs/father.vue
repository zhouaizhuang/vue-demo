
<template>
  <div class="auto fs20r h100vh fs50r">
    父组件
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
  },
  created(){
    
  },
  mounted(){
    this.$refs.childRef.doClick() // 父组件可以获取子组件中的数据
  },
}
</script>
<style scoped>

</style>