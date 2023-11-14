import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MainPage from '../components/Navigation.vue'
import Report from '../views/admin/Report.vue'
import Order from '../views/admin/Order.vue'
import Users from '../views/admin/Users.vue'
import ATM from '../views/admin/ATM.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Addnewatm from '../views/admin/Addnewatm.vue'
import Viewdetail from '../views/admin/Viewdetail.vue'
import Profile from '../views/admin/Profile.vue'
import Adduser from '../views/admin/AddUser.vue'
import Updateatm from '../views/admin/Updateatm.vue'
import Sparepart from '../views/admin/Sparepart.vue'

import ATMemployee from '../views/employee/ATMemployee.vue'
import DashBoard from '../views/employee/DashBoard.vue'
import OrderEmployee from '../views/employee/OrderEmployee.vue'
import ReportEmployee from '../views/employee/ReportEmployee.vue'
import Employee from '../components/EmployeePage.vue'
import ProfileEm from '../views/employee/ProfileEm.vue'
import ViewdetailATM from '../views/employee/ViewdetailATM.vue'
import Addnewmachine from '../views/employee/Addnewmachine.vue'
import Updatemachine from '../views/employee/Updatemachine.vue'
import EmSparepart from '../views/employee/EmSparepart.vue' 



Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name: 'login',
    component : Login,
    meta: {guestOnly: true }
  },
  {
    path :'/register',
    name : 'register',
    component: Register,
    meta: {guestOnly: true }
  },
  
  {
    path: '/main_page',
    name :'main_page',
    component : MainPage,
    redirect : '/main_page/dashboard',
    children: [
      {
        path : 'dashboard',
        name : 'dashboard',
        component : Dashboard,
        meta: { authOnly: true }
      },
      {
        path : 'report',
        name : 'report_page',
        component : Report
      },
      {
        path : 'atm',
        name : 'atm_page',
        component : ATM
      },
      {
        path : 'order',
        name : 'order_page',
        component : Order
      },
      {
        path : 'users',
        name : 'users_page',
        component : Users
      },
      {
        path : 'adduser',
        name : 'adduser_page',
        component : Adduser
      },
      {
        path : 'addnewatm',
        name : 'addnewatm_page',
        component : Addnewatm
      },
      {
        path : 'viewdetail/:id',
        name : 'viewdetail_page',
        component : Viewdetail
      },
      {
        path : 'update/:id',
        name : 'update_page',
        component : Updateatm
      },
      {
        path : 'profile',
        name : 'profile_page',
        component : Profile
      },
      {
        path : 'spare_part',
        name : 'spare_part_page',
        component : Sparepart
      }
    ]
  },
    {
      path : '/employee',
      name : 'employee',
      component : Employee,
      redirect: '/employee',
      children : [
        {
          path:'dashboardemployee',
          name: 'dashboardemployee',
          component : DashBoard,
          meta: { authOnly: true }
        },
        {
          path:'atmemployee',
          name: 'atmemployee',
          component : ATMemployee
        },
        {
          path:'orderemployee',
          name: 'orderemployee',
          component :OrderEmployee
        },
        {
          path:'reportemployee',
          name: 'reportemployee',
          component :ReportEmployee
        },
        {
          path : 'profile',
          name : 'profileem_page',
          component : ProfileEm
        },
        {
          path: 'viewdetailatm/:id',
          name : 'viewdetailatm',
          component: ViewdetailATM
        },
        {
          path : 'addnewmachine',
          name : 'addnewmachine',
          component : Addnewmachine
        },
        {
          path : 'updatemachine/:id',
          name : 'updatemachine',
          component : Updatemachine
        },
        {
          path:'sparepart',
          name:'sparepart',
          component:EmSparepart,
        }
      ],

    }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
