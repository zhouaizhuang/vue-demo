
<template>
  <div class="ovh h100vh" style="width:300px;">
    <div class="mb30 mt100">每隔3秒滚动一次。可以自定义滚动数据</div>
    <div class="mb30">移动端和PC端均可使用</div>
    <!--1、块级模式-->
    <div class="mt30 g1890ff">块级模式:</div>
    <div class="fs24 f as rel ovh bgf" style="height:40px">
      <div class="f xc rw" v-for="(item, index) in playerArr" :key="index" style="width:20px;">
        <div class="w100" :style="{transition: 'all ease 1.5s', transform: `translateY(${item * -40}px)`}">
          <div class="f ac xc" style="height:40px;" v-for="item in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">{{item}}</div>
        </div>
      </div>
    </div>
    <!--2、内联模式-->
    <div class="mt30 g1890ff">内联模式:</div>
    <div class="f ac">
      <div class="fs24 f rel ovh bgf" style="height:40px;">
        <div class="f rw" v-for="(item, index) in playerArr" :key="index" style="width:20px;">
          <div class="w100" :style="{transition: 'all ease 1.5s', transform: `translateY(${item * -40}px)`}">
            <div class="f ac xc" style="height:40px;" v-for="item in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">{{item}}</div>
          </div>
        </div>
      </div>人
    </div>
  </div>
</template>
<script>
import { random } from "../../../common.js"
export default {
  name: 'numGrow',
  data(){
    return {
      playerArr: [0,0,0,0,0,0,0,0,0]
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
      let tmp = Number(this.playerArr.join(''))
      tmp += Math.floor(random(1, 100000))
      this.playerArr = String(tmp).split('')
    }, 3000)
    // setTimeout(() => {
    //   this.playerArr = [1,3,5,6,8,4,3,7,3]
    // }, 1000)
  },
  beforeDestroy(){
    clearInterval(this.timeId)
  }
}
</script>
<style>
</style>