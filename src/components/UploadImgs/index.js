/**
 * 使用方法
 * <UploadImgs
 *  :maxSize="2*1024*1024"
 *  :width="800"
 *  :height="800"
 *  :limit="5"
 *  :imgArr="[
 *      {
 *        id: guID(),
 *        url: "http://192.168.10.11:48079/admin-api/infra/file/4/get/8860eb1645edf0af3f42cc8a923813e1035f1ef55a57a180261ee3d4ca02c516.png",
 *      }
 *  ]"
 *  @setImgArr="e => imgArr = e"
 * >
 * </UploadImgs>
 */
import { startWith, guID } from "@/common.js"
import PreviewImgs from "@/components/PreviewImgs/index.vue"
import * as func from "./func.js"
import * as tools from "./tools.js"
import ClipImg from "../ClipImg/index.vue"
export default {
  name: 'UploadImgs',
  props: {
    imgArr: {type: Array, default: function(){ return [] } },
    maxSize: { type: Number, default: 2*1024*1024 },
    width: { type: Number, default: 80 },
    height: { type: Number, default: 80 },
    limit: { type: Number, default: 1 },
    format: { type: Array, default: function () { return ['jpg', 'jpeg', 'png'] } },
    fileType: { type: [Number, String], default: function(){ return 0 } }, // 0图片 1视频
    errmsg: { type: String, default: ''},
    isShowEdit: {type: Boolean, default: false },
  },
  components:{
    PreviewImgs,
    ClipImg
  },
  data(){
    return {
      imgList: [], // 上传的图片的数组
      curIndex:-1, // 当前所在的位置
      isShowPreview: false, // 是否显示预览图片
      curImg: '', // 需要预览的图片地址
      previewArr: [],
      refId: guID(),
      curItem: {},
      isShowClip: false,
    }
  },
  methods:{
    ...tools,
    ...func,
  },
  watch: {
    imgArr: {
      handler: function(newVal, oldVal){
        // console.log(newVal)
        const temp = newVal.filter(Boolean)
        if(temp.some(v => startWith(v.url || '', 'http'))) {
          this.imgList = this.imgArr
          this.previewArr = this.imgList.map(v => v.url)
        } else if(temp.length == 0) { // 代表是新增。
          this.imgList = []
        }
      },
      immediate: true,
      deep: true
    }
  },
  created(){
  },
  mounted(){
    
  },
}