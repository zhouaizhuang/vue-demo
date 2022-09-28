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
          borderRadius: [3,3,0,0]
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
// 播放量
export const initPlayNum = function () {
  var playNumRef = this.$refs.playNum
  var myChart = echarts.init(playNumRef)
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '10',
      right: '30',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: '播放量',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0,color: "rgba(1, 132, 213, 0.4)" }, // 渐变色的起始颜色
            { offset: 0.8, color: "rgba(1, 132, 213, 0.1)" }], // 渐变线的结束颜色
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        smooth: true,
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: '转发量',
        type: 'line',
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0,0,0,1,
              [
                {offset: 0,color: "rgba(0, 216, 135, 0.4)"},
                {offset: 0.8,color: "rgba(0, 216, 135, 0.1)"}
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        smooth: true,
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    myChart.resize() //页面大小变化后Echarts也更改大小
  })
}
// 初始化年龄的饼图
export const initAgePie = function () {
  var agePieRef = this.$refs.agePie
  var myChart = echarts.init(agePieRef)
  const option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br/>{b} : {c}人({d}%)' // '{a}<br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      left: 'center',
      itemWidth:10,
      itemHeight:10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '10'
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ["50%", "42%"], // 设置饼形图在容器中的位置
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 10,name: "0岁以上"},
          {value: 40,name: "20-29岁"},
          {value: 20,name: "30-39岁"},
          {value: 20,name: "40-49岁"},
          {value: 10,name: "50岁以上"}
        ]
      }
    ]
  }
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    myChart.resize() //页面大小变化后Echarts也更改大小
  })
}