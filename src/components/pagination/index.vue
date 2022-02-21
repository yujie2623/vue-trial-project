<template>
  <el-pagination
    :background='background'
    :layout="layout"
    :total="total"
    :page-size="pageSize"
    :current-page.sync="current"
    :page-sizes="pageSizes"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :hide-on-single-page='singlepage'
  >
  </el-pagination>
</template>
<script>
  export default {
    props: {
      background: {
        type: Boolean,
        default: false,
      },
      layout:{
        type: String,
        default: 'total, sizes, prev, pager, next, jumper',
      },
      total:{
        type: Number,
        default: 100,
      },
      pageSize:{
        type: Number,
        default: 10,
      },
      pageSizes:{
        type: Array,
        default: () => [10, 20, 30, 40, 50, 100],
      },
      singlepage: {
        type: Boolean,
        default: false,
      },
      current:{
        type: Number,
        default: 1,
      },
    },
    methods: {
      // pageSize 改变时会触发
      handleSizeChangepageSize (val) {
        this.$emit('handleSizeChangepageSize ',val)
      },
      // currentPage 改变时会触发
      handleCurrentChange(val){
        this.$emit('handleCurrentChange',val)
      }
    },
  }
</script>