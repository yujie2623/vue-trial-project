<template>
  <div>
    <base-header title="案件基本情况分析" firstTitle="基本情况"></base-header>
    <div class="presidentList board">
      <el-row class="white palr24 pdb16" :gutter="20">
        <el-col :span="4">
          <div class="newShape">
            <strong>新收</strong>
            <p class="pdtb10"><b>460,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>旧存</strong>
            <p class="pdtb10"><b>2,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>结案</strong>
            <p class="pdtb10"><b>2,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>未结</strong>
            <p class="pdtb10"><b>460,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>和解</strong>
            <p class="pdtb10"><b>460,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>员额法官人均</strong>
            <p class="pdtb10"><b>460,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>

      </el-row>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">案件审理情况趋势</h1>
      <div class="pdt16 pdb16" style="height: 400px">
        <barline :data="data"  />
      </div>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">行政行为种类分布情况</h1>
      <el-row class="palr24 pdt16" :gutter="20">
        <el-col :span="5">
          <div class="palr24 positive" style="height: 318px;">
            <p class="alinePosition"><strong>TOP合计</strong> <b>1540件</b></p>
            <pie :data="pieRadius" />
          </div>
        </el-col>
        <el-col :span="19">
          <el-table :data="tableData" class="table" style="width: 100%" max-height="300" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
            <el-table-column prop="ajlx" label="案由" show-overflow-tooltip></el-table-column>
            <el-table-column prop="xsl" label="新收数（件）" align="center"></el-table-column>
            <el-table-column prop="xszb" label="新收占比" align="center"></el-table-column>
            <el-table-column prop="zb" label="占比" align="center"></el-table-column>
            <el-table-column prop="tb" label="同比" align="center"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
    <el-row class="board borderradius white">
      <el-col :span="12">
        <h1 class="flexCenter palr24">涉案行政机关分析</h1>
        <div class="flex palr24 pdt16">
          <div class="positive" style="width:200px;height:300px">
            <p class="positive"><em class="mainFontColor">职级</em><el-divider direction="vertical"></el-divider><em>类型</em></p>
            <pie :data="pieCircle" />
          </div>
          <el-table :data="tableData5" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
            <el-table-column prop="dwjb" label="单位级别" show-overflow-tooltip>
                <template slot-scope="scope">
                <span class="shape" :style="{ backgroundColor: colorType.get(scope.row.dwjb) }"></span>{{scope.row.dwjb}}
              </template>
            </el-table-column>
            <el-table-column prop="ajl" label="案件量" align="center"></el-table-column>
            <el-table-column prop="zb" label="占比" align="center"></el-table-column>
            <el-table-column prop="tb" label="同比" align="center"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <h1 class="flexCenter palr24">行政机关败诉分析</h1>
        <div class="flex palr24 pdt16">
          <div style="width:300px;height:260px">
            <funnel :data="funnelData" />
          </div>
          <el-row class="boradList palr24" type="flex" :gutter="20">
            <el-col :span="24" class="mrt16">
              <div class="boardItemWrap itemWrap">
                <p>
                  <strong>败诉率</strong>
                  <b>12.12%</b>
                </p>
                <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
              </div>
            </el-col>
            <el-col :span="24" class="mrt16">
              <div class="boardItemWrap itemWrap">
                <p>
                  <strong>败诉率</strong>
                  <b>12.12%</b>
                </p>
                <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <base-header title="办案质效分析" firstTitle="重要指标"></base-header>
    <div class="board borderradius white">
      <div class="flex boradList boradNormalList palr24 pdb20">
        <div class="shapeWrap noStyle shapeBg">
          <strong>结案率</strong>
          <p class="percent">92.3%</p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg">
          <strong>调解撤诉率</strong>
          <p class="percent">90.23%</p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">10.00% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg">
          <strong>平均审理时长</strong>
          <p class="percent">36.8<i>天</i></p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg">
          <strong>文书上网数</strong>
          <p class="percent">12345<i>篇</i></p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg">
          <strong>文书上网率</strong>
          <p class="percent">123</p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg">
          <strong>庭审直播数</strong>
          <p class="percent">1234<i>篇</i></p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">0.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        
        <div class="shapeWrap noStyle shapeBg">
          <strong>庭审直播率</strong>
          <p class="percent">90.23%</p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
      </div>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">员额法官办案情况（含庭长）</h1>
      <div class="typeDistribution palr24 pdt16 pdb16">
        <el-table :data="tableData1" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
          <el-table-column prop="cbr" label="承办人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="xsl" label="新收数（件）" align="center"></el-table-column>
          <el-table-column prop="slj" label="受理（件）" align="center"></el-table-column>
          <el-table-column prop="jaj" label="结案（件）" align="center"></el-table-column>
          <el-table-column prop="wjj" label="未结（件）" align="center"></el-table-column>
          <el-table-column prop="jal" label="结案率" align="center"></el-table-column>
          <el-table-column prop="slsj" label="平均审理时长（天）" width="150" align="center"></el-table-column>
          <el-table-column prop="sxbg" label="审限变更率" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">异常案件一览</h1>
       <el-tabs class="tabs noleft palr24" v-model="activeName">
          <el-tab-pane label="长期未结" name="first">
            <el-row class="boradList boradNormalList pdb16 palr24" type="flex" :gutter="20">
              <el-col :span="6" class="mrt16">
                <div class="bg">
                  <div class="boardItemWrap">
                    <strong>总量</strong>
                    <div class="item pdt16">
                      <span class="boradBtn nobg">
                        <b>23140</b><i>件</i>
                      </span>
                      <span class="boardNum">
                        <span>同比</span>
                        <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
                      </span>
                    </div>
                  </div>
                  <div class="boardItemWrap">
                    <strong>占诉讼案件</strong>
                    <div class="item pdt16">
                      <span class="boradBtn nobg">
                        <b>1.68</b><i>%</i>
                      </span>
                      <span class="boardNum">
                        <span>同比</span>
                        <span class="maincolor">1.6% <i class="el-icon-top"></i></span>
                      </span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="18" class="mrt16">
                <el-table :data="tableData2" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
                  <el-table-column prop="ah" label="案号" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="ay" label="案由" align="center"></el-table-column>
                  <el-table-column prop="cbr" label="承办人" align="center"></el-table-column>
                  <el-table-column prop="lasj" label="立案时间" align="center"></el-table-column>
                  <el-table-column prop="slts" label="审理天数" align="center"></el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="超审限" name="third">
            <el-row class="pdb16 palr24 mrt16" type="flex" :gutter="20">
              <el-col :span="5">
                <div class="shapeWrap shapeBg">
                  <strong>当前总数</strong>
                  <p class="btn mrtb30"><b>12340</b><i>件</i></p>
                  <p class=" tb">
                    <span class="fontSize16">同比</span>
                    <span class="maincolor">10.00% <i class="el-icon-top"></i></span>
                  </p>
                  <p class="tb mrt16">
                    <span class="fontSize16">同期</span>
                    <span>34341件</span>
                  </p>
                </div>
              </el-col>
              <el-col :span="19">
                <line-echart v-if="activeName === 'third'" :data="linedata" />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="赔偿" name="four">
            <el-row class="boradList boradNormalList pdb16 palr24 mrt16" type="flex" :gutter="20">
              <el-col :span="6">
                <div class="bg">
                  <div class="boardItemWrap">
                    <strong>总量</strong>
                    <div class="item pdt16">
                      <span class="boradBtn nobg">
                        <b>351</b><i>件</i>
                      </span>
                      <span class="boardNum">
                        <span>同比</span>
                        <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
                      </span>
                    </div>
                  </div>
                  <div class="boardItemWrap">
                    <strong>占诉讼案件</strong>
                    <div class="item pdt16">
                      <span class="boradBtn nobg">
                        <b>1.68</b><i>%</i>
                      </span>
                      <span class="boardNum">
                        <span>同比</span>
                        <span class="maincolor">1.6% <i class="el-icon-top"></i></span>
                      </span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="18">
                <el-table :data="tableData2" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
                  <el-table-column prop="ah" label="案号" show-overflow-tooltip></el-table-column>
                  <el-table-column prop="ay" label="案由" align="center"></el-table-column>
                  <el-table-column prop="cbr" label="承办人" align="center"></el-table-column>
                  <el-table-column prop="lasj" label="立案时间" align="center"></el-table-column>
                  <el-table-column prop="slts" label="审理天数" align="center"></el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-tab-pane>
       </el-tabs>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">一审案件分析</h1>
      <div class="flex palr24">
        <div class="trialCaseList flexCenter trialCaseLine">
          <i class="el-icon-water-cup"></i>
          <div class="trialCaseItem">
            <strong>一审结案数</strong>
            <p>
              <span><b>12340</b><i>件</i></span>
            </p>
          </div>
        </div>
        <div class="trialCaseList flexCenter trialCaseLine">
          <i class="el-icon-water-cup"></i>
          <div class="trialCaseItem">
            <strong>一审上诉数</strong>
            <p>
              <span><b>12349</b><i>件</i></span>
            </p>
            <p class="fontSty">
              <span>上诉率<em>231</em></span>
            </p>
          </div>
        </div>
        <div class="trialCaseList flexCenter trialCaseLine">
          <i class="el-icon-water-cup"></i>
          <div class="trialCaseItem">
            <strong>再审审查数</strong>
            <p>
              <span><b>12349</b><i>件</i></span>
            </p>
            <p class="fontSty">
              <span>再审率<em>12.23%</em></span>
            </p>
          </div>
        </div>
        <div class="trialCaseList flexCenter trialCaseLine">
          <i class="el-icon-water-cup"></i>
          <div class="trialCaseItem">
            <strong>后审结案数</strong>
            <p>
              <span><b>12349</b><i>件</i></span>
            </p>
          </div>
        </div>
        <div class="trialCaseList flexCenter">
          <i class="el-icon-water-cup"></i>
          <div class="trialCaseItem">
            <strong>后审改判数</strong>
            <p>
              <span><b>40</b><i>件</i></span>
            </p>
          </div>
        </div>
      </div>
      <el-row class="result">
        <el-col :span="8">
          <h2>上诉结果分布</h2>
          <div class="palr24" style="width:100%;height: 300px;">
            <pie :data="peiAppeal" />
          </div>
        </el-col>
        <el-col :span="8">
          <h2>再审结果分布</h2>
          <div class="palr24" style="width:100%;height: 300px;">
            <pie :data="peiRetrial" />
          </div>
        </el-col>
        <el-col :span="8">
          <h2>改判原因分布</h2>
          <div class="palr24" style="width:100%;height: 300px;">
            <pie :data="peiSentence" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import baseHeader from '../../components/baseHeader'
import pie from '@/views/components/echart/pie'
import barline from '@/views/components/echart/barline'
import funnel from '@/views/components/echart/funnel'
import lineEchart from '@/views/components/echart/line'
export default {
  name: 'presidentMs',
  components: { baseHeader, barline, pie, funnel, lineEchart },
  data() {
    return {
      tableData:[
        {
          ajlx: '离婚后财产纠纷',
          xsl: '1231',
          zb: '49.12%',
          xszb: '56.23%',
          tb: '2.9%'
        },
        {
          ajlx: '赡养纠纷',
          xsl: '1231',
          zb: '49.12%',
          xszb: '56.23%',
          tb: '2.9%'
        },
        {
          ajlx: '侵害集体经济组织成员权益纠纷',
          xsl: '1231',
          zb: '49.12%',
          xszb: '56.23%',
          tb: '2.9%'
        },
        {
          ajlx: '建筑物和其他土地附着物抵押权纠纷',
          xsl: '1231',
          zb: '49.12%',
          xszb: '56.23%',
          tb: '2.9%'
        },
        {
          ajlx: '土地承包经营权转包合同纠纷',
          xsl: '1231',
          zb: '49.12%',
          xszb: '56.23%',
          tb: '2.9%'
        },
        {
          ajlx: '土地承包经营权转包合同纠纷',
          xsl: '1231',
          zb: '49.12%',
          xszb: '56.23%',
          tb: '2.9%'
        },
        {
          ajlx: '土地承包经营权转包合同纠纷s',
          xsl: '1231',
          zb: '49.12%',
          xszb: '56.23%',
          tb: '2.9%'
        }
      ],
      tableData1: [
        {
          cbr: '谢希毓',
          xsl: '59',
          slj: '59',
          jaj: '6',
          wjj: '53',
          jal: '49.9%',
          slsj: '53',
          sxbg: '19.9%'
        },
        {
          cbr: '张曼玉',
          xsl: '58',
          slj: '58',
          jaj: '8',
          wjj: '50',
          jal: '49.9%',
          slsj: '52',
          sxbg: '23%'
        },
        {
          cbr: '赵茜茜',
          xsl: '58',
          slj: '58',
          jaj: '8',
          wjj: '50',
          jal: '49.9%',
          slsj: '52',
          sxbg: '23%'
        },
        {
          cbr: '王小山',
          xsl: '58',
          slj: '58',
          jaj: '8',
          wjj: '50',
          jal: '49.9%',
          slsj: '52',
          sxbg: '23%'
        },
        {
          cbr: '王铁柱',
          xsl: '58',
          slj: '58',
          jaj: '8',
          wjj: '50',
          jal: '49.9%',
          slsj: '52',
          sxbg: '23%'
        },
        {
          cbr: '薛宝钗',
          xsl: '58',
          slj: '58',
          jaj: '8',
          wjj: '50',
          jal: '49.9%',
          slsj: '52',
          sxbg: '23%'
        }
      ],
      tableData2: [
        {
          ah: '(2022)XO刑初06号',
          ay: '盗窃罪',
          cbr: '刘晓龙',
          lasj: '2022-01–02',
          slts: '126'
        },
        {
          ah: '(2019)X01刑初09号',
          ay: '盗窃罪',
          cbr: '张曼玉',
          lasj: '2022-01–02',
          slts: '126'
        },
        {
          ah: '(2019)X01刑初16号',
          ay: '盗窃罪',
          cbr: '赵茜茜',
          lasj: '2022-01–02',
          slts: '126'
        },
        {
          ah: '(2019)X01刑初56号',
          ay: '盗窃罪',
          cbr: '王小山',
          lasj: '2022-01–02',
          slts: '126'
        },
        {
          ah: '(2020)X01刑初06号',
          ay: '盗窃罪',
          cbr: '王铁柱',
          lasj: '2022-01–02',
          slts: '126'
        }
      ],
      tableData3: [
        {
          tz: '有期徒刑3年以下',
          zb: '36.00%'
        },
        {
          tz: '40-50岁',
          zb: '36.00%'
        },
        {
          tz: '有前科',
          zb: '36.00%'
        },
        {
          tz: '盗窃',
          zb: '36.00%'
        }
      ],
      tableData4: [
        {
          dwtz: '企业',
          dwzb: '36.00%'
        },
        {
          dwtz: '有期徒刑',
          dwzb: '36.00%'
        },
        {
          dwtz: '100万以上…',
          dwzb: '36.00%'
        },
        {
          dwtz: '金额诈骗罪',
          dwzb: '36.00%'
        }
      ],
      tableData5: [
        {
          dwjb: '省级',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%'
        },
        {
          dwjb: '市级',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%'
        },
        {
          dwjb: '县级',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%'
        },
        {
          dwjb: '乡镇级',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%'
        }
      ],
      activeName: 'first',
      // 案件审理情况统计
      data: {
        id: 'barLine1',
        color: ['#23C9DA','#1889FA','#7786F3','#FD9656'],
        yAxisNameLeft: '案件数量(件)',
        yAxisNameRight: '结案率',
        legend: ['受理', '新增','结案','结案率'],
        category: ['2022-01','2022-02','2022-03','2022-04','2022-05','2022-06','2022-07','2022-08','2022-09','2022-10','2022-11','2022-12'],
        data: [
            [2600,2600,2500,3900,4500,3200,3200,3100,1900,1800,1800,1100],
            [1800,2200,3200,4600,5000,4100,3800,4100,1000,1200,1500,1500],
            [1200,1600,2100,2900,3100,2700,2800,2800,1800,1800,1000,1100],
            [19,23,25,80,100,68,70,70,16,20,21,90]
        ],
        seriesType: ['bar', 'bar', 'bar','line'],
        yAxisIndex: [0,0,0,1],
      },
      // 案由分布情况
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
      pieCircle: {
        id: 'pieCircle',
        text: '',
        titleShow: false,
        titleY: '75%',
        center: ['50%','40%'],
        color: ['#23C9DA','#FD9656','#F9D029','#1889FA'],
        pieUnit: '件',
        radius: '70%',
        seriesLabelShow: true,
        seriesLabelLineShow: true,
        seriesLabelPosition: 'inside',
        data: [
          {name:'省级',value:927},
          {name:'市级',value:955},
          {name:'县级',value:186},
          {name:'乡镇级',value:355}
        ]
      },
      funnelData: {
        id: 'funnel',
        color: ['#23C9DA','#1889FA','#FD9656', '#F9D029'],
        data: [
          {name:'受理',value:123},
          {name:'已结',value:103},
          {name:'败诉',value:92},
          {name:'承担责任',value:67},
        ]
      },
      linedata: {
       id: 'line',
       color: ['#23C9DA','#FD9656'],
       yAxisName: '数量(件)',
       legend: ['超审限总数','超审变更总数'],
       category: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
       data: [[2000,3000,3200,3400,5000,3300,3200,3100,4100,4050,4000,4900],[200,900,1500,1900,1800,1400,1800,1000,2100,2000,2200,2800]]
      },
      peiAppeal: {
        id: 'peiAppeal',
        color: ['#23C9DA','#FD9656','#F9D029','#1889FA','#7786F3'],
        titleShow: true,
        text: '',
        pieUnit: '件',
        radius: ['25%','50%'],
        seriesLabelShow: true,
        seriesLabelLineShow: true,
        data: [
          {name:'发回重审',value:10},
          {name:'依法改判',value:18},
          {name:'裁定驳回',value:11},
          {name:'裁定驳回1',value:45},
          {name:'维持原判',value:78}
        ]
      },
      peiRetrial: {
        id: 'peiRetrial',
        color: ['#23C9DA','#FD9656','#F9D029','#1889FA','#7786F3'],
        titleShow: true,
        text: '',
        pieUnit: '件',
        radius: ['25%','50%'],
        seriesLabelShow: true,
        seriesLabelLineShow: true,
        data: [
          {name:'发回重审',value:3},
          {name:'依法改判',value:6},
          {name:'裁定驳回',value:2},
          {name:'裁定驳回1',value:1},
          {name:'维持原判',value:1}
        ]
      },
      peiSentence: {
        id: 'peiSentence',
        color: ['#23C9DA','#FD9656','#F9D029','#1889FA','#7786F3'],
        titleShow: false,
        text: '',
        pieUnit: '件',
        radius: '50%',
        seriesLabelShow: true,
        seriesLabelLineShow: true,
        data: [
          {name:'适用程序错误1',value:10},
          {name:'适用程序错误2',value:18},
          {name:'适用程序错误3',value:11},
          {name:'适用程序错误4',value:45},
          {name:'适用程序错误5',value:78}
        ]
      }
    }
  },
  computed: {
    colorType() {
      const colorType = new Map()
      colorType.set('省级', '#23C9DA')
      colorType.set('市级', '#659DFF')
      colorType.set('县级', '#F9D029')
      colorType.set('乡镇级', '#FD9656')
      return colorType
    }
  }
}
</script>