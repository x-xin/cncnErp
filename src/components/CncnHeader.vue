<template>
  <el-row class="cncn-header">
    <el-col :span="21"><div class="logo">CncnAdmin</div></el-col>
    <el-col :span="3">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link loginout">
          {{ sysUserName }}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="alertMsg">我的消息</el-dropdown-item>
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
      loginout() {
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
      },
      alertMsg() {
        this.$alert('这是一段消息内容', '我的消息', {
          confirmButtonText: '确定',
          callback: action => {
            console.log(action)
          }
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
<style lang="stylus" scoped>
  .logo
    margin-left 20px
  .loginout
    color #fff
</style>
