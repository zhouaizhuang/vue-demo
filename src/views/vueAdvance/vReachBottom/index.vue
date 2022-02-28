<!--参考链接：https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html-->
<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="item.id" 
      class="f ac xc"
      :id="item.id"
      style="height:70px"
    >
      {{index}}
    </div>
    <!--底部的加载更多提示、全部加载完的提示-->
    <div v-reachBottom="getMoreData" v-if="isShowLoadMore" id="" class="loadMore f ac xc tc">
      <svg class="rotateSvg">
        <circle cx="20" cy="20" r="10" fill="none" class="circleDash"></circle>
      </svg>
      <div class="fs16 g3">上拉加载更多...</div>
    </div>
    <div v-else class="fs16 g3 tc pt10 pb10">沒有更多了</div>
  </div>
</template>
<script>
import { repeat, chunk } from "../../../common"
export default {
  name: 'vReachBottom',
  data(){
    return {
      allList:[],
      list: [],
      page: 0,
      isShowLoadMore:true,
    }
  },
  methods: {
    getData(){
      const newList = this.allList[this.page] // 模拟接口请求到的分页数据
      // console.log(newList)
      if(newList) {
        this.list = [...this.list, ...newList]
      } else {
        console.log('没有更多数据了')
        this.isShowLoadMore = false
      }
    },
    getMoreData() {
      this.page += 1
      console.log(`下拉加载更多进入了可视区。开始加载第${this.page + 1}页数据`)
      setTimeout(() => this.getData(), 200) // 通过演示模拟接口请求耗时
    }
  },
  created(){
    const allData = repeat([1,2,3,4,5,6,7,8,9,10], 5) // 构造出全部数据
    // console.log(allData)
    this.allList = chunk(allData, 10) // 数组分块
    this.getData()
  },
  mounted(){
  }
}
</script>
<style scoped>
.rotateSvg{
  width:40px;
  height:40px;
  animation: rotate360 2s linear infinite;
}
.circleDash{
  color:#ccc;
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90 120;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke:#ccc;
  stroke-linecap: round;
}
@keyframes rotate360 {
  0% {transform: rotate(0);}
  100% {transform: rotate(360deg);}
}
@keyframes loading-dash {
  0% { stroke-dasharray: 1 200; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90 150; stroke-dashoffset: -40px; }
  100% { stroke-dasharray: 90 150; stroke-dashoffset: -120px; }
}
</style>