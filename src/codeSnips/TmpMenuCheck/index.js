import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      selectAll: false,
      isSpread: true,
      allMenu: [],
    }
  },
  methods:{
    ...func,
  },
  created(){
    this.getAllMenu(false, true)
  },
  mounted(){
    
  },
}