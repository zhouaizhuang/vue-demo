<template>
  <div>
    <div ref="qrcode"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2"
export default {
  name: 'qrcode',
  props: {
    content: {
      type: String,
      default: 'test'
    },
    width:{
      type: String,
      default: "100"
    },
    height: {
      type: String,
      default: "100"
    }
  },
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
    var qrcode = new QRCode(this.$refs.qrcode, {      
      text: this.content,  // 二维码内容 url填后台给的链接    
      width:this.width,//控制二维码高度      
      height: this.height,//控制二维码宽度     
      colorDark:"#000000",//控制二维码前景色     
      colorLight:"#ffffff",//控制二维码背景色=         
      correctLevel: QRCode.CorrectLevel.H//设置二维码容错率   
    });  
  },
}
</script>
<style scoped>
</style>