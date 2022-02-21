<template>
  <div :class="{'has-logo':showLogo}">
    <div class="header">
      <logo v-if="showLogo" :collapse="isCollapse" />
      <div class="scrollbar-wrapper">
        <el-menu
          class="elmenu"
          :default-active="activeMenu"
          :collapse="isCollapse"
          :text-color="variables.menuText"
          :unique-opened="true"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="true"
          mode="horizontal"
        >
          <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </div>
      <navbar />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import Navbar from '../Navbar'

export default {
  components: { SidebarItem, Logo, Navbar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route

      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.scrollbar-wrapper {
  width: 100%;
  ::v-deep .el-menu {
    background-color: transparent;
  }
  ::v-deep .elmenu {
    display: flex;
    border-right: none;
    .is-active {
      background: rgba(0, 197, 215, 0.25)!important;
      box-shadow: inset 0px 3px 0px 0px #23C9DA;
      display: inline-block;
      width: 100%;
    }
    .el-menu-item:focus, .el-menu-item:hover, .el-submenu__title:hover {
      background-color: transparent;
    }
    .el-menu--inline {
      position: absolute;
      z-index: 999;
      background: linear-gradient(90deg, #235EA6 0%, #2278AF 100%);
    }
    .el-submenu__title {
      min-width: 150px;
    }
    .nest-menu {
      .el-menu-item {
        padding: 0 20px;
        padding-left: 20px!important;
        min-width: 150px;
      }
    }
    .el-submenu__title i {
      color: #fff;
    }
  }
}
</style>