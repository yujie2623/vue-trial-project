<template>
  <div class="baseHeader mrt16">
    <h3>{{title}}</h3>
    <h1 class="flexCenter palr24">基本情况</h1>
  </div>
</template>
<script>
export default {
  name: 'baseHeader',
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.baseHeader {
  width: 100%;
  height: auto;
  background: #fff;
  h3 {
    text-align: center;
    padding: 30px 0;
    font-size: 22px;
    font-weight: 500;
    color: #2E3445;
    line-height: 33px;
  }
}
</style>