import { wait, addZero } from "@/common.js"
import * as func from "./func.js"
export default {
  name: '',
  props: {
    num: {
      type: [String, Number],
      default: 3,
    }
  },
  components:{},
  data(){
    return {
      showAnimate: false,
      oldVal: '',
      newVal: '',
    }
  },
  methods:{
    ...func,
  },
  watch: {
    num: {
      handler: async function(newVal, oldVal) {
        this.oldVal = oldVal
        this.newVal = newVal
        this.showAnimate = true
        await wait(400)
        this.oldVal = newVal
        this.newVal = addZero(Number(newVal) + 1, 2)
        this.showAnimate = false
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