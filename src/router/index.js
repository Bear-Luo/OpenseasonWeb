import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import Orders from '@/components/pages/Orders'
import Coupons from '@/components/pages/Coupons'
import OpenSeason from '@/components/OpenSeason'
import OpenSeasonHome from '@/components/pages/OpenSeasonHome'
import OpenSeasonProducts from '@/components/OpenSeasonProducts'
import ProductList from '@/components/pages/ProductList'
import OpenSeasonCarts from '@/components/pages/OpenSeasonCarts'
import OpenSeasonOrder from '@/components/pages/OpenSeasonOrder'
import OpenSeasonHeart from '@/components/pages/OpenSeasonHeart'
import OpenSeasonProductPage from '@/components/pages/OpenSeasonProductPage'
import ErrorPage from '@/components/pages/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/error'
    },
    {
      path: '/error',
      name: 'ErrorPage',
      component: ErrorPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [        
        {
          path: 'products', 
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true }
        },     
        {
          path: 'orders', 
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true }
        },     
        {
          path: 'coupons', 
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/openseason_home',
      alias: '/',
      name: 'OpenSeason',
      component: OpenSeason,
      meta: {scrollToTop: true},
      children: [
        {
          path: '/openseason_home',
          name: 'OpenSeasonHome',
          component: OpenSeasonHome
        },
        {
          path: '/openseason_products',
          name: 'OpenSeasonProducts',
          component: OpenSeasonProducts,
          children: [
            {
              path: '/product_list',
              name: 'ProductList',
              component: ProductList
            },
            {
              path: '/carts',
              name: 'OpenSeasonCarts',
              component: OpenSeasonCarts
            },
            {
              path: '/order/:orderId',
              name: 'OpenSeasonOrder',
              component: OpenSeasonOrder
            },
            {
              path: '/heart',
              name: 'OpenSeasonHeart',
              component: OpenSeasonHeart
            },
            {
              path: '/product_page/:id',
              name: 'OpenSeasonProductPage',
              component: OpenSeasonProductPage
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition
    } else {
      const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      // if (to.hash) {
      //   // position.selector = to.hash
      //   return {
      //     selector: to.hash
      //     // , offset: { x: 0, y: 62 }
      //   }    
      // }

      // 儲存停留的位置
      if (from.meta.keepAlive) {
      　　from.meta.savedPosition = document.body.scrollTop;
      }
      
      // 如果meta中有scrollTop
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  }
})
