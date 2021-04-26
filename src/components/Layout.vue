<template>
  <el-container>

    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu--horizontal"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" @click="toHome">
          Home
        </el-menu-item>
        <el-submenu index="2">
          <template #title>About</template>
          <el-menu-item index="2-1" @click="toAbout">about1</el-menu-item>
          <el-menu-item index="2-2">about2</el-menu-item>
          <el-menu-item index="2-3">about3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4" @click="toLogin">
          Login
        </el-menu-item>
        <el-menu-item index="5" @click="toBooks">
          Books
        </el-menu-item>
        <el-submenu index="6">
          <template #title>Lang</template>
          <el-menu-item index="6-1" @click="changeLangZh">zh</el-menu-item>
          <el-menu-item index="6-2" @click="changeLangEn">en</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="line"></div>
    </el-header>

    <el-main>Main
    <router-view/>
    </el-main>

    <el-footer>Footer</el-footer>

  </el-container>
</template>

<script lang="ts">
import i18n from '@/languages'
import router from '@/router'

export default {
  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    toHome () {
      router.push('/')
    },
    toLogin () {
      router.push('/login')
    },
    toAbout () {
      router.push('/about')
    },
    toBooks () {
      router.push('/books')
    },
    changeLangZh () {
      i18n.global.locale = 'zh'
    },
    changeLangEn () {
      i18n.global.locale = 'en'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
