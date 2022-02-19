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
            <strong>12368接听数</strong>
            <p class="pdtb10"><b>2,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>结案</strong>
            <p class="pdtb10"><b>460,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>调解</strong>
            <p class="pdtb10"><b>460,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="newShape">
            <strong>速裁</strong>
            <p class="pdtb10"><b>460,359</b><em>件</em></p>
            <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
          </div>
        </el-col>

      </el-row>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">收案案件组成成分情况</h1>
      <el-row class="palr24 pdt16" :gutter="20">
        <el-col :span="7" class="normalUl">
          <div class="ulTable">
            <p>民事</p>
            <ul>
              <li>
                <span>一审</span>
                <span>二审</span>
                <span>再审审查</span>
                <span>再审</span>
              </li>
              <li class="normal">
                <span>231</span>
                <span>23</span>
                <span>230</span>
                <span>9</span>
              </li>
              <li class="normal tb">
                <span class="mainFontColor">3.32%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
              </li>
              <li class="normal zb">
                <span class="mainFontColor">3.32%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
              </li>
              <li class="normal hj">
                520件
              </li>
              <li class="normal zb">
                44.23%
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="ulTable">
            <p class="ulTablexs">刑事</p>
            <ul>
              <li>
                <span>一审</span>
                <span>二审</span>
                <span>再审审查</span>
                <span>再审</span>
              </li>
              <li>
                <span>231</span>
                <span>23</span>
                <span>230</span>
                <span>9</span>
              </li>
              <li>
                <span class="mainFontColor">3.32%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
              </li>
              <li>
                <span class="mainFontColor">3.32%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
              </li>
              <li>
                520件
              </li>
              <li>
                44.23%
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="ulTable">
            <p class="ulTablexz">行政</p>
            <ul>
              <li>
                <span>一审</span>
                <span>二审</span>
                <span>再审审查</span>
                <span>再审</span>
              </li>
              <li>
                <span>231</span>
                <span>23</span>
                <span>230</span>
                <span>9</span>
              </li>
             <li>
                <span class="mainFontColor">3.32%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
              </li>
              <li>
                <span class="mainFontColor">3.32%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
                <span class="red">-2.89%</span>
              </li>
              <li>
                520件
              </li>
              <li>
                44.23%
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="5">
          <ul class="lineBar">
            <li>
              <span>执行</span>
              <span>89</span>
              <span>89.00%</span>
              <span>89.00%</span>
            </li>
            <li>
              <span>赔偿</span>
              <span>89</span>
              <span>89.00%</span>
              <span>89.00%</span>
            </li>
            <li>
              <span>管辖</span>
              <span>89</span>
              <span>89.00%</span>
              <span>89.00%</span>
            </li>
            <li>
              <span>其他</span>
              <span>89</span>
              <span>89.00%</span>
              <span>89.00%</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">员额法官办案情况</h1>
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
    <el-row class="board borderradius white">
      <el-col :span="12">
        <h1 class="flexCenter palr24">诉前调解分析</h1>
        <el-row class="boradList palr24" type="flex" :gutter="20">
          <el-col :span="14" class="mrt16">
            <div>ddd</div>
          </el-col>
          <el-col :span="10" class="mrt16">
            <div class="boardItemWrap itemWrap">
              <p>
                <strong>败诉率</strong>
                <b>12.12%</b>
              </p>
              <p>同比<span class="maincolor">9.46% <i class="el-icon-top"></i></span></p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <h1 class="flexCenter palr24">未进审理情况分析</h1>
        
      </el-col>
    </el-row>
    <el-row class="board borderradius white">
      <el-col :span="12">
        <h1 class="flexCenter palr24">网上立案情况</h1>
        <el-row class="boradList palr24" type="flex" :gutter="20">
          <el-col :span="10" class="mrt16">
            <div>ddd</div>
          </el-col>
          <el-col :span="14" class="mrt16">
            <div>ddd</div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <h1 class="flexCenter palr24">网上诉前调解率</h1>
        <el-col :span="10" class="mrt16">
            <div>ddd</div>
          </el-col>
          <el-col :span="14" class="mrt16">
            <div>ddd</div>
          </el-col>
      </el-col>
    </el-row>
    <div class="board borderradius white">
      <h1 class="flexCenter palr24">重要指标</h1>
      <div class="flex boradList boradNormalList palr24 pdt16 pdb20">
        <div class="shapeWrap noStyle shapeBg wh">
          <strong>庭审直播率</strong>
          <p class="percent">90.23%</p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg wh">
          <strong>庭审直播率</strong>
          <p class="percent">90.23%</p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg wh">
          <strong>庭审直播率</strong>
          <p class="percent">90.23%</p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg wh">
          <strong>一审诉讼费缓交案件</strong>
          <p class="percent">92<i>件</i></p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">金额</span>
            <span>23.23万元</span>
          </p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg wh">
          <strong>二审诉讼费缓交案件</strong>
          <p class="percent">52<i>场</i></p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">金额</span>
            <span>23.23万元</span>
          </p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
        <div class="shapeWrap noStyle shapeBg wh">
          <strong>邮件送达情况</strong>
          <p class="percent">92<i>件</i></p>
          
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">送达成功率</span>
          </p>
          <p class="flex pdtb10">
            <span class="fontSize16 tbtitle">同比</span>
            <span class="maincolor">2.9% <i class="el-icon-top"></i></span>
          </p>
        </div>
      </div>
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
          dwjb: '申请再审',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%',
          zbtb: '2.9%'
        },
        {
          dwjb: '申诉人向本院提出申诉',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%',
          zbtb: '2.9%'
        },
        {
          dwjb: '依职权审查',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%',
          zbtb: '2.9%'
        },
        {
          dwjb: '下级法院呈报最终审查',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%',
          zbtb: '2.9%'
        },
        {
          dwjb: '上级法院移交审查',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%',
          zbtb: '2.9%'
        },
        {
          dwjb: '抗诉',
          ajl: '927',
          tb: '36.00%',
          zb: '36.00%',
          zbtb: '2.9%'
        }
      ],
      activeName: 'first'
    }
  },
  computed: {
    colorType() {
      const colorType = new Map()
      colorType.set('申请再审', '#23C9DA')
      colorType.set('申诉人向本院提出申诉', '#659DFF')
      colorType.set('依职权审查', '#F9D029')
      colorType.set('下级法院呈报最终审查', '#FD9656')
      colorType.set('上级法院移交审查', '#FD2356'),
      colorType.set('抗诉', '#FDe096')
      return colorType
    }
  }
}
</script>