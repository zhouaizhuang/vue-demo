
<template>
  <div class="auto fs20r h100vh fs50r">
    父组件
    <child :msg="'我是来自父组件的数据'" :info="{name:'小红', school: '北京大学', age: 18}" :state="'毕业'"/>
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
  }
}
</script>
<style scoped>

</style>