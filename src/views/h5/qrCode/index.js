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