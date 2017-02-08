<template>
  <div class="cncn-menu">
    <el-row>
      <el-col :span="24">
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" theme="dark" router unique-opened>

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>主要组件</template>
            <el-menu-item index="table">Table</el-menu-item>
            <el-menu-item index="form">form</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>测试导航二</template>
            <el-menu-item index="caidan3"></i>菜单三</el-menu-item>
            <el-menu-item index="caidan4">菜单四</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i>测试导航三</template>
            <el-menu-item index="caidan5">菜单五</el-menu-item>
            <el-menu-item index="caidan6">菜单六</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'menu',
    data () {
      return {
        // 
      }
    }
  }
</script>
<style lang="less">
  //
  
</style>
