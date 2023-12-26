import * as func from "./func.js"
import HighSelect from "@/components/HighSelect/index.vue"
export default {
  name: '',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    searchList: {
      type: Array,
      default: () => []
    }
  },
  components:{
    HighSelect
  },
  data(){
    return {
      
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