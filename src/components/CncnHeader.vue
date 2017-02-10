<template>
  <el-row class="cncn-header">
    <el-col :span="20"><div class="logo">CNCNERP@jingdian.com</div></el-col>
    <el-col :span="4">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link loginout">
          {{ sysUserName }}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item divided @click.native="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        sysUserName: ""
      }
    },
    methods: {
      loginout(){
        this.$confirm("确认退出吗?","提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user');
          this.$router.replace('/login');
        }).catch(() => {
          console.log("取消退出");
        });
      }
    },
    mounted() {
      let user = sessionStorage.getItem('user');
      if(user){
        this.sysUserName = user;
      }
    }
  }
</script>
<style lang="less" scoped>
  .logo{
    margin-left: 20px;
  }
  .loginout{
    color: #fff;
  }
</style>
