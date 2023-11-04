/**
 * 使用方法
 * <UploadFiles
 *  :maxSize="2*1024*1024"
 *  :limit="5"
 *  :fileArr="[
 *      {
 *        id: guID(),
 *        url: "http://192.168.10.11:48079/admin-api/infra/file/4/get/8860eb1645edf0af3f42cc8a923813e1035f1ef55a57a180261ee3d4ca02c516.png",
 *      }
 *  ]"
 *  @setFileArr="e => fileArr = e"
 * >
 * </UploadFiles>
 */
import * as func from "./func.js"
import { startWith, guID } from "@/common.js"
export default {
  name: 'uploadFile',
  props: {
    fileArr: {type: Array, default: function(){ return [] } },
    maxSize: { type: Number, default: 20*1024*1024 },
    limit: { type: Number, default: 1 },
    errmsg: { type: String, default: ''},
    modalType: { type: Number, default: 0 } // 0: 默认值   1：打印   2：列表中表单预览   3：编辑钟预览   4：随访详情页的表单默认禁用
  },
  components:{},
  data(){
    return {
      fileList: [], // 上传的图片的数组
      refId: guID()
    }
  },
  methods:{
    ...func,
  },
  watch: {
    fileArr: {
      handler: function(newVal, oldVal){
        console.log(newVal)
        const temp = newVal.filter(Boolean)
        if(temp.some(v => startWith(v.url || '', 'http'))) {
          this.fileList = this.fileArr
        } else if(temp.length == 0) { // 代表是新增。
          this.fileList = []
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