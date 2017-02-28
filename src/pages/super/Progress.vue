<template>
	<div class="cncn-main">
    <cncn-breadcrumb></cncn-breadcrumb>
    <div class="cncn-main-panel">
      <div class="block">
        <span class="demonstration">线形进度条 — 百分比外显</span>
      	<el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </div>
      <div class="block">
        <span class="demonstration">线形进度条 — 百分比内显</span>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
      </div>
      <div class="block">
        <span class="demonstration">环形进度条</span>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </div>
    </div>
  </div>
</template>
<script>
  import CncnBreadcrumb from 'components/CncnBreadcrumb'
	export default {
    name: 'progress',
    components: {
      CncnBreadcrumb
    },
    data() {
      return {
        
      }
    }
	}
</script>
<style lang="stylus">
  .el-progress
    margin-bottom 15px
</style>