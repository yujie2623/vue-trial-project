<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'stack',
    props: {
        data: {
            type: Object,
            default: () =>  {}
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
                    top: '16%',
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
    },
    mounted() {
        // 院领导看板-本院综合 质效指标分析 堆叠柱状图
        // let obj1 = {}
        // this.data.id = 'bar2'
        // this.data.color = ['#23C9DA','#FD9656']
        // this.data.yAxisName = '案件数(件)'
        // this.data.legend = ['已完成','未完成']
        // this.data.category = ['刑一庭','刑二庭','刑三庭','民一庭','民二庭','民三庭','民四庭','民五庭','民六庭','民七庭']
        // this.data.data = [[2500,2600,2400,4100,4000,3300,3500,2700,2200,2000],[1400,1300,2000,900,1200,1300,1200,500,1300,800]]
        this.drawBar(this.data);
    }
}
</script>