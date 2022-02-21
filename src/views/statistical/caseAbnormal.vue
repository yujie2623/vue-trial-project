<template>
  <div class="main-content">
    <header-search :isShowRouter="true" @search="search" />
    <div class="caseClosure pdb20 white">
      <el-tabs v-model="activeName" type="card" class="eltabs pdt16 palr24" @tab-click="handleClick">
        <el-tab-pane :label="item.label" :name="item.name" v-for="item in tablist" :key="item.name">
          <p class="tableTitle">{{item.title}}</p>
            <sptable v-if="activeName === item.name" :table-data="tableData" :table-header="tableConfig" height="500"></sptable>
        </el-tab-pane>
      </el-tabs>
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
      activeName: 'first',
      tablist: [
        {
          name: 'first',
          label: '全市法院长期未结案件统计',
          title: '2021年1-12月海淀区人民法院案件收'
        },
        {
          name: 'second',
          label: '全市法院久押不决案件统计',
          title: '2021年1-12月海淀区人民法院案件收结案情况统计'
        }
      ],
      // 表格数据
      tableData: [],
      // 表头数据
      tableConfig: []
    }
  },
  methods: {
    search() {},
    handleClick(tabs) {
      if (tabs.paneName === 'first') {
        this.tableData = [
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
        ]
        this.tableConfig = [
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
      } else {
        this.tableData = [
          {
            ajlx: '刑事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '刑事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '管辖案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '刑事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '刑事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '刑事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '刑事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '刑事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '管辖案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          },
          {
            ajlx: '民事案件',
            jc: '1234',
            xstb: '45.23%',
            ja: '1234',
            jal: '49.12%',
            jaltb: '12%'
          }
        ]
        this.tableConfig = [
          {
            id: 'ajlx',
            label: '案件类型',
            prop: 'ajlx'
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
            id: 'jal',
            label: '结案率',
            prop: 'jal'
          },
          {
            id: 'jaltb',
            label: '结案率同比',
            prop: 'jaltb'
          }
        ]
      }
    }
  },
  mounted() {
      this.tableData = [
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
        ]
        this.tableConfig = [
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
}
</script>