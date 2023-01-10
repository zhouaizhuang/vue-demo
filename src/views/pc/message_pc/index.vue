<template>
  <div style="background:#222" class="mh100vh ovh">
    <div class="">
      <div v-for="(item, index) in list" :key="index">
        <div :class="['f ac xc pl20 pr20 pt5 pb5 bgf rds5 mb20 wfc auto l50 abs', `ani-msg-ty${index}`]" :style="{top: 20 + index * 50 + 'px'}">
          <svg t="1671801628539" class="mr5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3549" width="18" height="18"><path d="M512 32C251.4285715625 32 32 251.4285715625 32 512s219.4285715625 480 480 480 480-219.4285715625 480-480-219.4285715625-480-480-480z m205.7142853125 617.142856875c20.5714284375 20.5714284375 20.5714284375 48 0 61.714286249999994-20.5714284375 20.5714284375-48 20.5714284375-61.714285312499996 0l-137.142856875-137.1428578125L374.857143125 717.7142853125c-20.5714284375 20.5714284375-48 20.5714284375-68.5714284375 0s-20.5714284375-54.857143125 0-68.5714284375l144-144-137.1428578125-137.142856875c-20.5714284375-13.714285312500001-20.5714284375-41.142856875 0-61.714285312499996 20.5714284375-20.5714284375 48-20.5714284375 61.714286249999994 0l137.142856875 137.142856875 144-144c20.5714284375-20.5714284375 48-20.5714284375 68.5714284375 0 20.5714284375 20.5714284375 20.5714284375 48 0 68.5714284375L580.5714284375 512l137.142856875 137.142856875z" fill="#d81e06" p-id="3550"></path></svg>
          <div>这是错误信息{{index}}</div>
        </div>
      </div>
    </div>
    <Button class="fixed b5 l50 tx-50" type="primary" @click="sure">确定</Button>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
.ani-msg-ty20{
  animation: aniTy20 3s ease 0s 1 both;
}
@keyframes aniTy20 {
  0% {opacity: 0;transform: translate(-50%,-10px);}
  15% {opacity: 10;transform: translate(-50%,20px);}
  75% {opacity: 10;transform: translate(-50%,20px);}
  100%{opacity: 0;transform: translate(-50%,-200px);}
}
.ani-msg-ty-20{
  animation:  aniTy-20 .5s ease 0s 1 both;
}
@keyframes aniTy-20 {
  0% {opacity: 10;transform: translateY(0px);}
  100%{opacity: 0;transform: translateY(-20px);}
}
</style>