// 对条形码图片质量要求很高，长条形码需要将图片放大扫描，否则误码率高。容易识别不出来
import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      isShowBarCode: false, // 是否显示一维码扫描弹窗
      serviceCode: '',
      deviceCode: '',
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.init()
  },
}