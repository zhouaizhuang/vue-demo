<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L91.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  border: 24px solid #ddd;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation: rotation 1s linear infinite;
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
