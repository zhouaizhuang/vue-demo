<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L43.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  position: relative;
  width: 32px;
  height: 32px;
}

.loading > div {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  border-radius: 100%;
}

.loading > div:first-child {
  animation: ball-zig-effect 0.7s 0s infinite linear;
}

.loading > div:last-child {
  animation: ball-zag-effect 0.7s 0s infinite linear;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  width: 4px;
  height: 4px;
  margin-top: -2px;
  margin-left: -2px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
}

@keyframes ball-zig-effect {
  0% {
    transform: translate(0, 0);
  }

  33% {
    transform: translate(-75%, -150%);
  }

  66% {
    transform: translate(75%, -150%);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes ball-zag-effect {
  0% {
    transform: translate(0, 0);
  }

  33% {
    transform: translate(75%, 150%);
  }

  66% {
    transform: translate(-75%, 150%);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
