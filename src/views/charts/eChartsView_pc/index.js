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
    setInterval(() => this.time = dateFormater('YYYY-MM-DD hh:mm:ss'), 1e3)
  },
  mounted(){
    
  },
}