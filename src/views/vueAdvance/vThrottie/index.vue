
<template>
  <div class="auto fs12 h100vh ovh">
    <!--v-throttie函数节流-->
    <div class="fs20 tc pt30">v-throttie函数节流</div>
    <div class="fs12 tc mb10">一段时间内首次触发时立即执行，此时间段内再次触发，不会执行！</div>
    <div class="fs16 gf bg1890ff rds40 f ac xc pt10 pb10 w40 mb15 auto poi none" v-throttie="throttieRefresh">函数节流&nbsp;&nbsp;{{throttieTimes}}</div>
  </div>
</template>
<script>
export default {
  name: 'vThrottie',
  data(){
    return {
      throttieTimes: 0
    }
  },
  methods:{
    throttieRefresh(){
      this.throttieTimes++
    }
  },
  created(){
  }
}
</script>
<style scoped>

</style>