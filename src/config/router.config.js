// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/components/layouts'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: RouteView,
    hidden: true,
    // redirect: '/dp/firstdp',
    children: [
      // account
      {
        path: '/dp',
        name: 'dp',
        component: RouteView,
        children: [
          {
            path: '/dp/first',
            name: 'first',
            component: () => import('@/views/dp/firstdp/first'),
            meta: { title: '首页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/firstdp',
            name: 'firstdp',
            component: () => import('@/views/dp/firstdp/firstdpNew'),
            meta: { title: '分析页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/detailL',
            name: 'detailL',
            component: () => import('@/views/dp/firstdp/details/detailL'),
            meta: { title: '测试页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/detaildp',
            name: 'detaildp',
            component: () => import('@/views/dp/detaildp/detaildp'),
            meta: { title: '详细页', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/dp/menjin-detail',
            name: 'menjin-detail',
            component: () => import('@/views/dp/detaildp/menjin-detail'),
            meta: { title: '门禁详情页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/yangan-detail',
            name: 'yangan-detail',
            component: () => import('@/views/dp/detaildp/yangan-detail'),
            meta: { title: '烟感详情页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/shuiwei-detail',
            name: 'shuiwei-detail',
            component: () => import('@/views/dp/detaildp/shuiwei-detail'),
            meta: { title: '水位详情页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/chushiqi-detail',
            name: 'chushiqi-detail',
            component: () => import('@/views/dp/detaildp/chushiqi-detail'),
            meta: { title: '除湿器详情页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/wendu-detail',
            name: 'wendu-detail',
            component: () => import('@/views/dp/detaildp/wendu-detail'),
            meta: { title: '温度详情页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/shidu-detail',
            name: 'shidu-detail',
            component: () => import('@/views/dp/detaildp/shidu-detail'),
            meta: { title: '湿度详情页', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/seconddp',
            name: 'seconddp',
            component: () => import('@/views/dp/seconddp/seconddp'),
            meta: { title: '空开', keepAlive: false, permission: [ 'user' ] }
          },
          {
            path: '/dp/VideoSurveillancedp',
            name: 'VideoSurveillancedp',
            component: () => import('@/views/dp/VideoSurveillancedp/VideoSurveillancedp'),
            meta: { title: '视频监控', keepAlive: false, permission: [ 'user' ] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/dp',
    name: 'dp',
    component: RouteView,
    children: [
      {
        path: '/dp/first',
        name: 'first',
        component: () => import('@/views/dp/firstdp/first'),
        meta: { title: '首页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/firstdp',
        name: 'firstdp',
        component: () => import('@/views/dp/firstdp/firstdpNew'),
        meta: { title: '分析页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/detailL',
        name: 'detailL',
        component: () => import('@/views/dp/firstdp/details/detailL'),
        meta: { title: '测试页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/detaildp',
        name: 'detaildp',
        component: () => import('@/views/dp/detaildp/detaildp'),
        meta: { title: '详细页', keepAlive: true, permission: [ 'user' ] }
      },
      {
        path: '/dp/menjin-detail',
        name: 'menjin-detail',
        component: () => import('@/views/dp/detaildp/menjin-detail'),
        meta: { title: '门禁详情页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/yangan-detail',
        name: 'yangan-detail',
        component: () => import('@/views/dp/detaildp/yangan-detail'),
        meta: { title: '烟感详情页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/shuiwei-detail',
        name: 'shuiwei-detail',
        component: () => import('@/views/dp/detaildp/shuiwei-detail'),
        meta: { title: '水位详情页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/chushiqi-detail',
        name: 'chushiqi-detail',
        component: () => import('@/views/dp/detaildp/chushiqi-detail'),
        meta: { title: '除湿器详情页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/wendu-detail',
        name: 'wendu-detail',
        component: () => import('@/views/dp/detaildp/wendu-detail'),
        meta: { title: '温度详情页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/shidu-detail',
        name: 'shidu-detail',
        component: () => import('@/views/dp/detaildp/shidu-detail'),
        meta: { title: '湿度详情页', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/seconddp',
        name: 'seconddp',
        component: () => import('@/views/dp/seconddp/seconddp'),
        meta: { title: '空开', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: '/dp/VideoSurveillancedp',
        name: 'VideoSurveillancedp',
        component: () => import('@/views/dp/VideoSurveillancedp/VideoSurveillancedp'),
        meta: { title: '视频监控', keepAlive: false, permission: [ 'user' ] }
      }
    ]
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: '/user/dplogin',
        name: 'dplogin',
        component: () => import('@/views/dp/user/Login'),
        meta: { title: '登录', keepAlive: false, permission: [ 'user' ] }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
