import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      collapseList: [{id:1, name:'a'},{id:2, name:'b'},{id:3, name:'c'}]
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.processList()
  },
}