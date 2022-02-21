<template>
  <div class="main-content">
    <header-search :isShowRouter="true" :isTime="false" @search="search" />
    <div class="scheme white palr24 pdt16 pdb16">
      <el-card class="box-card" v-for="i in 10" :key="i">
        <div slot="header" class="header">
          <div class="title">2021年质效评估方案<em :class="[i%2 === 0 ? 'tipsred' : '', 'tips']">生效中</em></div>
          <div class="operation">
            <el-button v-if="i&2 !== 0" type="text">编辑</el-button>
            <el-button v-if="i%2 !== 0" type="text">删除</el-button>
            <el-button v-if="i%2 === 0" type="text">查看详情</el-button>
            <el-button type="text">复制</el-button>
          </div>
          
        </div>
        <div class="cardItem">
          <p>
            <span>生效周期：2021-01-01-2021-12-3</span>
            <span>最后修改日期：2022-2-21</span>
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import headerSearch from '../components/headerSearch'
export default {
  components: { headerSearch },
  data() {
    return {
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
  .tips {
    background: rgba(35, 201, 218, 0.05);
    -webkit-box-shadow: inset 0px -1px 0px 0px #e2e6ec;
    box-shadow: inset 0px -1px 0px 0px #e2e6ec;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 400;
    color: #1889FA;
    padding: 2px 9px;
    font-style: normal;
    border: 1px solid #1889FA;
    margin-left: 16px;
  }
  .tipsred {
    border: 1px solid #FD9656;
    color: #FD9656;
  }
  .box-card {
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #E0E4EB;
    &.is-always-shadow {
      box-shadow: 1px 1px 11px 0px rgba(181, 181, 181, 0.09);
    }
    .el-card__header {
      padding: 0;
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
      }
    }
    .el-card__body {
      .cardItem {
        font-weight: 400;
        color: #2E3445;
        line-height: 21px;
        span {
          padding-right: 2em;
        }
      }
    }
  }
}
</style>