<template>
	<div class="cncn-main">
    <cncn-breadcrumb></cncn-breadcrumb>
    <div class="cncn-main-panel">
    	<div class="block">
        <span class="demonstration">默认不区分颜色</span>
        <el-rate v-model="value1"></el-rate>
      </div>
      <div class="block">
        <span class="demonstration">区分颜色</span>
        <el-rate
          v-model="value2"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
      <div class="block">
        <span class="demonstration">用辅助文字直接地表达对应分数</span>
        <el-rate
          v-model="value3"
          show-text>
        </el-rate>
      </div>
      <div class="block">
        <span class="demonstration">只读的评分用来展示分数，允许出现半星</span>
        <el-rate
          v-model="value5"
          disabled
          show-text
          text-color="#ff9900"
          text-template="{value}">
        </el-rate>
      </div>
    </div>
  </div>
</template>
<script>
  import CncnBreadcrumb from 'components/CncnBreadcrumb'
	export default {
    name: 'rate',
    components: {
      CncnBreadcrumb
    },
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value5: 3.7
      }
    }
	}
</script>
<style lang="stylus">
	
</style>
