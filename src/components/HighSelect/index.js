import * as func from "./func.js"
import { tree2flat } from "@/common.js"
export default {
  name: '',
  props: {
    value: { // 字段值
      type: String,
      default: ''
    },
    options: { // 数组选项      格式：[{id:'1'. name:'慢病', children: [{id:'11', name: '糖尿病'}]}]
      type: Array,
      default: function(){
        return []
      },
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    isMutiple:{
      type: Boolean,
      default: true
    }
  },
  components:{},
  data(){
    return {
      isSpread: false,
      selectedItems: [],
    }
  },
  methods:{
    ...func,
  },
  watch: {
    options: {
      handler(newVal, oldVal){
        if(newVal) {
          // console.log(newVal)
          // console.log(tree2flat(newVal, 'children') )
          this.selectedItems = (tree2flat(newVal, 'children') || []).filter(v => v.isChecked)
          // console.log(this.selectedItems)
        } else {

        }
      },
      deep: true,
      immediate: true,
    },
  },
  created(){
  },
  mounted(){
    
  },
}