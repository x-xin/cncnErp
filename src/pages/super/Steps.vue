<template>
	<div class="cncn-main">
    <cncn-breadcrumb></cncn-breadcrumb>
    <div class="cncn-main-panel">
    	<div class="block">
        <span class="demonstration">简单的步骤条。</span>
        <el-steps :space="100" :active="active1" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next1">下一步</el-button>
      </div>

      <div class="block">
        <span class="demonstration">含状态步骤条</span>
        <el-steps :space="100" :active="active2" finish-status="success">
          <el-step title="已完成"></el-step>
          <el-step title="进行中"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next2">下一步</el-button>
      </div>

      <div class="block">
        <span class="demonstration">每个步骤有其对应的步骤状态描述</span>
        <el-steps :space="200" :active="active3">
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next3">下一步</el-button>
      </div>

      <div class="block">
        <span class="demonstration">步骤条内可以启用各种自定义的图标</span>
        <el-steps :space="100" :active="active4">
          <el-step title="步骤 1" icon="edit"></el-step>
          <el-step title="步骤 2" icon="upload"></el-step>
          <el-step title="步骤 3" icon="picture"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next4">下一步</el-button>
      </div>

      <div class="block">
        <span class="demonstration">竖直方向的步骤条</span>
        <el-steps :space="100" direction="vertical" :active="active5">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next5">下一步</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import CncnBreadcrumb from 'components/CncnBreadcrumb'
	export default {
    name: 'steps',
    components: {
      CncnBreadcrumb
    },
    data() {
      return {
        active1: 0,
        active2: 0,
        active3: 0,
        active4: 0,
        active5: 0,
      };
    },
    methods: {
      next1() {
        if (this.active1++ > 2) this.active1 = 0;
      },
      next2() {
        if (this.active2++ > 2) this.active2 = 0;
      },
      next3() {
        if (this.active3++ > 2) this.active3 = 0;
      },
      next4() {
        if (this.active4++ > 2) this.active4 = 0;
      },
      next5() {
        if (this.active5++ > 2) this.active5 = 0;
      }
    }
	}
</script>
<style lang="stylus">
  
</style>