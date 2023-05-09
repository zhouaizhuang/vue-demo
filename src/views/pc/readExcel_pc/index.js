import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      outputs: []
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    // this.$refs.upload.addEventListener('change', e => {//绑定监听表格导入事件
    //   this.readExcel(e.target.files);
    // })
  },
}