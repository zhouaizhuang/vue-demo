import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      circles: [], // 保存画布上所有的圆圈
      canvas: '',
      context:'',
      previousSelectedCircle: {}, //当前选中的圆圈
    }
  },
  methods:{
    ...func,
  },
  created(){
  },
  mounted(){
    this.canvas = this.$refs.canvas
    this.context = this.canvas.getContext("2d");
    this.canvas.onmousemove = this.onMouseMove
  },
}