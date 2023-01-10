import * as func from "./func.js"
/**
 * 使用方法
 *  <PreviewImg
 *    :isShow="isShow" // 是否显示预览组价
 *    @setIsShow="e => isShow = e" // 固定写法，用来关闭预览组件的方法
 *    curImg="https://file.iviewui.com/images/image-demo-1.jpg" // 当前点击预览的图片链接
 *    :imgArr="[https://file.iviewui.com/images/image-demo-1.jpg, 'https://health.gagctv.com/wechat/jjzs/static/ecg.png']" // 这里传入所有需要预览的图片链接。 如果不传就只预览一张
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
      currentImg: '', // 当前正在预览的图片
      scale: 1, // 缩放系数
      screenType: 0, // 是否全屏
      rotate: 0, // 旋转角度
    }
  },
  methods:{
    ...func,
  },
  watch: {
    curImg: {
      immediate: true, // 立即执行-------> 如果不加的话，那么页面首次加载的时候。这里的handler处理函数就不会执行的
      handler(newVal, oldVal){
        this.currentImg = newVal || this.imgArr[0]
      }
    },
    isShow: {
      handler(newVal, oldVal){
        if(newVal) {
          if(this.imgArr.length === 0) {
            console.error('预览数组不能为空')
          }
        }
      }
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}