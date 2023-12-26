/**
 * 
  <TabRender :tabObj="tabObj" @setTabObj="e => tabObj = e" @changeTab="e => changeTab(e)"></TabRender>
  ================数据=================
  tabObj:{
    list: [
      {name:'全部随访', value: '0', count:'3116', isChecked: true, id: _.guID()},
      {name:'待随访', value: '1', count:'2978', isChecked: false, id: _.guID()},
      {name:'已随访', value: '2', count:'95', isChecked: false, id: _.guID()},
      {name:'已取消', value: '3', count:'34', isChecked: false, id: _.guID()}
    ],
    roundTab: { // 1、显示圆角类型的tab
      isShow: true,
      style: '',
    },
    paneTab: { // 2、显示组件库类型的tab
      isShow: false,
    }
  }
  用户点击的时候会触发changeData
 */
import * as func from "./func.js"
export default {
  name: '',
  props: {
    tabObj: {
      type: Object,
      default: () => ({})
    }
  },
  components:{
    RoundTab: () =>  import('./components/RoundTab/index.vue'),
    PaneTab: () =>  import('./components/PaneTab/index.vue'),
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