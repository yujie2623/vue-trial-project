<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'scatter',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        drawScatter(scatterData) {
            let myChart = echarts.init(document.getElementById(scatterData.id))
            let option = {
            grid: {
                top: '15%',
                left: "2%",
                right: "15%",
                bottom: "3%",
                containLabel: true
                },
            xAxis: {
                name: scatterData.xAxisName,
                // nameLocation: 'middle',
                nameTextStyle: {color:'#5D6573',}, position: 'right',nameGap: 15,
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
    },
    mounted() {
        //散点图
    //   let objScatter = {}
    //   objScatter.id = 'scatter'
    //   objScatter.color = '#23C9DA'
    //   objScatter.data = [
    //         [10.0, 80],
    //         [28.07, 65],
    //         [33.0, 78],
    //         [49.05, 81],
    //         [51.0, 33],
    //         [6.0, 66],
    //         [80.4, 81],
    //         [85.0, 13],
    //         [90.0, 6],
    //         [95.0, 43],
    //         [110.0, 86],
    //       ],
    //   objScatter.xAxisName = '人均结案数'
    //   objScatter.yAxisName = '结案率'
      this.drawScatter(this.data)
    }
}
</script>