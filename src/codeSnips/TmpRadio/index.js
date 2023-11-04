import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      radioList: [{id:1, name:'单选1', isChecked: false},{id:2, name:'单选2', isChecked: true},{id:3, name:'单选3', isChecked: false}]
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