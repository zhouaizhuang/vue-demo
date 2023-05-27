import * as func from "./func.js"
export default {
  name: '',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    pageWidth: {
      type: [Number, String],
      default: 794
    },
    pageHeight: {
      type: [Number, String],
      default: 1120
    },
    renderData: {
      type: [Object, Array],
      default: function(){
        return {}
      }
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