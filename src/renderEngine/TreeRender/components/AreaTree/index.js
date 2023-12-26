import * as func from "./func.js"
export default {
  name: '',
  props: {
    treeObj: {
      type: Object,
      default: () => ({})
    },
  },
  components:{},
  data(){
    return {
      selectName:''
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