<template>
<div>
  <div :class="classObj" class="app-wrapper">
    <div class="wrapper">
      <!-- <topSider /> -->
      <sidebar class="sidebar-container" />
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
      <div class="main-wrapper">
        <div class="main">
          <div class="main-container">
            <app-main />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
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
  .app-wrapper {
    .wrapper {
      .sidebar-container {
        width: 100%;
        display: flex;
        background: linear-gradient(90deg, #235EA6 0%, #2278AF 100%);
      }
    }
  }
</style>
