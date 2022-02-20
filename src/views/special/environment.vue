<template>
  <div class="main-content">
    <header-search :optionsArea="optionsArea" :isShowRouter="true" :isArea="true" @search="search" />
    <base-header title="环境资源专题"></base-header>
  </div>
</template>
<script>
import headerSearch from '../components/headerSearch'
import baseHeader from '../components/baseHeader'
// import barline from '@/views/components/echart/barline'
// import pie from '@/views/components/echart/pie'
// import bar from '@/views/components/echart/bar'
// import lineEchart from '@/views/components/echart/line'
export default {
  components: { headerSearch, baseHeader },
  data() {
    return {
      optionsArea: [{
        value: '1',
        label: '安徽省xxxx'
      }, {
        value: '2',
        label: '河北省xxxx'
      }, {
        value: '3',
        label: '河南省xxxx'
      }, {
        value: '4',
        label: '广东省xxxx'
      },
      {
        value: '5',
        label: '广西省xxxx'
      }]
    }
  },
  methods: {
    search() {}
  }
}
</script>