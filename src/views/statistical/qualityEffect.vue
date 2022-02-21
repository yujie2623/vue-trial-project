<template>
  <div class="main-content">
    <header-search :isShowRouter="true" @search="search" />
    <div class="caseClosure pdb20 white">
      <div class="eltabs pdt16 palr24">
        <p class="tableTitle">全市法院长期未结案件统计</p>
        <sptable :table-data="tableData" :table-header="tableConfig" :isIndex="true" height="500"></sptable>
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
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          },
          {
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          },
          {
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          },
          {
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          },
          {
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          },
          {
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          },
          {
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          },
          {
            fy: '审限变更率（%）',
            jc: '1231',
            layt: '',
            laet: '1231',
            msyt: '56.23%',
            mset: '56.23%',
            xyt: '56.23%',
            jdt: '56.23%',
            xet: '1231',
            qy: '1231'
          }
        ],
      // 表头数据
      tableConfig: [
        {
          id: 'fy',
          label: '三级指标名称',
          prop: 'fy'
        },
        {
          id: 'jc',
          label: '指标值',
          prop: 'jc',
          children: [
            {
              id: 'layt',
              label: '立案一庭',
              prop: 'layt',
            },
            {
              id: 'laet',
              label: '立案二庭',
              prop: 'laet',
            },
            {
              id: 'msyt',
              label: '民事一庭',
              prop: 'msyt',
            },
            {
              id: 'mset',
              label: '民事二庭',
              prop: 'mset',
            },
            {
              id: 'xyt',
              label: '刑一庭',
              prop: 'xyt',
            },
            {
              id: 'jdt',
              label: '监督庭',
              prop: 'jdt',
            },
            {
              id: 'xet',
              label: '刑二庭',
              prop: 'xet',
            },
            {
              id: 'qy',
              label: '全院',
              prop: 'qy',
            }
          ]
        },
      ]
    }
  },
  methods: {
    search() {},
  }
}
</script>