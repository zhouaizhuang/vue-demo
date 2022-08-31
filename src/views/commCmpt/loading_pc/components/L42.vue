<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L42.vue</h4>
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
  width: 32px;
  height: 32px;
}

.loading > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.loading > div:nth-child(1) {
  animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
}

.loading > div:nth-child(2) {
  animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
}

.loading > div:nth-child(3) {
  animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  width: 4px;
  height: 4px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  width: 20px;
  height: 20px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  width: 30px;
  height: 30px;
}

@keyframes ball-triangle-path-ball-one {
  0% {
    transform: translate(0, 220%);
  }

  17% {
    opacity: 0.25;
  }

  33% {
    opacity: 1;
    transform: translate(110%, 0);
  }

  50% {
    opacity: 0.25;
  }

  66% {
    opacity: 1;
    transform: translate(220%, 220%);
  }

  83% {
    opacity: 0.25;
  }

  100% {
    opacity: 1;
    transform: translate(0, 220%);
  }
}

@keyframes ball-triangle-path-ball-two {
  0% {
    transform: translate(110%, 0);
  }

  17% {
    opacity: 0.25;
  }

  33% {
    opacity: 1;
    transform: translate(220%, 220%);
  }

  50% {
    opacity: 0.25;
  }

  66% {
    opacity: 1;
    transform: translate(0, 220%);
  }

  83% {
    opacity: 0.25;
  }

  100% {
    opacity: 1;
    transform: translate(110%, 0);
  }
}

@keyframes ball-triangle-path-ball-tree {
  0% {
    transform: translate(220%, 220%);
  }

  17% {
    opacity: 0.25;
  }

  33% {
    opacity: 1;
    transform: translate(0, 220%);
  }

  50% {
    opacity: 0.25;
  }

  66% {
    opacity: 1;
    transform: translate(110%, 0);
  }

  83% {
    opacity: 0.25;
  }

  100% {
    opacity: 1;
    transform: translate(220%, 220%);
  }
}
</style>
