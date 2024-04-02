// 多选
export const checkedItem = function (item) {
  this.checkList = _.multipleChecked(this.checkList, {id: item.id})
}
// 新增数据
export const addList = function () {
  if(!this.pageName) { return this.$Message.error('请输入页面名称') }
  this.selectList = [
    ...this.selectList, 
    { 
      name: this.pageName, 
      checkList: this.checkList,
      totalHour: this.checkList.reduce((prev, item) => prev + Number(item.hour), 0) 
    }
  ]
}