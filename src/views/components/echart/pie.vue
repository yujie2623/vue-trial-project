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
            console.log(pieData)
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
                                y: pieData.titleY ? pieData.titleY :'center',
                                textStyle: {
                                    rich: {
                                        a: {
                                            color: '#252733',
                                            fontSize: 16,
                                            align: 'center',
                                            fontWeight: 500
                                        },
                                        b: {
                                            color: "#252733",
                                            align: 'center',
                                            fontSize: 18,
                                        },
                                        c: {
                                            align: 'center',
                                            color: "#252733",
                                            fontSize: 18, 
                                        padding: [10,0]
                                        }
                                    }
                                },
                            }, {
                                show: pieData.text2 ? true : false,
                                text: pieData.text2,
                                x: 'center',
                                y: pieData.textY2? pieData.textY2 : '80%',
                                textStyle: {
                                    fontSize: 18,
                                    color:'#2E3445',
                                    fontWeight: 500,
                                },
                            }],
                tooltip: {
                    show: pieData.tooltipShow ? false : true,
                    trigger: 'item',
                    confine: true
                },
                series: [
                {
                    name: '',
                    type: 'pie',
                    color: pieData.color,
                    roseType: pieData.roseType ? pieData.roseType : false,
                    radius: pieData.radius,
                    center: pieData.center ? pieData.center : ['50%','50%'],
                    data: pieData.data,
                    label: {
                    color: pieData.seriesLabelPosition == 'inside' ? '#fff' : '#2E3445',
                    show: pieData.seriesLabelShow ? pieData.seriesLabelShow: false,
                    position: pieData.seriesLabelPosition == 'inside' ? 'inside' : 'outside', //饼图文字默认外面
                    formatter: pieData.seriesLabelPosition == 'inside' ? '{d}%' : '{b}' + '\n\n\r' + '{c}件 {d}%', //文字换两行显示
                    // formatter: pieData.seriesLabelPositino ? '{d}%' : '{b}' + '\n\n\r' + '{c}件 {d}%', //文字换两行显示
                    // formatter: '{b}' + '\n\n\r' + '{c}件 '+ '\n\n\r' +'{d}%', //文字换三行显示
                    },
                    labelLine: {
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
            console.log(option)
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