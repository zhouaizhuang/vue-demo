
/**
 * 触底加载更多指令
 * @param {Function} fn - 执行事件
 * 使用方式<div v-reachBottom="getMoreData">加载更多...</div>
 */
export const reachBottom = {
  inserted: (ele,binding) =>{
    const fn = binding.value
    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        const { intersectionRatio, target } = item
        // console.log(item) // 这里观察数据的状态
        if(intersectionRatio > 0) { fn() }
      })
    }, {
      root: null, // 相对的视口元素，传入 null 则为顶级文档视口
      rootMargin: '0px 0px 0px 0px', // 触发交叉回调时被观察元素相对于视口的偏移量
      threshold: [0.0001, 0.001, 0.01, 0] // 一个具体数值或数值数组， 触发交叉回调时被观察元素的可见比例
    })
    observer.observe(ele) // 监听加载更多的位置
  }
}