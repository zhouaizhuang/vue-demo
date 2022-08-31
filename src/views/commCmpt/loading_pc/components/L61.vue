<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L61.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 25px;
  height: 25px;
  display: inline-block;
  padding: 0px;
  border-radius: 100%;
  border: 5px solid;
  border-top-color: rgba(254, 168, 23, 0.65);
  border-bottom-color: rgba(57, 154, 219, 0.65);
  border-left-color: rgba(188, 84, 93, 0.95);
  border-right-color: rgba(137, 188, 79, 0.95);
  animation: loading-animation 2s ease-in-out infinite alternate;
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
