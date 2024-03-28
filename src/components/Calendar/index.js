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
      _year:0,
      _month:0,
      _day:0,
      year: 0, // 当前切换到哪一个年
      month: 0, // 当前切换到哪一个月
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
        this._year = year
        this._month = month
        this._day = day
        this.year = year
        this.month = month
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