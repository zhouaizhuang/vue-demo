/**
 * 使用方法
 * 日期组件
 * <Calendar :date="date" @setDate="e => date = e"></Calendar> 
 */
import * as func from "./func.js"
import { dateFormater, socketTime } from "@/common.js"
export default {
  name: '',
  props:{
    date: {
      type: String,
      default: new Date()
    }
  },
  components:{},
  data(){
    return {
      dateList: [], // 当前传入日期所在月的日期数组
      year: 0,
      month: 0,
      day: 0,
    }
  },
  methods:{
    ...func,
  },
  watch: {
    date: {
      async handler(newVal, oldVal) {
        // 没有传入值则默认选择今天
        newVal = newVal ? newVal : dateFormater('YYYY-MM-DD', new Date())
        const {year, month, day} = socketTime(newVal)
        this.year = year
        this.month = month
        this.day = day
        this.getDateArr(year, month)
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