<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    // CncnHeader,CncnMenu
  },
  watch: {
    '$route'(to, from) {//监听路由改变
      let user = sessionStorage.getItem('user');
      if (!user) {
        this.$router.replace('/login')
      }
    }
  }
}
</script>

<style lang="less">
  @import "./less/style.less";
  body{
    background-color: #f1f1f1;
  }
  
</style>
