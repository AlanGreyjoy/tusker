import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from "../views/Welcome";
import Home from "../views/Home";

import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import ForgotPassword from "../views/Auth/ForgotPassword";

import TuskerHome from "../views/TuskerHome/TuskerHome";
import TuskerFeed from "../views/Feed/TuskerFeed";
import MarketStall from "../views/MarketStall/MarketStall";
import TuskerGroups from "../views/TuskerGroups/TuskerGroups";
import TuskerPages from "../views/TuskerPages/TuskerPages";
import FindTuskers from "../views/FindTuskers/FindTuskers";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/:displayName',
    name: 'home',
    component: TuskerHome,
    meta: {
      requiresAuth: true
    },
    props: true,
    children:[
      {
        path: 'home',
        name: 'tusker.home',
        component: Home,
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: 'tusker-feed',
            name: 'home.tuskerFeed',
            component: TuskerFeed,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: 'market-stall',
            name: 'home.marketStall',
            component: MarketStall,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: 'tusker-groups',
            name: 'home.tuskerGroups',
            component: TuskerGroups,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: 'tusker-pages',
            name: 'home.tuskerPages',
            component: TuskerPages,
            meta: {
              requiresAuth: true
            },
          },
          {
            path: 'find-tusker',
            name: 'home.findTusker',
            component: FindTuskers,
            meta: {
              requiresAuth: true
            },
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'auth.login',
    component: Login
  },
  {
    path: '/register',
    name: 'auth.register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'auth.forgotPassword',
    component: ForgotPassword
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/*
*  auth guard
* */
router.beforeEach((to, from, next)=>{
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      });
    }
    else
      next();
  }else{
    next()
  }
})

export default router
