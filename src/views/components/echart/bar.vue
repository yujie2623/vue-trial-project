<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'bar',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
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
        }
    },
    mounted() {
        this.drawBar(this.data)
    }
}
</script>