
<template>
  <div class="fs20r mt30r pl30r bdc ml30r mr30r pt30r">
    <div class="fs30r b">子组件</div>
    <div class="mb20r">{{$attrs['name']}}</div>
    <div class="mb20r">{{$attrs['age']}}</div>
    <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行父组件事件</div>
    <div class="pl30r pr30r">
      <sonOfChild v-bind="$attrs" v-on="$listeners" />
    </div>
  </div>
</template>
<script>
import sonOfChild from "./sonOfChild.vue"
export default {
  name: 'child',
  components:{
    sonOfChild
  },
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