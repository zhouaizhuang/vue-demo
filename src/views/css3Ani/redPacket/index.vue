<template>
  <div style="width:7.5rem;" class="auto h100vh">
    <div class="fs30r tc pt30r rel zx100 gf">在移动端看效果</div>
    <!--红包-->
    <div :class="['abs trbl0 trans2 zx10 op10']" style="background-color: rgba(0, 0, 0, .7);">
      <div @click.stop class='abs l50 tx-50' style="top:20%;">
        <img @click="openRed" src="./images/red_packet_bg.png" alt="" :class="[isOpenRed ? 'aniRotate' : '']" style="width:5.44rem;height:7.11rem;">
        <img @click="isOpenRed=false" src="./images/red_packet_close.png" alt="" :class="['abs t0', isOpenRed ? 'dn' : 'db']" style="right:-0.2rem;width:0.53rem;height:0.53rem;">
      </div>
    </div>
    <!--奖励记录-->
    <div :class="['abs trbl0 trans2', isShowRecord? 'zx100 op10' : 'zx-1 op0']" style="background-color: rgba(0, 0, 0, .7);">
      <img src="./images/net_myreward_top.png" alt="" :class="['abs l50 tx-50 zx10 trans3', isShowRecord ? '' : 'tx120']" style="top:22%;width:5.4rem;height:0.64rem;" />
      <div @click.stop :class="['abs bgf rds15r l50 tx-50 trans3 zx20', isShowRecord ? '' : 'tx120']" style="top:25%;width:5rem;padding: 0.4rem 0.6rem;min-height:4.6rem;">
        <img @click="closeRecord" src="./images/net_finish_close.png" alt="" class="abs" style="top:-1rem;right:-0.4rem;width:0.63rem;height:0.63rem;">
        <img src="./images/net_myreward.png" alt="" class="rel zx20 db" style="margin:0 auto 0.3rem;width:1.88rem;height:0.38rem;">
        <img src="./images/net_myreward_bg.png" alt="" class="abs zx10 l50 tx-50" style="top: 0.6rem;width:2.58rem;height:0.25rem;">
        <div class="f ac xc fs34r b mb10r" style="color: #CC3421;">现金红包：100.05元</div>
        <div class="f ac xc fs24r g3" >请至“xxx”微信公众号，点击领奖通知，领取红包</div>
        <img src="./images/net_gift.png" alt="" class="abs b30r l50 tx-50" style="width:5.41rem;height:2.64rem;">
        <img src="./images/net_share_btn.png" alt="" class="abs l50 tx-50" style="bottom:-1.3rem;width:2.8rem;height:0.84rem;">
      </div>
    </div>
  </div>
</template>
<script>
import { wait } from "../../../common"
export default {
  name: 'redPacket',
  data(){
    return {
      isOpenRed: false,
      isShowRecord:false
    }
  },
  methods: {
    async openRed(){
      this.isOpenRed = true
      await wait(2e3)
      this.isShowRecord = true
    },
    closeRecord(){
      this.isShowRecord = false
      this.isShowRed = false
    },
  },
  created(){
  }
}
</script>
<style scoped>
@keyframes rotateZ360 {
  0%{transform: rotateY(0);}
  90%{transform: rotateY(720deg);}
  100%{transform: rotateY(720deg) translateY(-200%);}
}
.aniRotate{
  animation: rotateZ360 2s ease 0s 1 forwards;
}
.tx120{transform: translateX(120%);}
</style>