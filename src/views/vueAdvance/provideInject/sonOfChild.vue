
<template>
  <div class="bdc fs20r mt30r ml30r mr30r mb30r pl30r pr30r pt30r pb30r">
    <div class="fs28r b">孙子组件</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行父组件事件</div>
  </div>
</template>
<script>
export default {
  name: 'sonOfChild',
  inject: ['name', 'age'],
  data(){
    return {
    }
  },
  methods:{
    doClick(){
      this.$listeners.sayHello('我是孙子组件数据')
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