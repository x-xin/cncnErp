<template>
  <div class="cncn-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ currentName }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        //
      }
    },
    computed: {
      currentName() {
        return this.$store.state.currentName
      }
    }
  }
</script>
<style lang="stylus">
//
</style>