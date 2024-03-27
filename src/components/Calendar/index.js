import * as func from "./func.js"
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
      startX: '',
      startY:'',
    }
  },
  methods:{
    ...func,
  },
  watch: {
    date: {
      async handler(newVal, oldVal) {
        if(newVal) {
          const {year, month} = _.socketTime(newVal)
          this.year = year
          this.month = month
          const dateList = this.getDateArr(year, month)
          this.dateList = dateList.map(v => ({...v, isChecked: _.dateFormater('YYYY-MM-DD', v.date) == _.dateFormater('YYYY-MM-DD', newVal)}))
        }
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