
<!--参考： 无缝滚动https://blog.csdn.net/qq_38882860/article/details/114983463-->
<template>
  <div class="h100vh ovh">
    <div class="bgf" style="width:300px;height:50px;border:1px solid #ccc;overflow:hidden;margin:100px auto;text-align:center;">
      <div class="f ac nowrap" :style="styleObj">
        <div v-for="(item, index) in showList" :key="index" class="f ac" style="height:50px;width:150px;">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { addCss } from "../../../common/index.js"
export default {
  name: 'carouselX',
  data(){
    return {
      list: [], // 重复的部分必须覆盖显示的框高度
      showList: [], // 用于实际展示的列表
      styleObj: { animation: `moveX 10s linear 0s  infinite normal`, width:'1000px' }
    }
  },
  methods: {
    // 获取数据
    getList(){
      this.list = ['张一', '张二', '张三'] // 真实项目的话，此处从ajax获取数据。demo直接写死了
      this.showList = [...this.list, ...this.list.slice(0, 2)] // 需要展示的最大宽度就是300px。而每个条目占用150px高度，那么也就是说，需要最少2个条目来占用300px。从而实现看起来无缝轮播
      // 平移必须是固定高度
      addCss(`@keyframes moveX {
        0%{ transform: translateX(0%); }
        100%{ transform: translateX(-${150 * this.list.length}px); }
      }`, 'z-moveX')
      this.styleObj =  { animation: `moveX ${this.list.length}s linear 0s  infinite normal`, width:'1000px' } // 每个条目占用时间为1s
    }
  },
  created(){
    this.getList()
  }
}
</script>
<style>
</style>