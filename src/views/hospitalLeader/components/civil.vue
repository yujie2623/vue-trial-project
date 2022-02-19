<template>
  <div>
    <div class="board borderradius white mrtb16">
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
            <el-table :data="tableData" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
              <el-table-column prop="ajlx" label="案由" show-overflow-tooltip></el-table-column>
              <el-table-column prop="xsl" label="新收量（件）" align="center"></el-table-column>
              <el-table-column prop="zb" label="占比" align="center"></el-table-column>
              <el-table-column prop="tb" label="同比" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">质效指标分析</h1>
      <el-row :gutter="20">
        <el-col :span="4">
          <div>aaa</div>
        </el-col>
        <el-col :span="20">
          <div class="palr24">
            <h2>完成基准值情况</h2>
            <el-table :data="tableData1" class="table" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
              <el-table-column prop="name" label="指标名称" show-overflow-tooltip=""></el-table-column>
              <el-table-column prop="jzz" label="基准值" align="center"></el-table-column>
              <el-table-column prop="mbz" label="目标值" align="center"></el-table-column>
              <el-table-column prop="wcdwsl" label="完成单位数量" align="center"></el-table-column>
              <el-table-column prop="pjwcl" label="平均完成率" align="center"></el-table-column>
              <el-table-column prop="zgwcl" label="最高完成率" align="center"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
      <div class="palr24 pdb16">
        <h2>各庭审判质效指标约束性重点指标完成情况</h2>
        <div style="min-height: 300px"></div>
      </div>
    </div>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">长期未结案件</h1>
      <el-row class="boradList boradNormalList pdb16 palr24" type="flex" :gutter="20">
        <el-col :span="8" class="mrt16">
          <div class="bg">
            <div class="boardItemWrap">
              <strong>一年以上三年以下长期未结案件</strong>
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
            <div class="boardItemWrap line">
              <strong>占诉讼案件</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>1.68%</b><i>件</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor red">-1.6 <i class="el-icon-bottom"></i></span>
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
                  <b>96</b><i>件</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor">+1.2 <i class="el-icon-top"></i></span>
                </span>
              </div>
            </div>
            <div class="boardItemWrap line">
              <strong>占诉讼案件</strong>
              <div class="item pdt16">
                <span class="boradBtn">
                  <b>0.52%</b><i>件</i>
                </span>
                <span class="boardNum">
                  <span>同比</span>
                  <span class="maincolor">+1.8 <i class="el-icon-top"></i></span>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </div>
    <div class="board borderradius mrtb16">
      <el-row class="boradList boradNormalList pdb16" type="flex" :gutter="20">
        <el-col :span="5">
          <div class="board borderradius white pdb20" style="height: 100%">
            <h1 class="flexCenter palr24">久押不决</h1>
            <div class="shapeWrap shapeBg mrt16 mrlr20">
              <p class="btn mrtb30"><b>460,359</b><i>件</i></p>
              <p class="fontSize16 palr24" style="color:#2E3445;text-align:left;margin-bottom: 10px">同比</p>
              <p class=" tb">
                <!-- <span class="fontSize16">同比</span> -->
                <span class="maincolor">9.46% <i class="el-icon-top"></i></span>
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="board borderradius white" style="height: 100%">
            <h1 class="flexCenter palr24">审判案件超审限</h1>
            <div class="mrt16 mrlr20">
              <div class="trialCaseList flexCenter">
                <i class="el-icon-water-cup"></i>
                <div class="trialCaseItem">
                  <strong>现存</strong>
                  <p>
                    <span><b>12349</b><i>件</i></span>
                    <span>同期<em>231</em></span>
                  </p>
                </div>
              </div>
              <div class="trialCaseList flexCenter">
                <i class="el-icon-water-cup"></i>
                <div class="trialCaseItem">
                  <strong>新增</strong>
                  <p>
                    <span><b>12349</b><i>件</i></span>
                    <span>同期<em>231</em></span>
                  </p>
                </div>
              </div>
              <div class="trialCaseList flexCenter">
                <i class="el-icon-water-cup"></i>
                <div class="trialCaseItem">
                  <strong>已结</strong>
                  <p>
                    <span><b>1340</b><i>件</i></span>
                    <span>同期<em>231</em></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="board borderradius white">
            <h1 class="flexCenter palr24">司法公开</h1>
            <div style="height: 100%">
              <el-row class="sfgk" :gutter="20" style="padding: 15px 24px">
                <el-col :span="2"><span class="dot"></span></el-col>
                <el-col :span="6">文书上网率</el-col>
                <el-col :span="8">26.12%</el-col>
                <el-col :span="8">同比<span style="padding-left: 20px">56.23%</span></el-col>
              </el-row>
              <el-row class="sfgk" :gutter="20" style="padding: 15px 24px">
                <el-col :span="2"><span class="dot"></span></el-col>
                <el-col :span="6">庭审直播率</el-col>
                <el-col :span="8">26.12%</el-col>
                <el-col :span="8">同比<span style="padding-left: 20px">56.23%</span></el-col>
              </el-row>
              <el-row class="sfgk" :gutter="20" style="padding: 15px 24px">
                <el-col :span="2"><span class="dot"></span></el-col>
                <el-col :span="6">文书上网率</el-col>
                <el-col :span="8">26.12%</el-col>
                <el-col :span="8">同比<span style="padding-left: 20px">56.23%</span></el-col>
              </el-row>
              <el-row class="sfgk" :gutter="20" style="padding: 15px 24px">
                <el-col :span="2"><span class="dot"></span></el-col>
                <el-col :span="6">庭审直播率</el-col>
                <el-col :span="8">26.12%</el-col>
                <el-col :span="8">同比<span style="padding-left: 20px">56.23%</span></el-col>
              </el-row>
              <el-row class="sfgk" :gutter="20" style="padding: 15px 24px">
                <el-col :span="2"><span class="dot"></span></el-col>
                <el-col :span="6">文书上网率</el-col>
                <el-col :span="8">26.12%</el-col>
                <el-col :span="8">同比<span style="padding-left: 20px">56.23%</span></el-col>
              </el-row>
              <el-row class="sfgk" :gutter="20" style="padding: 15px 24px">
                <el-col :span="2"><span class="dot"></span></el-col>
                <el-col :span="6">庭审直播率</el-col>
                <el-col :span="8">26.12%</el-col>
                <el-col :span="8">同比<span style="padding-left: 20px">56.23%</span></el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'civil',
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
        }
      ],
      activeName: 'first'
    }
  }
}
</script>