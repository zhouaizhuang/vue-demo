<!--https://juejin.cn/post/6844903982742110216-->
<template>
  <div ref="list" class="ovxh w100 ovya rel" style="-webkit-overflow-scrolling: touch;margin-top:100px;" @scroll="scrollEvent($event)">
    <div class="abs l0 t0 r0 zx-1" :style="{ height: listHeight + 'px' }"></div> <!--这个是实际撑开盒子的高度的。滚动的实际上是这个-->
    <!--当滚动超过一个元素高度的时候，将这个盒子整体下移一个盒子高度。这样完美让盒子显示在原来位置。同时加载出最新一个数据-->
    <div :style="{ width:'350px', transform: getTransform }" class="auto tc">
      <div
        v-for="item in visibleData"
        :key="item._id"
        :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }"
        @click="showVal(item.value)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
// 参考：http://mint-ui.github.io/docs/#/
// TODO kebab-case
import { guID } from "../../../common"
export default {
  name:'virtualList',
  data() {
    return {
      itemSize: 50,
      screenHeight:500, //可视区域高度
      startOffset:0, //偏移量
      start:0, //起始索引
      end:null, //结束索引
    };
  },
  methods: {
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop //当前滚动位置
      this.start = Math.floor(scrollTop / this.itemSize) //此时的开始索引
      this.end = this.start + this.visibleCount //此时的结束索引
      this.startOffset = scrollTop - (scrollTop % this.itemSize) //此时的偏移量
      // console.log(scrollTop)
      // console.log(this.startOffset)
    },
    showVal(val){
      alert(val)
    }
  },
  computed:{
    listHeight(){ return this.listData.length * this.itemSize }, // 列表总高度
    visibleCount(){ return Math.ceil(this.screenHeight / this.itemSize) },// 可显示的列表项数
    getTransform(){ return `translate3d(0,${this.startOffset}px,0)` }, // 偏移量对应的style
    visibleData(){ return this.listData.slice(this.start, Math.min(this.end,this.listData.length)) } // 获取真实显示列表数据
  },
  created(){
    this.listData = new Array(100000).fill('').map((item, index)=> ({_id: guID(), value:index}))
  },
  mounted() {
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },
}
</script>
<style scoped>
</style>



