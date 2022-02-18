<template>
<div>
  <div :class="classObj" class="app-wrapper">
    <div class="wrapper">
      <topSider />
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
      <div class="main-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main">
          <div class="main-container">
            <!-- <div :class="{'fixed-header':fixedHeader}">
              <navbar />
            </div> -->
            <app-main />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Sidebar, AppMain, topSider } from './components'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
    topSider
  },
  mixins: [],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .main-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    .sidebar-container {
      min-width: 200px;
      height: calc(100vh - 60px);
      // background-color: #2b2f3a;
    }
    .main {
      width: 100%;
      height: 100%;
    }
  }
</style>
