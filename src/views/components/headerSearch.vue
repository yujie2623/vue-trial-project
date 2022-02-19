<template>
  <div class="main-header mrt16">
    <el-select v-model="value" placeholder="请选择" @change="search">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span v-if="isShowRouter">{{routetitle}}</span>
    <div v-if="isShowTs">
      庭室：
      <el-select v-model="value2" placeholder="请选择" @change="search">
        <el-option
          v-for="item in optionsTs"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="search">
      日期：
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button class="mrl20" @click="search">查询</el-button>
    </div>
   
    
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    isShowRouter: {
      type: Boolean,
      default: false
    },
    isShowTs: {
      type: Boolean,
      default: false
    },
    optionsTs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      value: '1',
      routetitle: this.$route.meta.title,
      value1: '',
      value2: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.value)
    }
  }
}
</script>