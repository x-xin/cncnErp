<template>
  <div class="cncn-header">
    <el-row>
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
  </div>
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
<style lang="less">
  .cncn-header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #1f2d3d;
    color: #c0ccda;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;

    .logo{
      margin-left: 20px;
    }
    .loginout{
      color: #fff;
    }
  }
</style>
