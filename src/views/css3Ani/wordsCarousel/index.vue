<template>
  <div class="rel h100vh auto pt100" style="width:375px;">
    <div class="ovh" style="height:70px;">
      <div :class="[distance === 0 ? '' : 'trans5']" :style="{transform: `translateY(-${distance}px)`}">
        <div v-for="item in textArr" :key="item.text" class="f ac xc fs50 b" :style="{height:'70px', color: item.color}">{{item.text}}</div>
        <div class="f ac xc fs50 b"  :style="{height:'70px', color: textArr[0].color}">{{textArr[0].text}}</div> <!--占位的-->
      </div>
    </div>
  </div>
</template>
<script>
import { round } from '../../../common'
export default {
  name: 'wordsCarousel',
  components: {
  },
  data(){
    return {
      textArr: [{text: '1 theater', color: '#0ecffe'}, {text: '2 gym', color:'#18e198'}, {text: '3 arcade', color: '#fa767a'}, {text: '4 artical', color: '#1890ff'}],
      distance: 0,
    }
  },
  methods: {
  },
  created(){
   setInterval(() => {
      this.distance += 70
      if((Number(round(this.distance / 70) -1))== this.textArr.length) { // 即将滚出最后一个元素的时候，将位置重置为第一个元素位置
        this.distance = 0
        setTimeout(() => {
          this.distance = 70
        }, 20)
      }
    }, 1000);
  }
}
</script>
<style scoped>
</style>
