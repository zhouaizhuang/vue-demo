<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L60.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  font-size: 0px;
  padding: 0px;
}

.loading span {
  vertical-align: middle;
  border-radius: 100%;

  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 3px 2px;
  animation: loading-animation 0.8s linear infinite alternate;
}

.loading span:nth-child(1) {
  animation-delay: -1s;
  background: rgba(0, 0, 0, 0.6);
}

.loading span:nth-child(2) {
  animation-delay: -0.8s;
  background: rgba(0, 0, 0, 0.8);
}

.loading span:nth-child(3) {
  animation-delay: -0.26666s;
  background: rgba(0, 0, 0, 1);
}

.loading span:nth-child(4) {
  animation-delay: -0.8s;
  background: rgba(0, 0, 0, 0.8);
}

.loading span:nth-child(5) {
  animation-delay: -1s;
  background: rgba(0, 0, 0, 0.4);
}

@keyframes loading-animation {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}
</style>
