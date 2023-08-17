import * as func from "./func.js"
import { query } from "@/common.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      randomColor: '#1adaa7'
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    // 传参方式4
    const box4 = query('.box4')
    const w = box4.clientWidth
    box4.style.setProperty('--w', w + 'px')
  },
}