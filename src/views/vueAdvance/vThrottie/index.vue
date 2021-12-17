
<template>
  <div class="auto fs20r h100vh ovh pt30">
    <!--v-throttie函数节流-->
    <div class="fs40r tc">v-throttie函数节流</div>
    <div class="fs20r tc mb20r">一段时间内首次触发时立即执行，此时间段内再次触发，不会执行！</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-throttie="throttieRefresh">函数节流&nbsp;&nbsp;{{throttieTimes}}</div>
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