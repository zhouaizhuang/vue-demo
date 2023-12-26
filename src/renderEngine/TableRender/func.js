// 
export const changeField = function (field, value) {
  const tableObj = {...this.tableObj, [field]: value }
  this.$emit('setTableObj', tableObj)
}
//调整页码
export const changePage = function (e) {
  const tableObj = {...this.tableObj, currentPage: e, loading: true }
  this.$emit('setTableObj', tableObj)
  this.$emit('changeTable', { currentPage: e, pageSize: this.tableObj.pageSize})
}
// 调整分页参数
export const changePageSize = async function (e) {
  if(this.tableObj.currentPage == 1) {
    this.$emit('changeTable', { currentPage: 1, pageSize:e })
  }
  // 页码不等于1的时候，这里设置页码置为1，就会触发changePage
  const tableObj = {...this.tableObj, currentPage: 1, pageSize: e, loading: true }
  this.$emit('setTableObj', tableObj)
}
// 获取选中的参数
export const changeSelect = function(e){
  this.$emit('changeSelect', e)
}