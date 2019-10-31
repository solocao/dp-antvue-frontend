<template>
  <div>
    <div id="bardouble" style="height:300px;width:400px"></div>
  </div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件

  import '@/views/dp/css/seconddp.css'
  import $ from 'jquery'
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
       let bar = document.getElementById('bardouble');
       let barChart = this.$echarts.init(bar);
       // var data = [78, 60, 60, 70, 69,86]
       var option = {

         legend: {
           data: ['FT101', 'FT102', '总和'],
           left:'center',
           align: 'left',
           top:'2%',
           textStyle: {
             color: "#fff"
           },
           itemWidth: 10,
           itemHeight: 10,
           itemGap: 35
         },
         grid: {
           left: '3%',
           right: '4%',
           bottom: '3%',
           containLabel: true
         },
         xAxis: [{
           type: 'category',
           data: ['2019 6-10',
             '2019 6-11',
             '2019 6-12',
             '2019 6-13',
             '2019 6-14',
             '2019 6-15',

           ],
           axisLine: {
             show: true,
             lineStyle: {
               color: "#00c7ff",
               width: 1,
               type: "solid"
             }
           },
           axisTick: {
             show: true,
           },
           axisLabel: {
             show: true,
             textStyle: {
               color: "#00c7ff",
             }
           },
         }],
         yAxis: [{
           type: 'value',
           name:'万m³',
           axisLabel: {
             formatter: '{value} m³'
           },
           axisTick: {
             show: false,
           },
           axisLine: {
             show: true,
             lineStyle: {
               color: "#00c7ff",
               width: 1,
               type: "solid"
             },
           },
           splitLine: {
             lineStyle: {
               color: "#0F55B9",
             }
           }
         }],
         series: [{
           name: 'FT101',
           type: 'bar',
           data: [220, 120, 240, 266, 210, 246],
           barWidth: 16, //柱子宽度
           barGap: 1, //柱子之间间距
           itemStyle: {
             normal: {
               color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: '#00C7E1'
               }, {
                 offset: 1,
                 color: '#005193'
               }]),
               opacity: 1,
               barBorderRadius: 12,
             }
           }
         }, {
           name: 'FT102',
           type: 'bar',
           data: [130, 150, 220, 245, 136, 256],
           barWidth: 16,
           barGap: 1,
           itemStyle: {
             normal: {
               color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: '#00da9c'
               }, {
                 offset: 1,
                 color: '#007a55'
               }]),
               opacity: 1,
               barBorderRadius: 12,
             }
           }
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
      // this.$nextTick(function(){
      //   let self = this;
      //
      //   this.getBar(10);
      //   // window.addEventListener("resize",function(){
      //   //   myChart.resize();
      //   // });
      // });
    },
    mounted () {

      this.getBar(10);

    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>

</style>
