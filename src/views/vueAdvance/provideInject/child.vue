
<template>
  <div class="fs20r mt30r ml30r mr30r pl30r bdc">
    <div class="fs30r b">子组件</div>
    <div class="mb20r">{{name}}</div>
    <div class="mb20r">{{age}}</div>
    <sonOfChild />
  </div>
</template>
<script>
import sonOfChild from "./sonOfChild.vue"
export default {
  name: 'child',
  components:{
    sonOfChild
  },
  inject: ['name', 'age'],
  data(){
    return {
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