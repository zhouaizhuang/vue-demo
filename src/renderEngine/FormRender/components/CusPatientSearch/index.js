import * as func from "./func.js"
import SearchPatient from "@/components/SearchPatient/index.vue"
export default {
  name: '',
  props: {
    modalType: {
      type: [String, Number],
      default: 1
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    formList:{
      type: Array,
      default: () => []
    },
    item: {
      type: Object,
      default: () => {}
    },
  },
  components:{
    SearchPatient
  },
  data(){
    return {
      patientObj: {
        
      }
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