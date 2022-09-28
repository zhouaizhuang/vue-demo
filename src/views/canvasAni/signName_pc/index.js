import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      cvs:{},
      ctx: {},
      isDownin: false,
      lastX:0,
      lastY: 0,
      cacheData: [],
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.initDraw()
  },
}