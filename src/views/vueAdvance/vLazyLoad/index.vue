
<template>
  <div class="auto fs20r">
    <!--如果传入默认图片-->
    <!-- <img v-for="(item, index) in imgArr" :key="index" v-lazyLoad="[item, 'https://upload.qianfanyun.com/jj_design_check.png']" style="width:300px;height:50px;" class="db auto mb50r"> -->
    <!--如果不传入默认图片-->
    <img v-for="(item, index) in imgArr" :key="index" v-lazyLoad="item" style="width:300px;height:50px;" class="db auto mb50r">
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