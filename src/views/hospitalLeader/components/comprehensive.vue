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
            <div class="palr24" style="width:200px;height: 318px;">
              <pie :data="pieRadius" />
            </div>
            <el-table :data="tableData" class="table" style="width: 100%" max-height="318" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
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
      <div class="pdt16 pdb16" style="height: 400px">
        <barline :data="data"  />
      </div>
    </div>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">质效指标分析</h1>
      <div style="min-height: 300px">
        <h2>各市审判质效约束性重点指标完成情况</h2>
        <div class="palr24" style="height: 300px">
          <stack :data="stackBar" />
        </div>
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
            <el-col :span="6" class="mrt16">
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
            <el-col :span="6" class="mrt16">
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
            <el-col :span="12" class="flex">
              <div style="width:40%;height:100%">
                <pie v-if="activeName === 'first'" :data="pieCircle" />
              </div>
              <div class="pdb16" style="width:60%;height:80%;">
                <div class="progress " title="52件" :style="{'--width': (52/100)*100 + '%'}"><span>一审</span></div>
                <div class="progress " title="48件" :style="{'--width': (48/100)*100 + '%'}"><span>二审</span></div>
                <div class="progress " title="38件" :style="{'--width': (38/100)*100 + '%'}"><span>再审</span></div>
              </div>
            </el-col>
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
              <div style="width:100%;height:250px">
                <stack v-if="activeName === 'second'" :data="bardata" />
              </div>
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
              <line-echart v-if="activeName === 'third'" :data="linedata" />
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
    </div>
  </div>
</template>
<script>
import liquidFill from '@/views/components/echart/liquidfill'
import scatter from '@/views/components/echart/scatter'
import pie from '@/views/components/echart/pie'
import barline from '@/views/components/echart/barline'
import stack from '@/views/components/echart/stack'
import lineEchart from '@/views/components/echart/line'
export default {
  name: 'comprehensive',
  components: { liquidFill, scatter, pie, barline, stack, lineEchart },
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
      activeName: 'first',
      // 水球
      liquidFill: {
        id: 'liquidFill',
        titleY: '90%',
        titleColor: '#2E3445',
        value: 0.75,
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
      // 新收案件类型
      pieRadius: {
        id: 'pie3',
        color: ['#F9D029','#5AD8A6','#7786F3','#23C9DA','#1889FA','#FD9656'],
        text: '',
        text2: '收案总量',
        center: ['50%','40%'],
        titleY: '30%',
        textY2: '70%',
        pieUnit: '件',
        radius: ['60%', '100%'],
        titleShow: true,
        data: [
            { name:'离婚后财产纠纷', value:2159 },
            {name:'赡养纠纷',value:2159},
            {name:'侵害集体经济组织成员权益纠纷',value:2159},
            {name:'建筑物和其他土地附着物抵押权纠纷',value:2159},
            {name:'土地承包经营权转包合同纠纷1',value:2159},
            {name:'土地承包经营权转包合同纠纷2',value:2159}
        ]
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
      },
      // 案件审理情况统计
      data: {
        id: 'barLine1',
        color: ['#23C9DA','#1889FA','#7786F3','#FD9656'],
        yAxisNameLeft: '案件数量(件)',
        yAxisNameRight: '结案率',
        legend: ['新增','结案','结案率'],
        category: ['2022-01','2022-02','2022-03','2022-04','2022-05','2022-06','2022-07','2022-08','2022-09','2022-10','2022-11','2022-12'],
        data: [
            [2600,2600,2500,3900,4500,3200,3200,3100,1900,1800,1800,1100],
            [1800,2200,3200,4600,5000,4100,3800,4100,1000,1200,1500,1500],
            // [1200,1600,2100,2900,3100,2700,2800,2800,1800,1800,1000,1100],
            [19,23,25,80,100,68,70,70,16,20,21,90]
        ],
        seriesType: ['bar', 'bar','line'],
        yAxisIndex: [0,0,1],
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
      bardata: {
        id: 'bar',
        color: ['#23C9DA','#FD9656'],
        yAxisName: '案件数(件)',
        legend: ['已完成','未完成'],
        category: ['刑一庭','刑二庭','刑三庭','民一庭','民二庭','民三庭','民四庭','民五庭','民六庭','民七庭'],
        data: [[2500,2600,2400,4100,4000,3300,3500,2700,2200,2000],[1400,1300,2000,900,1200,1300,1200,500,1300,800]],
      },
      linedata: {
       id: 'line',
       color: ['#23C9DA','#FD9656'],
       yAxisName: '数量(件)',
       legend: ['超审限总数','超审变更总数'],
       category: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
       data: [[2000,3000,3200,3400,5000,3300,3200,3100,4100,4050,4000,4900],[200,900,1500,1900,1800,1400,1800,1000,2100,2000,2200,2800]]
      }
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