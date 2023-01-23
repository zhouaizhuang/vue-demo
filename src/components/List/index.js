import * as func from "./func.js"
import { looseEqual, isArray } from "@/common.js"
/**
 * 使用方法
 * @举例子
 * @list 数据列表
 * @getMore 获取更多的处理函数
  <List :list="list" @getMore="() => {page++;getList()}">
    <div
      v-for="(item, index) in list"
      :key="item.id"
      class="rds10 bgf mb20 pt10 pb10 pl15 pr15" 
      style="box-shadow:2px 2px 2px 2px rgba(0,0,0,.2);"
    >
      {{index + 1}}
    </div>
  </List>
 */
export default {
  name: '',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    pageSize: { // 默认每页是10条。
      type: [Number, String],
      default: 10,
    }
  },
  components:{},
  data(){
    return {
      isShowLoadMore: false,
    }
  },
  watch:{
    list: {   //深度监听，需要用对象， 使用handler属性传入函数
      handler: function(newVal, oldVal) {
        if(isArray(newVal) && isArray(oldVal)) {
          this.isShowLoadMore = !looseEqual(newVal, oldVal) && [...newVal].length >= this.pageSize
        }
      },
      deep:true,
      immediate: true, // 会在页面渲染之前， 先执行一遍这个监听
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