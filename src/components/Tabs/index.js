import * as func from "./func.js"
export default {
  name: '',
  props: {
    titleArr: {
      type: Array,
      default: function (){
        return []
      },
    },
    tabIndex: {
      type: [Number, String],
      default: 0,
    },
    height: {
      type: [Number, String],
      default: 600,
    }
  },
  components:{},
  data(){
    return {
      tabIndex: 0,
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