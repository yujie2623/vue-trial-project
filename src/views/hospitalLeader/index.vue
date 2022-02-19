<template>
  <div class="main-content">
    <header-search :options="options" @search="search" />
    <component :is="currentView"></component>
  </div>
</template>
<script>
import headerSearch from '../components/headerSearch'
import comprehensive from './components/comprehensive'
import civil from './components/civil'
export default {
  components: { headerSearch, comprehensive, civil },
  data() {
    return {
      options: [{
        value: '1',
        label: '本院综合情况'
      }, {
        value: '2',
        label: '民事案件情况'
      }, {
        value: '3',
        label: '刑事案件情况'
      }, {
        value: '4',
        label: '行政案件情况'
      }],
      currentView: 'comprehensive',
      selcectVal: '1'
    }
  },
  methods: {
    search(val) {
      this.selcectVal = val
      if (val === '2') {
        this.currentView = 'civil'
      } else {
        this.currentView = 'comprehensive'
      }
    }
  }
}
</script>