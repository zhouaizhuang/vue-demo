<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L92.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  color: #666;
  left: -100px;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),
      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  12% {
    box-shadow: 100px 0 #666, 0px 0 rgba(255, 255, 255, 0),
      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  25% {
    box-shadow: 110px 0 #666, 100px 0 #666, 0px 0 rgba(255, 255, 255, 0),
      0px 0 rgba(255, 255, 255, 0);
  }

  36% {
    box-shadow: 120px 0 #666, 110px 0 #666, 100px 0 #666,
      0px 0 rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 130px 0 #666, 120px 0 #666, 110px 0 #666, 100px 0 #666;
  }

  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #666, 120px 0 #666,
      110px 0 #666;
  }

  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
      130px 0 #666, 120px 0 #666;
  }

  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
      200px 0 rgba(255, 255, 255, 0), 130px 0 #666;
  }

  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
      200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
</style>
