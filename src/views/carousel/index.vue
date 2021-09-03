
<template>
  <div>
    <div style="width:500px;height:150px;border:1px solid #ccc;overflow:hidden;margin:100px auto;text-align:center;">
      <div :style="styleObj">
        <div v-for="(item, index) in showList" :key="index" style="height:50px;">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { addCss } from "../../common.js"
export default {
  name: 'Home',
  data(){
    return {
      list: [], // 至少得重复一遍，才能实现无缝
      styleObj: { animation: `moveY 10s linear 0s  infinite normal` }
    }
  },
  methods:{
    // 获取数据
    getList(){
      this.list = ['张一', '张二', '张三'] // 真实项目，此处从ajax获取数据
      this.showList = [...this.list, ...this.list] // 如果盒子高度和list一样，那么就需要重复一次。高度越高， list需要重复的越多。用于占位置
      // 平移必须是固定高度
      addCss(`@keyframes moveY {
        0%{ transform: translateY(0%); }
        100%{ transform: translateY(-${50 * this.list.length}px); }
      }`, 'z-moveY')
      this.styleObj =  { 
        animation: `moveY ${this.list.length}s linear 0s  infinite normal`, // 每个条目占用时间为1s
      }
    }
  },
  created(){
    this.getList()
  }
}
</script>
<style>
</style>