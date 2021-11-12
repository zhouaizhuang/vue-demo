
<!--参考链接https://juejin.cn/post/7013378544373858318-->
<!--备注：如果弹框内部不需要继续滚动，可以直接简单粗暴的在弹出最外层容器，使用@touchmove.prevent阻止滚动事件，可参考滤镜毛玻璃弹框实现-->
<template>
  <div>
    <div class="auto  ovya rel" style="width:350px;padding-bottom:100px;">
      <div class="pt30 pb30 f ac xc">1</div>
      <div class="pt30 pb30 f ac xc">2</div>
      <div class="pt30 pb30 f ac xc">3</div>
      <div class="pt30 pb30 f ac xc">4</div>
      <div class="pt30 pb30 f ac xc">5</div>
      <div @click="openModal" class="w50 auto pt10 pb10 rds10 bg1890ff f ac xc fs24r gf">点击出现弹窗</div>
      <div class="pt30 pb30 f ac xc">6</div>
      <div class="pt30 pb30 f ac xc">7</div>
      <div class="pt30 pb30 f ac xc">8</div>
      <div class="pt30 pb30 f ac xc">9</div>
      <div class="pt30 pb30 f ac xc">10</div>
      <div class="pt30 pb30 f ac xc">11</div>
      <div v-if="isShowModal" @click="closeModal" class="fixed trbl0 zx100 rgba6">
        <div class="abs t30 l50 tx-50 fs24 bgf pl30 pr30 pt30 pb30 rds10">asd</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'specialFont',
  data(){
    return {
      isShowModal: false,
    }
  },
  methods:{
    openModal(){
      this.isShowModal = true
      this.lockBody()
    },
    closeModal(){
      this.isShowModal = false
      this.resetBody()
    },
    lockBody() {
      const { body } = document
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      body.style.position = 'fixed'
      body.style.width = '100%'
      body.style.top = `-${scrollTop}px`
    },
    resetBody() {
      const { body } = document
      const { top } = body.style
      body.style.position = ''
      body.style.width = ''
      body.style.top = ''
      document.body.scrollTop = -parseInt(top, 10)
      document.documentElement.scrollTop = -parseInt(top, 10)
    },
  },
  created(){
   
  },
  beforeDestroy(){
    this.resetBody()
  }
}
</script>
<style>
  
</style>