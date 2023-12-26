import * as func from "./func.js"
import TagManage from "@/components/TagManage/index.vue"
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
  components:{
    TagManage
  },
  data(){
    return {
      chronicDieaseArr: [],
      isShowTagModal: false,
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