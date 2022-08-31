<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">L &nbsp; ading</div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L109.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #ddd;
  position: relative;
}

.loading::before {
  content: "";
  position: absolute;
  left: 0.714285em;
  bottom: 0.214285em;
  width: 0.285714em;
  height: 0.285714em;
  border-radius: 50%;
  border: 0.142857em solid #ddd;
  border-bottom-color: #ff3d00;
  animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
