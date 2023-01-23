<template>
  <div style="width:375px;min-height:500px;" class="auto h100vh rel">
    <div class="fs16 tc pt30 rel zx100 gf">在移动端看效果</div>
    <!--红包-->
    <div :class="['abs trbl0 trans2 zx10 op10']" style="background-color: rgba(0, 0, 0, .7);">
      <div @click.stop class='abs l50 tx-50' style="top:20%;">
        <img @click="openRed" src="./images/red_packet_bg.png" alt="" :class="[isOpenRed ? 'aniRotate' : '']" style="width:270px;height:375px;">
        <img @click="isOpenRed=false" src="./images/red_packet_close.png" alt="" :class="['abs t0', isOpenRed ? 'dn' : 'db']" style="right:-10px;width:27px;height:27px;">
      </div>
    </div>
    <!--奖励记录-->
    <div :class="['abs trbl0 trans2', isShowRecord? 'zx100 op10' : 'zx-1 op0']" style="background-color: rgba(0, 0, 0, .7);">
      <img src="./images/net_myreward_top.png" alt="" :class="['abs l50 tx-50 zx10 trans3', isShowRecord ? '' : 'tx120']" style="top:180px;width:270px;height:32px;" />
      <div @click.stop :class="['abs bgf rds10 l50 tx-50 trans3 zx20', isShowRecord ? '' : 'tx120']" style="top:200px;width:250px;padding: 20px 30px;min-height:230px;">
        <img @click="closeRecord" src="./images/net_finish_close.png" alt="" class="abs" style="top:-50px;right:-20px;width:31px;height:31px;">
        <img src="./images/net_myreward.png" alt="" class="rel zx20 db" style="margin:0 auto 5px;width:96px;height:16px;">
        <img src="./images/net_myreward_bg.png" alt="" class="abs zx10 l50 tx-50" style="top:22px;width:129px;height:12px;">
        <div class="f ac xc fs17 b mb5" style="color: #CC3421;">现金红包: 100.05元</div>
        <div class="f ac xc fs12 g3" >请至“xxx”微信公众号，点击领奖通知，领取红包</div>
        <img src="./images/net_gift.png" alt="" class="abs l50 tx-50" style="bottom:8px;width:270px;height:132px;">
        <img src="./images/net_share_btn.png" alt="" class="abs l50 tx-50" style="bottom:-65px;width:140px;height:42px;">
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