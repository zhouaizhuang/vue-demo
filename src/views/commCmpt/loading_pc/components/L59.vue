<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L59.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: 0px;
  opacity: 0.5;
  border: 3px solid #000;
  animation: loading-animation 1s ease-in-out infinite alternate;
}

.loading:before {
  content: " ";
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 3px solid #000;
}

.loading:after {
  content: " ";
  position: absolute;
  z-index: -1;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 3px solid #000;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg) scale(1, 1);
    border-radius: 0px;
  }

  to {
    transform: rotate(360deg) scale(0, 0);
    border-radius: 50px;
  }
}
</style>
