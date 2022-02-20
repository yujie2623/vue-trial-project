<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>

import * as echarts from "echarts"
require('echarts-liquidfill')
export default {
    name: 'liquidFill',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    },
    methods: {
        drawLiquidFill(liquidFillData) {
            let myChart = echarts.init(document.getElementById(liquidFillData.id))
            let option = {
                title: {
                    text: liquidFillData.text,
                    left: 'center',
                    top: liquidFillData.titleY ? liquidFillData.titleY : 'center',
                    textStyle: {
                        color: liquidFillData.titleColor,
                        fontWeight: 500,
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
    },
    mounted() {
        // 水球型
    //   let objLiquidFill = {}
    //   objLiquidFill.id = 'liquidFill'
    //   objLiquidFill.value = 0.75
    //   objLiquidFill.text = '结案率'
      this.drawLiquidFill(this.data)
    }
}
</script>
<style lang="scss" scoped>
#liquidFill {
    width: 100%;
    height: 100%;
}
</style>