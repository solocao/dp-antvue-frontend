<template>
  <div>
    <div class="map1"><img src="../../dpimg/firstdp/picture/jt.png"></div>
    <div id="piedou" style="height:400px;width:420px"></div>
  </div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
  import echarts from "echarts";
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
      showpieLinex(){
        var myChartLine = echarts.init(document.getElementById('pieviewLines'));
        var tips = 0;
        var m=0;
        var mm=1;

        setInterval(function() {
          if (tips == 100) {
            tips = 0;
            m=0;
          }else if(tips<=10){
            ++tips;
            ++m
          }else if(tips>=90){
            ++tips;
            --m
          }else{
            ++tips;
          }

          myChartLine.setOption({
            animation:false,
            animationThreshold:100,
            animationDurationUpdate: function (idx) {
              // 越往后的数据延迟越大
              return idx * 1000;
            },
            series: [{
              name: 'loading',
              type: 'pie',
              radius: ['66%', '68%'],
              center: ['50%', '50%'],
              hoverAnimation: false,
              label: {
                normal: {
                  show: false,
                }
              },
              data: [
                {
                  value: tips,
                  itemStyle: {
                    normal: {
                      color: 'rgba(0,0,0,0)',
                    }
                  }
                },
                {
                  value: m,
                  itemStyle: {
                    normal: {
                      borderWidth: 5,
                      borderColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 4,
                        colorStops: [{
                          offset: 0,
                          color: 'rgba(255,255,255,0.7)' // 0% 处的颜色
                        },{
                          offset: 0.3,
                          color: 'rgba(255,255,255,1)' // 0% 处的颜色
                        },{
                          offset: 0.6,
                          color: 'rgba(255,255,255,1)' // 0% 处的颜色
                        },{
                          offset: 0.8,
                          color: 'rgba(255,255,255,1)' // 0% 处的颜色
                        },{
                          offset: 1,
                          color: 'rgba(255,255,255,1)' // 100% 处的颜色
                        }],
                        globalCoord: false,
                      },
                      color: 'rgba(255,255,255,0)',
                      shadowBlur: 30,
                      shadowColor: 'rgba(255,255,255,1)'
                    }
                  }
                }, {
                  value: 100 - tips,
                  itemStyle: {
                    normal: {
                      color: 'rgba(0,0,0,0)',
                    }
                  }
                }]

            }]
          })
        }, 50);


      },
      setData(data,cityname){
        var totalAll=0,opennumAll=0,closenumAll=0;
        var total=0,opennum=0,closenum=0;
        var totalCommit=0,opennumCommit=0,closenumCommit=0;

         for(var i=0;i<data.length;i++){
           totalAll=totalAll+data[i].total;
           opennumAll=opennumAll+data[i].opennum;
           closenumAll=closenumAll+data[i].closenum;
           if(data[i].groupname==cityname){
             total=data[i].total;
             opennum=data[i].opennum;
             closenum=data[i].closenum;
           }
         }
         if(total==0){
           totalCommit=totalAll;
           opennumCommit=opennumAll;
           closenumCommit=closenumAll;
         }else{
           totalCommit=total;
           opennumCommit=opennum;
           closenumCommit=closenum;
         }
         this.getPie(totalCommit,opennumCommit,closenumCommit)
      },
     getPie(totalCommit,opennumCommit,closenumCommit){
       let piedou = document.getElementById('piedou');
       let pieChart = this.$echarts.init(piedou);
       let total=totalCommit;
       let opennum=opennumCommit;
       let closenum=closenumCommit;
       let scaleData = [

         // {
         //   'name': '总数量',
         //   'value': total
         // },
         {
           'name': '在线',
           'value': opennum
         },{
           'name': '离线',
           'value': closenum
         }

       ];
       let colorgraphic = this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
         offset: 0,
         color: '#5CF9FE' // 0% 处的颜色
       },
         {
           offset: 0.4,
           color: '#468EFD' // 100% 处的颜色
         },
         {
           offset: 0.6,
           color: '#468EFD' // 100% 处的颜色
         },
         {
           offset: 1,
           color: '#5CF9FE' // 100% 处的颜色
         }
       ]);

       let grid = {
         // left: '5px', // 与容器左侧的距离
         // right: '5px', // 与容器右侧的距离
         top: '-500px', // 与容器顶部的距离
         // bottom: '50px', // 与容器底部的距离
       };
       let placeHolderStyle = {
         normal: {
           label: {
             show: false
           },
           labelLine: {
             show: false
           },
           color: 'rgba(0, 0, 0, 0)',
           borderColor: 'rgba(0, 0, 0, 0)',
           borderWidth: 0
         }
       };
       let data = [];
       let color = ['#17e3ff','#0092f6'];;
       let colorSet = [
         [0.91, color],
         [1, '#15337C']
       ];

       for (var i = 0; i < scaleData.length; i++) {
         data.push({
           value: scaleData[i].value,
           name: scaleData[i].name,
           label: {
             color: '#dfe9e3'
           },

           itemStyle: {
             normal: {
               borderWidth:0,
               // shadowBlur: 20,
               // borderColor:'#00f948',
               // shadowColor: '#12b4ff',

             }
           }

         });
       }
       let seriesObj = [

         {
           name: '',
           type: 'pie',
           clockWise: false,
           radius: ['80%', '70%'],
           // center: ["35%", "53%"],
           hoverAnimation: false,
           itemStyle: {
             normal: {
               label: {
                 show: false,
                 position: 'outside',

                 formatter: function(params) {

                   var percent = 0;
                   var total = 0;
                   for (var i = 0; i < scaleData.length; i++) {
                     total += scaleData[i].value;
                   }
                   percent = ((params.value / total) * 100).toFixed(0);
                   if (params.name !== '') {
                     return params.name + '\n' + '' + percent + '%';
                   } else {
                     return '';
                   }
                 },

               },


             }
           },
           data: data
         },

         {
           name: '',
           type: 'pie',
           clockWise: false,
           radius: ['50%', '56%'],
           // center: ["35%", "53%"],
           hoverAnimation: false,
           itemStyle: {
             normal: {
               label: {
                 show: false,
                 position: 'outside',

                 formatter: function(params) {

                   var percent = 0;
                   var total = 0;
                   for (var i = 0; i < scaleData.length; i++) {
                     total += scaleData[i].value;
                   }
                   percent = ((params.value / total) * 100).toFixed(0);
                   if (params.name !== '') {
                     return params.name + '\n' + '' + percent + '%';
                   } else {
                     return '';
                   }
                 },

               },


             }
           },
           data: data
         }
         ];
       let option = {
         title: {
           text: total,
           // subtext: '接入总数 \n '+total+' \n 在线数:'+opennum+'   离线数:'+closenum,
           x: 'center',
           y: '120px',
           textStyle: {
             fontSize:24,
             fontWeight:'bold',
             color: ['#66CC99']
           },
           subtextStyle: {
             color: '#66CC99',
             fontSize: 18
           },
         },
         graphic: {
           elements: [{
             type: 'image',
             style: {
               image: './image/online.png',
               width: 22,
               height: 22
             },
             left: '140px',
             top: 'center'
           },
             {
               type: 'text',
               z: 100,
               left: 'center',
               top: '160px',
               style: {
                 fill: '#00CCFF',
                 text: [
                   '接入总数'
                 ],
                 font: 'normal 16px Microsoft YaHei'
               }
             },
             {
               type: 'text',
               z: 100,
               left: '170px',
               top: 'center',
               style: {
                 fill: '#66CC99',
                 text: [
                   opennum
                 ],
                 font: 'normal 16px Microsoft YaHei'
               }
             },
             {
               type: 'image',
               style: {
                 image: './image/offline.png',
                 width: 22,
                 height: 22
               },
               left: '230px',
               top: 'center'
             },{
               type: 'text',
               z: 100,
               left: '260px',
               top: 'center',
               style: {
                 fill: '#999999',
                 text: [
                   closenum
                 ],
                 font: 'normal 16px Microsoft YaHei'
               }
             },{
               type: 'text',
               z: 100,
               left: '140px',
               top: '220px',
               style: {
                 fill: '#66CC99',
                 text: [
                   '在线数'
                 ],
                 font: 'normal 16px Microsoft YaHei'
               }
             },{
               type: 'text',
               z: 100,
               left: '230px',
               top: '220px',
               style: {
                 fill: '#66CC99',
                 text: [
                   '离线数'
                 ],
                 font: 'normal 16px Microsoft YaHei'
               }
             }]
         },
         // center: ["35%", "10%"],
         color: color,
         grid: grid,
         tooltip: {
           show: false
         },
         legend: {
           show: false
         },
         series: seriesObj
       };
       pieChart.clear();
       pieChart.resize();
       pieChart.setOption(option);
     }

    },
    filters: {},
    computed: {

    },
    created () {
      // this.$nextTick(function(){
        let self = this;

        this.getPie();
        this.showpieLinex();
        // window.addEventListener("resize",function(){
        //   myChart.resize();
        // });
      // });
    },
    mounted () {



    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>

</style>
