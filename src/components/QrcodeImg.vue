<template>
  <div>
    <div id="qrcode" ref="qrcode"></div>
    <div class="tc mt30">
      <Button type="primary" @click="saveImg">下载二维码</Button>
    </div>
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
    },
    fileName: {
      type: String,
      default: "qrcode"
    }
  },
  components:{
  },
  data(){
    return {
    }
  },
  methods:{
    // 下载图片
    saveImg(){
      const fileName = this.fileName
      const img = document.getElementById('qrcode').getElementsByTagName('img')[0].src || ''
      let aLink = document.createElement('a')
      let blob = this.base64ToBlob(img)
      let evt = document.createEvent('HTMLEvents')
      evt.initEvent('click', true, true) // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
      aLink.download = fileName
      aLink.href = URL.createObjectURL(blob)
      aLink.click()
    },
    base64ToBlob(code) {
      let parts = code.split(';base64,')
      let contentType = parts[0].split(':')[1]
      let raw = window.atob(parts[1])
      let rawLength = raw.length
      let uInt8Array = new Uint8Array(rawLength)
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }
      return new Blob([uInt8Array], { type: contentType })
    },
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