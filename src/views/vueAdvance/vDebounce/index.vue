
<template>
  <div class="auto fs20r h100vh ovh pt30">
    <!--v-debounce函数防抖-->
    <div class="fs40r tc">v-debounce函数防抖</div>
    <div class="fs20r tc mb20r">单位时间内只触发最后一次</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-debounce="debounceRefresh">函数防抖&nbsp;&nbsp;{{debounceTimes}}</div>
  </div>
</template>
<script>
export default {
  name: 'vDebounce',
  data(){
    return {
      debounceTimes: 0,
    }
  },
  methods:{
    debounceRefresh(){
      this.debounceTimes++
    },
  },
  created(){
   
  }
}
</script>
<style scoped>

</style>