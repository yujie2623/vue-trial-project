<template>
    <div id="funnel" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'funnel',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
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
                width: '100%',
                height: '100%',
                left: 0,
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
    },
    mounted() {
        this.drawFunnel(this.data)
    }
}
</script>