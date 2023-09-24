import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      text1: '长文本信息，显示我是很长的文本信息，我是很长的文本信息，我是很长的文本信息，我是很长的文本信息，我是很长的文本信息，我是很长的文本信息，',
      text2: '短文本不显示'
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    // setTimeout(() => {
    //   this.text = '123123'
    // }, 3000)
  },
}