import Home from 'pages/Home.vue'
import Table from 'pages/Table.vue'
import Form from 'pages/Form.vue'
import Login from 'pages/Login.vue'
import SetPassword from 'pages/SetPassword.vue'

const routers = [
  {
    path: '/',
    redirect: '/table',
    hidden: true       //不显示在导航中
  },
  {
    name: 'login', 
    path: '/login', 
    component: Login,
    hidden: true        //不显示在导航中
  },
  {
    name: '基础组件', 
    path: '/', 
    component: Home,
    icon: 'el-icon-setting',
    children: [
      { path: '/table', component: Table, name: 'Table' },
      { path: '/form', component: Form, name: 'Form' }
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
