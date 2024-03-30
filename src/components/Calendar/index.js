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
      dateListPrev:[], // 前一个月的日期数组
      dateList: [], // 当前传入日期所在月的日期数组
      dateListNext:[], // 后一个月的日期数组
      _year:0, // 传入的初始年
      _month:0, // 传入的初始月
      _day:0, // 传入的初始日
      year: 0, // 当前切换到哪一个年
      month: 0, // 当前切换到哪一个月
      startX:0, // 开始X位置
      startY:0, // 开始Y位置
      slideType: '', // ''不操作  'left'左滑   'right'右滑  'move' 移动中 
      translateX: 0, // 指尖平移距离
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
        this.updateDateList()
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