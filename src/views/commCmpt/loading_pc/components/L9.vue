<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L9.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  margin: 20px;
  position: relative;
  width: 1px;
  height: 1px;
}

.loading:before,
.loading:after {
  position: absolute;
  display: inline-block;
  width: 15px;
  height: 15px;
  content: "";
  border-radius: 100%;
  background-color: #000;
}

.loading:before {
  left: -15px;
  animation: ball-pulse infinite 0.75s -0.4s cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.loading:after {
  right: -15px;
  animation: ball-pulse infinite 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

@keyframes ball-pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
