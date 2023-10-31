import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      value:'',
      isShowOptions: false,
      options:[{id:1, name:'选项1'}, {id:2, name:'选项2'}, {id:3, name:'选项3'}, {id:4, name:'选项4'}, {id:5, name:'选项5'}, {id:6, name:'选项6'}, {id:7, name:'选项7'}]
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