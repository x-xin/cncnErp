<template>
  <el-row class="cncn-menu">
    <el-col :span="24">
      <el-menu mode="vertical" :default-active="currentPath" class="menu" theme="dark" unique-opened router @open="handleOpen" @close="handleClose" @select="handleSelect">
        <template v-for="(item,index) in menuItem" v-if="!item.hidden">
          <el-submenu :index="index+''">
            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
            <el-menu-item v-for="child in item.children" :index="child.path" @click="updateBreadcrumb(child.name)">{{ child.name }}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="24" class="copy">
      <a href="http://roda.wang/">©&nbsp;2017@Roda.Wang</a>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'menu',
    data () {
      return {
        currentPath: '/desc'
      }
    },
    computed: {
      menuItem () {
        return this.$router.options.routes
      }
    },
    watch: {
      '$route' (to, from){
        this.currentPath = to.path;
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      // mutations getCurrentMenuName
      updateBreadcrumb(name){
        this.$store.commit('getCurrentMenuName', name)
      }

    },
    mounted() {
      console.log(this.menuItem)
      this.currentPath = this.$route.path
      console.log(this.$route.name)
      this.updateBreadcrumb(this.$route.name)
    }
  }
</script>
<style lang="stylus">
  .menu
    border-top 1px solid #42526d
  .copy
    position absolute
    bottom 61px
    left 0px
    height 50px
    padding-left 20px
    line-height 50px
    font-size 12px
    color #3b4659
    border-top 1px solid #42526d
    background-color #1f2d3d
    a
      display block
      line-height 50px
      color #3b4659
      transition color .3s
      &:hover
        color #bfcbd9
</style>
