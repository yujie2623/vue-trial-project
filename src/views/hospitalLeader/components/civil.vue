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
        <el-col :span="6">
          <div class="pdt16" style="width:100%;height:200px">
            <liquidFill :data="liquidFill" />
          </div>
          <p class="aline">
            <span>同比</span>
            <span class="maincolor">9.46% <i class="el-icon-top"></i></span>
          </p>
          <p class="alinepm">
            <span>全省平均</span>
            <span>12.18%</span>
          </p>
          <p class="alinepm">
            <span>全省排名</span>
            <span>第6名</span>
          </p>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="board borderradius white mrtb16">
          <h1 class="flexCenter palr24">本院人均结案数和结案率分布</h1>
          <div class="palr24" style="width:100%;height:350px">
            <scatter :data="scatter" />
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="board borderradius white mrtb16">
          <h1 class="flexCenter palr24">新收案件类型分布</h1>
          <div class="typeDistribution palr24 pdt16 pdb16">
            <el-table :data="tableData" class="table" style="width: 100%" height="316" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
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
        <el-col :span="3">
          <div style="width:100%;height:100%;padding-top:24px;" class="flex palr24">
            <div class="baseline">
              <span class="target"><b>2个指标</b><em>目标线</em></span>
              <span><b>11个指标</b></span>
              <span class="base"><b>9个指标</b><em>基准线</em></span>
            </div>
          </div>
        </el-col>
        <el-col :span="21">
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
        <div class="palr24" style="height: 300px">
          <stack :data="stackBar" />
        </div>
      </div>
    </div>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">长期未结案件</h1>
      <el-row class="boradList boradNormalList pdb16 palr24" type="flex" :gutter="20">
        <el-col :span="6" class="mrt16">
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
        <el-col :span="6" class="mrt16">
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
        <el-col :span="12" class="flex">
          <div style="width:40%;height:100%">
            <pie :data="pieCircle" />
          </div>
          <div class="pdb16" style="width:60%;height:80%;">
            <div class="progress " title="52件" :style="{'--width': (52/100)*100 + '%'}"><span>一审</span></div>
            <div class="progress " title="48件" :style="{'--width': (48/100)*100 + '%'}"><span>二审</span></div>
            <div class="progress " title="38件" :style="{'--width': (38/100)*100 + '%'}"><span>再审</span></div>
          </div>
        </el-col>
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
                    <span class="mrl20">同期<em>231</em></span>
                  </p>
                </div>
              </div>
              <div class="trialCaseList flexCenter">
                <i class="el-icon-water-cup"></i>
                <div class="trialCaseItem">
                  <strong>新增</strong>
                  <p>
                    <span><b>12349</b><i>件</i></span>
                    <span class="mrl20">同期<em>231</em></span>
                  </p>
                </div>
              </div>
              <div class="trialCaseList flexCenter">
                <i class="el-icon-water-cup"></i>
                <div class="trialCaseItem">
                  <strong>已结</strong>
                  <p>
                    <span><b>1340</b><i>件</i></span>
                    <span class="mrl20">同期<em>231</em></span>
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
import liquidFill from '@/views/components/echart/liquidfill'
import scatter from '@/views/components/echart/scatter'
import pie from '@/views/components/echart/pie'
// import barline from '@/views/components/echart/barline'
import stack from '@/views/components/echart/stack'
// import lineEchart from '@/views/components/echart/line'
export default {
  name: 'civil',
  components: { liquidFill, scatter, stack, pie },
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
      activeName: 'first',
      // 水球
      liquidFill: {
        id: 'liquidFill',
        titleY: '65%',
        titleColor: '#fff',
        value: 89.12,
        text: '结案率'
      },
      scatter: {
        id: 'scatter',
        color: '#23C9DA',
        data: [
            [10.0, 80],
            [28.07, 65],
            [33.0, 78],
            [49.05, 81],
            [51.0, 33],
            [6.0, 66],
            [80.4, 81],
            [85.0, 13],
            [90.0, 6],
            [95.0, 43],
            [110.0, 86],
          ],
        xAxisName: '人均结案数',
        yAxisName: '结案率'
      },
      // 各市审判质效约束性重点指标完成情况
      stackBar: {
        id: 'stack',
        color: ['#23C9DA','#FD9656'],
        yAxisName: '案件数(件)',
        legend: ['已完成','未完成'],
        category: ['刑一庭','刑二庭','刑三庭','民一庭','民二庭','民三庭','民四庭','民五庭','民六庭','民七庭'],
        data: [[2500,2600,2400,4100,4000,3300,3500,2700,2200,2000],[1400,1300,2000,900,1200,1300,1200,500,1300,800]]
      },
      // 长期未结
      pieCircle: {
        id: 'pieCircle',
        text: '长期未结总数',
        titleShow: true,
        titleY: '75%',
        center: ['50%','40%'],
        color: ['#23C9DA','#FD9656','#F9D029','#1889FA'],
        pieUnit: '件',
        radius: '70%',
        seriesLabelShow: true,
        seriesLabelLineShow: true,
        seriesLabelPosition: 'inside',
        data: [{name:'执行',value:40},{name:'国家赔偿金',value:15},{name:'民事一审',value:20},{name:'行政一审',value:25}]
      }
    }
  }
}
</script>