const r = require.context('./modules', true, /\.js/)
export const Z = r.keys().reduce((prev, item) => {
  // console.log(item)
  // console.log(r(item))
  return {...prev, ...r(item)}
}, {})
