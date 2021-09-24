
<template>
  <div>
    <div style="width:300px;height:150px;border:1px solid #ccc;overflow:hidden;margin:100px auto;text-align:center;">
      <div :style="styleObj">
        <div v-for="(item, index) in showList" :key="index" style="height:50px;">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { addCss } from "../../../common.js"
export default {
  name: 'Home',
  data(){
    return {
      list: [], // 重复的部分必须覆盖显示的框高度
      showList: [], // 用于实际展示的列表
      styleObj: { animation: `moveY 10s linear 0s  infinite normal` }
    }
  },
  methods: {
    // 获取数据
    getList(){
      this.list = ['张一', '张二', '张三'] // 真实项目的话，此处从ajax获取数据。demo直接写死了
      this.showList = [...this.list, ...this.list] // 需要展示的最大高度就是150px。而每个条目占用50px高度，那么也就是说，需要最少3个条目来占用150px。从而实现看起来无缝轮播
      // 平移必须是固定高度
      addCss(`@keyframes moveY {
        0%{ transform: translateY(0%); }
        100%{ transform: translateY(-${50 * this.list.length}px); }
      }`, 'z-moveY')
      this.styleObj =  { animation: `moveY ${this.list.length}s linear 0s  infinite normal` } // 每个条目占用时间为1s
    }
  },
  created(){
    this.getList()
  }
}
</script>
<style>
</style>