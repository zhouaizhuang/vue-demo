import * as func from "./func.js"
import RightMenu from "@/components/RightMenu/index.vue"
export default {
  name: '',
  components:{
    RightMenu
  },
  data(){
    return {
      rightObj:{
        isShow: false,
        x:0,
        y:0,
        item:{}
      },
      list:[
        {value:'1', bgColor:'#1890ff'},
        {value:'2', bgColor:'#f5f5f5'},
        {value:'3', bgColor:'pink'},
        {value:'4', bgColor: 'skyblue'},
      ]
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    
  },
}