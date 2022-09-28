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
  }
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    myChart.resize() //页面大小变化后Echarts也更改大小
  })
}
// 掌握技能 
export const initSkill = function () {
  var skillRef = this.$refs.skill
  var myChart = echarts.init(skillRef)
  var option = {
    grid: {
      top:'10px',
      left: '3%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,  // y轴数据反转，与数组的顺序一致
        data: ['Node', 'Vue', 'Javascript', 'CSS3', 'HTML5'],
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "rgba(255,255,255,0.6)",
          fontSize: 12
        },
        axisTick: {
          show:false
        }
      },
      {
        inverse: true,  // y轴数据反转，与数组的顺序一致
        data: [39, 43, 85, 35, 21],
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "rgba(255,255,255,0.6)",
          fontSize: 12
        },
        axisTick: {
          show:false
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        barCategoryGap: 50,
        barWidth: 9,
        data: [39, 43, 85, 35, 21],
        itemStyle: {
          barBorderRadius: 20, // 修改柱子圆角
          color: function(params){
            const myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6', '#1890ff']
            return myColor[params.dataIndex % myColor.length]
          }
        },
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
          color: '#fff'
        }
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barCategoryGap: 60,
        barWidth: 14,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          barBorderRadius: 20, // 修改柱子圆角
          borderWidth:2,
        },
      },
    ]
  }
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    myChart.resize() //页面大小变化后Echarts也更改大小
  });
}
// 折线图
export const initPersonNum = function () {
  var personNumRef = this.$refs.personNum
  var myChart = echarts.init(personNumRef)
  var option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      color: '#fff',
      // data: ['新增粉丝', '新增游客'], // 当serise 有name值时， legend 不需要写data
      right: '5%',
      textStyle: {
        color:'#4c9bfd'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true,
      borderColor: '#012f4a'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfb'
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfb'
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210, 123, 221, 213, 169, 242]
      },
      {
        name: '新增游客',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310, 257, 248, 733, 494, 223]
      },
    ]
  }
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    myChart.resize() //页面大小变化后Echarts也更改大小
  })
}