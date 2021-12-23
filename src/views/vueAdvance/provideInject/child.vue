
<template>
  <div class="fs20r mt30r ml30r mr30r pl30r bdc">
    <div class="fs30r b">子组件</div>
    <div class="mb20r">{{name}}</div>
    <div class="mb20r">{{age}}</div>
    <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行父组件事件</div>
    <sonOfChild v-on="$listeners"/>
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