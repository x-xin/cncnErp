import Home from 'pages/Home.vue'
import Table from 'pages/Table.vue'
import Form from 'pages/Form.vue'
import Login from 'pages/Login.vue'

const routers = [
  { path: '/', redirect: '/table' },
  {
    name: 'login', 
    path: '/login', 
    component: Login
  },
  {
    name: 'nemu1', 
    path: '/', 
    component: Home,
    children: [
      { path: '/table', component: Table, name: 'Table' },
      { path: '/form', component: Form, name: 'Form' }
    ]
  }

]

export default routers
