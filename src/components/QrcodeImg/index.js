import QRCode from "qrcodejs2"
import * as func from "./func.js"
/**
 * 组件使用方法
  <QRcodeImg
    :content="test"  // 二维码需要展示的内容
    width="200"      // 二维码宽度
    height="200"     // 二维码高度
    fileName="xxx.png"     // 二维码下载生成的文件的名字
  >
  </QRcodeImg>
 * 
 */
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
      qrcodeRef: ''
    }
  },
  methods:{
   ...func
  },
  watch: {
    content: {   //深度监听，需要用对象， 使用handler属性传入函数
      handler: function(newVal, oldVal) {
        if(!this.$refs.qrcode) { return false }
        this.qrcodeRef = new QRCode(this.$refs.qrcode, {      
          text: this.content,  // 二维码内容 url填后台给的链接    
          width:this.width,//控制二维码高度      
          height: this.height,//控制二维码宽度     
          colorDark:"#000000",//控制二维码前景色     
          colorLight:"#ffffff",//控制二维码背景色=         
          correctLevel: QRCode.CorrectLevel.H//设置二维码容错率   
        });  
      },
      deep:true,
      immediate: true, // 会在页面渲染之前， 先执行一遍这个监听
    }
  },
  created(){
    
  },
  mounted(){
   
  },
}