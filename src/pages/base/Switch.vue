<template>
	<div class="cncn-main">
    <cncn-breadcrumb></cncn-breadcrumb>
    <div class="cncn-main-panel">
    	<el-switch class="switch"
        v-model="value1"
        on-text=""
        off-text="">
      </el-switch>
      <el-switch class="switch"
        v-model="value2"
        on-color="#13ce66"
        off-color="#ff4949">
      </el-switch>
      <el-switch class="switch"
        v-model="value3"
        on-text=""
        off-text=""
        disabled>
      </el-switch>
      <el-switch class="switch"
        v-model="value3"
        disabled>
      </el-switch>
    </div>
  </div>
</template>
<script>
  import CncnBreadcrumb from 'components/CncnBreadcrumb'
	export default {
    name: 'switch',
    components: {
      CncnBreadcrumb
    },
    data() {
      return {
        value1: true,
        value2: true,
        value3: true
      }
    }
	}
</script>
<style lang="stylus">
.switch
 display block
 margin-bottom 30px
</style>