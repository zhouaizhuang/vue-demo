import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      accountObj: {
        account: '',
        pwd: '',
        _pwd: ''
      },
      accountRule:{
        account: [ { required: true, message: '账号不能为空', trigger: 'blur' } ],
        pwd: [ { required: true, message: '密码不能为空', trigger: 'blur' } ],
      },
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