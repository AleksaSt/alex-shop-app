import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shops from '../views/Shops.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import AddShops from '../views/AddShops.vue'
import AddOwner from '../views/AddOwner.vue'
import Owners from '../views/Owners.vue'
import MyShops from '../views/MyShops.vue'
import store from '../store';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      guest: true
    }
  },
  {
    path: '/shops',
    name: 'Shops',
    component: Shops
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      guest: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      guest: true
    }
  },
  {
    path: '/shops/create',
    name: 'AddShops',
    component: AddShops
  },
  {
    path: '/owners/create',
    name: 'AddOwner',
    component: AddOwner
  },
  {
    path: '/owners',
    name: 'Owners',
    component: Owners
  },
  {
    path: '/my-shops',
    name: 'MyShops',
    component: MyShops
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const isUserLoggedIn = store.getters.isUserLoggedIn

  if(!to.meta.guest && !isUserLoggedIn){
    return next({
      name: 'Login'
    })
  }

  if(to.name == 'Login' && isUserLoggedIn){
    return next({
      name: 'Home'
    })
  }

  if(to.name == 'Register' && isUserLoggedIn){
    return next({
      name: 'Home'
    })
  }

  return next()
})

export default router
