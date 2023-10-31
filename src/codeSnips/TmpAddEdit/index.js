/**
 * 新增和编辑模板
 * <TmpAddEdit
 *   :modalType="modalType"
 *   :id="id"
 *   @setModalType="e=>{modalType=e;getList()}"
 * >
 * </TmpAddEdit>
 */
import { guID } from "@/common.js"
import UploadImgs from "@/components/UploadImgs/index.vue"
import SelectAddress from "@/components/SelectAddress/index.vue"
import * as func from "./func.js"
export default {
  name: '',
  props: {
    modalType: {
      type: [String, Number],
      default: 0, // 0:关闭弹框 1: 新增  2、编辑  3、待拓展
    },
    id: {
      type: [String, Number],
      default: '', // 传入的id值
    }
  },
  components: {
    UploadImgs,
    SelectAddress,
  },
  data(){
    return {
      formData: {
        id: '',
        account:'',
        password:'',
        name: '',
        age: '',
        inSchoolTime:[],
        avatar: [],
        provinceCode: '',
        cityCode:'',
        areaCode:'',
        address:'',
      },
      formRule: {
        account: [{required: true, message: '请填写登陆账号', trigger: 'blur'}, {max:16, message:'账号长度不得超过16位'}, {min:4, message:'账号长度不得小于4位'}],
        password: [{required: true, message: '请填写登录密码', trigger: 'blur'}],
        age:[{ required: true, message:'请输入年龄', trigger: "blur" }],
        inSchoolTime: [{ required: true, validator: (rule, value, callback) => { if(!value[0] || !value[1]) { callback('请选择在校时间') };callback()}, message: '请选择在校时间', trigger: 'blur' }],
        avatar: [{ required: true, validator: (rule, value, callback) => {if(!value.length){callback('请上传头像')}callback()}, message: '请上传头像', trigger: 'blur'}],
        address: [{ required: true, validator: (rule, value, callback) => {if(!value.length){callback('填写地址')}callback()}, message: '请填写地址', trigger: 'blur'}]
      },
      refId: guID(), // 唯一id作为ref，这样一个组件被同一个页面多次调用，生成的ref不一样就能保证，重置和校验表单，不出问题
    }
  },
  methods:{
    ...func
  },
  computed:{
    modalTitle: function(){
      return {1: `新增学生`, 2: `编辑学生`}[this.modalType] || ''
    },
    modalType_id(){
      return { modalType: this.modalType, id: this.id }
    }
  },
  watch:{
    modalType_id: function (newVal, oldVal){
      const {modalType, id} = newVal
      if(modalType <= 0) { // 关闭弹窗并且重置掉
        this.resetForm()
      } else if(modalType == 1) { // 新增
        this.add()
      } else if(modalType == 2){ // 编辑
        this.edit()
      } else if(modalType == 3) { // 待拓展
        // this.otherFunc()
      }
    }
  },
  created(){
  },
  mounted(){
  },
}