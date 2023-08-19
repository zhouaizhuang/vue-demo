import * as func from "./func.js"
import { getViewPos, chunk } from "@/common.js"
export default {
  name: '',
  components:{},
  data() {
    return {
      developList: [],
      translateX: 0,
      maxTranslateX: 0,
    }
  },
  methods:{
    ...func,
  },
  computed:{
    chunkDevelopList: function(){
      return chunk(this.developList, 2)
    },
  },
  created(){
  },
  mounted(){
    window.onresize = () => { 
      const res = getViewPos(this.$refs.outBox)
      this.maxTranslateX = 220 * this.developList.length + 80 - res.width
      this.translateX = -1 * this.maxTranslateX
    }
    // var listData = this.getData() // 接口请求
    setTimeout(() => {
      this.developList = [
        { id:1, time: '2022.11.16', content: '公司正式注册成立' },
        { id:2, time: '2023.3.16', content: '60万租金扶持资金到位' },
        { id:3, time: '2023.3.24', content: '公司通过ISO9001体系认证' },
        { id:4, time: '2023.3.29', content: '环评批复' },
        { id:5, time: '2023.4.7', content: '90天完成工厂建设、成功试生产' },
        { id:6, time: '2023.4.13', content: '300万装修扶持资金到位，龙城英才项目高分通过评审' },
        { id:7, time: '2023.6.15', content: '人才申报启动' },
        { id:8, time: '2023.7.6', content: '完成天使轮融资协议签订' },
        { id:9, time: '2023.7.7', content: '领军型创新人才申报启动' },
        { id:10, time: '2023.7.10', content: '2037创新实验室' },
        { id:11, time: '2023.07.28', content: '公司通过IATF16949符合性证明' },
        { id:12, time: '2023.08.09', content: '公司通过ISO14001环境体系认证公司通过ISO45001职业健康安全体系认证' },
      ]
      const res = getViewPos(this.$refs.outBox)
      this.maxTranslateX = 220 * this.developList.length + 80 - res.width
      this.translateX = -1 * this.maxTranslateX
    }, 600)
  }
}