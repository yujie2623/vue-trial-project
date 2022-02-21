<template>
  <div class="main-content">
    <header-search :isShowRouter="true" :isTime="false" @search="search" />
    <div class="scheme white palr24 pdt16 pdb16">
      <div class="schemeList mrb16" v-for="j in 3" :key='j'>
        <div class="listHeader pdb16">
          <h4 v-if="j === 1">各级法院</h4>
          <h4 v-if="j === 2">院内排名</h4>
          <h4 v-if="j === 3">员额法官</h4>
          <span><i class="el-icon-warning mainFontColor" />共3家异常</span>
        </div>
        <div class="listItem" v-if="j!== 3">
          <span class="itemcol20" v-for="i in 10" :key="i">
            <el-button class="primaryBtnColor">
              <i v-if="i%3 === 0" class="el-icon-warning mainFontColor" />六安市中级人民法院
            </el-button>
          </span>
        </div>
        <div class="listItem" v-else>
          <span class="itemcol20 itemcol10" v-for="i in 8" :key="i">
            <el-button class="primaryBtnColor">
              <i v-if="i%3 === 0" class="el-icon-warning mainFontColor" />周杰伦
            </el-button>
          </span>
        </div>
      </div>
      <div class="search pdb16">
        <div class="palr24">
          质效指标：
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="palr24">
          告警类型
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <el-button class="palr24 mrlr20">查询</el-button>
      </div>
      <sptable :table-data="tableData" :table-header="tableConfig" :isIndex="true" height="500"></sptable>
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
      value: '',
      value1: '',
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
<style lang="scss" scoped>
::v-deep .scheme {
    width: 100%;
    height: 100%;
    margin-top: 16px;
    .schemeList {
      border-bottom: 1px dotted #E3E3E3;
      .listHeader {
          display: flex;
          align-items: center;
          color: #2E3445;
          h4 {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          }
          span {
          padding-left: 20px;
          }
      }
      .listItem {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin: 0 10px;
          .itemcol20 {
          width: 20%;
          padding: 0 10px;
          margin-bottom: 16px;
          .primaryBtnColor {
              width: 100%;
              background: rgba(35, 201, 218, 0.05);
              box-shadow: inset 0px -1px 0px 0px #E2E6EC;
              border-radius: 2px;
              border: 1px solid #23C9DA;
          }
          }
          .itemcol10 {
          width: 10%;
          }
          
      }
    }
    .search {
      display: flex;
    }
}
</style>