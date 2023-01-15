/**
 * 使用方法
 * <UploadImgs
 *  :max_size="2*1024*1024"
 *  :width="800"
 *  :height="800"
 *  :limit="5"
 *  :imgArr="[{url: 'https://xxxxx.png', id: guID(), pathName: 'upload/image/2023/01/09/2be0e5f27865492b99a9f4438b17230b.png'}]"
 *  @change="e => imgArr = e"
 * >
 * </UploadImgs>
 */
import { startWith } from "@/common.js"
import PreviewImg from "@/components/PreviewImg/index.vue"
import * as func from "./func.js"
export default {
  name: 'UploadImgs',
  props: {
    imgArr: {type: Array, default: function(){ return [] } },
    max_size: { type: Number, default: 2*1024*1024 },
    width: { type: Number, default: 80 },
    height: { type: Number, default: 80 },
    limit: { type: Number, default: 1 },
    format: { type: Array, default: function () { return ['jpg', 'jpeg', 'png'] } },
    fileType: { type: [Number, String], default: function(){ return 0 } }, // 0图片 1视频
  },
  components:{
    PreviewImg
  },
  data(){
    return {
      imgList: [], // 上传的图片的数组
      curIndex:-1, // 当前所在的位置
      isShowPreview: false, // 是否显示预览图片
      curImg: '', // 需要预览的图片地址
      previewArr: [],
    }
  },
  methods:{
    ...func,
  },
  watch: {
    imgArr: {
      handler: function(newVal, oldVal){
        if(newVal.some(v => startWith(v.url || '', 'http'))) {
          this.imgList = this.imgArr
          console.log(this.imgList)
          this.previewArr = this.imgList.map(v => v.url)
        } else if(newVal.length == 0) { // 代表是新增。
          this.imgList = []
        }
      },
      immediate: true,
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}