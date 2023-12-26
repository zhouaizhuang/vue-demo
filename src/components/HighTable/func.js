// export const getTableHeight = function () {
//   let elTop = this.$refs.table.$el.offsetTop; //表格到nav的高度
//   let navHeight = "70";
//   const leftBottomHeight = 135; // 表格的底部预留的高度
//   this.tableHeight = window.innerHeight -navHeight - elTop -leftBottomHeight +this.tableHeightMinus;
//   this.$emit("getTableHeight", this.tableHeight)
// }
export const changePage = function (e) {
  this.selectInverseChecked = false
  this.$emit("changePage", e)
}
export const changePageSize = function (e) {
  this.$emit("changePageSize", e);
}