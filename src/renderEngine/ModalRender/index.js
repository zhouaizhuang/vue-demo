/**
 * 
  <ModalRender :modalObj="modalObj" @setModalObj="e => modalObj = e" @changeModal="e => changeModal(e)">
    <div class="" style="background:skyblue;">顶部</div>
    <div style="width:1000px;">我是内容</div>
    <div class="" style="background:pink;height:100px">底部</div>  
  </ModalRender>
  =================数据=========================
  modalObj: {
    isShow: true, // *必要参数modal弹框是否显示
    type: '', // 弹框类型，用于区分编辑、新增、查看等多种状态
    style:'width:1000px;', // 弹框盒子的样式
    header: { // 顶部模块
      isShow: true, // 是否显示顶部
      title: '导入数据',  // 标题
      isShowClose: true, // 是否显示顶部右侧叉号
      close: () => {console.log('点击了叉号')} // 点击顶部右侧叉号触发 
    },
    footer: { // 底部模块
      isShow: true, // 是否显示底部
      isShowClose: true, // 显示关闭按钮
      close: () => {console.log('点击了关闭')}, // 点击关闭触发
      isShowCancel: true, // 显示取消按钮
      cancel: () => {console.log('点击了取消')}, // 点击取消触发
      isShowConfirm: true, // 显示确定按钮
      confirm: () => {console.log('点击了确定')}, // 点击确定触发
    },
    import: { // 导入模块
      isShow: true, // 是否显示导入模块
      style:'', // 导入弹框的样式
      fileName: '批量导入患者模板.xlsx', // 下载的导入模板的名称
      templateUrl: '/admin-api/diag/maintenance/getImportPatientExcel', // 下载的导入模板的接口地址
      failFileName: '导入失败的患者名单.xlsx',
      importUrl: '/admin-api/diag/maintenance/importPatient', // 导入模板的接口地址
    }
  }
*/
import * as func from "./func.js"
export default {
  name: '',
  props: {
    modalObj: {
      type: Object,
      default: () => ({})
    }
  },
  components:{
    ImportExcel: () =>  import('./components/ImportExcel/index.vue')
  },
  data(){
    return {
      zIndex: 10,
      importModalType: 1,
    }
  },
  methods:{
    ...func,
  },
  watch: {
    "modalObj.isShow": {
      handler: function(newVal, oldVal) {
        this.zIndex = newVal ? String(new Date().getTime()).slice(-4, -1) : -1
        this.$emit('changeModalObj', this.modalObj)
      },
      deep: true, // 监听深层对象
      immediate: false, // 立即执行 
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}