import * as func from "./func.js"
/**
 * 使用方法
 *  <Tabs
      :titleArr="['标签1','标签2','标签3', '标签4']" // 标签名
      :tabIndex="tabIndex" // 当前所在条目
      @setTabIndex="e=>tabIndex=e"  // 固定写法
    >
      <template #tab0>我是标签1的内容</template> <!--传值的时候可以使用es6的解构, #tab0="{tab0}"-->
      <template #tab1>我是标签2的内容</template>
      <template #tab2>我是标签3的内容</template>
      <template #tab3>我是标签4的内容</template>
    </Tabs>
 */
export default {
  name: '',
  props: {
    titleArr: {
      type: Array,
      default: function (){
        return []
      },
    },
    tabIndex: {
      type: [Number, String],
      default: 0,
    },
    height: {
      type: [Number, String],
      default: 600,
    }
  },
  components:{},
  data(){
    return {
      tabIndex: 0,
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