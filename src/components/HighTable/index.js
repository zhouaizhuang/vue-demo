import * as func from "./func.js"
export default {
  name: 'HighTable',
  components:{},
  props: {
    loading: { // 是否loading
      type: Boolean,
      default: false,
    },
    tableHeight: {
      type: Number,
      default: 0,
    },
    columns: { // 表头
      type: Array,
      default: () => []
    },
    tableData: { // 表格数据
      type: Array,
      default: () => []
    },
    totalCount: {
      type: [Number, String],
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    rowClassName: {
      type: Function,
      default: () => {},
    }
  },
  data(){
    return {
      selectInverseChecked: false
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
  },
}