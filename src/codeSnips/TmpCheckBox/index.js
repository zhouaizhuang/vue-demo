import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      checkList: [{id:1, name:'羽毛球', isChecked: false},{id:2, name:'乒乓球', isChecked: true},{id:3, name:'篮球', isChecked: false},]
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