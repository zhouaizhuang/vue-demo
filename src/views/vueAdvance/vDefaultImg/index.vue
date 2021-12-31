
<template>
  <div class="auto fs20r">
    <!--图片没加载出来之前，先显示一个颜色块-->
    <img v-for="(item, index) in imgArr" :key="index" v-defaultImg="[item, 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png']" style="width:300px;height:50px;background-size:100% 100%;" class="db auto mb50r img-fill">
  </div>
</template>
<script>
export default {
  name: 'vLazyLoad',
  data(){
    return {
      imgArr: [
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_design_bnt.png', 'https://upload.qianfanyun.com/jj_design_bnt.png','https://upload.qianfanyun.com/jj_design_bnt.png',
        'https://upload.qianfanyun.com/jj_case_03_01.png', 'https://upload.qianfanyun.com/jj_case_01.png','https://upload.qianfanyun.com/jj_design_bnt.png',
      ]
    }
  },
  methods:{
    
  },
  created(){
  }
}
</script>
<style scoped>

</style>