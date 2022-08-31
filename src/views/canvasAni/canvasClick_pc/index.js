import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      circles:[],
      canvas: '',
      context:'',
      previousSelectedCircle: {},
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.canvas = this.$refs.canvas
    this.context = this.canvas.getContext("2d")
    this.canvas.onmousedown = this.canvasClick
  },
}