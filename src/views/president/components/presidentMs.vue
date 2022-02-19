<template>
  <div>
    <base-header title="案件基本情况分析"></base-header>
    <!-- <div class="board borderradius white">
      <h1 class="flexCenter palr24">案件整体情况</h1>
      <el-row class="boradMain palr24 pdb16">
        <el-col :span="18">
          <el-row class="boradList" type="flex" :gutter="20">
            <el-col :span="8" class="mrt16">
              <div class="boardItemWrap">
                <strong>新收</strong>
                <div class="item pdt16">
                  <span class="boradBtn">
                    <b>460,359</b><i>件</i>
                  </span>
                  <span class="boardNum">
                    <span>同比</span>
                    <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                  </span>
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="mrt16">
              <div class="boardItemWrap">
                <strong>旧存</strong>
                <div class="item pdt16">
                  <span class="boradBtn">
                    <b>2,359</b><i>件</i>
                  </span>
                  <span class="boardNum">
                    <span>同比</span>
                    <span class="maincolor">+10.00% <i class="el-icon-top"></i></span>
                  </span>
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="mrt16">
              <div class="boardItemWrap">
                <strong>结案</strong>
                <div class="item pdt16">
                  <span class="boradBtn">
                    <b>12340</b><i>件</i>
                  </span>
                  <span class="boardNum">
                    <span>同比</span>
                    <span class="maincolor">+10.00% <i class="el-icon-top"></i></span>
                  </span>
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="mrt16">
              <div class="boardItemWrap">
                <strong>人均结案数</strong>
                <div class="item pdt16">
                  <span class="boradBtn">
                    <b>460,359</b><i>件</i>
                  </span>
                  <span class="boardNum">
                    <span>同比</span>
                    <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                  </span>
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="mrt16">
              <div class="boardItemWrap">
                <strong>结收比</strong>
                <div class="item pdt16">
                  <span class="boradBtn">
                    <b>2,359</b><i>件</i>
                  </span>
                  <span class="boardNum">
                    <span>同比</span>
                    <span class="maincolor">+10.00% <i class="el-icon-top"></i></span>
                  </span>
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="mrt16">
              <div class="boardItemWrap">
                <strong>调解和撤诉</strong>
                <div class="item pdt16">
                  <span class="boradBtn">
                    <b>12340</b><i>件</i>
                  </span>
                  <span class="boardNum">
                    <span>同比</span>
                    <span class="maincolor">+6.98% <i class="el-icon-top"></i></span>
                  </span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="board borderradius white mrtb16">
          <h1 class="flexCenter palr24">本院人均结案数和结案率分布</h1>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="board borderradius white mrtb16">
          <h1 class="flexCenter palr24">新收案件类型分布</h1>
          <div class="typeDistribution palr24 pdt16 pdb16">
            <div style="height: 250px;width:200px"></div>
            <el-table :data="tableData" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
              <el-table-column prop="ajlx" label="案件类型" show-overflow-tooltip="">
                <template slot-scope="scope">
                  <span class="shape" :style="{ backgroundColor: colorType.get(scope.row.ajlx) }"></span>{{scope.row.ajlx}}
                </template>
              </el-table-column>
              <el-table-column prop="xsl" label="新收量" align="center"></el-table-column>
              <el-table-column prop="zb" label="占比" align="center"></el-table-column>
              <el-table-column prop="tb" label="同比" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">案件审理情况统计</h1>
      <div style="min-height: 300px"></div>
    </div>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">质效指标分析</h1>
      <div style="min-height: 300px">
        <h2>各市审判质效约束性重点指标完成情况</h2>
      </div>
      <div class="palr24 pdb16">
        <h2>本院已完成指标排序（基准值）</h2>
        <el-table :data="tableData1" class="table" style="width: 100%" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
          <el-table-column prop="name" label="指标名称" show-overflow-tooltip=""></el-table-column>
          <el-table-column prop="jzz" label="基准值" align="center"></el-table-column>
          <el-table-column prop="mbz" label="目标值" align="center"></el-table-column>
          <el-table-column prop="wcdwsl" label="完成单位数量" align="center"></el-table-column>
          <el-table-column prop="pjwcl" label="平均完成率" align="center"></el-table-column>
          <el-table-column prop="zgwcl" label="最高完成率" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="board borderradius white mrtb16">
      <el-tabs class="tabs" v-model="activeName">
        <el-tab-pane label="长期未结" name="first">
          <el-row class="boradList boradNormalList pdb16 palr24" type="flex" :gutter="20">
            <el-col :span="8" class="mrt16">
              <div class="bg">
                <div class="boardItemWrap">
                  <strong>一年以上三年以下长期未结案件</strong>
                  <div class="item pdt16">
                    <span class="boradBtn">
                      <b>460,359</b><i>篇</i>
                    </span>
                    <span class="boardNum">
                      <span>同比</span>
                      <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                    </span>
                  </div>
                </div>
                <div class="boardItemWrap line">
                  <strong>占诉讼案件</strong>
                  <div class="item pdt16">
                    <span class="boradBtn">
                      <b>460,359</b><i>篇</i>
                    </span>
                    <span class="boardNum">
                      <span>同比</span>
                      <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                    </span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="mrt16">
              <div class="bg">
                <div class="boardItemWrap">
                  <strong>三年以上长期未结案件</strong>
                  <div class="item pdt16">
                    <span class="boradBtn">
                      <b>460,359</b><i>场</i>
                    </span>
                    <span class="boardNum">
                      <span>同比</span>
                      <span class="maincolor">9.46% <i class="el-icon-top"></i></span>
                    </span>
                  </div>
                </div>
                <div class="boardItemWrap line">
                  <strong>占诉讼案件</strong>
                  <div class="item pdt16">
                    <span class="boradBtn">
                      <b>460,359</b><i>件</i>
                    </span>
                    <span class="boardNum">
                      <span>同比</span>
                      <span class="maincolor">9.46% <i class="el-icon-top"></i></span>
                    </span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8"></el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="久押不决" name="second">
          <el-row class="pdb16 palr24" type="flex" :gutter="20">
            <el-col :span="4">
              <div class="shapeWrap shapeBg mrt6">
                <strong>总量</strong>
                <p class="btn mrtb30"><b>460,359</b><i>场</i></p>
                <p class=" tb">
                  <span class="fontSize16">同比</span>
                  <span class="maincolor">9.46% <i class="el-icon-top"></i></span>
                </p>
              </div>
            </el-col>
            <el-col :span="20">
              <h2>各地久押不决案件数量</h2>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="超审限" name="third">
          <el-row class="pdb16 palr24" type="flex" :gutter="20">
            <el-col :span="5">
              <div class="shapeWrap shapeBg mrt6">
                <strong>当前总数</strong>
                <p class="btn mrtb30"><b>460,359</b><i>场</i></p>
                <p class=" tb">
                  <span class="fontSize16">同比</span>
                  <span class="maincolor">9.46% <i class="el-icon-top"></i></span>
                </p>
                <p class="tb mrt16">
                  <span class="fontSize16">同期</span>
                  <span>34341 件</span>
                </p>
              </div>
            </el-col>
            <el-col :span="19">
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">司法公开</h1>
      <el-row class="boradList boradNormalList pdb16 palr24" type="flex" :gutter="60">
        <el-col :span="8" class="mrt16">
          <div class="bg">
            <div class="boardItemWrap">
              <strong>文书上网数</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>460,359</b><i>篇</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                </span>
              </div>
            </div>
            <div class="boardItemWrap line">
              <strong>文书上网数</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>460,359</b><i>篇</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mrt16">
          <div class="bg">
            <div class="boardItemWrap">
              <strong>庭审直播数</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>460,359</b><i>场</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                </span>
              </div>
            </div>
            <div class="boardItemWrap line">
              <strong>庭审直播数</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>460,359</b><i>场</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mrt16">
          <div class="bg">
            <div class="boardItemWrap">
              <strong>执行公开数</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>460,359</b><i>场</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                </span>
              </div>
            </div>
            <div class="boardItemWrap line">
              <strong>执行公开数</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>460,359</b><i>场</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span>
                </span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div> -->
  </div>
</template>
<script>
import baseHeader from '../../components/baseHeader'
export default {
  name: 'presidentMs',
  components: { baseHeader },
  data() {
    return {
      tableData:[
        {
          ajlx: '民事',
          xsl: '2159',
          zb: '49.12',
          tb: '2.9%'
        },
        {
          ajlx: '刑事',
          xsl: '2159',
          zb: '49.12',
          tb: '0.9%'
        },
        {
          ajlx: '行政',
          xsl: '2159',
          zb: '49.12',
          tb: '5.6%'
        },
        {
          ajlx: '执行',
          xsl: '2159',
          zb: '49.12',
          tb: '8.2%'
        },
        {
          ajlx: '赔偿与救助',
          xsl: '2159',
          zb: '49.12',
          tb: '4.1%'
        }
      ],
      tableData1: [
        {
          name: '结案率',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '当庭宣判率',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '长期未结',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '久押不决',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '结案率',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '结案率',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '结案率',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '结案率',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '长期未结',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        },
        {
          name: '久押不决',
          jzz: '80.12%',
          mbz: '90.12%',
          wcdwsl: '9',
          pjwcl: '100%',
          zgwcl: '民一庭'
        }
      ],
      activeName: 'first'
    }
  },
  computed: {
    colorType() {
      const colorType = new Map()
      colorType.set('民事', '#23C9DA')
      colorType.set('刑事', '#659DFF')
      colorType.set('行政', '#F9D029')
      colorType.set('执行', '#FD9656')
      colorType.set('赔偿与救助', '#7786F3')
      return colorType
    }
  }
}
</script>