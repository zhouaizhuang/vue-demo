import * as func from "./func.js"
import Fakeprogress from 'fake-progress'
export default {
  name: '',
  components:{},
  data(){
    return {
      fake: new Fakeprogress({
        timeConstant: 60000
      }),
    }
  },
  methods:{
    ...func,
  },
  computed:{
    percent: function(){
      return parseInt(this.fake.progress * 100)
    }
  },
  created(){
    
  },
  mounted(){
  },
}