<template>
  <div class="mh100vh bg2" style="filter: contrast(30);">
    <div class="tc text fs30 gf">每天进步一点点</div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
.text{
  animation: letterSpaceAni 2s forwards;
}
@keyframes letterSpaceAni {
  0%{
    letter-spacing: -50px;
    filter: blur(10px);
  }
  100%{
    letter-spacing: 5px;
    filter: blur(0px);
  }
}
</style>