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
    this.initSkill() // 掌握技能
    this.initPersonNum() // 人员变化
    this.initPlayNum() // 播放和转发量
    this.initAgePie() // 年龄的饼图
  },
}