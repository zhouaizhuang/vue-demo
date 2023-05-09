import * as func from "./func.js"
export default {
  name: '',
  props: {
    rightObj: {
      type: Object, // 数据类型
      default: {
        x:0,
        y:0,
        isShow: false,
        item: {},
      }
    }
  },
  components:{},
  data(){
    return {
  
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