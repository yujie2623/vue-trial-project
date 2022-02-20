<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'lineEchart',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        drawLine(LineData){
            let myChart = echarts.init(document.getElementById(LineData.id))
            let seriesData = []
            for (let i = 0; i < LineData.legend.length; i++) {
            seriesData.push({ name: LineData.legend[i],type: 'line', symbol: 'circle', symbolSize: 10,smooth:LineData.smooth ? true : false,
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
                top: '18%',
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
    },
    mounted() {
        // 超审限 折线图
        // let objLine1 = {}
        // objLine1.id = 'line1'
        // objLine1.color = ['#23C9DA','#FD9656']
        // objLine1.yAxisName = '数量(件)'
        // objLine1.legend = ['超审限总数','超审变更总数']
        // objLine1.category = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        // objLine1.data = [[2000,3000,3200,3400,5000,3300,3200,3100,4100,4050,4000,4900],[200,900,1500,1900,1800,1400,1800,1000,2100,2000,2200,2800]]
        this.drawLine(this.data);
    }
}
</script>