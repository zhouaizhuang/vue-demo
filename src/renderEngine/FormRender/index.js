/**
  <FormRender 
    :formList="formList"  ------->   JSON数组生成表单
    @setFormList="e => formList = e"
    @changeForm="e => changeForm(e)"    -------> 用户填写表单会触发这个函数。可以用来做一些复杂的表单联动
  >
    <template #spread="{row}">  -------> 这里是spread的具名插槽
      {{row.id}}
    </template>
  </FormRender>
  =================================参数具体说明===================================================
 */
// formList: [
//    // 公共组件  
//    {type:'blank', label:'占位符', /*slot: 'spread',  */ key:'speciForm', value:'', _value:'', require: false, class:'w100', style:"", labelClass:'poi', labelStyle:'color:#1aada7', valueClass:'',valueStyle:'',placeholder: '', disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top', id: _.guID()},
//    {type:'input', label:'输入框',key:'age', placeholder: '请输入年龄', value:'', _value:'', require: false, class:'w100', style:"", labelClass:'', labelStyle: '', valueClass:'',valueStyle:'',disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top',id: _.guID()},
//    {type:'radio', label:'单选',key:'gender', placeholder: '请选择性别', value:'', _value:'', require: false, class:'w100', style:"", labelClass:'', labelStyle: '', valueClass:'',valueStyle:'',options: [{name:'男', value:'1'},{name:'女', value:'2'}], disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top', id: _.guID()},
//    {type:'select', label:'下拉',key:'nation', placeholder: '请选择患者来源', value: '', _value: '', require: false, class:'w100', style:"", labelClass:'', labelStyle:'', valueClass:'',valueStyle:'',options: [{name:'亲友推荐', value:'1'}], disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top', id: _.guID()},
//    {type:'textarea', label:'富文本',key:'remark', placeholder: '请输入备注', value: '', _value: '', require: false, class:'w100', style:"", labelClass:'', labelStyle:'', valueClass:'',valueStyle:'',disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top',id: _.guID()},
//    {type:'dash', label:'虚线', key:'', value:'', _value:'', require: true, class:'', style:"width:100%;", labelClass:'',labelStyle: '', valueClass:'', valueStyle:'',placeholder: '', disabled: false, errmsg:'',isShow: true, _isShow: true, position:'top',  id: _.guID()},
//    {type:'text', label:'纯文本', key:'', value:'', _value:'', require: true, class:'', style:"width:100%;", labelClass:'',labelStyle: '', valueClass:'', valueStyle:'',placeholder: '', disabled: false, errmsg:'',isShow: true, _isShow: true, position:'top',  id: _.guID()},
//    // 自定义组件
//    {type:'patientSearch', label: '患者姓名',key:'patientName', placeholder: '患者姓名/手机号后4位/证件号/病案号', value:'', _value:'', require: true, class:'w100', style:"", labelClass:'', labelStyle: '', valueClass:'',valueStyle:'',disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top', id: _.guID()},
//    {type:'idCard', label:'证件类型',key:'idType', placeholder: '患者姓名/手机号后4位/证件号/病案号', value: {idType: '1', idCard:''}, _value: {idType: '', idCard:''}, require: true, class:'w100', style:"", labelClass:'', labelStyle: '', valueClass:'',valueStyle:'', disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top',id: _.guID()},
//    {type:'date', label:'出生日期(自动填充)',key:'birthDay', placeholder: '请选择出生日期',  value:'', _value:'', require: false, class:'w100', style:"", labelClass:'', labelStyle: '', valueClass:'',valueStyle:'',disabled: true, errmsg:'', isShow: true, _isShow: true, position:'top', id: _.guID()},
//    {type:'address', label:'住址',key:'address', placeholder: '请选择省', isShowStreet: true, value: {provinceCode:'', cityCode:'', areaCode:'', streetCode: '', address:'' }, _value: {provinceCode:'', cityCode:'', areaCode:'', streetCode: '', address:'' }, require: false, class:'w100', style:"", labelClass:'', labelStyle: '', valueClass:'',valueStyle:'', disabled: false, errmsg:'', isShow: true, _isShow: true, position:'top',id: _.guID()},
//    {type:'tag', label:'标签',key:'tagIds', value:[{id: 349, name:"高血压", isChecked: true}], _value: [], require: true, position:'top',class:'w100', style:"", labelClass:'', labelStyle:'', valueClass:'',valueStyle:'',placeholder: '', disabled: false, errmsg:'', isShow: true, _isShow: true, id: _.guID()},
//  ]
import * as func from "./func.js"
import CusBlank from "./components/CusBlank/index.vue"
import CusInput from "./components/CusInput/index.vue"
import CusText from "./components/CusText/index.vue"
import CusDate from "./components/CusDate/index.vue"
import CusSelect from "./components/CusSelect/index.vue"
import TextArea from "./components/TextArea/index.vue"
import CusDash from "./components/CusDash/index.vue"
import CusRadio from "./components/CusRadio/index.vue"
import CusPatientSearch from "./components/CusPatientSearch/index.vue"
import CusIdCard from "./components/CusIdCard/index.vue"
import CusAddress from "./components/CusAddress/index.vue"
import CusTag from "./components/CusTag/index.vue"

export default {
  name: '',
  props: {
    formList: {
      type: Array,
      default: () => []
    },
  },
  components:{
    CusBlank,
    CusInput,
    CusText,
    CusDate,
    CusSelect,
    TextArea,
    CusDash,
    CusRadio,
    CusPatientSearch,
    CusIdCard,
    CusAddress,
    CusTag
  },
  data(){
    return {
      
    }
  },
  methods:{
    ...func,
  },
  computed:{
    paramsObj: function(){
      const newArr = _.deepCopy(this.formList)
      return newArr.reduce((prev, item) => (prev[item.key] = item.value, prev), {})
    }
  },
  watch: {
    paramsObj: {
      handler: function(newVal, oldVal) {
        if(!_.looseEqual(newVal, oldVal)) {
          this.$emit('changeData', newVal)
        }
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