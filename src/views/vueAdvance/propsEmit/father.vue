
<template>
  <div class="auto fs12 h100vh fs25">
    父组件
    <child :text="'我是字符串类型'" :msg="'我是来自父组件的数据'" :info="{name:'小红', school: '北京大学', age: 18}" :state="state" @sayHello="sayHello"/>
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
      state: '毕业'
    }
  },
  methods:{
    sayHello(msg){
      this.state = msg
      alert('hello，执行了父组件传入的函数')
    }
  },
  created(){
  }
}
</script>
<style scoped>

</style>