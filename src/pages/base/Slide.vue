<template>
	<div class="cncn-main">
    <cncn-breadcrumb></cncn-breadcrumb>
    <div class="cncn-main-panel">
    	<div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="value1"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="value2"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">禁用</span>
        <el-slider v-model="value3" disabled></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">不显示间断点</span>
        <el-slider
          v-model="value4"
          :step="10">
        </el-slider>
      </div>
      <div class="block">
        <span class="demonstration">显示间断点</span>
        <el-slider
          v-model="value5"
          :step="10"
          show-stops>
        </el-slider>
      </div>
      <div class="block">
        <span class="demonstration">通过输入框设置精确数值</span>
        <el-slider
          v-model="value6"
          show-input>
        </el-slider>
      </div>
    </div>
  </div>

</template>
<script>
  import CncnBreadcrumb from 'components/CncnBreadcrumb'
	export default {
    name: "slide",
    components: {
      CncnBreadcrumb
    },
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 42,
        value4: 0,
        value5: 0,
        value6: 0
      }
    }
  }
</script>
<style lang="stylus">
  .block
    margin-bottom 20px
    padding 20px
    border 1px solid #eaeefb
    border-radius 4px
    transition .2s
    &:hover
      box-shadow 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5)
    >span
      display block
      margin-bottom 10px
</style>