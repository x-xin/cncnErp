<template>
	<div class="cncn-main">
    <cncn-breadcrumb></cncn-breadcrumb>
    <div class="cncn-main-panel">
      <div class="block">
        <span class="demonstration">当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</span>
      	<el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="block">
        <span class="demonstration">可以设置切换箭头的显示时机</span>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="block">
        <span class="demonstration">可以将指示器的显示位置设置在容器外部</span>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
  </div>
</template>
<script>
  import CncnBreadcrumb from 'components/CncnBreadcrumb'
	export default {
    name: 'carousel',
    components: {
      CncnBreadcrumb
    },
    data() {
      return{

      }
    }
	}
</script>
<style lang="stylus">    
  .el-carousel__item
    h3 
      color #475669
      font-size 14px
      opacity 0.75
      line-height 200px
      margin 0
      text-align center
    &:nth-child(2n)
      background-color #99a9bf
    &:nth-child(2n+1)
      background-color #d3dce6
</style>