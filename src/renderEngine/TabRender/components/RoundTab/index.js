import * as func from "./func.js"
export default {
  name: '',
  props: {
    tabObj: {
      type: Object,
      default: () => ({})
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
  computed:{
    tabIndex: function (){
      return this.tabObj.list.findIndex(v => v.isChecked)
    }
  },
  watch: {
    tabIndex: {
      handler: function (newVal, oldVal){
        if(newVal != oldVal) {
          this.$emit('changeTab', this.tabObj.list.find(v => v.isChecked))
        }
      },
      deep:true,
      immediate: false,
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}