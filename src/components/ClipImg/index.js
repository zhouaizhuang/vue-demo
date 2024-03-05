// github文档地址：https://gitee.com/yxl-qwe/vue-cropper#%E4%BA%8C%E6%96%87%E6%A1%A3
/* 
<ClipImg
  :isShow="isShowClip"
  @setIsShow="e => isShowClip = e"
  :item="curItem"
  @setItem="e => curItem = e"
  :width="width"
  :height="height"
>
</ClipImg> 
*/
import * as func from "./func.js"
import { VueCropper } from 'vue-cropper'
export default {
  name: '',
  props: {
    isShow: { // 是否显示裁剪弹框
      type: Boolean,
      default: false
    },
    item: { // 当前图片对象
      type: Object,
      default: () => ({}) // 例如{id: 'zasdxasd', url: 'hhtps://xxxxx.png'}
    },
    width: { // 图片宽度，单位px
      type: [Number, String],
      default: 100
    },
    height: { // 图片高度，单位px
      type: [Number, String],
      default: 100
    }
  },
  components:{
    VueCropper
  },
  data(){
    return {
      modalObj: {
        isShow: true, // *必要参数modal弹框是否显示
        type: '', // 弹框类型，用于区分编辑、新增、查看等多种状态
        style:'width:1000px;', // 弹框盒子的样式
        header: { // 顶部模块
          isShow: true, // 是否显示顶部
          title: '裁剪图片',  // 标题
          isShowClose: true, // 是否显示顶部右侧叉号
          close: () => {console.log('点击了叉号')} // 点击顶部右侧叉号触发 
        },
        footer: { // 底部模块
          isShow: true, // 是否显示底部
          isShowCancel: true, // 显示取消按钮
          cancel: () => {this.removeImg()}, // 点击取消触发
          isShowConfirm: true, // 显示确定按钮
          confirm: () => {this.uploadImg()}, // 点击确定触发
        },
      },
      previews: {},
      fileObj:{fileName:'',fileType:''},
      option: {
        img: '', //裁剪图片的地址
        outputSize: 1, //裁剪生成图片的质量(可选0.1 - 1)
        outputType: 'png', //裁剪生成图片的格式（jpeg || png || webp）
        info: true, //图片大小信息
        canScale: true, //图片是否允许滚轮缩放
        autoCrop: true, //是否默认生成截图框
        autoCropWidth: 300, //默认生成截图框宽度
        autoCropHeight: 300, //默认生成截图框高度
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [1, 1], //截图框的[宽, 高]比例
        full: false, //false按原比例裁切图片，不失真
        fixedBox: false, //固定截图框大小，不允许改变
        canMove: false, //上传图片是否可以移动
        canMoveBox: true, //截图框能否拖动
        original: false, //上传图片按照原始比例渲染
        centerBox: false, //截图框是否被限制在图片里面
        height: true, //是否按照设备的dpr 输出等比例图片
        infoTrue: true, //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 3000, //限制图片最大宽度和高度
        enlarge: 1, //图片根据截图框输出比例倍数
        mode: 'auto' //图片默认渲染方式
      }
    }
  },
  methods:{
    ...func,
  },
  computed:{
    cmptVals: function(){
      return {width: this.width, height: this.height}
    },
    cmptItem_isShow:  function(){
      return {isShow: this.isShow, item: this.item}
    },
  },
  watch: {
    cmptItem_isShow: {
      async handler(newVal, oldVal) {
        const {isShow, item} = newVal
        this.option.img= item.url
        this.modalObj.isShow = isShow && item.url
      },
      deep: true,
      immediate: true,
    },
    cmptVals: {
      async handler(newVal, oldVal) {
        const {width, height} = newVal
        this.option.fixedNumber = [width, height]
      },
      deep: true,
      immediate: true,
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}