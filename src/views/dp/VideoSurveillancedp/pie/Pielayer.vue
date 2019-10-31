<template>
  <div>
    <div id="pielayer" style="height:200px;width:27rem;"></div>

  </div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
  import echarts from "echarts";
  import '@/views/dp/css/seconddp.css'

  export default {

    data () {
      return {
        dotArray:[],
        color_percent0:[],
        color_percent100:[]
      }
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

     getPie(){
       let pielayer = document.getElementById('pielayer');
       let pielayerecharts = this.$echarts.init(pielayer);
       var dataStyle = {
         normal: {
           label: {
             show: false
           },
           labelLine: {
             show: false
           },
           shadowBlur: 0,
           shadowColor: '#203665'
         }
       };
       var option = {

         series: [{
           name: '第一个圆环',
           type: 'pie',
           clockWise: false,
           radius: [50, 60],
           itemStyle: dataStyle,
           hoverAnimation: false,
           center: ['15%', '50%'],
           "color": [{
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0.4,
             y2: 1,
             colorStops: [{
               offset: 0,
               color: '#FB7293' // 0% 处的颜色
             }, {
               offset: 1,
               color: '#37A6E3' // 100% 处的颜色
             }],
             globalCoord: false // 缺省为 false
           }, 'none'],
           data: [{
             value: 25,
             label: {
               normal: {
                 rich: {
                   a: {
                     color: '#0EFCFF',
                     align: 'center',
                     fontSize: 20,
                     fontWeight: "bold"
                   },
                   b: {
                     color: '#0EFCFF',
                     align: 'center',
                     fontSize: 16
                   }
                 },
                 formatter: function(params){
                   return "{a|"+params.value+"%}"+"\n\n{b|接入率}";
                 },
                 position: 'center',
                 show: true,
                 textStyle: {
                   fontSize: '14',
                   fontWeight: 'normal',
                   color: '#fff'
                 }
               }
             }
           }, {
             value: 75,
             name: 'invisible'
           }]
         }, {
           name: '第二个圆环',
           type: 'pie',
           clockWise: false,
           radius: [50, 60],
           itemStyle: dataStyle,
           hoverAnimation: false,
           center: ['50%', '50%'],
           "color": [{
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0.4,
             y2: 1,
             colorStops: [{
               offset: 0,
               color: '#BFAEFF' // 0% 处的颜色
             }, {
               offset: 1,
               color: '#37A6E3' // 100% 处的颜色
             }],
             globalCoord: false // 缺省为 false
           }, 'none'],
           data: [{
             value: 100,
             label: {
               normal: {
                 rich: {
                   a: {
                     color: '#0EFCFF',
                     align: 'center',
                     fontSize: 20,
                     fontWeight: "bold"
                   },
                   b: {
                     color: '#0EFCFF',
                     align: 'center',
                     fontSize: 16
                   }
                 },
                 formatter: function(params){
                   return "{a|"+params.value+"%}"+"\n\n{b|在线率}";
                 },
                 position: 'center',
                 show: true,
                 textStyle: {
                   fontSize: '14',
                   fontWeight: 'normal',
                   color: '#fff'
                 }
               }
             }
           }, {
             value: 0,
             name: 'invisible'
           }]
         }, {
           name: '第三个圆环',
           type: 'pie',
           clockWise: false,
           radius: [50, 60],
           itemStyle: dataStyle,
           hoverAnimation: false,
           center: ['85%', '50%'],
           "color": [{
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0.4,
             y2: 1,
             colorStops: [{
               offset: 0,
               color: '#37A6E3' // 0% 处的颜色
             }, {
               offset: 1,
               color: '#8DFF93' // 100% 处的颜色
             }],
             globalCoord: false // 缺省为 false
           }, 'none'],
           data: [{
             value: 75,
             label: {
               normal: {
                 rich: {
                   a: {
                     color: '#0EFCFF',
                     align: 'center',
                     fontSize: 20,
                     fontWeight: "bold"
                   },
                   b: {
                     color: '#0EFCFF',
                     align: 'center',
                     fontSize: 16
                   }
                 },
                 formatter: function(params){
                   return "{a|"+params.value+"%}"+"\n\n{b|完成率}";
                 },
                 position: 'center',
                 show: true,
                 textStyle: {
                   fontSize: '14',
                   fontWeight: 'normal',
                   color: '#fff'
                 }
               }
             }
           }, {
             value: 25,
             name: 'invisible'
           }]
         },
           {
             name: '外圈3',
             type: 'pie',
             startAngle: 315,
             hoverAnimation: false,
             radius: ["61%", "62%"],
             center: ['85%', '50%'],
             label: {
               normal: {
                 show: false,
                 position: 'center'
               },
               emphasis: {
                 show: true,
                 textStyle: {
                   fontSize: '10',
                   fontWeight: 'bold'
                 }
               }
             },
             labelLine: {
               normal: {
                 show: false
               }
             },
             data: [
               {
                 value: 100,
                 itemStyle: {
                   normal: {
                     color: "rgba(20,198,249,1)"
                   }
                 }
               },
             ]
           },
           {
             name: '外圈2',
             type: 'pie',
             startAngle: 315,
             hoverAnimation: false,
             radius: ["61%", "62%"],
             center: ['50%', '50%'],
             label: {
               normal: {
                 show: false,
                 position: 'center'
               },
               emphasis: {
                 show: true,
                 textStyle: {
                   fontSize: '10',
                   fontWeight: 'bold'
                 }
               }
             },
             labelLine: {
               normal: {
                 show: false
               }
             },
             data: [
               {
                 value: 100,
                 itemStyle: {
                   normal: {
                     color: "rgba(20,198,249,1)"
                   }
                 }
               },
             ]
           },
           {
             name: '外圈1',
             type: 'pie',
             startAngle: 315,
             hoverAnimation: false,
             radius: ["61%", "62%"],
             center: ['15%', '50%'],
             label: {
               normal: {
                 show: false,
                 position: 'center'
               },
               emphasis: {
                 show: true,
                 textStyle: {
                   fontSize: '10',
                   fontWeight: 'bold'
                 }
               }
             },
             labelLine: {
               normal: {
                 show: false
               }
             },
             data: [
               {
                 value: 100,
                 itemStyle: {
                   normal: {
                     color: "rgba(20,198,249,1)"
                   }
                 }
               },
             ]
           }

         ]
       }

       pielayerecharts.clear();

       pielayerecharts.resize();

       pielayerecharts.setOption(option);

     },
      calculateDot(data) {
        if (data <= 20) {
          this.dotArray.push(80)
          color_percent0 = 'rgba(12,255,0,1)'
          color_percent100 = 'rgba(12,255,0,.3)'
        }else if (data > 20&&data<=40) {
          this.dotArray.push(...[80,80])
          color_percent0 = 'rgba(12,255,0,1)'
          color_percent100 = 'rgba(12,255,0,.3)'
        }else if (data > 40&&data<=60) {
          this.dotArray.push(...[80,80,80])
          color_percent0 = 'rgba(255,123,0,1)'
          color_percent100 = 'rgba(255,123,0,.3)'
        }else if (data > 60&&data<=80) {
          this.dotArray.push(...[80,80,80,80])
          color_percent0 = 'rgba(255,0,36,1)'
          color_percent100 = 'rgba(255,0,36,.3)'
        }else if (data > 80&&data<=100) {
          this.dotArray.push(...[80,80,80,80,80])
          color_percent0 = 'rgba(255,0,36,1)'
          color_percent100 = 'rgba(255,0,36,.3)'
        }

      }


    },
    filters: {},
    computed: {

    },
    created () {
      // this.$nextTick(function(){
        let self = this;


        // window.addEventListener("resize",function(){
        //   myChart.resize();
        // });
      // });
    },
    mounted () {

      this.getPie();

    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>

</style>
