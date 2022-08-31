<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L66.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  background: rgba(0, 0, 0, 0.6);
  width: 30px;
  height: 30px;
  position: relative;
  text-align: center;
  transform: rotate(20eg);
  animation: loading-animation 3s linear infinite;
}

.loading:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background: rgba(0, 0, 0, 0.4);
  transform: rotate(135deg);
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
}
</style>
