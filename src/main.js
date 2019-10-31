import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from '@/utils/request' // axios 不建议引入到 Vue 原型链上
// mock
// import './mock'
import './core/use'
import bootstrap from './core/bootstrap'
import '@/permission' // permission control
import '@/utils/filter' // global filter
import 'element-ui/lib/theme-chalk/index.css'
import '@/views/dp/css/detail.css'
import ElementUI from 'element-ui' //element-ui的全部组件
import VueHtml5Plus from 'vue-html5plus'
import BaiduMap from 'vue-baidu-map'
import ECharts from 'vue-echarts'
import echarts from 'echarts'
import 'echarts-gl'
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
// Vue.prototype.echarts = Echarts

Vue.use(echarts)
// import global from './common'
Vue.use(BaiduMap,{ ak:'wycygWOMkzZt9XB7wDTQwu49VcssxkFG'})
Vue.use(VueHighCharts)
highcharts3d(highcharts)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// Vue.prototype.COMMON = global //挂载到Vue实例上面
Vue.use(ElementUI) //使用elementUI
Vue.config.productionTip = false
Vue.use(VueHtml5Plus);
Vue.use(VueAxios, router)
Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  created () {
    bootstrap()
  },
  render: h => h(App)
}).$mount('#app')
