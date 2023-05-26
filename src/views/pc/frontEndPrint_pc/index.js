import * as func from "./func.js"
import HaiNan from "./template/HaiNan/index.vue"
export default {
  name: '',
  components:{
    HaiNan
  },
  data(){
    return {
      A4Width: 794, // A4纸宽度
      A4Height: 1120,// A4纸高度
      renderData: { // 模拟从后台拿到的数据
        width: 65,
        height: 173,
      },
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    
  },
}