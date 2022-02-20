<template>
    <div :id="data.id" class="common-echarts"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
    name: 'roseEchart',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        
    },
    mounted() {
        this.drawPie(this.data)
    }
}
</script>