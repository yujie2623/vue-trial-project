<template>
  <div class="main-content">
    <header-search :options="options" :optionsTs="optionsTs" :isShowTs="isShowTs" @search="search" />
    <component :is="currentView"></component>
  </div>
</template>
<script>
import headerSearch from '../components/headerSearch'
import presidentMs from './components/presidentMs'
import presidentXs from './components/presidentXs'
import presidentXz from './components/presidentXz'
import presidentJd from './components/presidentJd'
import presidentLat from './components/presidentLat'
export default {
  components: { headerSearch, presidentMs, presidentXs, presidentXz, presidentJd, presidentLat },
  data() {
    return {
      options: [{
        value: '1',
        label: '民事庭'
      }, {
        value: '2',
        label: '刑事庭'
      }, {
        value: '3',
        label: '行政庭'
      }, {
        value: '4',
        label: '审判监督庭'
      },
      {
        value: '5',
        label: '立案庭'
      }],
      currentView: 'presidentMs',
      selcectVal: '1',
      isShowTs: true,
      optionsTs: [
        {
          value: '1',
          label: '刑一庭'
        }, {
          value: '2',
          label: '刑二庭'
        },
        {
          value: '3',
          label: '刑三庭'
        },
        {
          value: '4',
          label: '刑四庭'
        }
      ]
    }
  },
  methods: {
    search(val) {
      this.selcectVal = val
      if (val === '2') {
        this.currentView = 'presidentXs'
      } else if (val === '3') {
        this.currentView = 'presidentXz'
      } else if (val === '4') {
        this.currentView = 'presidentJd'
      } else if (val === '5') { 
        this.currentView = 'presidentLat'
      } else {
        this.currentView = 'presidentMs'
      }
    }
  }
}
</script>