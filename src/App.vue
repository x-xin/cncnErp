<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

const user = sessionStorage.getItem('user')
export default {
  name: 'app',
  components: {
    // CncnHeader,CncnMenu
  },
  watch: {
    '$route'(to, from) {//监听路由改变
      if (!user) {
        this.$router.replace('/login')
      }
    }
  },
  methods: {
    ...mapMutations([
      'ACCOUNT_MUTATION'
    ]),
    ...mapMutations({
      account: 'ACCOUNT_MUTATION'
    })
  },
  mounted(){
    this.account({
      account: user
    })
  }
}
</script>

<style lang="stylus">
//  
</style>
