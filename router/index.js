import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView2.vue";
import GetStarted from '../views/app/loginPage.vue'
import Home from '../dashboard/dashboardComponent/sidenavComponent/Home.vue'
import Apperance from '../dashboard/dashboardComponent/sidenavComponent/Apperance.vue'
import Blog from '../dashboard/dashboardComponent/sidenavComponent/Blog.vue'
import Order from '../dashboard/dashboardComponent/sidenavComponent/Order.vue'
import Payout from '../dashboard/dashboardComponent/sidenavComponent/Payout.vue'
import Discount from '../dashboard/dashboardComponent/sidenavComponent/Discount.vue'
import Tools from '../dashboard/dashboardComponent/sidenavComponent/Tools.vue'
import Plugins from '../dashboard/dashboardComponent/sidenavComponent/Plugins.vue'
import Product from '../dashboard/dashboardComponent/sidenavComponent/Product.vue'

const redirect = function (to,from,next){
  if(!localStorage.getItem('token')){
    next('/login')
  }else{
    next()
  }
}
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: HomeView,
    },{
      path: "/login",
      name: "login",
      component: GetStarted,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          // check if user is not logged in
          next({ name: 'dash' }) // redirect to login page
        } else {
          next()
        }
      }
    },
    {
      path: "/dash/",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) => {
        redirect(to,from,next)
      }
    }, {
      path: "/dash/apperance",
      name: "apperance",
      component: Apperance,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    }, {
      path: "/dash/blog",
      name: "blog",
      component: Blog,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    }, {
      path: "/dash/order",
      name: "order",
      component: Order,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    }, {
      path: "/dash/payout",
      name: "payout",
      component: Payout,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    }, {
      path: "/dash/discount",
      name: "discount",
      component: Discount,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    },
    {
      path: "/dash/tool",
      name: "tool",
      component: Tools,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    }, {
      path: "/dash/plugin",
      name: "plugin",
      component: Plugins,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    }, {
      path: "/dash/product",
      name: "product",
      component: Product,  beforeEnter: (to, from, next) => {
       redirect(to,from,next)
      }
    },
  ],
});

export default router;
