<template>
  <div class="mh100vh">
    <!-- ====> 简单获取您在哪个省 -->
    <div class="fs16 b mb30">搜狐方式 ： {{souhuObj.provinve}}</div>
    <!-- ====>  简单获取您在哪个省和市（只能精确到市） -->
    <div id="container" class="dn"></div>
    <div class="fs16 b mb30">高德地图方式： {{gaodeIpObj.province + gaodeIpObj.city}}</div>
  </div>
</template>
<script src='./index.js'>
</script>
<style scoped>
</style>