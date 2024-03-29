import * as func from "./func.js"
import VabDraggable from 'vuedraggable'
export default {
  name: '',
  components:{
    VabDraggable
  },
  data(){
    return {
      arrList: [
        {id: 1, top:0,left: 0,bgColor: 'pink'},
        {id: 2,top:0,left: 0,bgColor: 'yellow'},
        {id: 3,top:0,left: 0,bgColor: 'blue'},
        {id: 4,top:0,left: 0,bgColor: 'orange'},
        {id: 5,top:0,left: 0,bgColor: '#1890ff'},
        {id: 6,top:0,left: 0,bgColor: 'green'},
        {id: 7,top:0,left: 0,bgColor: '#57a3f3'},
        {id: 8,top:0,left: 0,bgColor: '#ed4014'},
        {id: 9,top:0,left: 0,bgColor: '#f90'},
      ],
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 600,
        group: 'description',
      }
    },
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    
  },
}