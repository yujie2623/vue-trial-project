<template>
  <div class="main-content">
    <header-search :optionsArea="optionsArea" :isShowRouter="true" :isArea="true" @search="search" />
    <base-header title="未成年人犯罪分析"></base-header>
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
      <h1 class="flexCenter palr24">办案案件趋势</h1>
      <div class="pdt16 pdb16" style="height: 400px">
        <barline :data="data"  />
      </div>
    </div>
    <div class="board borderradius white mrtb16">
      <h1 class="flexCenter palr24">未成年人最容易犯罪案由</h1>
      <div class="positive pdt16 pdb16" style="height: 400px">
        <p class="positive palr24" style="padding-left:40px padding-bottom:20px">
          <em class="maincolor">按新收总量排序</em><el-divider direction="vertical"></el-divider><em class="fontSize18">按新收总量排序</em>
        </p>
        <barline :data="data1"  />
      </div>
    </div>
    <el-row class="board borderradius white">
      <el-col :span="12">
        <h1 class="flexCenter palr24">未成年人文化程度特征</h1>
        <div class="palr24" style="width:100%;height: 300px;">
          <pie :data="peiSentence" />
        </div>
      </el-col>
      <el-col :span="12">
        <h1 class="flexCenter palr24">未成年人案发时间分布</h1>
        <div class="palr24" style="width:100%;height: 300px;">
          <bar :data="dataPortrait"  />
        </div>
      </el-col>
    </el-row>
    <el-row class="board borderradius white">
      <el-col :span="12">
        <h1 class="flexCenter palr24">未成年人家庭特征</h1>
        <div class="palr24" style="width:100%;height: 300px;">
          <bar :data="dataPortrait1"  />
        </div>
      </el-col>
      <el-col :span="12">
        <h1 class="flexCenter palr24">未成年人年龄特征</h1>
        <div class="palr24" style="width:100%;height: 300px;">
          <line-echart :data="linedata"  />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import headerSearch from '../components/headerSearch'
import baseHeader from '../components/baseHeader'
import barline from '@/views/components/echart/barline'
import pie from '@/views/components/echart/pie'
import bar from '@/views/components/echart/bar'
import lineEchart from '@/views/components/echart/line'
export default {
  components: { headerSearch, baseHeader, barline, pie, bar, lineEchart },
  data() {
    return {
      optionsArea: [{
        value: '1',
        label: '安徽省xxxx'
      }, {
        value: '2',
        label: '河北省xxxx'
      }, {
        value: '3',
        label: '河南省xxxx'
      }, {
        value: '4',
        label: '广东省xxxx'
      },
      {
        value: '5',
        label: '广西省xxxx'
      }],
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
        seriesType: ['line', 'line', 'line','line'],
        yAxisIndex: [0,0,0,1],
      },
      data1: {
        id: 'barLine2',
        color: ['#23C9DA','#1889FA','#7786F3','#FD9656'],
        yAxisNameLeft: '案件数量(件)',
        yAxisNameRight: '结案率',
        legend: ['2021','2022', '结案率'],
        category: ['2022-01','2022-02','2022-03','2022-04','2022-05','2022-06','2022-07','2022-08','2022-09','2022-10','2022-11','2022-12'],
        data: [
            [2600,2600,2500,3900,4500,3200,3200,3100,1900,1800,1800,1100],
            [1800,2200,3200,4600,5000,4100,3800,4100,1000,1200,1500,1500],
            // [1200,1600,2100,2900,3100,2700,2800,2800,1800,1800,1000,1100],
            [19,23,25,80,100,68,70,70,16,20,21,90]
        ],
        seriesType: ['bar', 'bar'],
        yAxisIndex: [0,0,1],
      },
      peiSentence: {
        id: 'peiSentence',
        color: ['#F9D029','#23C9DA','#1889FA','#FD9656'],
        titleShow: false,
        text: '',
        pieUnit: '件',
        radius: '50%',
        seriesLabelShow: true,
        seriesLabelLineShow: true,
        data: [
          {name:'高中',value:327},
          {name:'文盲或半文盲',value:327},
          {name:'小学',value:327},
          {name:'初中',value:327}
        ]
      },
      dataPortrait: {
        id: 'dataPortrait',
        color: ['#23C9DA'],
        yAxisName: '案件数(件)',
        legend: [''],
        category: ['3年以下 有期徒刑','3年-5年 有期徒刑','5年以上 有期徒刑','无期徒刑','死刑','管制','拘役'],
        data: [[250,20,240,400,100,330,300,200]]
      },
      dataPortrait1: {
        id: 'dataPortrait1',
        color: ['#23C9DA'],
        yAxisName: '',
        legend: [''],
        category: ['流动家庭','离异家庭','留守家庭','单亲家庭','再婚家庭','孤儿'],
        data: [[250,20,240,400,100,330,300]]
      },
      linedata: {
       id: 'line',
       color: ['#23C9DA','#FD9656'],
       yAxisName: '',
       legend: [''],
       smooth: true,
       category: ['0时','3时','6时','9时','12时','15时'],
       data: [
         [200,300,320,340,50,330]]
      },
    }
  },
  methods: {
      search() {}
  }
}
</script>