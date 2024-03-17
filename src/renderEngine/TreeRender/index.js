/**
  <TreeRender
    :treeObj="treeObj"  ------->  树形结构JSON数组
    @setTreeObj="e => treeObj = e"
    @changeTree="e => changeTree(e)"  ------> 选择任意一个条目都会触发
  >
  </TreeRender>
=========================数据分割线=================================================
  treeObj:{
    // list的基础数据格式，注意children中的数据格式跟外层一样的
    list: [
      {
        id: '1', name: '江苏省', value: '1', isSpread: true, isChecked: true,isIndeterminate: false, disabled: false, style:'', checkedStyle:'', isShowCheckbox: true,
        children: [{
          id: '11', name: '常州市', value: '11', isSpread: true, isChecked: false,isIndeterminate: false, disabled: false, style:'', checkedStyle:'', isShowCheckbox: true,
          children: [{
            id: '111', name: '新北区', value: '111', isSpread: true, isChecked: false,isIndeterminate: false, disabled: false, style:'', checkedStyle:'', isShowCheckbox: true,
            children: []
          }]
        }]
      },
      {
        id: '2', name: '北京市', value: '2', isSpread: true, isChecked: false,isIndeterminate: false, disabled: false, style:'', checkedStyle:'', isShowCheckbox: true,
        children: [{
          id: '21', name: '东城区', value: '21', isSpread: true, isChecked: false,isIndeterminate: false, disabled: false, style:'', checkedStyle:'', isShowCheckbox: true,
          children: [{
            id: '111', name: '新北区', value: '111', isSpread: true, isChecked: false,isIndeterminate: false, disabled: false, style:'', checkedStyle:'', isShowCheckbox: true,
            children: []
          }]
        }]
      }
    ],
    rbacTree: { // 类型1：rbac菜单权限UI
      isShow: true, // 是否显示rbac菜单
      menuDisableList: [ // 哪一些列表的id是被禁用的，且有了新增，就必须启用列表
        40000, 40200, 30000, 60000, 60100, 60200, 50000, 50010, 50020, 50030, 50110, 50120, 50130, 50310, 50320, 50330, 50340, 50400, 50600, 50500, 40700,
        60205, 60211, 60215,
      ],
    },
    areaTree: { // 类型2：区划显示UI
      isShow: true, // 是否显示rbac菜单
    },
    basicTree: { // 类型3：基础的tree控件
      isShow: true, // 是否显示tree结构
    }
  },
========================使用实际举例===========================================
  const result = await this.$request({ url: "/admin-api/system/area/tree" })
	const list = _.tree2flat(result).map(v => ({...v, id: '1', name: '江苏省', value: '1', isSpread: false, isChecked: false, isIndeterminate: false, disabled: false, class:'', checkedClass:'', style:'', checkedStyle:'', children: []}))
	this.treeObj.list = _.flat2tree(list)
 */
import * as func from "./func.js"
export default {
  name: '',
  props:{
    treeObj: {
      type: Object,
      default: () => ({})
    },
  },
  components:{
    MenuTree: () =>  import('./components/MenuTree/index.vue'),
    AreaTree: () =>  import('./components/AreaTree/index.vue'),
    BasicTree: () =>  import('./components/BasicTree/index.vue'),
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