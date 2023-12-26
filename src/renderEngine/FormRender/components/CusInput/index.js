import * as func from "./func.js"
import { round } from "@/common.js"
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
  components:{},
  data(){
    return {
      calcVal: '',
    }
  },
  computed:{
  },
  watch:{
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    
  },
}