<template>
  <div class="main">
    <cncn-header></cncn-header>
    <cncn-menu></cncn-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  import CncnHeader from '../components/CncnHeader'
  import CncnMenu from '../components/CncnMenu'

  export default {
    name: 'home',
    components: {
      CncnHeader,CncnMenu
    },
    data () {
      return {
        //
      }
    }
  }
</script>
<style lang="less">
  //
  .cncn-main-panel{
    p{
      text-align: center;
    }
  }
  .cncn-main{
    margin: 90px 30px 30px 260px;
  }
</style>