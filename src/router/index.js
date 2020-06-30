import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/error'
  },
  {
    path: '/error',
    name: 'ErrorPage',
    component: () => import('@/views/Error'),
    meta: {
      title: '角獵咖啡 - 此頁面不存在'
    }
  },
  {
    path: '/openseason_home',
    alias: '/',
    name: 'OpenSeason',
    component: () => import('@/views/frontend/OpenSeason'),
    meta: { scrollToTop: true },
    children: [
      {
        path: '/openseason_home',
        name: 'OpenSeasonHome',
        component: () => import('@/views/frontend/OpenSeasonHome.vue')
      },
      {
        path: '/openseason_products',
        name: 'OpenSeasonProducts',
        component: () => import('@/views/frontend/OpenSeasonProducts'),
        children: [
          {
            path: '/product_list',
            name: 'ProductList',
            component: () => import('@/views/frontend/ProductList'),
            meta: {
              title: '角獵咖啡 - 手作產品'
            }
          },
          {
            path: '/carts',
            name: 'OpenSeasonCarts',
            component: () => import('@/views/frontend/OpenSeasonCarts'),
            meta: {
              title: '角獵咖啡 - 輸入寄送資訊'
            }
          },
          {
            path: '/heart',
            name: 'OpenSeasonHeart',
            component: () => import('@/views/frontend/OpenSeasonHeart'),
            meta: {
              title: '角獵咖啡 - 關注商品'
            }
          },
          {
            path: '/order/:orderId',
            name: 'OpenSeasonOrder',
            component: () => import('@/views/frontend/OpenSeasonOrder')
          },
          {
            path: '/product_page/:id',
            name: 'OpenSeasonProductPage',
            component: () => import('@/views/frontend/OpenSeasonProductPage')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/backend/Login'),
    meta: {
      title: '角獵咖啡 - 商品管理登入'
    }
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('@/views/backend/Dashboard'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/backend/Products'),
        meta: {
          requiresAuth: true,
          title: '角獵咖啡 - 商品管理'
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/backend/Orders'),
        meta: {
          requiresAuth: true,
          title: '角獵咖啡 - 訂單管理'
        }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('@/views/backend/Coupons'),
        meta: {
          requiresAuth: true,
          title: '角獵咖啡 - 優惠券管理'
        }
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
