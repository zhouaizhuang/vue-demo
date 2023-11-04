/**
 * 使用方法
  <TmpSplit :left="0.7" :top="0">   // left: 分割线的位置。传入0.7代表，左侧部分占用盒子总宽度的70%，右侧占用剩下的30%。     
    <template #left>
      <div>左边面板</div>
    </template>
    <template #right>
      <div>右边面板</div>
    </template>
  </TmpSplit>
*/
import * as func from "./func.js"
export default {
  name: '',
  props: {
    left: {  /** 取值范围0~1, 对应的左侧盒子的占比从0% ~ 100% */
      type: [String, Number],
      default: 0,
    },
    top: { /** 盒子距离顶部的距离，默认0px */
      type: [String, Number], 
      default: 0,
    },
  },
  components:{},
  data(){
    return {
      lastX:0, // 鼠标最后所在位置
      dragX: 0, // 鼠标拖动距离
      dragBox: {
        width:0,
        height:0,
        left:0,
        right:0,
        bottom:0,
        top:0,
      },
    }
  },
  methods:{
    ...func,
  },
  watch: {
    left: {
      handler: function(newVal, oldVal) {
        // console.log(newVal)
        this.dragX = 0
      },
      deep: true, // 监听深层对象
      immediate: true, // 会在页 
    }
  },
  created(){
    window.onresize = async () =>{
      clearTimeout(this.timer)
      this.timer = setTimeout(() => this.calcDefaultLeft(), 600)
    }
  },
  mounted(){
    this.calcDefaultLeft()
  },
}