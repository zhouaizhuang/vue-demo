/**
 <SearchRender
     :searchList="searchList" -------> // JSON表单
     @setSearchList="e => searchList = e"
     @changeSearch="e => changeSearch(e)"
  >
  </SearchRender>
  =================数据=======================
  searchList: [
    {type:'dateRange', label: '发送日期', key:'sendDate', placeholder:'请选择', value: '', _value: '', isShow: true, _isShow: true, id: _.guID(), },
    {type:'select', label: '发送状态', key:'status', placeholder:'请选择', value: '',  _value: '', isShow: true, _isShow: true,   options: [{name:'全部', value:'0'}, {name:'待发送', value:'1'}, {name:'发送成功', value:'2'}, {name:'发送失败', value:'3'}, {name:'发送中', value:'4'}], url: '', params: {currentPage: 1, pageSize: 999}, nameField:'', valueField: '', id: _.guID()},
    {type:'highSelect', label: '患者标签', key:'patientTagId', placeholder:'请选择', value: '',  _value: '', isShow: true, _isShow: true,  options: [{id:'1', name:'慢病', children: [{id:'11', name: '糖尿病'}]}], id: _.guID()},
    {type:'input', label: '短信签名', key:'messageSign', placeholder:'请输入', value: '',  _value: '', isShow: true, _isShow: true, id: _.guID(), },
    {type:'secondSelet', label: '签约状态', key:'signState', value: {value1: '', value2: ''},  _value: {value1: '', value2: ''}, isShow: true, _isShow: true, placeholder:'请选择', options1:[{name:'慢病',value:'1'},{name: '公卫', value:'2'}], options2: [{name:'全部',value:'0'},{name:'已过期',value:'1'},{name:'已签约',value:'2'},{name:'未签约',value:'3'}], id: _.guID()},
  ]
  备注： isShow控制表单是否显示   _isShow是表单初始化的显示状态   label是表单名    key字段   value字段值  _value字段初始值   placeholder:提示   options下拉选项
  changeSearch---->表单字段数据发生变更就会触发
 */
import * as func from "./func.js"
import DateRangeCom from "./components/DateRangeCom/index.vue"
import SelectCom from "./components/SelectCom/index.vue"
import InputCom from "./components/InputCom/index.vue"
import HighSelectCom from "./components/HighSelectCom/index.vue"
import SecondSelet from "./components/SecondSelet/index.vue"
export default {
  name: '',
  props: {
    searchList: {
      type: Array,
      default: () => []
    },
    isShowSpread: {
      type: Boolean,
      default: false
    },
    isShowReste:{
      type: Boolean,
      default: true
    }
  },
  components:{
    DateRangeCom,
    SelectCom,
    InputCom,
    HighSelectCom,
    SecondSelet
  },
  data(){
    return {
      isSpread: false
    }
  },
  methods:{
    ...func,
  },
  computed:{
    paramsObj: function(){
      const newArr = _.deepCopy(this.searchList)
      return newArr.reduce((prev, item) => (prev[item.key] = item.value, prev), {})
    },
    optionsParams: function (){
      const newArr = _.deepCopy(this.searchList)
      return newArr.reduce((prev, { key, url, params, nameField, valueField }) => [...prev, {key, url, params, nameField, valueField}], []).filter(v => v.url && v.params && v.nameField && v.valueField)
    }
  },
  watch: {
    // 处理搜素参数
    // paramsObj: {
    //   handler: function(newVal, oldVal) {
    //     if(!_.looseEqual(newVal, oldVal)) {
    //       this.search()
    //     }
    //   },
    //   deep: true, // 监听深层对象
    //   immediate: false, // 立即执行 
    // },
    // 处理下拉框的options选项
    optionsParams: {
      handler: function(newVal, oldVal) {
        if(!_.looseEqual(newVal, oldVal)) {
          newVal.forEach(async item => {
            const res = await this.$post(item.url, item.params)
            let list = _.isArray(res) ? res : Object.keys(res).reduce((prev, item) => _.isArray(res[item]) ? res[item] : [], [])
            const options = list.map(v =>({name: v[item.nameField],value: v[item.valueField]}))
            const searchList = _.searchCover(this.searchList, {key: item.key}, j => ({...j, options }))
            this.$emit('setSearchList', searchList)
          })
        }
      },
      deep: true, // 监听深层对象
      immediate: true, // 立即执行 
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}