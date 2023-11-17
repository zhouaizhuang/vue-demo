import * as func from "./func.js"
export default {
  name: '',
  props: {
    isLoad: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: 'middle'
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