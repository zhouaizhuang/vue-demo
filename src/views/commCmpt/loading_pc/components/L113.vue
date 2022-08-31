<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Load&nbsp;ng</div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L113.vue</h4>
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
  bottom: 7px;
  height: 14px;
  width: 3.5px;
  background: currentColor;
}

.loading::after {
  content: "";
  width: 4px;
  height: 4px;
  background: currentColor;
  position: absolute;
  right: 44.8px;
  animation: loading-animation 0.6s ease-out infinite alternate;
}

@keyframes loading-animation {
  0% {
    top: 6px;
    transform: rotate(0deg) scale(1);
  }

  100% {
    top: -2px;
    transform: rotate(180deg) scale(1.5);
  }
}
</style>
