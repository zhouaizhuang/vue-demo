import * as func from "./func.js"
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
  components:{},
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