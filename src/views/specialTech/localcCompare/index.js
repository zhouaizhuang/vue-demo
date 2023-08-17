import * as func from "./func.js"
import { deepCopy } from "@/common.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      userList: ['张三', '王小二', '朱晓明', '茅台', '球球'],
    }
  },
  methods:{
    ...func,
  },
  computed:{
    userListAfterSort: function(){
      const userList = deepCopy(this.userList)
      return userList.sort((a, b) => a.localeCompare(b))
    },
  },
  created(){
  },
  mounted(){
    
  },
}