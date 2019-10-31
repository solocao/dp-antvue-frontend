<template>
  <div  id="s-map">
    <div id="chartMap" class="chartGauge" :style="{height:height,width:width,top:top}"></div>
  </div>
</template>


<script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
import gz from 'echarts/map/json/province/zhejiang'
import '@/views/dp/css/firstdp.css'
import $ from 'jquery'
import { testMap } from '../js/china-main-city/china-main-city-map.js'
require('echarts-gl');
import echarts from "echarts";
// import np from './chinamaincity/'
export default {
  components: {
    testMap
  },
  data () {
    return {
      cityMap:{
        "慈溪市": "330282",
        "海曙区": "330203",
        "江东区": "330204",
        "江北区": "330205",
        "北仑区": "330206",
        "镇海区": "330211",
        "鄞州区": "330212",
        "象山县": "330225",
        "宁海县": "330226",
        "余姚市": "330281",
        "奉化市": "330283"
      },
      geoCoordMap:{
        "开关站5":[121.547345,29.853843],
        "开关站1":[121.907345,29.7538430000001],
  "开关站2": [121.077345,30.2538430000001],
  "开关站3": [121.577345,29.533843],
  "开关站4": [121.522974882813,29.9892946601563],
 "开关站6": [121.611710234375,29.8565480781251],
  "开关站7": [121.807345,29.253843 ],
  "开关站8": [122.233922148438,28.8660353828126],
  "开关站9": [121.092594023438,30.2424977851563],
  "开关站10": [121.63427859375,30.0507741523438 ],
   "开关11": [121.489215117188,29.8913259101563],
        "象山县": [121.889215117188,29.2913259101563],
        "鄞州区": [121.489215117188,29.7913259101563],
        "奉化市":[121.489215117188,29.5913259101563],
        "余姚市":[121.289215117188,29.9913259101563],
        "宁海县":[121.389215117188,29.2913259101563],
        "镇海区":[121.679215117188,29.9813259101563],
        "北仑区":[121.889215117188,29.8913259101563],
        "江北区":[121.489215117188,29.9913259101563],
        "江东区":[121.579215117188,29.8813259101563],
        "海曙区":[121.519215117188,29.8613259101563],
        "慈溪市":[121.489215117188,30.1913259101563]
      },
      timeFn:null,
      font: '24',
      curMap:{},
      mapStack:[]
    }
  },
  props: ['cityName','parameter']
    // "cityName",
    // width: {
    //   type: String,
    //   default: '850px'
    // },
    // height: {
    //   type: String,
    //   default: '850px'
    // }
  // }
  ,
  watch: {},
  methods: {
    convertData(data) {
      data=data[0];
      let self = this;

      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },

    resizeWorldMapContainer(){
      let smap = document.getElementById('s-map');
      let chartMap =document.getElementById('chartMap');
      chartMap.style.width  = smap.clientWidth +'px';
      chartMap.style.height = smap.clientHeight + 'px';
    },


    mapselectchanged(myChart){

      myChart.on('mapselectchanged', function(params) {

      });
    },
    dblclick(){

    },

    loadmap3D(mapCode, mapName){
      var autoRotate = false;//是否开启视角绕物体的自动旋转查看。
      var autoRotateDirection='cw';//物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
      var autoRotateSpeed=20;//旋转速度
      var autoRotateAfterStill= 3;//在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。
      var damping=0.8;//鼠标进行旋转，缩放等操作时的迟滞因子，在大于 0 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。
      var rotateSensitivity=1;//旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。0不能旋转
      var distance = 70; //地图大小   值越大-地图越小，值越小-地图越大
      var alpha = 90; //垂直翻转角度
      var beta = 0;//视角绕 y 轴，即左右旋转的角度。
      var zoomSensitivity = 3;//缩放操作的灵敏度，值越大越灵敏。0表示不能缩放
      var center = [ 0, -10, 0 ];//[ 18, 10, 0 ]视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。


      let chartMap=document.getElementById('chartMap');
      let smap = document.getElementById('s-map');
      var resizeWorldMapContainer = function () {
        chartMap.style.width  = '800px';
        chartMap.style.height = '780px';
        chartMap.style.top = '0px';
      };
      var chinaDatas = [
        [{
          name: '象山县',
          value: 10
        }]

      ];
      // 象山县": [121.489215117188,29.8913259101563],
      // "鄞州区": [121.489215117188,29.7913259101563],
      //   "奉化市":[],
      //   "余姚市":[],
      //   "宁海县":[],
      //   "镇海区":[],
      //   "北仑区":[],
      //   "江北区":[],
      //   "江东区":[],
      //   "海曙区":[],
      //   "慈溪市"
      resizeWorldMapContainer();
      var boxWidth=100;
      var boxDepth=100;
      let scatterdata=[];
      let mapdata=[];
      var chinaDatas1=[ []]
      if(mapCode=='330200'){
        chinaDatas1=[
          [{
            name: '鄞州区',
            value: 10
          },{
            name: '象山县',
            value: 10
          },
            {
              name: '奉化市',
              value: 10
            },{
            name: '余姚市',
            value: 10
          },{
            name: '宁海县',
            value: 10
          },{
            name: '镇海区',
            value: 10
          },{
            name: '北仑区',
            value: 10
          },{
            name: '江北区',
            value: 10
          },{
            name: '江东区',
            value: 10
          },{
            name: '海曙区',
            value: 10
          },{
            name: '慈溪市',
            value: 10
          }]

        ];
        mapdata=[{
          "name": "开关站5",
          "value": [
            121.547345,29.853843,100
          ]
        },{
          "name": "开关站1",
          "value": [
            121.907345,29.7538430000001,100
          ]
        },{
          "name": "开关站2",
          "value": [
            121.077345,30.2538430000001,100
          ]
        },{
          "name": "开关站3",
          "value": [
            121.577345,29.533843,100
          ]
        },{
          "name": "开关站4",
          "value": [
            121.522974882813,29.9892946601563,100
          ]
        },{
          "name": "开关站6",
          "value": [
            121.611710234375,29.8565480781251,100
          ]
        },{
          "name": "开关站7",
          "value": [
            121.807345,29.253843,100
          ]
        },{
          "name": "开关站8",
          "value": [
            122.233922148438,28.8660353828126,100
          ]
        },{
          "name": "开关站9",
          "value": [
            121.092594023438,30.2424977851563,100
          ]
        },{
          "name": "开关站10",
          "value": [
            121.63427859375,30.0507741523438,100
          ]
        },
          {
            "name": "开关11",
            "value": [
              121.489215117188,29.8913259101563,100
            ]
          }
        ];
      }
      if(mapCode!='330200'){
        boxWidth=60;
        boxDepth=60;
        // scatterdata=[[121.547345,29.753843,'奥林公馆开关站']];
      }
      // 121.889516,29.468717
      // 121.247345
      if(mapCode=='330225'){
        scatterdata=[{
          "name": "奥林公馆开关站",
          "value": [
            121.739516,29.368717,100,13373685112,793
          ]
        },{
          "name": "开关站1",
          "value": [
            121.789516,29.268717,100,13373685112,793
          ]
        },{
          "name": "开关站2",
          "value": [
            121.789516,29.228717,100,13373685112,793
          ]
        },{
          "name": "开关站3",
          "value": [
            121.889516,29.238717,100,13373685112,793
          ]
        },{
          "name": "开关站4",
          "value": [
            121.829516,29.368717,100,13373685112,793
          ]
        }];
      }






      var myChart=echarts.init(chartMap);
      var that=this;
      this.axios.get('chinamaincity/' + mapCode + '.json').then(res => {
        var data = res

        if (data) {
          echarts.registerMap(mapName, data);

          var option = {
            // visualMap: [{
            //   show: false,
            //   type: 'continuous',
            //   seriesIndex: 0,
            //   text: ['bar3D'],
            //   calculable: true,
            //   max: 300,
            //   inRange: {
            //     color: ['#87aa66', '#eba438', '#d94d4c']
            //   }
            // }, {
            //   show: false,
            //   type: 'continuous',
            //   seriesIndex: 1,
            //   text: ['scatter3D'],
            //   left: 'right',
            //   max: 100,
            //   calculable: true,
            //   inRange: {
            //     color: ['#000', 'blue', 'purple']
            //   }
            // }],
            geo3D : {
              show : true,
              map :mapName,
              boxWidth:boxWidth,
              boxDepth:boxDepth,
                itemStyle: {
                  color: '#0033FF',
                  opacity: 1,
                  borderWidth: 0.8,
                  borderColor: 'rgb(62,215,213)'
                },
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff', //地图初始化区域字体颜色
                    fontSize: 16,
                    opacity: 1,
                    backgroundColor: 'rgba(0,0,0,0)'
                    //backgroundColor: 'rgba(53,171,199,0)'
                  },
                },

                emphasis: { //当鼠标放上去  地区区域是否显示名称
                  label: {
                    show: false,
                    textStyle: {
                      color: '#fff',
                      fontSize: 16,
                      backgroundColor: 'rgba(0,23,11,0)'
                    }
                  }
                },
                light: { //光照阴影
                  main: {
                    color: '#fff', //光照颜色
                    intensity: 1.2, //光照强度
                    //shadowQuality: 'high', //阴影亮度
                    shadow: false, //是否显示阴影
                    alpha: 55,
                    beta: 10

                  },
                  ambient: {
                    intensity: 0.3
                  }
                },
              tooltip: 'axis', //提示框设置

              formatter: val => {
                return val
              },

              viewControl:{
                alpha:30,
                beta:80,
                center:[0,-10,0]
              },
                data: that.convertData(chinaDatas)
            },
            series: [
              // {
              //   type: 'scatter3D',
              //   coordinateSystem: 'geo3D',
              //   symbol: 'pin',
              //   symbolSize: 30,
              //   opacity: 1,
              //   label: {
              //     show: false,
              //     formatter: '{b}'
              //   },
              //   itemStyle: {
              //     borderWidth: 0.5,
              //     borderColor: '#fff'
              //   },
              //   data: that.convertData(chinaDatas)
              // },
              {
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                blendMode: 'lighter',
                bevelSize: 0,
                barSize: 1,
                minHeight: 0.2,
                zlevel : 10,
                itemStyle: {
                  color: '#17e3ff',
                  opacity: 1
                },
                label: {
                  show: true,
                  formatter:'{b}'
                },
                shading: 'lambert',
                data: that.convertData(chinaDatas1)
              },
              {
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                blendMode: 'lighter',
                bevelSize: 0,
                barSize: 1,
                minHeight: 0.2,
                zlevel : 10,
                itemStyle: {
                  color: '#17e3ff',
                  opacity: 1
                },
                label: {
                      show: true,
                      formatter:'{b}'
                    },
                shading: 'lambert',
                data: scatterdata
              }

            ]
          };


          // resizeWorldMapContainer();


          myChart.clear();
          myChart.resize();
          myChart.setOption(option);
          // window.addEventListener("resize",function(){
          //   myChart.resize();
          // });
          that.curMap = {
            mapCode: mapCode,
            mapName: mapName
          };

          // myChart.getZr().on('click',this.click3d )

        } else {
          alert('无法加载该地图');
        }
      });

    }
  },
  filters: {},
  computed: {},
  created () {
    this.$nextTick(function(){
      let self = this;
      let myChart = echarts.init(document.getElementById('chartMap'));
      this.loadmap3D('330200', 'ningbo');
      // window.addEventListener("resize",function(){
      //   myChart.resize();
      // });
    });
    // this.drawmap()
  },
  mounted () {

    //初始化地图
    this.loadmap3D('330200', 'ningbo');
    // this.loadMap('330200', 'ningbo');
    // this.drawmap()
    let that = this;
    var cityMap=this.cityMap;
    let myChart = echarts.init(document.getElementById('chartMap'));
    // window.addEventListener('keydown', function () {
    //
    //   myChart.dispatchAction({
    //     type: 'geoselected',
    //     seriesIndex: 0
    //   });
    // });
    myChart.on('click', function (params) {

      if(params.componentSubType=='bar3D' && JSON.stringify(that.cityMap).search(params.name)=='-1'){
        that.$router.push({ name: 'detaildp', params: {stationName:params.name,stationNum:params.value[3],stationID:params.value[4]} })
      }else {
        // var option=myChart.getOption.dataZoom;
        // option.series.regions[0].name = option.series.data[0].name
        // myChart.setOption(option);
        // myChart.dispatchAction({
        //   type: 'focusNodeAdjacency',
        //   // 使用 dataIndex 来定位节点。
        //   dataIndex: params.dataIndex
        // });
        var name = params.data.name;
        var mapCode = cityMap[name];
        if (!mapCode) {
          alert('无此区域地图显示');
          return;
        }
        that.loadmap3D(mapCode, name);
        //将上一级地图信息压入mapStack
        that.mapStack.push({
          mapCode: that.curMap.mapCode,
          mapName: that.curMap.mapName
        });
      }



    });
    // myChart.getZr().on('click',function(e){
    //
    //   alert(e.which)
    // });
    // myChart.getZr().on('click', function(params) {
    //   console.log(params);
    //   // var name=params.data.name;
    //   // var mapCode = cityMap[name];
    //   // if (!mapCode) {
    //   //   alert('无此区域地图显示');
    //   //   return;
    //   // }
    //   // that.loadmap3D(mapCode, name);
    //   // //将上一级地图信息压入mapStack
    //   // that.mapStack.push({
    //   //   mapCode: that.curMap.mapCode,
    //   //   mapName: that.curMap.mapName
    //   // });
    //
    // });



    /**
     绑定双击事件，并加载上一级地图
     */
    myChart.getZr().on('dblclick', function(params) {
      //当双击事件发生时，清除单击事件，仅响应双击事件
      // clearTimeout(timeFn);
      // debugger;
      var map = that.mapStack.pop();
      if (!that.mapStack.length && !map) {
        alert('已经到达最上一级地图了');
        return;
      }
      that.loadmap3D(map.mapCode, map.mapName);
    });

  },
  destroyed () {}
}
</script>

<style lang="scss" scoped>

</style>
