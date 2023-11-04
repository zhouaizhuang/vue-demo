import { wait } from "@/common.js"
import * as func from "./func.js"
/**
 * 使用方法
 *  import PreviewImg from "@/components/PreviewImg/index.vue"
 *  <PreviewImg
 *    :isShow="isShow" // 是否显示预览组价
 *    @setIsShow="e => isShow = e" // 固定写法，用来关闭预览组件的方法
 *    curImg="https://file.iviewui.com/images/image-demo-1.jpg" // 当前点击预览的图片链接，应该是一个变量，点击某一张图片的话，就赋值过去
 *    @setCurImg="e => curImg = e" // 用于设置当前选择的图片
 *    :imgArr="['https://file.iviewui.com/images/image-demo-1.jpg', 'https://health.gagctv.com/wechat/jjzs/static/ecg.png']" // 这里传入所有需要预览的图片链接。 如果不传就只预览一张
 *  >
 *  </PreviewImg>
 */
export default {
  name: '',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    imgArr: {
      type: Array,
      default: function (){
        return []
      },
    },
    curImg: {
      type: String,
      default: '',
    },
  },
  components:{},
  data(){
    return {
      scale: 1, // 缩放系数
      screenType: 0, // 是否全屏
      rotate: 0, // 旋转角度
    }
  },
  methods:{
    ...func,
  },
  watch: {
    isShow: {
      async handler(newVal, oldVal){
        if(newVal) {
          if(this.imgArr.length === 0) {
            // console.error('预览数组不能为空')
          }
        } else {
          await wait(500)
          this.scale = 1 // 缩放系数
          this.screenType = 0 // 是否全屏
          this.rotate = 0 // 旋转角度
        }
      }
    }
  },
  created(){
    // 监听键盘左右键
    // _.listenKey(this, {
    //   ArrowLeft: function() {
    //     this.isShow && this.prev()
    //   },
    //   ArrowRight: () => {
    //     this.isShow && this.next()
    //   },
    // })
  },
  mounted(){
    
  },
  beforeDestory(){
    // _.cancelListenKey()
  }
}