import * as func from "./func.js"
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
      idType: '1',
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