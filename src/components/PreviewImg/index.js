import * as func from "./func.js"
/**
 * 使用方法
 *  <PreviewImg
 *    :isShow="isShow" // 是否展示预览
 *    :imgArr="[https://file.iviewui.com/images/image-demo-1.jpg, 'https://health.gagctv.com/wechat/jjzs/static/ecg.png']" // 这里传入所有需要预览的列表
 *    curImg="https://file.iviewui.com/images/image-demo-1.jpg" // 这里要传当前点击预览的图片
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
      currentImg: '',
      scale: 1,
      screenType: 0,
      rotate: 0,
    }
  },
  methods:{
    ...func,
  },
  watch: {
    curImg: {
      immediate: true, // 立即执行-------> 如果不加的话，那么页面首次加载的时候。这里的handler处理函数就不会执行的
      handler(newVal, oldVal){
        this.currentImg = newVal
      }
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}