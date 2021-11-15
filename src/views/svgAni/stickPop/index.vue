<template>
  <div>
    <svg width="0" height="0" style="position:absolute;">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
    <div class="target rel mauto tc" style="width:100px;height:100px;">
      <div @click="showTips" class="abs rds50 bgff5650 gf f ac xc zx3 l0 t0" style="width:100px;height:100px;" >
        点我分享
      </div>
      <div :class="['abs bgff5650 rds50 f ac xc gf trans5', isShowTips ? 'move1 zx10' : 'zx-1']" style="top:10px;left:10px;width:80px;height:80px;">分享好友</div>
      <div :class="['abs bgff5650 rds50 f ac xc gf trans5', isShowTips ? 'move2 zx10' : 'zx-1']" style="top:10px;left:10px;width:80px;height:80px;">分享微博</div>
      <div :class="['abs bgff5650 rds50 f ac xc gf trans5', isShowTips ? 'move3 zx10' : 'zx-1']" style="top:10px;left:10px;width:80px;height:80px;">分享朋友圈</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'stickPop',
  data(){
    return {
      isShowTips: false
    }
  },
  methods:{
    showTips(){
      this.isShowTips = !this.isShowTips
    }
  },
  created(){
   
  }
}
</script>
<style scoped>
.target{
  filter: url('#goo'); /* 使用这个，那么当前元素变为粘滞的。*/
}
.move1{
  transform: translate(130px, 110px);
}
.move2{
  transform: translate(0px, 130px);
}
.move3{
  transform: translate(-130px, 100px);
}
</style>