<template>
  <div class="h100vh ovh">
    <div class="fs22 mt50 tc">备注：h5限时活动常见功能</div>
    <div class="fs22 tc">定位：轻量级，高度自定义</div>
    <div class="fs24 tc g1890ff" style="margin:100px auto;width:350px;">{{timeStr}}</div>
  </div>
</template>
<script>
import { ms2Dhs } from "../../../common.js"
export default {
  name: 'countDown',
  data(){
    return {
      timeStr: '',
    }
  },
  timeId: null,
  methods: {
    countTime(time) {
      const [now, end] = [new Date().getTime(), new Date(time).getTime()]
      const leftMs = end - now //时间差
      if(leftMs > 0) {
        // const { d, h, m, s, ms } = ms2Dhs(leftMs) // 获取剩余的 天  时  分 秒 毫秒
        // this.timeStr = `${d}天${h}时${m}分${s}秒${ms}毫秒`
        this.timeStr = ms2Dhs('dd天hh时mm分ss秒ms毫秒', leftMs)
      } else {
        this.timeStr = '已截止'
      }
      return leftMs
    }
  },
  created(){
    this.timeId = setInterval(() => {
      const dates = this.countTime("2023-10-29 15:58:20");
      if(dates <= 0) {
        clearInterval(this.timeId)
      }
    },60) 
  },
  beforeDestroy(){
    clearInterval(this.timeId)
  }
}
</script>
<style>
</style>