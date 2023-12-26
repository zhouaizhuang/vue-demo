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
    maxWidth: function(){
      const tmp = _.safeGet(() => this.tabObj.list.map(v => v.name).sort((a, b) => a - b)[0].length * 15, 60)
      return _.range(tmp, 60)
    },
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