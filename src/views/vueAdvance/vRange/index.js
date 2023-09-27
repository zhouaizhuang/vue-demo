import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      num: 1
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    // setInterval(() => {
    //   this.num++
    // }, 3000)
    setTimeout(() => {
      this.num = 3
    }, 3000)
  },
}