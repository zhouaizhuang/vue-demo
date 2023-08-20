import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      ctx: null,
      width: 0,
      height: 0,
      columnWidth: 20,
      columnCount: 0,
      columnNextIndexes: []
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.init()
    setInterval(this.draw, 40)
  },
}