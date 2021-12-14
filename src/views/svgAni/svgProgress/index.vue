<template>
  <div class="h100vh f xc as">
    <svg width="440" height="440" viewBox="0 0 440 440">
      <defs>
        <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient">
          <stop offset="0%" stop-color="#e52c5c"></stop>
          <stop offset="100%" stop-color="#ab5aea"></stop>
        </linearGradient>
      </defs>
      <circle cx="220" cy="220" r="170" class="circle-track"></circle>
      <circle cx="220" cy="220" r="170"  stroke-linecap="round" transform="rotate(-90 220 220)" class="circle-bar" :style="{strokeDashoffset: `${offsetVal}px`}"></circle>
      <text class="text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{{percent}}%</text>
    </svg>
  </div>
</template>
<script>
import { range, round } from '../../../common'
export default {
  name: 'svgProgress',
  data(){
    return {
      offsetVal: 1069,
      percent:0, // 百分比
    }
  },
  methods:{
   
  },
  created(){
    setInterval(() => {
      this.offsetVal = range(this.offsetVal - 3, 0)
      this.percent = round((1069 - this.offsetVal) / 1069 * 100, 0)
      if(this.offsetVal <= 0) {
        this.offsetVal = 1069
      }
    }, 20)
  }
}
</script>
<style scoped>
circle {
  stroke-width: 20px;
  fill: none;
  stroke-dasharray: 1069px;
}
.circle-track {
  stroke: #f0f1f5;
}
.circle-bar {
  stroke-dashoffset: 1069px;
  stroke: url(#gradient);
  /* animation: processAni 5s ease infinite; */
}
.text {
  font-size: 50px;
}
/* @keyframes processAni {
  to{
    stroke-dashoffset:0;
  }
} */
</style>