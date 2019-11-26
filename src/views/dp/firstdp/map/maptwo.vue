<template>
  <div  id="s-map" >
    <div :class="this.isbmap==1? 's-map':''" v-if="isbmap==1"></div>
    <baidu-map  :initData="initData" :baiduCityName="baiduCityName" :stationdata="stationdata" :style="style1"  ref="bmap"></baidu-map>
    <div id="chartMap" class="chartGauge" style="height:10rem;width:9.5rem;" ></div>
  </div>
</template>


<script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
import gz from 'echarts/map/json/province/zhejiang'
import '@/views/dp/css/firstdp.css'
import $ from 'jquery'
import { testMap } from '../js/china-main-city/china-main-city-map.js'
require('echarts-gl');
import echarts from "echarts";
import baiduMap from './baiduMap.vue'
// import np from './chinamaincity/'
export default {
    components: {
        testMap,
        baiduMap
    },
    data () {
        return{
          style1:'',
          isbmap:0,
            cityMap:{
                "慈溪": "330282",
                "海曙": "330203",
                "江东": "330204",
                "江北": "330205",
                "北仑": "330206",
                "镇海": "330211",
                "鄞州": "330212",
                "象山": "330225",
                "宁海": "330226",
                "余姚": "330281",
                "奉化": "330283",
                "宁波": "330200"
            },
          geoCoordMapSmall:{
            "象山县": [121.889215117188,29.2913259101563],
            "鄞州区": [121.389215117188,29.7913259101563],
            "奉化市":[121.489215117188,29.5913259101563],
            "余姚市":[121.189215117188,29.8913259101563],
            "宁海县":[121.389215117188,29.2913259101563],
            "镇海区":[121.649215117188,30.0289999101563],
            "北仑区":[121.889215117188,29.8913259101563],
            "江北区":[121.489215117188,29.9999999101563],
            "江东区":[121.529215117188,29.8613259101563],
            "海曙区":[121.669215117188,29.8813259101563],
            "慈溪市":[121.289215117188,30.1913259101563]
          },
          geoCoordMapMain:{
            "象山县": [121.889215117188,29.2913259101563],
            "鄞州区": [121.489215117188,29.7913259101563],
            "奉化市":[121.489215117188,29.5913259101563],
            "余姚市":[121.289215117188,29.9913259101563],
            "宁海县":[121.389215117188,29.2913259101563],
            "镇海区":[121.629215117188,29.9813259101563],
            "北仑区":[121.889215117188,29.8913259101563],
            "江北区":[121.449215117188,29.9913259101563],
            "江东区":[121.579215117188,29.8813259101563],
            "海曙区":[121.519215117188,29.8613259101563],
            "慈溪市":[121.429215117188,30.1913259101563]
          },
            timeFn:null,
            font: '24',
            mapTop:'',
           mapLeft:'',
            mapZoom:null,
            curMap:{},
            mapStack:[],
            scatterdata:[],
            initData:[],
            baiduCityName:'',
            show:false,
            stationgcityroup:{},
          geoCoordMap:{}
        }
    },
    props: ['cityName','parameter','stationdata','dataJsonList']
    ,
    watch: {},
    created () {

      for(var i=0;i<this.stationdata.length;i++){

        var stationv=this.stationdata[i];
        // 创建标注
        // this.addPoint(stationv)
        // this.addMaker()
      }
        // this.$nextTick(function(){
        // let self = this;
        // let myChart = echarts.init(document.getElementById('chartMap'));
        // this.loadmap2D('330200', 'ningbo');
        // });
    },
    mounted () {

        //初始化地图
        let that = this;
        var cityMap=this.cityMap;
        let myChart = echarts.init(document.getElementById('chartMap'));
        myChart.on("click", (params) =>{
          console.log(11111)
          sessionStorage.setItem("isBack",true)
          var that = this
          chartMap.style.width  = '0px';
          chartMap.style.height = '0px';
          chartMap.style.top = '0px';
          myChart.clear();
          that.isbmap=1;
          that.style1='height:9rem;width:8.5rem;'
          this.$refs.bmap.addMaker(params.name);
            let name = ''
            let code = ''
            if (!params.data){
                name = params.name
                code = that.cityMap[name]
            } else {
                name = params.data.name
                code = params.data.cityCode
            }

            //将上一级地图信息压入mapStack
            that.mapStack.push({
                mapCode: that.curMap.mapCode,
                mapName: that.curMap.mapName
            });
        });

         /**
         绑定双击事件，并加载上一级地图
        */
         myChart.getZr().on('dblclick', function(params) {
            //当双击事件发生时，清除单击事件，仅响应双击事件
            // clearTimeout(timeFn);
            var map = that.mapStack.pop();
            if (!that.mapStack.length && !map) {
                alert('已经到达最上一级地图了');
                return;
            }
            that.loadmap2D(map.mapCode, map.mapName);
           that.isbmap=0;
           that.style1=''
        });
    },
    methods:{
      backmap(){
        var map = this.mapStack.pop();
        if (!this.mapStack.length && !map) {
          return;
        }
                console.log(1111111)
        this.loadmap2D(map.mapCode, map.mapName);

        this.isbmap=0;
        this.style1=''
      },
      resize(name){
        let chartMap=document.getElementById('chartMap');
        let chart = this.$echarts.init(chartMap);
        chart.resize();
    //     if(this.isbmap==0){
    // this.load(name);
    //     }
      },
      setdataJsonList(){

      },
      setstationdata(datajson){
        this.$refs.bmap.setdatajson(datajson);
      },
      setcenterAndZoom(stationNum){

      },
      load(cityName,datajson){
       this.dataJsonList=datajson;
        if (cityName === '宁波'){
          this.mapTop = '16%'
          this.mapLeft = '25%'
          this.mapZoom = 1.4
          this.geoCoordMap = this.geoCoordMapSmall
        } else {
          this.mapTop = '0%'
          this.mapLeft = '10%'
          this.mapZoom = 1
          this.geoCoordMap = this.geoCoordMapMain
        }
        if (cityName === '江北'){
          this.mapTop = '11%'
        }
        if (cityName === '余姚'){
          this.mapLeft = '33%'
        }
        this.isbmap=0;
        this.loadmap2D(this.cityMap[cityName], cityName);
        this.loadmarket(cityName);
      },
      loadmarket(cityName){
        var vd=[];

      },
        convertData(data,mapName) {
            data=data[0];
            let self = this;

            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {

                  if(mapName=='宁波') {
                    res.push({
                      name: data[i].name,
                      value: geoCoord.concat(data[i].value)
                    });

                  }else if(data[i].name.indexOf(mapName)>=0){
                    res.push({
                      name: data[i].name,
                      value: geoCoord.concat(data[i].value)
                    });
                  }

                }
            }
            return res;
        },
      getCityTotal(name){
        this.dataJsonList.map(item =>{
          let b = 0
          if (name === item.groupname){
            return item.total
          } else {
            return 0
          }
        })

      },
        loadmap2D(mapCode, mapName){

            let chartMap=document.getElementById('chartMap');
            let smap = document.getElementById('s-map');
            var resizeWorldMapContainer = function () {
                chartMap.style.width  = '9.5rem';
                chartMap.style.height = '9rem';
                chartMap.style.top = '0px';
            };
            resizeWorldMapContainer();
            let  chinaDatas1=[
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
            let myChart = echarts.init(chartMap);
            var that=this;
          var img = 'image://data:image/png;base64,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';

          let option = {
            // visualMap: {
            //   min: 0,
            //   max: 1500,
            //   left: 'left',
            //   top: 'bottom',
            //   text: ['High','Low'],
            //   seriesIndex: [1],
            //   inRange: {
            //     color: ['#e0ffff', '#006edd']
            //   },
            //   calculable : true
            // },
            geo: {
              map: mapName,
              zoom: that.mapZoom,
              left:that.mapLeft,
              top:that.mapTop,
              viewControl: {
                center: [-10, 0, 10]
              },
              // itemStyle: {
              //   // color: '#0033FF',
              //   opacity: 1,
              //   // color: {
              //   //   type: 'linear',
              //   //   x: 0,
              //   //   y: 0,
              //   //   x2: 0,
              //   //   y2: 1,
              //   //   colorStops: [{
              //   //     offset: 0,
              //   //     color: '#0052ff' // 0% 处的颜色#0052ff
              //   //   }, {
              //   //     offset: 0.5,
              //   //     color: '#0052ff' // 50% 处的颜色#3173ff
              //   //   }, {
              //   //     offset: 1,
              //   //     color: '#0052ff' // 50% 处的颜色
              //   //   }],
              //   //   globalCoord: true // 缺省为 false
              //   // },
              // },
              itemStyle: {
                normal: {
                  areaColor: '#1360ff',//113173,0059bd
                  borderColor: '#001eec',//097cc0,113173,0F1BDD
                  borderWidth: 3,
                  shadowColor: 'rgba(63, 218, 255, 0.8)',
                  shadowBlur: 5
                },
                emphasis: {
                  areaColor: '#001eec', //hover颜色
                }
              },
              label: {
                show: false,
                // position: ['50%', '50%'],
                // textStyle: {
                //   color: '#28cd9c', //地图初始化区域字体颜色
                //   fontSize: 16,
                //   opacity: 1,
                //   backgroundColor: 'rgba(0,23,11,0)',
                // },
              },
              emphasis: { //当鼠标放上去  地区区域是否显示名称
                label: {
                  show: false,
                  textStyle: {
                    color: '#fff',
                    fontSize: 16,
                    backgroundColor: 'rgba(0,23,11,0)'
                  }
                },
                itemStyle: {
                  areaColor: "#0013ff",
                },
              },
              tooltip: 'axis', //提示框设置

              formatter: val => {
                return val
              },
            },
            series: [
              {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: that.convertData(chinaDatas1,mapName),
                symbol: img,
                symbolSize: [40, 60],
                symbolOffset:['-30%','-30%'],
                itemStyle:{
                  // color:'#17e3ff',
                  borderColor:'#fff',
                  opacity: 1,
                },

                label:{
                  show:true,
                  formatter:((params)=>{
                    let name = params.name.substring(0,2)
                    let value = null
                    for (let i = 0; i< that.dataJsonList.length; i++){
                      if (name === that.dataJsonList[i].groupname){
                        return `${params.name} : ${that.dataJsonList[i].total}`
                      }
                    }
                    if (params.value[1]){
                      return `${params.name}:${0}`
                    }
                  }),
                  position:'top',
                  textStyle:{
                    color:'#ffffff',
                    fontSize:16,
                  }
                },
                shading: 'lambert',
              },
            ]
          }

            this.axios.get('chinamaincity/' + mapCode + '.json').then(res => {
                echarts.registerMap(mapName, res);
                if (res){
                    myChart.clear();
                    myChart.resize();
                    myChart.setOption(option);
                    that.curMap = {
                        mapCode: mapCode,
                        mapName: mapName
                    };
                } else {
                    alert('无法加载地图')
                }
            })

        }

    },

    destroyed () {}
    }
</script>

<style lang="scss" scoped>

</style>
