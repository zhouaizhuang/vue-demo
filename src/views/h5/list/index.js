import * as func from "./func.js"
import List from "@/components/List/index.vue"
export default {
  name: '',
  components:{
    List
  },
  data(){
    return {
      list: [],
      page: 1,
    }
  },
  methods:{
    ...func,
  },
  created(){
    this.getList()
  },
  mounted(){
    
  },
}