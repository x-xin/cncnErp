<template>
  <div class="main">
    <cncn-header></cncn-header>
    <cncn-menu></cncn-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  import CncnHeader from 'components/CncnHeader'
  import CncnMenu from 'components/CncnMenu'

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
<style lang="stylus">

</style>