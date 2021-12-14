<!--参考文档： https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html-->
<!--懒加载实现方式1：监听滚动，然后调用getBoundingClientRect获取元素是否出现在视口中。从而决定是否需要渲染 -->
<!--懒加载实现方式2：IntersectionObserver监听元素是否出现在视口，在视口则设置src让其显示 -->
<template>
  <div class="abs t0 b0 l50 tx-50 ovya" style="width:375px;">
    <!--备注：下面这个方式，是进入视口开始加载。存在的优化空间，src设置个默认图片，这样不会出现图片裂开的默认效果-->
    <img class="mb50 lazyLoadClass" style="width:100%;height:200px;" v-for="(item, index) in list" :key="item.id" :src="index < 4 ? item.src : ''" :data-src="item.src" alt="" />
  </div>
</template>
<script>
import { queryAll } from "../../../common"
export default {
  name: 'lazyLoadImg',
  data(){
    return {
      list: [
        {src: 'https://upload.qianfanyun.com/yjyn/ylyn_liveInLC.png'}, {src: 'https://upload.qianfanyun.com/yjyn/ylyn_top_index_text.png'},
        {src: 'https://upload.qianfanyun.com/yjyn/ylyn_liveInLC.png'}, {src: 'https://upload.qianfanyun.com/yjyn/ylyn_top_index_text.png'},
        {src: 'https://upload.qianfanyun.com/yjyn/ylyn_liveInLC.png'}, {src: 'https://upload.qianfanyun.com/yjyn/ylyn_top_index_text.png'},
        {src: 'https://upload.qianfanyun.com/yjyn/ylyn_liveInLC.png'}, {src: 'https://upload.qianfanyun.com/yjyn/ylyn_top_index_text.png'},
        {src: 'https://upload.qianfanyun.com/yjyn/ylyn_liveInLC.png'}, {src: 'https://upload.qianfanyun.com/yjyn/ylyn_top_index_text.png'},
        {src: 'https://upload.qianfanyun.com/yjyn/ylyn_liveInLC.png'}, {src: 'https://upload.qianfanyun.com/yjyn/ylyn_love.png'},
        {src: 'https://upload.qianfanyun.com/yjyn/ylyn_liveInLC.png'}, {src: 'https://upload.qianfanyun.com/yjyn/ylyn_help.png'},
      ]
    }
  },
  methods: {
    bindObserve(){
      // 创建观察者
      const observer = new IntersectionObserver(entries => {
        entries.forEach(item => {
          const { intersectionRatio, target } = item
          // console.log(item) // 这里观察数据的状态
          if(intersectionRatio > 0) {
            console.log('进入可视区加载url:' + target.dataset.src)
            item.target.src = target.dataset.src // 将正确的src赋值到src属性
            observer.unobserve(target) // 取消监听
          }
        })
      }, {
        root: null, // 相对的视口元素，传入 null 则为顶级文档视口
        rootMargin: '0px 0px 0px 0px', // 触发交叉回调时被观察元素相对于视口的偏移量
        threshold: [0.0001, 0.001, 0.01, 0] // 一个具体数值或数值数组， 触发交叉回调时被观察元素的可见比例
      })
      queryAll('.lazyLoadClass').forEach(v => observer.observe(v)) // 对每一张图片设置监听
    }
  },
  created(){
  },
  mounted(){
    this.bindObserve() // 这里需要对dom进行操作。因此这个函数必须放在mounted生命周期钩子中
  }
}
</script>
<style>
</style>