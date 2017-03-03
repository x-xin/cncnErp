<template>
  <el-row class="cncn-header">
    <el-col :span="21"><div class="logo">AdminCenter</div></el-col>
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
  import { mapMutations } from 'vuex'

  const user = sessionStorage.getItem('user');
  export default {
    name: 'header',
    data () {
      return {
        sysUserName: ""
      }
    },
    methods: {
      ...mapMutations([
        'ACCOUNT_MUTATION'
      ]),
      ...mapMutations({
        account: 'ACCOUNT_MUTATION'
      }),
      loginout() {
        this.$confirm("确认退出吗?","提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user');

          this.account({
            account: ''
          })
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
      if(user){
        this.sysUserName = user;
      }
      console.log(this.$store.getters.author);
    }
  }
</script>
<style lang="stylus" scoped>
  .logo
    width 210px
    padding-left 20px
    font-size 30px
    line-height 60px
    font-weight 600
  .loginout
    color #fff
</style>
