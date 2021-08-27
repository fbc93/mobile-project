import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Intro from '../components/Intro.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Trend from '../components/Trend.vue'
import Best from '../components/Best.vue'
import Community from '../components/Community.vue'
import Interior from '../components/Interior.vue'
import Store from '../components/Store.vue'
import Diy from '../components/Diy.vue'
import Product from '../components/Product.vue'
import Eco from '../components/Eco.vue'
import Refur from '../components/Refur.vue'
import Mypage from '../components/Mypage.vue'


Vue.use(Router)

let router = new Router({
  //mode: 'history',
  routes: [
   {
      path: '/',
      name: 'Trend',
      component: Trend,
      meta: {
        requiresAuth: true
      }
   },
   {
    path: '/intro',
    name: 'Intro',
    component: Intro,
    meta: {
      requiresGuest: true
    }
   },
   {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
        requiresGuest: true
      }
   },
   {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresGuest: true
    }
   },
   {
    path: '/best',
    name: 'Best',
    component: Best,
   meta: {
      requiresAuth: true
    }
   },
   {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      requiresAuth: true
    }
    
   },
   {
    path: '/interior',
    name: 'Interior',
    component: Interior,
    meta: {
      requiresAuth: true
    }
   },
   {
    path: '/store',
    name: 'Store',
    component: Store,
    meta: {
      requiresAuth: true
    }
   },
   {
    path: '/diy',
    name: 'Diy',
    component: Diy,
    meta: {
      requiresAuth: true
    }
   },
   {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {
      requiresAuth: true
    }
   },
   {
    path: '/eco',
    name: 'Eco',
    component: Eco,
    meta: {
      requiresAuth: true
    }
   },
   {
    path: '/refur',
    name: 'Refur',
    component: Refur,
    meta: {
      requiresAuth: true
    }
   },
   {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
    meta: {
        requiresAuth: true
      }
   }
 ]
});

// Nav Guards
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
    // 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
    if (!firebase.auth().currentUser) {
      next({
        path: '/intro',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)){
    if(firebase.auth().currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }else{
    next()
  }
})

export default router;