<template>
  <div class="diagnosis-report">
    <div class="report-container">
      <div id="bar1" class="common-echarts"></div>
      <div id="bar2" class="common-echarts"></div>
      <div id="line1" class="common-echarts"></div>
      <div id="barLine1" class="common-echarts"></div>
      <div id="pie1" class="common-echarts"></div>
      <div id="pie2" class="common-echarts"></div>
      <div id="pie3" class="common-echarts"></div>
      <div id="pie4" class="common-echarts"></div>
      <div id="pie5" class="common-echarts"></div>
      <div id="liquidFill" class="common-echarts"></div>
      <div id="funnel" class="common-echarts"></div>
      <div id="scatter" class="common-echarts"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts"
require('echarts-liquidfill')
export default {
  name: "EchartsTest",
  data() {
    return {
    };
  },
  created () {
  },
  mounted() {
    this.getData()
  },
  methods: {
    drawBar(barData){
      let myChart = echarts.init(document.getElementById(barData.id))
      let seriesData = []
      for (let i = 0; i < barData.legend.length; i++) {
        seriesData.push({ name: barData.legend[i], stack: '总量', type: 'bar', 
        barMaxWidth : 20, data: barData.data[i] })
      }
      let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          color: barData.color,
          grid: {
            top: '12%',
            left: "4%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          legend: {
            itemWidth: 12,
            itemHeight: 12,
            right: "4%",
            data: barData.legend
          },
          xAxis: {
            axisLabel: {
              textStyle: {
                color: '#5D6573',
                fontSize: 12
              }
            },
            data: barData.category
          },
          yAxis: [{
            name: barData.yAxisName, nameTextStyle: { color:'#5D6573'}, position: 'left',nameGap: 25,
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                width: 1,
                color: "#E2E6EC"
              }
            },
            axisLabel: {
              textStyle: {
                color: '#5D6573',
                fontSize: 12
              },
            },
          }],
          series: seriesData
      }
      myChart.resize()
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    },
    drawLine(LineData){
        let myChart = echarts.init(document.getElementById(LineData.id))
        let seriesData = []
        for (let i = 0; i < LineData.legend.length; i++) {
          seriesData.push({ name: LineData.legend[i],type: 'line', symbol: 'circle', symbolSize: 10,
          barMaxWidth : 20, data: LineData.data[i] })
        }
        let option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
              }
            },
            color: LineData.color,
            grid: {
              top: '12%',
              left: "4%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            legend: {
              right: "4%",
              data: LineData.legend
            },
            xAxis: {
              axisLabel: {
                textStyle: {
                  color: '#5D6573',
                  fontSize: 12
                },
                // formatter: function(value, index) {
                // }
},
              data: LineData.category
            },
            yAxis: {
              name: LineData.yAxisName, nameTextStyle: { color:'#5D6573'}, position: 'left',nameGap: 25,
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  width: 1,
                  color: "#E2E6EC"
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#5D6573',
                  fontSize: 12
                },
},
            },
            series: seriesData
        }
        myChart.resize()
				myChart.clear()
        myChart.setOption(option)
        window.addEventListener("resize", function() {
					myChart.resize()
				})
    },
    drawBarLine(barData) {
      let myChart = echarts.init(document.getElementById(barData.id))
      let seriesData = []
        for (let i = 0; i < barData.legend.length; i++) {
          seriesData.push({ name: barData.legend[i], type: barData.seriesType[i], yAxisIndex: barData.yAxisIndex[i],symbol: 'circle', symbolSize: 10,
          barMaxWidth : 20, data: barData.data[i] })
        }
        let option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            color: barData.color,
            grid: {
              top: '12%',
              left: "4%",
              right: "4%",
              bottom: "5%",
              containLabel: true
            },
            legend: {
              itemWidth: 12,
              itemHeight: 12,
              right: "4%",
              data: barData.legend
            },
            xAxis: [{
              axisLabel: {
                textStyle: {
                  color: '#5D6573',
                  fontSize: 12
                }
},
              data: barData.category
            }],
            yAxis: [
              {
                type: 'value',
                name: barData.yAxisNameLeft,
                nameTextStyle: { color:'#5D6573'}, position: 'left',nameGap: 25,
                min: 0,
                interval: 1000,
                splitLine: {
                  show: true,
                  lineStyle: {
                    type: "dashed",
                    width: 1,
                    color: "#E2E6EC"
                  }
                },
                axisLabel: {
                  textStyle: {
                    color: '#5D6573',
                    fontSize: 12
                  },
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: barData.yAxisNameRight,
                nameLocation: 'start',
                nameTextStyle: { color:'#5D6573'}, position: 'right',nameGap: 25,
                min: 0,
                max: 100,
                interval: 20,
                splitLine: {
                  show: false,
                },
                axisLabel: {
                  textStyle: {
                    color: '#5D6573',
                    fontSize: 12
                  },
                  formatter: function(value) {
                    let val = value == 0 ? value : value+' %'
                    return val
                  },
                }
              }
            ],
          series: seriesData
    };
      myChart.resize()
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    },
    drawPie (pieData) {
      let sum = 0
      pieData.data.forEach((item)=> {
        sum = sum + item.value
      })
      let myChart = echarts.init(document.getElementById(pieData.id))
      let option = {
        title: [{
            show: pieData.titleShow ? pieData.titleShow : false,
            text: '{a|' + pieData.text + '}\n{c|'+sum+'}{b|' + pieData.pieUnit+'}',
						x: 'center',
						y: 'center',
						textStyle: {
							rich: {
								a: {
									color: '#2E3445',
									fontSize: 14,
									align: 'center',
									fontWeight: 'bold'
								},
								b: {
									color: "#2E3445",
									align: 'center',
									fontSize: 12,
								},
								c: {
									color: "#2E3445",
									fontSize: 14, 
                  padding: [10,0]
								}
							}
						},
					},{
            show: pieData.text2 ? true : false,
            text: pieData.text2,
            x: 'center',
            y: '80%',
            textStyle: {
                fontSize: 12,
                color:'#252733',
                fontWeight: 'normal',
            },
          }],
          tooltip: {
            show: pieData.tooltipShow ? false : true,
            trigger: 'item',
          },
        series: [
          {
            name: '',
            type: 'pie',
            color: pieData.color,
            roseType: pieData.roseType ? pieData.roseType : false,
            radius: pieData.radius,
            data: pieData.data,
            label: {
              show: pieData.seriesLabelShow ? pieData.seriesLabelShow: false,
              position: pieData.seriesLabelPosition == 'inside' ? 'inside' : 'outside', //饼图文字默认外面
              formatter: '{b}' + '\n\n\r' + '{c}件 {d}%', //文字换两行显示
              // formatter: '{b}' + '\n\n\r' + '{c}件 '+ '\n\n\r' +'{d}%', //文字换三行显示
            },
            labelLine: {
              show: pieData.seriesLabelLineShow ? pieData.seriesLabelLineShow: false,
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.resize()
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    },
    drawPie2 (pieData) {
      let myChart = echarts.init(document.getElementById(pieData.id))
      let option = {
        tooltip: {
          show: false,
          trigger: 'item',
        },
       title:[{
           text: pieData.title,
            x: 'center',
            y: '80%',
            textStyle: {
                fontSize: 12,
                color:'#252733',
                fontWeight: 'normal',
            },
       },{
         text: pieData.data[0].value+ '%',
          x: 'center',
          y: 'center',
          textStyle: {
              fontSize: '20',
              fontWeight: 'bold',
              color: '#333',
          },
       }],
       series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '50%'],
        clockwise: true,
        avoidLabelOverlap: false,
        hoverOffset: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    return pieData.color[params.dataIndex]
                }
            }
        },
        label: {
           normal: {
              formatter: function (params) {
                return params.value + '%';
              },
              position: 'center',
              show: false,
          },
        },
        emphasis: {
          label: {
              show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: pieData.data
    }]
      };
      myChart.resize()
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    },
    drawLiquidFill(liquidFillData) {
     let myChart = echarts.init(document.getElementById(liquidFillData.id))
     let option = {
            title: {
                text: liquidFillData.text,
                left: 'center',
                top: '90%',
                textStyle: {
                    color: '#2E3445',
                    fontWeight: 'bold',
                    fontSize: 16
                }
            },
            series: [{
                type: 'liquidFill',
                radius: '75%',
                center: ['50%', '50%'],
                amplitude: 20, //水波振幅
                data: [0.8,0.75], // data个数代表波浪数
                color: ['#92F3FF'], //波浪颜色
                outline: { //最外层边框显示控制
                    show: false,
                    borderDistance: 10, // 边框与球中间间距
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#ECECF8'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowColor: 'rgba(22, 22, 22, 0.5)',
                        shadowBlur: 10
                    }
                },
                backgroundStyle: {
                  borderWidth: 1, //外边框
                  borderColor: '#92F3FF', //边框颜色
                  color:  '#fff', //边框内部填充部分颜色
                },
                label: {
                    position: ['50%', '60%'],
                    formatter: liquidFillData.value + '%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 32
                    }
                }
            }]
        };
      myChart.resize()
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    },
    drawFunnel(funnelData) {
     let myChart = echarts.init(document.getElementById(funnelData.id))
     let option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}件'
      },
      series: [
        {
          name: '',
          type: 'funnel',
          color: funnelData.color,
          width: '40%',
          height: '45%',
          left: '5%',
          top: 0,
          label: {
            position: 'inside',
            color: '#fff',
            formatter: '{b}: {d}件'
          },
          data: funnelData.data
        },
      ]
    }; 
      myChart.resize()
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    },
    drawScatter(scatterData) {
     let myChart = echarts.init(document.getElementById(scatterData.id))
     let option = {
      grid: {
          top: '12%',
          left: "4%",
          right: "8%",
          bottom: "3%",
          containLabel: true
        },
      xAxis: {
        name: scatterData.xAxisName,
        // nameLocation: 'middle',
        nameTextStyle: {color:'#5D6573',}, position: 'right',nameGap: 25,
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
            width: 1,
            color: "#E2E6EC"
          }
        },
      },
      yAxis: {
        max: 100,
        name: scatterData.yAxisName,
        nameTextStyle: { color:'#5D6573'}, position: 'left',nameGap: 25,
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
            width: 1,
            color: "#E2E6EC"
          }
        },
        axisLabel: {
          textStyle: {
            color: '#5D6573',
            fontSize: 12
          },
          formatter: function(value) {
            let val = value == 0 ? value : value+' %'
            return val
          },
        }
      },
      series: [
        {
          symbolSize: 20,
          data: scatterData.data,
          type: 'scatter',
          itemStyle:{
            color: scatterData.color
        },
        }
      ]
    }; 
      myChart.resize()
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        myChart.resize()
      })
    },
    getData(){
      // 久押不决 柱状图
      let obj = {}
      obj.id = 'bar1'
      obj.color = ['#23C9DA']
      obj.yAxisName = '案件数(件)'
      obj.legend = ['']
      obj.category = ['刑一庭','刑二庭','刑三庭','民一庭','民二庭','民三庭','民四庭','民五庭']
      obj.data = [[2500,2600,2400,4100,4000,3300,3500,2700]]
      this.drawBar(obj);
      // 院领导看板-本院综合 质效指标分析 堆叠柱状图
      let obj1 = {}
      obj1.id = 'bar2'
      obj1.color = ['#23C9DA','#FD9656']
      obj1.yAxisName = '案件数(件)'
      obj1.legend = ['已完成','未完成']
      obj1.category = ['刑一庭','刑二庭','刑三庭','民一庭','民二庭','民三庭','民四庭','民五庭','民六庭','民七庭']
      obj1.data = [[2500,2600,2400,4100,4000,3300,3500,2700,2200,2000],[1400,1300,2000,900,1200,1300,1200,500,1300,800]]
      this.drawBar(obj1);
      // 超审限 折线图
      let objLine1 = {}
      objLine1.id = 'line1'
      objLine1.color = ['#23C9DA','#FD9656']
      objLine1.yAxisName = '数量(件)'
      objLine1.legend = ['超审限总数','超审变更总数']
      objLine1.category = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
      objLine1.data = [[2000,3000,3200,3400,5000,3300,3200,3100,4100,4050,4000,4900],[200,900,1500,1900,1800,1400,1800,1000,2100,2000,2200,2800]]
      this.drawLine(objLine1);
      // 庭长看板-审判监督庭 案件审理情况趋势 柱状折现图
      let objBarLine1 = {}
      objBarLine1.id = 'barLine1'
      objBarLine1.color = ['#23C9DA','#1889FA','#7786F3','#FD9656']
      objBarLine1.yAxisNameLeft = '案件数量(件)'
      objBarLine1.yAxisNameRight = '结案率'
      objBarLine1.legend = ['受理','新增','结案','结案率']
      objBarLine1.category = ['2022-01','2022-02','2022-03','2022-04','2022-05','2022-06','2022-07','2022-08','2022-09','2022-10','2022-11','2022-12']
      objBarLine1.data = [[2600,2600,2500,3900,4500,3200,3200,3100,1900,1800,1800,1100],[1800,2200,3200,4600,5000,4100,3800,4100,1000,1200,1500,1500],[1200,1600,2100,2900,3100,2700,2800,2800,1800,1800,1000,1100],[19,23,25,80,100,68,70,70,16,20,21,90]]
      objBarLine1.seriesType = ['bar','bar','bar','line']
      // objBarLine1.seriesType = ['line','line','line','line']
      objBarLine1.yAxisIndex = [0,0,0,1]
      this.drawBarLine(objBarLine1)
      // 庭长看板-立案庭 网上立案情况 饼图
      let objPie1 = {}
      objPie1.id = 'pie1'
      objPie1.color = ['#23C9DA','#FD9656','#F9D029','#1889FA']
      objPie1.pieUnit = '件'
      objPie1.radius = '50%'
      objPie1.seriesLabelShow = true
      objPie1.seriesLabelLineShow = true
      objPie1.data = [{name:'执行',value:40},{name:'国家赔偿金',value:15},{name:'民事一审',value:20},{name:'行政一审',value:25}]
      this.drawPie(objPie1)
      // 庭长看板-立案庭 网上诉前调解率 饼图
      let objPie2 = {}
      objPie2.id = 'pie2'
      objPie2.color = ['#23C9DA','#BFEFF4']
      objPie2.pieUnit = '件'
      objPie2.data = [{name:'执行',value:63.5},{name:'国家赔偿金',value:26.5}]
      objPie2.title = '网上调解成功率'
      this.drawPie2(objPie2)
      // 庭长看板-审判监督庭 行政行为种类分布情况 饼图
      let objPie3 = {}
      objPie3.id = 'pie3'
      objPie3.color = ['#F9D029','#5AD8A6','#7786F3','#23C9DA','#1889FA','#FD9656']
      objPie3.text = '总量'
      objPie3.pieUnit = '件'
      objPie3.radius = ['40%', '70%']
      objPie3.titleShow = true
      objPie3.data = [{name:'离婚后财产纠纷',value:30},{name:'赡养纠纷',value:30},{name:'侵害集体经济组织成员权益纠纷',value:30},{name:'建筑物和其他土地附着物抵押权纠纷',value:25},{name:'土地承包经营权转包合同纠纷1',value:25},{name:'土地承包经营权转包合同纠纷2',value:25}]
      this.drawPie(objPie3)
      // 庭长看板-审判监督庭 涉案行政机关分析 饼图
      let objPie4 = {}
      objPie4.id = 'pie4'
      objPie4.color = ['#23C9DA','#1889FA','#FD9656','#F9D029']
      objPie4.pieUnit = '件'
      objPie4.radius = '50%'
      objPie4.roseType = 'radius'
      objPie4.data = [{name:'申请再审',value:927},{name:'申诉人向本院提出申诉',value:955},{name:'下级法院呈现报最终审查',value:186},{name:'抗诉',value:355}]
      this.drawPie(objPie4)
      // 庭长看板-行政 上诉结果分布 饼图
      let objPie5 = {}
      objPie5.id = 'pie5'
      objPie5.color = ['#1889FA','#23C9DA','#7786F3','#FD9656','#73DEB3']
      objPie5.titleShow = true
      objPie5.text = ''
      objPie5.pieUnit = '件'
      objPie5.radius = ['40%', '70%']
      objPie5.seriesLabelShow = true
      objPie5.seriesLabelLineShow = true
      objPie5.data = [{name:'发回重审',value:10},{name:'依法改判',value:18},{name:'裁定驳回',value:11},{name:'裁定驳回2',value:45},{name:'维持原判',value:78}]
      this.drawPie(objPie5)
      // 水球型
      let objLiquidFill = {}
      objLiquidFill.id = 'liquidFill'
      objLiquidFill.value = 0.75
      objLiquidFill.text = '结案率'
      this.drawLiquidFill(objLiquidFill)
      // 庭长看板-立案庭 诉前调解分析 桑基图
      let objFunnel = {}
      objFunnel.id = 'funnel'
      objFunnel.color = ['#23C9DA','#1889FA','#FD9656']
      objFunnel.data = [{name:'新收案件',value:123},{name:'诉前调解收案',value:103},{name:'调解成功',value:67}]
      this.drawFunnel(objFunnel)
      //散点图
      let objScatter = {}
      objScatter.id = 'scatter'
      objScatter.color = '#23C9DA'
      objScatter.data = [
            [10.0, 80],
            [28.07, 65],
            [33.0, 78],
            [49.05, 81],
            [51.0, 33],
            [6.0, 66],
            [80.4, 81],
            [85.0, 13],
            [90.0, 6],
            [95.0, 43],
            [110.0, 86],
          ],
      objScatter.xAxisName = '人均结案数'
      objScatter.yAxisName = '结案率'
      this.drawScatter(objScatter)
    }
  }
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.diagnosis-report {
  display: flex;
  justify-content: center;
}
.report-container {
  width: 70%;
  margin-bottom: 20px;
}
.common-echarts {
  width: 100%;
  height: 350px;
  margin-bottom: 50px;
}
</style>
