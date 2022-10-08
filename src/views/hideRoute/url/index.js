import * as func from "./func.js"
import { getLocalStorage } from "../../../common.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      clickTimes: 0, // 是否显示当前页
      isShowPage: false,
    }
  },
  methods:{
    ...func,
  },
  created(){
    this.isShowPage = getLocalStorage('isShowPage') || false
  },
  mounted(){
    
  },
}