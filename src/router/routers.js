import Home from 'pages/Home.vue'
import Table from 'pages/Table.vue'
import Form from 'pages/Form.vue'
import Login from 'pages/Login.vue'
import SetPassword from 'pages/SetPassword.vue'
import Desc from 'pages/Desc.vue'
import Date from 'pages/Date.vue'

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
