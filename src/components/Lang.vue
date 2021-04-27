<template>
  <!--语言栏,切换语言-->
  <el-dropdown
    @command="changeLang"
    trigger="click" style="float: right">
        <span>
          {{ lang }}<i class="el-icon-arrow-down"></i>
        </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :key="item.command"
          :command="item.command"
          v-for="item in languages">
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Lang'
}
</script>

<style scoped>

</style>
