<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L101.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 48px;
  height: 6px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  top: -30px;
  color: #ddd;
  animation: loading-animation 0.6s linear infinite;
}

@keyframes loading-animation {
  0% {
    box-shadow: -10px 20px, 10px 35px, 0px 50px;
  }

  25% {
    box-shadow: 0px 20px, 0px 35px, 10px 50px;
  }

  50% {
    box-shadow: 10px 20px, -10px 35px, 0px 50px;
  }

  75% {
    box-shadow: 0px 20px, 0px 35px, -10px 50px;
  }

  100% {
    box-shadow: -10px 20px, 10px 35px, 0px 50px;
  }
}
</style>
