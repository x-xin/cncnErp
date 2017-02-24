<template>
  <el-row class="cncn-menu">
    <el-col :span="24">
      <el-menu mode="vertical" :default-active="currentPath" class="menu" theme="dark" unique-opened router @open="handleOpen" @close="handleClose" @select="handleSelect">
        <template v-for="(item,index) in menuItem" v-if="!item.hidden">
          <el-submenu :index="index+''">
            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
            <el-menu-item v-for="child in item.children" :index="child.path">{{ child.name }}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'menu',
    data () {
      return {
        currentPath: '/table'
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
      }
    },
    mounted() {
      console.log(this.menuItem);
      this.currentPath = this.$route.path;
    }
  }
</script>
<style lang="stylus">
  .menu
    border-top 1px solid #42526d;
</style>
