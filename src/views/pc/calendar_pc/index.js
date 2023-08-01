import * as func from "./func.js"
import { Solar, Lunar, HolidayUtil } from 'lunar-javascript'
export default {
  name: '',
  components:{},
  data(){
    return {
      LunarStr:'',
      SolarStr:'',
      HolidayUtilStr:'',
    }
  },
  methods:{
    ...func,
  },
  created(){
    this.LunarStr = Lunar.fromDate(new Date()).toFullString()
    this.SolarStr = Solar.fromYmd(2016, 1, 1).toFullString()
    this.HolidayUtilStr = HolidayUtil.getHoliday(2020, 5, 2) + ''
  },
  mounted(){
    
  },
}