<template>
  <div class="baseHeader mrt16 pdb16">
    <h3>{{title}}</h3>
    <h1 class="flexCenter palr24">{{firstTitle}}</h1>
  </div>
</template>
<script>
export default {
  name: 'baseHeader',
  props: {
    title: String,
    firstTitle: String
  }
}
</script>
<style lang="scss" scoped>
.baseHeader {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 5px;
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