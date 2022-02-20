<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'barline',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
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
        }
    },
    mounted() {
        this.drawBarLine(this.data)
    }
}
</script>