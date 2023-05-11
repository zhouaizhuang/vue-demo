import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      pdfDoc: {},
      pdfObj: {
        canvas: null,
        page: 1,
        total: 100,
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