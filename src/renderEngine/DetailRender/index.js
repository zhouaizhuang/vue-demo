// 详情渲染引擎
//  <DetailRender :detailList="detailList"></DetailRender>
//  数据格式
//  detailList:[
//    {label: '机构名称', key:'organizationName', value:'', _value:'', style:'width:30%;', labelStyle: '', valueStyle:'', range:'', unit:'', isShow: true, _isShow: true, id:_.guID()},
//    {label: '机构电话', key:'organizationPhone', value:'', _value:'', style:'width:70%;', labelStyle: '', valueStyle:'',  range: '', unit:'', isShow: true, _isShow: true, id:_.guID()},
//    {label: '联系人', key:'name',  value:'', _value:'', style:'width:30%;',labelStyle: '', valueStyle:'', range: '', unit:'', isShow: true, _isShow: true, id:_.guID() },
//    {label: '联系电话', /* slot: 'phone', */ key:'phone', value:'', _value:'', style:'width:30%;', labelStyle: '', valueStyle:'', range: '', unit:'', isShow: true, _isShow: true, id:_.guID()},
//    {label: '机构地址', key:'address', value:'', _value:'', style:'width:30%;', labelStyle: '', valueStyle:'', range: '', unit:'', isShow: true, _isShow: true, id:_.guID()},
//    {label: '机构特色', key:'organizationFamous',  value:'', _value:'', style:'width:100%;', labelStyle: '', valueStyle:'', range: '', unit:'', isShow: true, _isShow: true, id:_.guID()},
//    {label: '机构介绍', key:'organizationIntroduce', value:'', _value:'', style:'width:100%;', labelStyle: '', valueStyle:'', range: '', unit:'', isShow: true, _isShow: true, id:_.guID()},
//    {label: '机构照片', /*slot: 'organizationPhotos', */key:'organizationPhotos', value: [],  _value: [], style:'width:100%;', labelStyle: '', valueStyle:'' , range: '', unit:'', isShow: true, _isShow: true, id:_.guID()},
//    {label: '有效时间', key:'expirationTime', value:'',  _value:'', style:'width:100%;',  labelStyle: '', valueStyle:'', range: '', unit:'', isShow: true, _isShow: true, id:_.guID()}
// ],
// 备注： isShow控制表单是否显示   _isShow是表单初始化的显示状态   label是表单名    key字段   value字段值  _value字段初始值   placeholder:提示   options下拉选项
import * as func from "./func.js"
export default {
  name: '',
  props: {
    detailList: {
      type: Array,
      default: () => []
    },
  },
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
    ...func,
  },
  watch:{
  },
  created(){
    
  },
  mounted(){
    
  },
}