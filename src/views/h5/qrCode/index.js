/**
 * 注意：二维码必须清晰，且为大点的图片，否则可能识别不了。正常是能完美使用的
 */
import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      isShowQrCode: false, // 是否显示扫码
      serviceCode: '',
      videoId: null,
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.getCameras()
  },
}