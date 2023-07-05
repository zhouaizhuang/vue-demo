import * as func from "./func.js"
import HighTable from "@/components/HighTable/index.vue"
export default {
  name: '',
  components: {
    HighTable,
  },
  data () {
    return {
      searchObj: {
        status: '',
        job: '',
        doctor: ''
      },
      tableColumns: [
        {title: '员工姓名',key: 'name'},
        {title: '性别',key: 'gender',width: 80,},
        {title: '手机号',key: 'phone'},
        {title: '登录账号',key: 'account'},
        {title: '岗位',key: 'jobText'},
        {title: '科室',key: 'departmentName'},
        {title: '所属机构',key: 'organizationName'},
        {title: '角色',key: 'roleName'},
        {title: '操作',slot: 'action',width: 230,align: 'center'}
      ],
      tableData: [],
      pageObj: {
        page: 1,
        totalCount: 10,
        pageSize:10,
      },
      modalType: 0, // 弹框类型
      rowId: '', // 当前选择的行的id
    }
  },
  watch: {

  },
  methods: {
    ...func,
  },
  created () {
  },
  mounted () {
  },
}