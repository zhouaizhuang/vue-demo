<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Load&nbsp;ng</div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L114.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  color: #ddd;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  letter-spacing: 4px;
}

.loading::before {
  content: "";
  position: absolute;
  right: 45px;
  bottom: 8px;
  height: 14px;
  width: 4px;
  outline: 1px solid #ddd;
  color: #ff3d00;
  animation: loading-animation-b 1s linear infinite alternate;
}

.loading::after {
  content: "";
  width: 4px;
  height: 4px;
  background: #ff3d00;
  position: absolute;
  right: 45px;
  top: 8px;
  animation: loading-animation-a 1s ease-out infinite alternate;
}

@keyframes loading-animation-b {
  0% {
    box-shadow: 0 0 inset;
  }

  100% {
    box-shadow: 0 -16px inset;
  }
}

@keyframes loading-animation-a {
  0% {
    top: 2px;
    transform: rotate(0deg) scale(1);
  }

  100% {
    top: -4px;
    transform: rotate(180deg) scale(1.5);
  }
}
</style>
