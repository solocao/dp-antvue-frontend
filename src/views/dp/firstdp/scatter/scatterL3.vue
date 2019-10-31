<template>
  <div>
    <div id="scatter" style="height:200px;width:400px"></div>
  </div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
  import gz from 'echarts/map/json/province/zhejiang'
  import '@/views/dp/css/firstdp.css'
  import $ from 'jquery'
  import { testMap } from '../js/china-main-city/china-main-city-map.js'
  // import np from './chinamaincity/'
  export default {

    data () {
      return {}
    },
    props: {
      width: {
        type: String,
        default: '400px'
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    watch: {},
    methods: {
     getScatter() {
       let scatter = document.getElementById('scatter');
       let scatterChart = this.$echarts.init(scatter);
       var plantCap = [{
         name: '一线',
         value: '154'
       }, {
         name: '二线',
         value: '115'
       }, {
         name: '三线',
         value: '113'
       }, {
         name: '四线',
         value: '95'
       }, {
         name: '六线',
         value: '92'
       }, {
         name: '五线',
         value: '87'
       }, {
         name: '七线',
         value: '87'
       }, {
         name: '八线',
         value: '60'
       }];

       var datalist = [{
         offset: [56, 48],
         value:154,
         symbolSize: 154/2,
         opacity: .95,
         color: 'rgba(104,184,55, 1)'
       },  {
         offset: [18, 43],
         value:115,
         symbolSize: 115/2,
         opacity: .84,
         color: 'rgba(104,184,55, 0.95)'
       }, {
         offset: [83, 35],
         value:113,
         symbolSize: 113/2,
         opacity: .8,
         color: 'rgba(104,184,55, 0.95)'
       }, {
         offset: [36, 20],
         value:95,
         symbolSize: 95/2,
         opacity: .75,
         color: 'rgba(104,184,55, 0.90)'
       }, {
         offset: [64, 10],
         value:92,
         symbolSize: 92/2,
         opacity: .7,
         color: 'rgba(104,184,55, 0.90)'
       }, {
         offset: [35, 50],
         value:87,
         symbolSize: 87/2,
         opacity: .68,
         color: 'rgba(104,184,55, 0.85)'
       }, {
         offset: [80, 60],
         value:60,
         symbolSize: 60/2,
         opacity: .7,
         color: 'rgba(104,184,55, 0.80)'
       },{
         offset: [40, 75],
         value:60,
         symbolSize: 60/2,
         opacity: .88,
         color: 'rgba(104,184,55, 0.95)'
       }];
       var datas = [];
       for (var i = 0; i < plantCap.length; i++) {
         var item = plantCap[i];
         var itemToStyle = datalist[i];
         datas.push({
           name: item.value + '\n' + item.name,
           value: itemToStyle.offset,
           symbolSize: itemToStyle.symbolSize,
           label: {
             normal: {
               textStyle: {
                 fontSize: 14,
                 color:'#fff'
               }
             }
           },
           itemStyle: {
             normal: {
               color: itemToStyle.color,
               opacity: itemToStyle.opacity
             }
           },
         })
       }
      var option = {
         grid: {
           show: false,
           top: 10,
           bottom: 10
         },
         xAxis: [{
           gridIndex: 0,
           type: 'value',
           show: false,
           min: 0,
           max: 100,
           nameLocation: 'middle',
           nameGap: 5
         }],
         yAxis: [{
           gridIndex: 0,
           min: 0,
           show: false,
           max: 100,
           nameLocation: 'middle',
           nameGap: 30
         }],
         series: [{
           type: 'scatter',
           symbol: 'circle',
           symbolSize: 120,

           label: {
             normal: {
               show: true,
               formatter: function({data}) {
                 return data.value[0]
               },
               color: '#fff',
               textStyle: {
                 fontSize: '20'
               }
             },
           },
           itemStyle: {
             normal: {
               borderWidth: '4',
               borderType: 'solid',

               // color: '#68b837',
               // shadowColor: '#68b837',
               shadowBlur: 10
             }
           },
           data: datas
         }]
       };
       scatterChart.clear();
       scatterChart.resize();
       scatterChart.setOption(option);
     }
    },
    filters: {},
    computed: {

    },
    created () {
      this.$nextTick(function(){
        let self = this;

        this.getScatter();
        // window.addEventListener("resize",function(){
        //   myChart.resize();
        // });
      });
    },
    mounted () {



    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>

</style>
