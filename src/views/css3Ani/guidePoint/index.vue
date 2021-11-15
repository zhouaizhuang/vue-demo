<template>
  <div class="rel h100vh auto" style="width:375px;">
    <img src="./net_share_bg1.jpg" alt="" class="abs t0 l0 w100 h100vh" >
    <img src="./net_point.png" alt="" class="abs l50 tx-50 ani-tap" style="bottom:130px;width: 50.4px;height:60.2px;" />
    <div class="fs24r gf b abs w100 f ac xc aniscan" style="bottom:110px;">长按保存海报</div>
    <img src="./net_share_bg1.jpg" alt="" class="abs t0 l0 w100 h100vh op0 zx10" >
  </div>
</template>
<script>
export default {
  name: 'guidePoint',
  components: {
  },
  data(){
    return {
    }
  },
  methods: {
  },
  created(){
  }
}
</script>
<style scoped>
@keyframes enlarge {
  0%{transform: scale(0.9);}
  50%{transform: scale(1.1);}
  100%{transform: scale(1);}
}
.aniscan{
  animation: enlarge 1s ease .3s 1 forwards;
}
@keyframes pointTap {
  0%{transform: translate(-50%, 0rem) rotateX(0deg);}
  100%{transform: translate(-50%, -0.1rem) rotateX(25deg);}
}
.ani-tap{
  animation: pointTap 1s ease 0.2s 3 normal;
}
</style>
