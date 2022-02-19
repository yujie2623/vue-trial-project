<template>
  <div>
    <base-header title="案件基本情况分析" firstTitle="基本情况"></base-header>
    <div class="presidentList board">
      <el-row class="white palr24 pdb16" :gutter="20">
        <el-col :span="4">
          <div class="newShape">
            <strong>新收</strong>
            <p class="pdtb10"><b>12340</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>旧存</strong>
            <p class="pdtb10"><b>12340</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>结案</strong>
            <p class="pdtb10"><b>12340</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>未结</strong>
            <p class="pdtb10"><b>12340</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>和解</strong>
            <p class="pdtb10"><b>12340</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>员额法官人均</strong>
            <p class="pdtb10"><b>12340</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>

      </el-row>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">案件审理情况趋势</h1>
      <div style="min-height: 300px"></div>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">案由分布情况</h1>
      <div class="typeDistribution palr24 pdt16 pdb16">
        <div style="height: 250px;width:300px"></div>
        <el-table :data="tableData" class="table" style="width: 100%" max-height="250" :header-cell-style="{background: 'rgba(35, 201, 218, 0.05)'}">
          <el-table-column prop="ajlx" label="案由" show-overflow-tooltip></el-table-column>
          <el-table-column prop="xsl" label="新收数（件）" align="center"></el-table-column>
          <el-table-column prop="xszb" label="新收占比" align="center"></el-table-column>
          <el-table-column prop="zb" label="占比" align="center"></el-table-column>
          <el-table-column prop="tb" label="同比" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">重要指标</h1>
      <el-row class="boradList boradNormalList palr24 mrt16 pdb20" type="flex" :gutter="20">
        <el-col :span="4">
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
        <el-col :span="4">
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
        <el-col :span="4">
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
        <el-col :span="6">
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
        <el-col :span="6">
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
    </div>
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
          <el-row class="pdb16 palr24" type="flex" :gutter="20">
            <el-col :span="5">
              <div class="shapeWrap shapeBg mrt6">
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
          <div style="min-height:300px"></div>
        </el-col>
        <el-col :span="8">
          <h2>再审结果分布</h2>
        </el-col>
        <el-col :span="8">
          <h2>改判原因分布</h2>
        </el-col>
      </el-row>
    </div>
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
      activeName: 'first'
    }
  }
}
</script>