<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px" class="login-form">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="loginForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="memory-pass">记住密码</el-checkbox>
    <el-form-item>
      <el-button type="primary" class="login-btn" @click.native.prevent="handleSubmit" v-loading="loading">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  // import { requestLogin } from '../api';
  import { mapActions,mapGetters } from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        //
        loginForm: {
          account: "Roda",
          checkPass: "123456"
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        checked: true
      }
    },
    computed: {
      ...mapGetters([
        'loading','account'
      ])
    },
    methods: {
      ...mapActions([
        'postLogin'
      ]),
      handleSubmit(){
        this.$refs.loginForm.validate((valid) => {
          if(valid){
            let loginParams = {
              username: this.loginForm.account,
              password: this.loginForm.checkPass
            }
            
            let _this = this
            this.postLogin({

              params: loginParams,

              success(res) {
                if(res.data.code !== 1){
                  _this.$notify({
                    title: '错误',
                    message: res.data.msg,
                    type: 'error'
                  });
                }else{
                  // 路由跳转
                  console.log(res.data.code);
                  sessionStorage.setItem('user', _this.account);
                  _this.$router.push({ path: '/desc' });
                }

              },
              error(res) {
                console.log(res);
              }

            })

          }else{
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="stylus" scoped>

  .login-form
    margin 180px auto
    padding 30px
    width 350px
    background-color #F9FAFC
    border-radius 5px
    box-shadow 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02)
    .title
      margin-bottom 40px
      text-align center
      font-weight bold
      font-size 20px
    .memory-pass
      margin-bottom 30px
    .login-btn
      width 100%
</style>