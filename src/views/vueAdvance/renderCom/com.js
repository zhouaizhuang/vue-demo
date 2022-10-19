// 组件1
export const testCom = {
  //组件名
  name: "testCom",
  //属性
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  //方法
  methods: {
    reversedMessage() {
      return this.msg.split("").reverse().join("");
    },
    showToast(val){
      alert(val)
    }
  },
  //生成html
  render(h) {
    return (
      <div>
        <div class="b">判断</div>
        { false ? <div>123++++</div> : <div>-------</div> }
        <div class="b mt30">循环</div>
        { [1,3,2].map(v => <div>{v}</div>) } 
        <div class="b mt30">点击事件</div>
        <Button onClick={() => this.showToast('123')}>点我</Button>
        <div class="b mt30">业务js</div>
        <div>{this.reversedMessage(this.msg)}</div>
      </div>
    )
  }
}
