<!--参考链接：https://juejin.cn/post/6844903938894872589-->
<!--参考链接：https://juejin.cn/post/6844904009568878600-->
<template>
  <div style="padding:80px 0px;width:350px;margin:0 auto;">
    <div class="fs26 g1890ff mb20">短时间内渲染约10000个结点</div>
    <div v-for="item in treeData" :key="item._id">
      <div class="f ac mb10" @click="item.expand = !item.expand">
        <div class="dib trans3 mr10" style="width:8px;height:8px;border-top:2px solid #999;border-right:2px solid #999;transform-origin:center center;transform:rotate(45deg);"></div>
        <div class="bgff5650" style="width:100px;">{{item.title}}</div>
      </div>
      <div v-show="item.expand">
        <div v-for="v in item.children" :key="v._id" class="mb10 pl30">
          <div class="f ac mb10" @click="v.expand = !v.expand">
            <div class="dib trans3 mr10" style="width:8px;height:8px;border-top:2px solid #999;border-right:2px solid #999;transform-origin:center center;transform:rotate(45deg);"></div>
            <div class="bg1890ff" style="width:100px;">{{v.title}}</div>
          </div>
          <div v-show="v.expand">
            <div v-for="c in v.children" :key="c._id" class="f ac mb10 pl30">
              <!-- <div class="dib trans3 mr10" style="width:8px;height:8px;border-top:2px solid #999;border-right:2px solid #999;transform-origin:center center;transform:rotate(45deg);"></div> -->
              <div class="bgc7a35d" style="width:100px;">{{c.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { repeat, guID } from "../../../common"
export default {
  name: 'tree',
  data(){
    return {
      showData: [],
      treeData: [],
      timeId: null,
    }
  },
  methods: {
    getData() { // 模拟获取数据
      const data = [{
        title: '1',
        expand: true,
        children: [
          { title: '1.1', expand: true, children: [{title: '1.1.1'},{title: '1.1.2'},{title: '1.1.3'},{title: '1.1.4'},{title: '1.1.5'},{title: '1.1.6'},{title: '1.1.7'},{title: '1.1.8'},{title: '1.1.9'}] },
          { title: '1.2', expand: true, children: [{title: '1.2.1'},{title: '1.2.2'},{title: '1.2.3'},{title: '1.2.4'},{title: '1.2.5'},{title: '1.2.6'},{title: '1.2.7'},{title: '1.2.8'},{title: '1.2.9'}] },
          { title: '1.3', expand: true, children: [{title: '1.3.1'},{title: '1.3.2'},{title: '1.3.3'},{title: '1.3.4'},{title: '1.3.5'},{title: '1.3.6'},{title: '1.3.7'},{title: '1.3.8'},{title: '1.3.9'}] },
          { title: '1.4', expand: true, children: [{title: '1.4.1'},{title: '1.4.2'},{title: '1.4.3'},{title: '1.4.4'},{title: '1.4.5'},{title: '1.4.6'},{title: '1.4.7'},{title: '1.4.8'},{title: '1.4.9'}] },
          { title: '1.5', expand: true, children: [{title: '1.5.1'},{title: '1.5.2'},{title: '1.5.3'},{title: '1.5.4'},{title: '1.5.5'},{title: '1.5.6'},{title: '1.5.7'},{title: '1.5.8'},{title: '1.5.9'}] },
          { title: '1.6', expand: true, children: [{title: '1.6.1'},{title: '1.6.2'},{title: '1.6.3'},{title: '1.6.4'},{title: '1.6.5'},{title: '1.6.6'},{title: '1.6.7'},{title: '1.6.8'},{title: '1.6.9'}] },
          { title: '1.7', expand: true, children: [{title: '1.7.1'},{title: '1.7.2'},{title: '1.7.3'},{title: '1.7.4'},{title: '1.7.5'},{title: '1.7.6'},{title: '1.7.7'},{title: '1.7.8'},{title: '1.7.9'}] },
          { title: '1.8', expand: true, children: [{title: '1.8.1'},{title: '1.8.2'},{title: '1.8.3'},{title: '1.8.4'},{title: '1.8.5'},{title: '1.8.6'},{title: '1.8.7'},{title: '1.8.8'},{title: '1.8.9'}] },
          { title: '1.9', expand: true, children: [{title: '1.9.1'},{title: '1.9.2'},{title: '1.9.3'},{title: '1.9.4'},{title: '1.9.5'},{title: '1.9.6'},{title: '1.9.7'},{title: '1.9.8'},{title: '1.9.9'}] }
        ]
      }]
      // 构造出100条这样的数据。总计约10000个结点
      this.showData = repeat(data, 100).map((item, index)=> {
        item.title = index + 1
        item._id = guID()
        item.children = item.children.map((v, i) => {
          v.title = `${item.title}.${i + 1}`
          v._id = guID()
          v.children = v.children.map((_v, _i) => {
            _v.title = `${v.title}.${_i + 1}`
            _v._id = guID()
            return _v
          })
          return v
        })
        return item
      })
      // 高性能渲染数据
      this.loop() // 此处开始，使用1、时间分片 + 2、requestAnimationFrame技术，渲染大量结点。
    },
    loop() {
      window.requestAnimationFrame(() => { // 在浏览器下次重绘之前执行这个函数，以更新下一帧动画
        // 数组分片执行，每次只渲染10条，分为10次渲染，一共100条
        // 每条约100个结点。总计每次渲染1000个结点。10次一共渲染出1万个结点
        var pipe = this.showData.splice(0, 10)
        console.log(pipe.length)
        if(pipe.length > 0){
          this.treeData = [...this.treeData, ...pipe]
          this.loop()
        }
      })
    }
  },
  created(){
    this.getData()
  },
  mounted(){
  }
}
</script>
<style>

</style>