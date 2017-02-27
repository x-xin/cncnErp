import Home from 'pages/Home.vue'

import Login from 'pages/Login.vue'
import SetPassword from 'pages/system/SetPassword.vue'
import Desc from 'pages/guide/Desc.vue'

import Progress from 'pages/super/Progress.vue'
import Steps from 'pages/super/Steps.vue'
import Carousel from 'pages/super/Carousel.vue'
import Collapse from 'pages/super/Collapse.vue'
import Date from 'pages/super/Date.vue'

import Slide from 'pages/base/Slide.vue'
import Switch from 'pages/base/Switch.vue'
import Rate from 'pages/base/Rate.vue'
import Table from 'pages/base/Table.vue'
import Form from 'pages/base/Form.vue'

const routers = [
  {
    path: '/',
    redirect: '/desc',
    hidden: true       //不显示在导航中
  },
  {
    name: 'login', 
    path: '/login', 
    component: Login,
    hidden: true        //不显示在导航中
  },
  {
    name: '快速上手', 
    path: '/', 
    component: Home,
    icon: 'el-icon-document',
    children: [
      { path: '/desc', component: Desc, name: '入门说明' }
    ]
  },
  {
    name: '基础组件', 
    path: '/', 
    component: Home,
    icon: 'el-icon-setting',
    children: [
      { path: '/slide', component: Slide, name: '滑块' },
      { path: '/switch', component: Switch, name: '开关' },
      { path: '/rate', component: Rate, name: '评分' },
      { path: '/table', component: Table, name: '表格排列' },
      { path: '/form', component: Form, name: '表单数据' }
    ]
  },
  {
    name: '高级组件', 
    path: '/', 
    component: Home,
    icon: 'el-icon-upload',
    children: [
      { path: '/progress', component: Progress, name: '进度条' },
      { path: '/steps', component: Steps, name: '步骤条' },
      { path: '/carousel', component: Carousel, name: '走马灯' },
      { path: '/collapse', component: Collapse, name: '折叠面板' },
      { path: '/date', component: Date, name: '日期控件' }
    ]
  },
  {
    name: '系统配置', 
    path: '/', 
    component: Home,
    icon: 'el-icon-menu',
    children: [
      { path: '/setpassword', component: SetPassword, name: '修改密码' }
    ]
  }

]

export default routers
