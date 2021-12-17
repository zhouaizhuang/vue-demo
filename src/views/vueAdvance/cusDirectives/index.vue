
<template>
  <div class="auto fs20r h100vh ovh pt30">
    <!--v-permission权限控制-->
    <div class="fs40r tc mb20r">v-permission权限控制</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-permission="'/index'">首页权限</div>
    <div class="mb20r tc fs28r">备注：商机权限确实没有。所以这个dom页面上没有显示</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-permission="'/saleChance'">商机权限</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-permission="'/customer/detail'">客户详情页权限</div>
    <div class="mt60r mb60r bg2" style="height:1px;"></div>
    <!--v-copy复制数据-->
    <div class="fs40r tc mb20r">v-copy复制数据</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-copy="'这是复制的数据'">点我复制</div>
    <div class="mt60r mb60r bg2" style="height:1px;"></div>
    <!--v-debounce函数防抖-->
    <div class="fs40r tc">v-debounce函数防抖</div>
    <div class="fs20r tc mb20r">单位时间内只触发最后一次</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-debounce="debounceRefresh">函数防抖&nbsp;&nbsp;{{debounceTimes}}</div>
    <div class="mt60r mb60r bg2" style="height:1px;"></div>
    <!--v-debounce函数防抖-->
    <div class="fs40r tc">v-throttie函数节流</div>
    <div class="fs20r tc mb20r">一段时间内首次触发时立即执行，此时间段内再次触发，不会执行！</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-throttie="throttieRefresh">函数节流&nbsp;&nbsp;{{throttieTimes}}</div>
    <div class="mt60r mb60r bg2" style="height:1px;"></div>
  </div>
</template>
<script>
export default {
  name: 'cusDirectives',
  data(){
    return {
      debounceTimes: 0,
      throttieTimes: 0
    }
  },
  methods:{
    debounceRefresh(){
      this.debounceTimes++
    },
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