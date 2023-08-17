import * as func from "./func.js"
import CardCount from "./components/CardCount/index.vue"
import { socketTime } from "@/common.js"
export default {
  name: '',
  components:{
    CardCount
  },
  data(){
    return {
      num: 1,
      year: '2023',
      month: '08',
      day: '17',
      hour: '20',
      minutes: '08',
      seconds: '37',
    }
  },
  methods:{
    ...func,
  },
  created(){
    setInterval(() => {
      const {year, month, day, hour, minutes, seconds} = socketTime()
      this.year = year
      this.month = month
      this.day = day
      this.hour = hour
      this.minutes = minutes
      this.seconds = seconds
    }, 100)
  },
  mounted(){
    
  },
}