<template>
  <div>
    <div id="bar" style="height:400px;width:400px"></div>
  </div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
  import gz from 'echarts/map/json/province/zhejiang'
  import '@/views/dp/css/firstdp.css'
  import $ from 'jquery'
  import { testMap } from '../js/china-main-city/china-main-city-map.js'
  import  {axiosKj}  from '@/utils/requestKj'
  // import np from './chinamaincity/'
  export default {

    data () {
      return {

      }
    },
    props: {
      width: {
        type: String,
        default: '400px'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    watch: {},
    methods: {
      setData(data){
        var valdata=[data[0].HWBJ,data[0].SDBJ,data[0].WDBJ,data[0].SWBJ,data[0].MCBJ,data[0].DYGJ];
        this.getBar(valdata);

        // data[0].DYGJ;//电源告警
        // data[0].DYZC;//电源正常
        // data[0].HWBJ;//红外报警
        // data[0].MCBJ;//门磁报警
        // data[0].SDBJ;//湿度报警
        // data[0].SWBJ;//水位报警
        // data[0].WDBJ;//温度报警
      },

     getBar(data) {
       let bar = document.getElementById('bar');
       let barChart = this.$echarts.init(bar);
       // var data = [78, 60, 60, 70, 69,86]
       var titlename = ['红外报警', '湿度报警', '温度报警', '水位报警', '门磁报警','电源报警'];
       var valdata = data;
       var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6','#00CCFF'];
      var option = {
        grid:{
          top:'0%',
        left:'15%',
        height:'100%'
        },
         xAxis: {
           show: false
         },
         yAxis: [{
           show: true,
           data: titlename,
           inverse: true,
           axisLine: {
             show: false
           },
           splitLine: {
             show: false
           },
           axisTick: {
             show: false
           },
           axisLabel: {
             textStyle: {
               color: '#00CCFF'
             },
             formatter: function(value, index) {
               return [
                 '{title|' + value + '} '
               ].join('\n')
             },
             rich: {}
           },

         }, {
           show: true,
           inverse: true,
           data: valdata,
           axisLabel: {
             textStyle: {
               color: '#00CCFF'
             }
           },
           axisLine: {
             show: false
           },
           splitLine: {
             show: false
           },
           axisTick: {
             show: false
           },

         }],
         series: [{
           name: '条',
           type: 'bar',
           yAxisIndex: 0,
           data: data,
           barWidth: 20,
           itemStyle: {
             normal: {
               barBorderRadius: 40,
               color: function(params) {
                 var num = myColor.length;
                 return myColor[params.dataIndex % num]
               },
             }
           },
           label: {
             normal: {
               show: true,
               position: 'inside',
               formatter: '{c}%'
             }
           },
         }]
       };
       barChart.clear();
       barChart.resize();
       barChart.setOption(option);
     }
    },
    filters: {},
    computed: {

    },
    created () {
      this.$nextTick(function(){
        let self = this;

        this.getBar();
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
