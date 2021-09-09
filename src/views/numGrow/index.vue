
<template>
  <div style="margin: 200px auto;width:300px;">
    <div class="mb30">每隔3秒滚动一次。可以自定义滚动数据</div>
    <div class="mb30">移动端和PC端均可使用</div>
    <div class="fs24 f as rel bdc ovh" style="height:40px;transform: translateY(2px)">
      <div class="f xc rw" v-for="(item, index) in playerArr" :key="index">
        <div :style="{width:'20px', transition: 'all ease 1.5s', transform: `translateY(${item * -40}px)`}">
          <div class="w100 f ac xc" style="height:40px;" v-for="item in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { random } from "../../common.js"
export default {
  name: 'numGrow',
  data(){
    return {
      playerArr: [1,2,4,3,2,3,0,8,3,7,4,6]
    }
  },
  methods: {
    // 获取数据
   
  },
  created(){
    setTimeout(() => {
      this.playerArr = String(Math.floor(random(10000000, 99999999))).split('')
    }, 100)
    this.timeId = setInterval(() => {
      this.playerArr = String(Math.floor(random(10000000, 99999999))).split('')
    }, 3000)
  },
  beforeDestroy(){
    clearInterval(this.timeId)
  }
}
</script>
<style>
</style>