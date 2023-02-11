import * as func from "./func.js"
/**
 * 左滑、右滑功能
 * 使用方法
 * @参数说明
 * @item 必填 数据数组的当前条目item  ----->  {id:'1', age: 18}
 * @list 必填 数据数组 ------> [{id:'1', age: 18},{id:'1', age: 18},{id:'1', age: 18},]
 * @type 选填 滑动类型 ------>   仅支持左滑['left']、仅支持右滑['right']、同时支持左滑和右滑['left', 'right']
 * @setList "v => list = v" 对list进行设置
    <div v-for="item in list" :key="item.id" class="mb10">
      <Slide :item="item" :list="list" @setList="v => list = v" :type="['left', 'right']">
        <div>我是内容</div>
      </Slide>
    </div>
 */
export default {
  name: '',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    item: {
      type: Object,
      default: () => {}
    },
    type: {
      type: Array,
      default: () => ['left']
    }
  },
  components:{},
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