import * as func from "./func.js"
import Slide from "@/components/Slide/index.vue"
export default {
  name: '',
  components:{
    Slide
  },
  data(){
    return {
      list: [
        {id:'1', isSlide: false},
        {id:'2', isSlide: false},
        {id:'3', isSlide: false}
      ],
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