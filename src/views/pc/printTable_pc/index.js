import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      deviceColumn: [
        { type: 'selection',width: 60, align: 'center'},
        { title: '服务编码', key: 'code', align: 'center', slot: 'code', width:230 },
        { title: '设备名称', key: 'name', align: 'center', width: 150 },
        { title: '设备类型', key: 'typeText', align: 'center', width: 150 },
        { title: '设备品牌', key: 'brand', align: 'center', width: 150 },
        { title: '设备型号', key: 'model', align: 'center', width: 150 },
        { title: '设备状态', key: 'statusText', align: 'center', width: 150},
        { title: '保修截止日期', key: 'guarantee_time', align: 'center', width: 150},
        { title: '操作', key: 'action', align: 'center', slot:'action', width: 120, fixed: 'right'},
      ],
      deviceTableData:[
        { id:'1', code:'123123', name:'脉搏波', typeText:'使用中', brand:'脉搏波', model:'1001', statusText:'血压计', guarantee_time:'2022-10-11' },
        { id:'2', code:'123123', name:'脉搏波', typeText:'使用中', brand:'脉搏波', model:'1001', statusText:'血压计', guarantee_time:'2022-10-11' },
        { id:'3', code:'123123', name:'脉搏波', typeText:'使用中', brand:'脉搏波', model:'1001', statusText:'血压计', guarantee_time:'2022-10-11' },
        { id:'4', code:'123123', name:'脉搏波', typeText:'使用中', brand:'脉搏波', model:'1001', statusText:'血压计', guarantee_time:'2022-10-11' },
        { id:'5', code:'123123', name:'脉搏波', typeText:'使用中', brand:'脉搏波', model:'1001', statusText:'血压计', guarantee_time:'2022-10-11' }
      ],
      printDeviceTableData: [],
      devicePageObj: {
        page:1,
        totalCount: 5,
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