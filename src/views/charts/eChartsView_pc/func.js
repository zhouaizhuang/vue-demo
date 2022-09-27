import * as echarts from 'echarts'
// 就业行业
export const initIndustry = function (){
  var industryRef = this.$refs.industry
  var myChart = echarts.init(industryRef)
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type:'shadow' // 'line' | 'shadow'
      }
    },
    // 修改图表大小
    grid: {
      left: '0%',
      top:'10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    yAxis: {
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: [3,3,0,0]
        }
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    myChart.resize() //页面大小变化后Echarts也更改大小
  });
}