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
    <div v-if="isShowLoadMore" id="" class="loadMore f ac xc tc">
      <svg class="rotateSvg">
        <circle cx="20" cy="20" r="10" fill="none" class="circleDash"></circle>
      </svg>
      <div class="fs16 g3">下拉加载更多...</div>
    </div>
    <div v-else class="fs16 g3 tc pt10 pb10">沒有更多了</div>
  </div>
</template>
<script>
import { repeat, query, chunk } from "../../../common"
export default {
  name: 'pageLoad',
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
    bindObserve(){
      // 观察者创建
      const observer = new IntersectionObserver(entries => {
        entries.forEach(item => {
          const { intersectionRatio, target } = item
          // console.log(item) // 这里观察数据的状态
          if(intersectionRatio > 0) {
            this.page += 1
            console.log(`下拉加载更多进入了可视区。开始加载第${this.page + 1}页数据`)
            setTimeout(() => this.getData(), 1000) // 通过演示模拟接口请求耗时
          }
        })
      }, {
        root: null, // 相对的视口元素，传入 null 则为顶级文档视口
        rootMargin: '0px 0px 0px 0px', // 触发交叉回调时被观察元素相对于视口的偏移量
        threshold: [0.0001, 0.001, 0.01, 0] // 一个具体数值或数值数组， 触发交叉回调时被观察元素的可见比例
      })
      observer.observe(query('.loadMore')) // 监听加载更多的位置
    }
  },
  created(){
    const allData = repeat([1,2,3,4,5,6,7,8,9,10], 5) // 构造出全部数据
    // console.log(allData)
    this.allList = chunk(allData, 10) // 数组分块
    this.getData()
  },
  mounted(){
    this.bindObserve()
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