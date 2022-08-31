<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L11.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: relative;
  width: 48px;
  height: 48px;
  animation: satellite 3s infinite linear;
  border: 1px solid #000;
  border-radius: 100%;
}

.loading:before,
.loading:after {
  position: absolute;
  left: 1px;
  top: 1px;
  width: 12px;
  height: 12px;
  content: "";
  border-radius: 100%;
  background-color: #000;
  box-shadow: 0 0 10px #000;
}

.loading:after {
  right: 0;
  width: 20px;
  height: 20px;
  margin: 13px;
}

@keyframes satellite {
  from {
    transform: rotate(0) translateZ(0);
  }

  to {
    transform: rotate(360deg) translateZ(0);
  }
}
</style>
