import * as func from "./func.js"
export default {
  name: '',
  props: {
    item:{
      type: Object,
      default: () => ({
        value: '',
        options:[]
      })
    },
    searchList: {
      type: Array,
      default: () => []
    }
  },
  components:{},
  data(){
    return {
      selectOptions: []
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