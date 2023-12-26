// 点击第一级
export const clickfirstItem = function (e) {
  this.selectName = e.name
  const list = _.searchCover(this.treeObj.list, { id: e.id }, v => ({ ...v, isSpread: !v.isSpread, isChecked: true }), v => ({...v, isChecked: false}))
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}
// 点击第二级
export const clickSecondItem = function (e) {
  this.selectName = e.name
	const list = this.treeObj.list.map(v => ({...v,children: _.searchCover(v.children, { id: e.id }, k => ({ ...k, isSpread: !k.isSpread, isChecked: true }),  v => ({...v, isChecked: false}))}))
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}
// 点击第三级
export const clickthirdItem = function (e) {
  this.selectName = e.name
  const list = this.treeObj.list.map(v => {
		const city = v.children
		v.children = city.map(k => ({...k,children: _.searchCover(k.children, { id: e.id }, j => ({ ...j, isSpread: !j.isSpread, isChecked: true }), v => ({...v, isChecked: false}))}))
		return v
	})
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}
// 点击第四级
export const clickforthItem = function (e) {
  this.selectName = e.name
  // const list = this.treeObj.list.map(v => {
	// 	const city = v.children
	// 	v.children = city.map(k => {
	// 		const areaList = k.children
	// 		k.children = areaList.map(h => {
	// 			const streetList = h.children
	// 			h.children = _.searchCover(streetList, { id: e.id }, v => ({ ...v, isSpread: !v.isSpread, isChecked: true }), v => ({...v, isChecked: false}))
	// 			return h
	// 		})
	// 		return k
	// 	})
	// 	return v
	// })
  // const treeObj = { ...this.treeObj, list }
  // this.$emit('setTreeObj', treeObj)
}
// 点击第五级
export const clickFifthItem = function (e) {

}