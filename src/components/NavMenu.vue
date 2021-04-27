<template>
  <el-menu
    mode="horizontal"
    background-color="white"
    text-color="#303133"
    active-text-color="#409EFF"
    router="router"
    menu-trigger="click">
    <!--语言栏-->
    <el-submenu style="float: right" class="hidden-sm-and-down" index="lang">
      <template v-slot:title>
        {{ lang }}
      </template>
      <el-menu-item @click="changeLang('zh')">简体中文</el-menu-item>
      <el-menu-item @click="changeLang('en')">English</el-menu-item>
    </el-submenu>
    <!--菜单栏,route跳转-->
    <el-menu-item
      :key="key"
      v-for="(item,key) in revNavItems"
      :index="item.index"
      class="hidden-sm-and-down"
      style="float: right;align-content: center" >
      {{ $t(item.name) }}
    </el-menu-item>
    <!--菜单栏,自适应-->
    <el-submenu style="float: right" class="hidden-md-and-up" index="menu-responsive">
      <template v-slot:title>
        <i class="el-icon-menu" style="font-size:28px;color:#2d2d2d"></i>
      </template>
      <el-menu-item
        :key="key"
        v-for="(item,key) in navItems"
        :index="item.index">
        {{ $t(item.name) }}
      </el-menu-item>
      <el-menu-item @click="changeLang('zh')">简体中文</el-menu-item>
      <el-menu-item @click="changeLang('en')">English</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import i18n from '@/languages'

export default defineComponent({
  name: 'NavMenu',
  data () {
    return {
      navItems: [
        { name: 'header.menu.home', index: '/' },
        { name: 'header.menu.about', index: '/about' },
        { name: 'header.menu.login', index: '/login' },
        { name: 'header.menu.books', index: '/books' }
      ],
      languages: [
        { name: '简体中文', command: 'zh' },
        { name: 'English', command: 'en' }
      ],
      lang: this.$t('header.menu.lang')
    }
  },
  computed: {
    revNavItems ():{ name: string; index: string; }[] {
      return this.navItems.slice().reverse()
    }
  },
  methods: {
    changeLang (lang: string) {
      i18n.global.locale = lang
      for (const language of this.languages) {
        if (language.command === lang) {
          this.lang = language.name
        }
      }
    }
  }
})
</script>

<style lang="scss">

</style>
