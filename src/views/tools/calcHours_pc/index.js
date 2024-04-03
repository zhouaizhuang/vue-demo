import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      pageName: '',
      checkList: [
        {id: _.guID(), name:'表格', hour: 0.5, isChecked: false},
        {id: _.guID(), name:'增', hour: 2, isChecked: false},
        {id: _.guID(), name:'删', hour: 0.5, isChecked: false},
        {id: _.guID(), name:'改', hour: 2, isChecked: false},
        {id: _.guID(), name:'查', hour: 0.5, isChecked: false},
        {id: _.guID(), name:'启用停用', hour: 1, isChecked: false},
        {id: _.guID(), type:'otherFunction', name:'', hour: 1, isChecked: false},
        {id: _.guID(), type:'otherFunction', name:'', hour: 1, isChecked: false},
        {id: _.guID(), type:'otherFunction', name:'', hour: 1, isChecked: false},
        {id: _.guID(), type:'otherFunction', name:'', hour: 1, isChecked: false},
        {id: _.guID(), type:'otherFunction', name:'', hour: 1, isChecked: false},
        {id: _.guID(), type:'otherFunction', name:'', hour: 1, isChecked: false},
      ],
      selectList: [],
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