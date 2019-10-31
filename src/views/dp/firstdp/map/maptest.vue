<template>
  <div class="map" id="s-map">
    <div id="chartMap" class="chartGauge" :style="{height:height,width:width}"></div>
  </div>
</template>

<script type="es6">
  // import '../../../../../public/chinamaincity/world.json'
    export default {
      data() {
        return {}
      },
      mounted() {
        this.get('330225', 'ningbo');

        let myChart = this.$echarts.init(document.getElementById('chartMap'));

        myChart.on('click', function (params) {

          console.log(params);
          // var option=myChart.getOption.dataZoom;
          // option.series.regions[0].name = option.series.data[0].name
          // myChart.setOption(option);
          // myChart.dispatchAction({
          //   type: 'focusNodeAdjacency',
          //   // 使用 dataIndex 来定位节点。
          //   dataIndex: params.dataIndex
          // });
          // var name=params.data.name;
          // var mapCode = cityMap[name];
          // if (!mapCode) {
          //   alert('无此区域地图显示');
          //   return;
          // }
          // that.loadmap3D(mapCode, name);
          // //将上一级地图信息压入mapStack
          // that.mapStack.push({
          //   mapCode: that.curMap.mapCode,
          //   mapName: that.curMap.mapName
          // });



        });
      },
      methods: {
        get(mapCode, mapName) {
          let chartMap = document.getElementById('chartMap');
          let smap = document.getElementById('s-map');
          var resizeWorldMapContainer = function () {
            chartMap.style.width = '900px';
            chartMap.style.height = '840px';
            chartMap.style.top = '-40px';
          };
          resizeWorldMapContainer();
          var myChart = this.$echarts.init(document.getElementById("chartMap"));

//地图加载样式设置
//背景色#151e2e
          var autoRotate = false;//是否开启视角绕物体的自动旋转查看。
          var autoRotateDirection = 'cw';//物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
          var autoRotateSpeed = 20;//旋转速度
          var autoRotateAfterStill = 3;//在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。
          var damping = 0.8;//鼠标进行旋转，缩放等操作时的迟滞因子，在大于 0 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。
          var rotateSensitivity = 1;//旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。0不能旋转
          var distance = 70; //地图大小   值越大-地图越小，值越小-地图越大
          var alpha = 90; //垂直翻转角度
          var beta = 0;//视角绕 y 轴，即左右旋转的角度。
          var zoomSensitivity = 3;//缩放操作的灵敏度，值越大越灵敏。0表示不能缩放
          var center = [0, -10, 0];//[ 18, 10, 0 ]视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
          /**
           * 地理位置信息，线条起点终点坐标,及辐射国家需要展示的地点坐标
           */

//总体
          var regionData = [];//国家出入境数据
          var hg_zt_data_lines1 = [];//地图线条出入境总体情况数据来回跑得点6-20名
          var hg_zt_data_lines2 = [];//地图线条出入境总体情况数据6-20名
          var hg_zt_data_lines1_top5 = [];//前五名
          var hg_zt_data_lines2_top5 = [];//前五名
//出境
          var hg_cj_data_lines = [];//6-20名
          var hg_cj_data_lines_top5 = [];//前五名
//入境
          var hg_rj_data_lines = [];//6-20名
          var hg_rj_data_lines_top5 = [];//前五名
//线条末端点点
          var point_data_crj = [];//出入境
          var point_data_cj = [];//出境
          var point_data_rj = [];//入境
//valueMap中的最大值最小值
          var min = 0;
          var max = 0;




//总体

//出境
         var scatterData=[{
           "name": "济南市",
           "value": [
             121.789516,29.368717,
             100
           ]
         }]
//入境
          var that=this
//绘制3D地图
          this.axios.get('chinamaincity/' + mapCode + '.json').then(res => {
            var data = res

            if (data) {
              that.$echarts.registerMap(mapName, data);
              var option = {


                visualMap: [{
                  show: true,
                  seriesIndex: 0,
                  dimension: 0,//取第一维度,批次
//			left:10,
//			top:10,
                  right: 10,
                  bottom: 10,
                  zlevel: 10,
                  calculable: true,
                  min: min,
                  max: max,
                  inRange: {//由低到高
                    color: ['#73dbf9', '#4aadf2', '#3e99ee', '#4a70d2', '#4c4cd5', '#1d269f', '#0d1474']
                  },
                  textStyle: {
                    color: '#fff',
                    fontSize: 14
                  }
                }],
                geo3D: {
                  map: mapName,
                  viewControl: {
                    center: [-10, 0, 10]
                  },
                  light: {
                    main: {
                      intensity: 1,
                      shadow: true,
                      alpha: 150,
                      beta: 70
                    },
                    ambient: {
                      intensity: 0
                    },
                    ambientCubemap: {
                      diffuseIntensity: 1,
                      texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
                    }
                  },
                  groundPlane: {
                    show: true
                  },
                  postEffect: {
                    enable: false
                  },
                  itemStyle: {
                    borderColor: 'rgb(62,215,213)',
                    borderWidth: 1
                  }

                },
                series: [
                  // {
                  //   type: 'map3D',
                  //   map: mapName,
                  //   name: 'World_3DMap',
                  //   height: 'auto',
                  //   zlevel: 3,
                  //   boxWidth: 'auto',
                  //   boxHeight: 'auto',
                  //   boxDepth: 'auto',
                  //   regionHeight: 3,
                  //   environment: '#151e2e',
                  //   //'color' 只显示颜色，不受光照等其它因素的影响。
                  //   //'lambert' 通过经典的 lambert 着色表现光照带来的明暗
                  //   //'realistic' 真实感渲染，配合 light.ambientCubemap 和 postEffect 使用可以让展示的画面效果和质感有质的提升
                  //   //shading:'lambert',
                  //   top: '0',
                  //   instancing: false, //instancing会将 GeoJSON 中所有的 geometry 合并成一个，在 GeoJSON 拥有特别多（上千）的 geometry 时可以有效提升绘制效率。
                  //   //environment: 'background.png',
                  //   viewControl: {
                  //     autoRotate: autoRotate,
                  //     distance: distance, //地图大小   值越大-地图越小，值越小-地图越大
                  //     alpha: alpha, //垂直翻转角度
                  //     beta: beta,
                  //     zoomSensitivity: zoomSensitivity,
                  //     center: center,
                  //     autoRotateDirection: autoRotateDirection,
                  //     autoRotateSpeed: autoRotateSpeed,
                  //     autoRotateAfterStill: autoRotateAfterStill,
                  //     damping: damping,
                  //     rotateSensitivity: rotateSensitivity,
                  //   },
                  //   itemStyle: {
                  //     areaColor: "#dafbfb",
                  //     opacity: 1,
                  //     borderWidth: 0.3,
                  //     borderColor: '#545454'
                  //   },
                  //   emphasis: { //当鼠标放上去  地区区域是否显示名称
                  //     label: {
                  //       show: true,
                  //       textStyle: {
                  //         color: 'red',
                  //         fontSize: 20,
                  //         backgroundColor: 'rgba(0,23,11,0)'
                  //       }
                  //     },
                  //     itemStyle: {
                  //       areaColor: "#e3c854",
                  //       opacity: 1,
                  //     },
                  //   },
                  //   light: { //光照阴影
                  //     main: {
                  //       color: '#fff', //光照颜色
                  //       intensity: 1, //光照强度
                  //       shadowQuality: 'high', //阴影亮度
                  //       shadow: false, //是否显示阴影
                  //       alpha: 55,
                  //       beta: 10
                  //
                  //     },
                  //     ambient: {
                  //       intensity: 0.22
                  //     }
                  //   },
                  //   data: regionData
                  // },
                  {
                    type: 'scatter3D',
                    coordinateSystem: 'geo3D',
                    data: scatterData,
                    symbol: 'circle',
                    symbolSize: 10,
                    itemStyle:{
                      color:'purple',
                      borderColor:'#fff',
                      borderWidth:1
                    },
                    label:{
                      show:true,
                      formatter:'{b}',
                      position:'bottom',
                      textStyle:{
                        color:'#000',
                        backgroundColor:'#fff',
                      }
                    }
                  },
                  {
                    type: 'scatter3D',
                    coordinateSystem: 'geo3D',
                    data: scatterData,
                    symbol: 'pin',
                    symbolSize: 30,
                    itemStyle:{
                      color:'red',
                      borderColor:'#fff',
                      borderWidth:1
                    },
                    label:{
                      show:false,
                      formatter:'{b}',
                      position:'right',
                      textStyle:{
                        color:'#000',
                        backgroundColor:'#fff',
                      }
                    }
                  }
                  // ,
                  // {
                  //   type: 'bar3D',
                  //   coordinateSystem: 'geo3D',
                  //   bevelSize: 0,
                  //   itemStyle: {
                  //     color: '#17e3ff',
                  //     opacity: 1
                  //   },
                  //   shading: 'lambert',
                  //   data: scatterData,
                  // }
                  ]
              };
              myChart.setOption(option);
            }
          });
        }
      }
    }
</script>

<style lang="less" scoped>

</style>
