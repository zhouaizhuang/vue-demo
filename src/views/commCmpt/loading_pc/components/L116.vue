<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Loading</div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L116.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  font-size: 28px;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
  animation: loading-animation 1s ease-in infinite alternate;
}

@keyframes loading-animation {
  0% {
    filter: blur(0px);
    transform: skew(0deg);
  }

  100% {
    filter: blur(3px);
    transform: skew(-4deg);
  }
}
</style>
