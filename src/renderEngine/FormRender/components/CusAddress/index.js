import * as func from "./func.js"
import SelectAddress from "@/components/SelectAddress/index.vue"
export default {
  name: '',
  props: {
    formList:{
      type: Array,
      default: () => []
    },
    item: {
      type: Object,
      default: () => {}
    },
  },
  components:{
    SelectAddress
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