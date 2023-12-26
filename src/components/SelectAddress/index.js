/**
 *<SelectAddress
 *  :provinceCode="formData.provinceCode"  // 省code
 *  :cityCode="formData.cityCode"  // 市code
 *  :areaCode="formData.areaCode"  // 区code
 *  :streetCode="patientObj.streetCode" // 街道streetCode
 *  :address="formData.address"  // 详细地址
 *  @setProvinceCode="({id, name})=>{formData.provinceCode=id;formData.provinceName=name;}"  // 返回选择的省code和名称
 *  @setCityCode="({id, name})=>{formData.cityCode=id;formData.cityName=name}"  // 返回选择的市code和名称
 *  @setAreaCode="({id, name})=>{formData.areaCode=id;formData.areaName=name}"  // 返回选择的区code和名称
    @setStreetCode="({id, name})=>{formData.streetCode=id;formData.streetName=name}" // 返回选择的街道code和名称
 *  @setAddress="e=>{formData.address=e;}"  // 返回用户输入的详细地址
 *>
 *</SelectAddress>
 */
import * as func from "./func.js"
export default {
  name: '',
  props:{
    isShowStreet: {
      type: Boolean,
      default: true,
    },
    provinceCode: { // 省编码
      type: [String, Number],
      default: '',
    },
    cityCode: {  // 市编码
      type: [String, Number],
      default: '',
    },
    areaCode: {  // 区编码
      type: [String, Number],
      default: '',
    },
    streetCode: { // 街道编码
      type: [String, Number],
      default: '',
    },
    address: {  // 详细地址
      type: String,
      default: '',
    },
  },
  components:{},
  data(){
    return {
      provinceList: [],
      cityList:[],
      areaList:[],
      streetList: []
    }
  },
  watch:{
    provinceCode: {
      handler: async function(newVal, oldVal) {
        if(newVal) {
          this.cityList = await this.getList(newVal)
        }
      },
      deep: true, // 监听深层对象
      immediate: true, // 会在页面渲染之前， 先执行一遍这个监听
    },
    cityCode: {
      handler: async function(newVal, oldVal) {
        if(newVal) {
          this.areaList = await this.getList(newVal)
        }
      },
      deep: true, // 监听深层对象
      immediate: true, // 会在页面渲染之前， 先执行一遍这个监听
    },
    areaCode: {
      handler: async function(newVal, oldVal) {
        if(newVal) {
          this.streetList = await this.getList(newVal)
        }
      },
      deep: true, // 监听深层对象
      immediate: true, // 会在页面渲染之前， 先执行一遍这个监听
    }
  },
  methods:{
    ...func,
  },
  async created(){
    this.provinceList = await this.getList()
  },
  mounted(){
    
  },
}