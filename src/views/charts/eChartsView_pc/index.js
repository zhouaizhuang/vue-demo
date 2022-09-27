import * as func from "./func.js"
import { dateFormater } from "../../../common.js"
export default {
  name: 'echartsView',
  components:{},
  data(){
    return {
      time: dateFormater('YYYY-MM-DD hh:mm:ss')
    }
  },
  methods:{
    ...func,
  },
  created(){
    setInterval(() => this.time = dateFormater('YYYY年MM月DD日 hh时mm分ss秒'), 500)
  },
  mounted(){
    this.initIndustry() // 就业行业
  },
}