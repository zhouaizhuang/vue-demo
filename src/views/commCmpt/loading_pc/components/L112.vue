<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Loading</div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L112.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  color: #ddd;
  position: relative;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
}

.loading::after {
  content: "";
  width: 3px;
  height: 3px;
  background: currentColor;
  position: absolute;
  bottom: 6px;
  right: -5px;
  animation: loading-animation 1s linear infinite;
}

@keyframes loading-animation {
  0% {
    box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 10px 0 #ddd, 20px 0 rgba(255, 255, 255, 0);
  }

  100% {
    box-shadow: 10px 0 #ddd, 20px 0 #ddd;
  }
}
</style>
