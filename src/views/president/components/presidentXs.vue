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
    <el-row class="board borderradius white">
      <el-col :span="12">
        <h1 class="flexCenter palr24">重要指标</h1>
        <el-row class="boradList boradNormalList palr24 mrt16 pdb20" type="flex">
          <el-col :span="8">
            <div class="shapeWrap noStyle shapeBg">
                <strong>结案率</strong>
                <p class="percent">92.3%</p>
                <p class="flex pdtb10">
                  <span class="fontSize16 tbtitle">同比</span>
                  <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
                </p>
                <p class="num flex">
                  <span class="fontSize16">院内排名</span>
                  2\4
                </p>
              </div>
          </el-col>
          <el-col :span="8">
            <div class="shapeWrap noStyle shapeBg">
                <strong>重刑率</strong>
                <p class="percent">2.3%</p>
                <p class="flex pdtb10">
                  <span class="fontSize16 tbtitle">同比</span>
                  <span class="maincolor">0.9% <i class="el-icon-top"></i></span>
                </p>
                <p class="num flex">
                  <span class="fontSize16">院内排名</span>
                  3\4
                </p>
              </div>
          </el-col>
          <el-col :span="8">
            <div class="shapeWrap noStyle shapeBg">
                <strong>平均审理时长</strong>
                <p class="percent">36.8<i>天</i></p>
                <p class="flex pdtb10">
                  <span class="fontSize16 tbtitle">同比</span>
                  <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
                </p>
                <p class="num flex">
                  <span class="fontSize16">院内排名</span>
                  2\4
                </p>
              </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <h1 class="flexCenter palr24">案由分布情况</h1>
        <div class="typeDistribution palr24 pdt16 pdb16">
          <el-table :data="tableData" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
            <el-table-column prop="ajlx" label="案由" show-overflow-tooltip></el-table-column>
            <el-table-column prop="xsl" label="新收数（件）" align="center"></el-table-column>
            <el-table-column prop="xszb" label="新收占比" align="center"></el-table-column>
            <el-table-column prop="zb" label="占比" align="center"></el-table-column>
            <el-table-column prop="tb" label="同比" align="center"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <base-header title="办案质效分析" firstTitle="员额法官办案情况（含庭长）"></base-header>
    <div class="board borderradius white">
      <div class="typeDistribution palr24 pdt16 pdb16">
        <el-table :data="tableData1" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
          <el-table-column prop="cbr" label="承办人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="xsl" label="新收数（件）" align="center"></el-table-column>
          <el-table-column prop="slj" label="受理（件）" align="center"></el-table-column>
          <el-table-column prop="jaj" label="结案（件）" align="center"></el-table-column>
          <el-table-column prop="wjj" label="未结（件）" align="center"></el-table-column>
          <el-table-column prop="jal" label="结案率" align="center"></el-table-column>
          <el-table-column prop="slsj" label="平均审理时长（天）" width="150" align="center"></el-table-column>
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
          <el-tab-pane label="久押不决" name="second">
            <el-row class="pdb16 palr24 mrt16" type="flex" :gutter="20">
              <el-col :span="5">
                <div class="shapeWrap shapeBg">
                  <strong>当前总数</strong>
                  <p class="btn mrtb30"><b>351</b><i>件</i></p>
                  <p class=" tb">
                    <span class="fontSize16">同比</span>
                    <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
                  </p>
                  <p class="tb mrt16">
                    <span class="fontSize16">同期</span>
                    <span>302件</span>
                  </p>
                </div>
              </el-col>
              <el-col :span="19">
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
          <el-tab-pane label="检察院抗诉" name="four">
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
    <el-row class="board borderradius white">
      <el-col :span="12">
        <h1 class="flexCenter palr24">案件后审情况分析</h1>
        <el-row class="boradList boradNormalList palr24 mrt16 pdb20" type="flex" :gutter="20">
          <el-col :span="8">
            <div class="vline">
              <strong class="total">
                <b>一审立案总数</b>
                <p>256件</p>
              </strong>
              <div class="totalZb">
                <div class="title">
                  <b>一审网上立案数</b>
                  <p>157件</p>
                  <p>
                    <em>占比</em>
                    <em>68.62%</em>
                  </p>
                </div>
              </div>
              <div class="totalZb sx">
                <div class="title">
                  <b>一审网上立案数</b>
                  <p>157件</p>
                  <p>
                    <em>占比</em>
                    <em>68.62%</em>
                  </p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="palr24" style="width:100%;height: 300px;">
              <pie :data="peiAppeal" />
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <h1 class="flexCenter palr24">案件后审情况分析</h1>
        <el-row class="boradList boradNormalList palr24 mrt16 pdb20" type="flex" :gutter="20">
          <el-col :span="12">
            <div class="bg">
              <div class="boardItemWrap pab0">
                <strong>文书上网数</strong>
                <div class="item nowrap">
                  <span class="boradBtn">
                    <span><b>460,359</b><i>篇</i></span>
                    <span><em>同比</em>&nbsp;&nbsp;&nbsp;&nbsp;<span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span></span>
                  </span>
                  <span class="boardNum">
                    <span>院内排名</span>
                    <span>2\4</span>
                  </span>
                </div>
              </div>
              <div class="boardItemWrap pab0 line">
                <strong>文书上网数</strong>
                <div class="item nowrap">
                  <span class="boradBtn">
                    <span><b>460,359</b><i>篇</i></span>
                    <span><em>同比</em>&nbsp;&nbsp;&nbsp;&nbsp;<span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span></span>
                  </span>
                  <span class="boardNum">
                    <span>院内排名</span>
                    <span>2\4</span>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="bg">
              <div class="boardItemWrap pab0">
                <strong>文书上网数</strong>
                <div class="item nowrap">
                  <span class="boradBtn">
                    <span><b>460,359</b><i>篇</i></span>
                    <span><em>同比</em>&nbsp;&nbsp;&nbsp;&nbsp;<span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span></span>
                  </span>
                  <span class="boardNum">
                    <span>院内排名</span>
                    <span>2\4</span>
                  </span>
                </div>
              </div>
              <div class="boardItemWrap line pab0">
                <strong>文书上网数</strong>
                <div class="item nowrap">
                  <span class="boradBtn">
                    <span><b>460,359</b><i>篇</i></span>
                    <span><em>同比</em>&nbsp;&nbsp;&nbsp;&nbsp;<span class="maincolor red">-9.46% <i class="el-icon-bottom"></i></span></span>
                  </span>
                  <span class="boardNum">
                    <span>院内排名</span>
                    <span>2\4</span>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <base-header title="重要指标分析" firstTitle="被告人画像"></base-header>
    <el-row class="board borderradius white palr24" :gutter="20">
      <el-col :span="12">
        <el-row>
          <el-col :span="12">
            <div class="pdt16 pdb16" style="height: 250px">
              <pie :data="rosedata" />
            </div>
          </el-col>
          <el-col :span="12">
            <el-table :data="tableData3" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
              <el-table-column prop="tz" label="特征" show-overflow-tooltip></el-table-column>
              <el-table-column prop="zb" label="占比" align="center"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <strong>量刑分析</strong>
        <div class="pdt16 pdb16" style="height: 250px">
          <bar :data="dataPortrait "  />
        </div>
      </el-col>
    </el-row>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">单位犯罪分析</h1>
      <el-row class="palr24 pdt16" :gutter="20">
        <el-col :span="12">
          <el-row>
            <el-col :span="12">
              <div class="pdt16 pdb16" style="height: 250px">
              <pie :data="rosedata1" />
            </div>
            </el-col>
            <el-col :span="12">
              <el-table :data="tableData4" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
                <el-table-column prop="dwtz" label="特征" show-overflow-tooltip></el-table-column>
                <el-table-column prop="dwzb" label="占比" align="center"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <strong>量刑分析</strong>
          <div class="pdt16 pdb16" style="height: 250px">
            <bar :data="dataPortrait1 "  />
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
import bar from '@/views/components/echart/bar'
import lineEchart from '@/views/components/echart/line'
export default {
  name: 'presidentMs',
  components: { baseHeader, barline, lineEchart, pie, bar },
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
      // 超审限
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
        color: ['#23C9DA','#FD9656','#1889FA'],
        titleShow: true,
        text: '',
        pieUnit: '件',
        radius: ['25%','50%'],
        seriesLabelShow: true,
        seriesLabelLineShow: true,
        data: [
          {name:'发回重审',value:10},
          {name:'依法改判',value:18},
          {name:'维持原判',value:78}
        ]
      },
      // 被告人画像
      dataPortrait: {
        id: 'dataPortrait',
        color: ['#23C9DA'],
        yAxisName: '案件数(件)',
        legend: [''],
        category: ['3年以下 有期徒刑','3年-5年 有期徒刑','5年以上 有期徒刑','无期徒刑','死刑','管制','拘役'],
        data: [[250,20,240,400,100,330,300,200]]
      },
      // 玫瑰图
      rosedata: {
        id: 'rose',
        color: ['#23C9DA','#1889FA','#FD9656','#F9D029'],
        pieUnit: '件',
        radius: '70%',
        roseType: 'radius',
        data: [
          {name:'年龄',value:927},
          {name:'刑罚类型',value:955},
          {name:'犯罪金额',value:806},
          {name:'罪名',value:750},
          {name:'其他',value:355}
        ]
      },
      // 单位犯罪分析
      dataPortrait1: {
        id: 'dataPortrait1',
        color: ['#23C9DA'],
        yAxisName: '案件数(件)',
        legend: [''],
        category: ['3年以下 有期徒刑','3年-5年 有期徒刑','5年以上 有期徒刑','无期徒刑','死刑','管制','拘役'],
        data: [[250,20,240,400,100,330,300,200]]
      },
      // 玫瑰图
      rosedata1: {
        id: 'rose1',
        color: ['#23C9DA','#1889FA','#FD9656','#F9D029'],
        pieUnit: '件',
        radius: '70%',
        roseType: 'radius',
        data: [
          {name:'年龄',value:927},
          {name:'刑罚类型',value:550},
          {name:'犯罪金额',value:806},
          {name:'罪名',value:750},
          {name:'其他',value:645}
        ]
      }
    }
  }
}
</script>