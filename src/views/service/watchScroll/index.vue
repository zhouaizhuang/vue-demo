<template>
  <div ref="box" style="height:100vh;overflow-y:auto;" id="box" @scroll="scrollEvent">
    <div v-if="isShowBtn" style="width:7rem;" class="bgff5650 gf fs32r rds30r pt30r pb30r f ac xc fixed b30r l50 tx-50">滚动到一定位置，我就显示出来了</div>
    <div v-for="(item, index) in arr" :key="index" class="pt30r tc pb30r">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'watchScroll',
  components: {
  },
  data(){
    return {
      arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      isShowBtn: false,
    }
  },
  scrollId: null,
  methods: {
   scrollEvent () {
      // 这个就能拿到滚动出去的距离了
      let scrollTop = this.$refs.box.scrollTop  // document.getElementById(id).scrollTop   // 这个也是可以实现的
      // console.log(scrollTop)
      clearTimeout(this.scrollId)
      this.scrollId = setTimeout(() => {
        this.isShowBtn = scrollTop > 200
      }, 20)
    },
  },
  created(){
  },
}
</script>
<style>
</style>