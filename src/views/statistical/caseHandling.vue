<template>
  <div class="main-content">
    <header-search :isShowRouter="true" @search="search" />
    <div class="caseClosure pdb20 white">
      <div class="eltabs pdt16 palr24">
        <p class="tableTitle">全市法院长期未结案件统计</p>
        <sptable :table-data="tableData" :table-header="tableConfig" height="500"></sptable>
      </div>
    </div>
  </div>
</template>
<script>
import headerSearch from '../components/headerSearch'
import sptable from '@/components/table/index'
export default {
  components: { headerSearch, sptable },
  data() {
    return {
      // 表格数据
      tableData: [
          {
            fy: '刑一庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '民一庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '刑二庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '民二庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '刑三庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '民三庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '刑四庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '民四庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '行政庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          },
          {
            fy: '行政庭',
            jc: '1231',
            xstb: '',
            ja: '1231',
            xs: '56.23%',
            jal: '56.23%',
            jaltb: '56.23%',
            mbcz: '56.23%',
            rjjas: '1231',
            fgrs: '1231'
          }
        ],
      // 表头数据
      tableConfig: [
          {
            id: 'fy',
            label: '法院',
            prop: 'fy'
          },
          {
            id: 'jc',
            label: '旧存',
            prop: 'jc'
          },
          {
            id: 'xstb',
            label: '新收同比',
            prop: 'xstb'
          },
          {
            id: 'ja',
            label: '结案',
            prop: 'ja'
          },
          {
            id: 'xs',
            label: '新收',
            prop: 'xs'
          },
          {
            id: 'jal',
            label: '结案率',
            prop: 'jal'
          },
          {
            id: 'jaltb',
            label: '结案率同比',
            prop: 'jaltb'
          },
          {
            id: 'mbcz',
            label: '与目标结案率差值',
            prop: 'mbcz'
          },
          {
            id: 'rjjas',
            label: '法官人均结案数',
            prop: 'rjjas'
          },
          {
            id: 'fgrs',
            label: '法官人数',
            prop: 'fgrs'
          }
        ]
    }
  },
  methods: {
    search() {},
  }
}
</script>