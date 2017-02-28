<template>
	<div class="cncn-main">
    <cncn-breadcrumb></cncn-breadcrumb>
    <div class="cncn-main-panel">
      <p># Technology Stack</p>
    	<P>vue vuex vue-router stylus express mockjs axios element-ui</P>
      <p># install dependencies</p>
      <p>npm install</p>
      <p># serve with hot reload at localhost:80</p>
      <p>npm run dev</p>
      <p># build for production with minification</p>
      <p>npm run build</p>
    </div>
  </div>
</template>
<script>
  import CncnBreadcrumb from 'components/CncnBreadcrumb'
	export default {
		name: 'desc',
    components: {
      CncnBreadcrumb
    },
		data () {
			return {
				//
			}
		}
	}
</script>
<style lang="stylus" scoped>
p
  line-height 40px 
  text-align left !important
  &:nth-child(2n+1)
    color #ccc
    font-style italic
</style>