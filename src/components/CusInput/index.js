import * as func from "./func.js"
export default {
  name: 'cusInput',
  props: {
    formInfo: {
      type: Object, // 数据类型
      require: true, // 必填
      default: {}
    },
    type:{ // 当前数据是否是detail，也就是是否可以编辑
      type: String, // 表单类型
      default: ''
    }
  },
  data(){
    return {}
  },
  methods:{
    ...func
  },
  created(){
  }
}