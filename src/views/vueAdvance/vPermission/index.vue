
<template>
  <div class="auto fs20 h100vh ovh">
    <!--v-permission权限控制-->
    <div class="fs26 tc mb20r pt30">v-permission权限控制</div>
    <div class="f ac pl50r mb30r">
      <div class="fs15r mr20r b">首页权限:</div>
      <div class="f1 f ac xs">
        <div class="fs15 gf bg1890ff rds30 f ac xc pt10 pb10 w40" v-permission="50001">进入首页</div>
      </div>
    </div>
    <div class="mt30 mb30 bg2" style="height:0.5px;"></div>

    <div class="mb20r tl fs14 gred">备注：商机权限确实没有。所以这个dom页面上没有显示</div>
    <div class="f ac pl25 mb15">
      <div class="fs15 mr20 b">商机权限:</div>
      <div class="f1 f ac xs">
        <div class="fa15 gf bg1890ff rds50 f ac xc pt10 pb10 w40 " v-permission="50002">进入商机</div>
      </div>
    </div>
    <div class="mt60r mb60r bg2" style="height:0.5px;"></div>

    <div class="f ac pl25 mb15">
      <div class="fs15 mr10 b">客户详情页权限:</div>
      <div class="f1 f ac xs">
        <div class="fs15 gf bg1890ff rds30 f ac xc pt10 pb10 w90 " v-permission="50003">进入客户详情页权限</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vPermission',
  data(){
    return {
    }
  },
  methods:{
  },
  created(){
   
  }
}
</script>
<style scoped>

</style>