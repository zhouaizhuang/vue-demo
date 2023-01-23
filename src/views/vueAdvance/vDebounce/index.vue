
<template>
  <div class="auto fs20r h100vh ovh">
    <!--v-debounce函数防抖-->
    <div class="fs20 tc pt30">v-debounce函数防抖</div>
    <div class="fs10 tc mb10">单位时间内只触发最后一次</div>
    <div class="fs15 gf bg1890ff rds40 f ac xc pt10 pb10 w40 mb15 auto poi none" v-debounce="debounceRefresh">函数防抖&nbsp;&nbsp;{{debounceTimes}}</div>
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