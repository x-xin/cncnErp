<template>
  <div class="cncn-main">
    <div class="cncn-main-panel">
      <el-form :model="userPass" :rules="rules" ref="setPassword" label-width="100px" class="password-form">

        <el-form-item label="原始密码：" prop="oldPass">
          <el-input type="password" v-model="userPass.oldPass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="新的密码：" prop="pass">
          <el-input type="password" v-model="userPass.pass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码：" prop="checkPass">
          <el-input type="password" v-model="userPass.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm('setPassword')" v-loading="loading">确认</el-button>
          <el-button @click="resetForm('setPassword')">重置</el-button>
        </el-form-item>

      </el-form> 
    </div>
  </div>
</template>
<script>
import { requestSetPassword } from '../api';
  export default {
    name: '',
    data() {
      let validateOldPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原始密码'));
        }else {
          callback();
        }
      }
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if (value.length < 6 ){
          callback(new Error('请输入至少6位数'));
        } 
        else {
          if (this.userPass.checkPass !== '') {
            this.$refs.setPassword.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value.length < 6 ){
          callback(new Error('请输入至少6位数'));
        }else if (value !== this.userPass.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        userPass: {
          oldPass:'',
          pass: '',
          checkPass: ''
        },
        rules: {
          oldPass: [
            { validator: validateOldPass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        loading: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!');
            this.loading = true;
            requestSetPassword({
              oldPass : this.userPass.oldPass,
              pass: this.userPass.pass
            }).then(data => {
              if(data.code === 1){
                this.$alert('新密码是：' + data.pass + ' 请点击确认重新登录', data.msg, {
                  confirmButtonText: '确定',
                  callback: action => {
                    sessionStorage.removeItem('user');
                    this.$router.replace('/login');
                  }
                });
              }else{
                this.$notify({
                  title: '原始密码错误',
                  message: data.msg,
                  type: 'error'
                });
              }
              this.loading = false;
            });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="stylus">
  //
  .password-form
    width 350px
    button
      width 47%
</style>