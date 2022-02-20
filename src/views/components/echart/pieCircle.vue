<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'pie',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
      drawPie (pieData) {
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
            radius: ['65%', '90%'],
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
    },
    mounted() {
        // 庭长看板-审判监督庭 行政行为种类分布情况 饼图
        // let objPie3 = {}
        // objPie3.id = 'pie3'
        // objPie3.color = ['#F9D029','#5AD8A6','#7786F3','#23C9DA','#1889FA','#FD9656']
        // objPie3.text = ''
        // objPie3.text2 = '收案总量'
        // objPie3.pieUnit = '件'
        // objPie3.radius = ['60%', '100%']
        // objPie3.titleShow = true
        // objPie3.data = [
        //     { name:'离婚后财产纠纷', value:2159 },
        //     {name:'赡养纠纷',value:2159},
        //     {name:'侵害集体经济组织成员权益纠纷',value:2159},
        //     {name:'建筑物和其他土地附着物抵押权纠纷',value:2159},
        //     {name:'土地承包经营权转包合同纠纷1',value:2159},
        //     {name:'土地承包经营权转包合同纠纷2',value:2159}
        // ]
        this.drawPie(this.data)
    }
}
</script>