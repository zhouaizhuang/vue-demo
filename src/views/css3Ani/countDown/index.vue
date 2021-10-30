<template>
  <div>
    <div class="fs30" style="margin:200px auto;width:500px;">{{timeStr}}</div>
  </div>
</template>
<script>
import { sec2Dhs } from "../../../common"
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
        const { d, h, m, s, ms } = sec2Dhs(leftMs)
        this.timeStr = `${d}天${h}时${m}分${s}秒${ms}毫秒`
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
    },80) 
  },
  beforeDestroy(){
    clearInterval(this.timeId)
  }
}
</script>
<style>
</style>