<template>
  <div class="mh100vh">
    <div class="hideText">
      这里是一大段文字信息，下面需要将最后的文字逐渐隐藏。逐渐隐藏...逐渐隐藏...
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
  },
  created(){
    
  },
  mounted(){
    
  },
}
</script>
<style scoped>
.hideText {
	margin: auto;
	width: 240px;
	line-height: 36px;
	font-size: 20px;
	-webkit-mask:linear-gradient(270deg, transparent, transparent 30%, #000),
	linear-gradient(270deg, #000, #000);
	-webkit-mask-size: 100% 66px, 100% calc(100% - 46px);
	-webkit-mask-position: bottom, top;
	-webkit-mask-repeat: no-repeat;
}
</style>