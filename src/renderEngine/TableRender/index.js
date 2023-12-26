/**
 *表格渲染引擎
  <TableRender :tableObj="tableObj" @setTableObj="e => tableObj = e" @changeTable="e => getList(e)">
    <template slot-scope="{ row }" slot="action">
      <div :class="['f ac xc g1aada7', row.status == 0 ? 'op5' : '']">
        <div @click="cancelSend(row)" class="poi gred hoverText rel textUnderline disabled">取消发送</div>
      </div>
    </template>
  </TableRender>
 ==================数据=====================================
  tableObj: {
    head: [
      {title: '患者姓名',key: 'name',minWidth: 150,align:'center'},
      {title: '手机号',key: 'phone', minWidth: 140,align:'center'},
      {title: '身份证号',key: '_idNumber',minWidth: 220,align:'center'},
      {title: '短信内容',key: 'messageContent', minWidth: 300, align:'center'},
      {title: '发送时间',key: 'sendTime',minWidth: 180,align:'center'},
      {title: '发送状态',key: '_sendStatus',minWidth: 100,align:'center'},
      {title: '操作',slot: 'action',minWidth: 100,align: 'center', fixed: 'right'}
    ], -------> 表头
    list: [],--------> 数据
    currentPage:1, ----->  当前页码
    pageSize:10, ---->每页多少条
    totalCount:0, -----> 总数
    loading: true, ------> 表格是否正在loading
  },
 */
import * as func from "./func.js"
import HighTable from "@/components/HighTable/index.vue"
export default {
  name: '',
  props: {
    tableObj: {
      type: Object,
      default: () => ({})
    }
  },
  components:{
    HighTable
  },
  data(){
    return {
      
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