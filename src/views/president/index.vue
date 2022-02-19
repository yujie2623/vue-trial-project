<template>
  <div class="main-content">
    <header-search :options="options" :optionsTs="optionsTs" :isShowTs="isShowTs" @search="search" />
    <component :is="currentView"></component>
  </div>
</template>
<script>
import headerSearch from '../components/headerSearch'
import presidentMs from './components/presidentMs'
export default {
  components: { headerSearch, presidentMs },
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
        this.currentView = 'civil'
      } else {
        this.currentView = 'presidentMs'
      }
    }
  }
}
</script>