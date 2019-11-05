<template>
  <div  id="s-map">
    <baidu-map  :initData="initData" :baiduCityName="baiduCityName" :style="style1"></baidu-map>
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
            mapStack:[],
            scatterdata:[],
            initData:[],
            baiduCityName:'',
            show:false
        }
    },
    props: ['cityName','parameter']
    ,
    watch: {},
    created () {
        // this.$nextTick(function(){
        // let self = this;
        // let myChart = echarts.init(document.getElementById('chartMap'));
        // this.loadmap2D('330200', 'ningbo');
        // });
    },
    mounted () {
        //初始化地图
        this.loadmap2D('330200', 'ningbo');
        let that = this;
        var cityMap=this.cityMap;
        let myChart = echarts.init(document.getElementById('chartMap'));
        myChart.on("click", (params) =>{
            console.log(params, 'params')
            var that = this
          chartMap.style.width  = '0px';
          chartMap.style.height = '0px';
          chartMap.style.top = '0px';
          myChart.clear();
          that.style1='height:9rem;width:8.5rem;'
            if(JSON.stringify(that.cityMap).search(params.name)=='-1'){
                that.$router.push({ name: 'detaildp', params: {stationName:params.name,stationNum:params.value[3],stationID:params.value[4]} })
            }
            let name = ''
            let code = ''
            if (!params.data){
                name = params.name
                code = that.cityMap[name]
            } else {
                name = params.data.name
                code = params.data.cityCode
            }
            that.scatterdata=[{
                    "name": "奥林公馆开关站",
                    "value": [
                        121.739516,29.368717,100,13373685112,793
                    ]},{
                    "name": "开关站1",
                    "value": [
                        121.789516,29.268717,100,13373685112,793
                    ]},{
                    "name": "开关站2",
                    "value": [
                        121.789516,29.228717,100,13373685112,793
                    ]},{
                    "name": "开关站3",
                    "value": [
                        121.889516,29.238717,100,13373685112,793
                    ]},{
                    "name": "开关站4",
                    "value": [
                        121.829516,29.368717,100,13373685112,793
                    ]}
                ];
                that.activeNum=1;
                that.initData = that.scatterdata
                that.baiduCityName = name



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
           that.style1=''
        });


      // document.getElementById("s-map").onmouseup=function(oEvent) {
      //
      //   if (!oEvent) oEvent=window.event;
      //   if (oEvent.button==2) {
      //     that.show = false
      //     var map = that.mapStack.pop();
      //     if (!that.mapStack.length && !map) {
      //       alert('已经到达最上一级地图了');
      //       return;
      //     }
      //     that.loadmap2D(map.mapCode, map.mapName);
      //   }
      // }

    },
    methods:{
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

        loadmap2D(mapCode, mapName){

            let chartMap=document.getElementById('chartMap');
            let smap = document.getElementById('s-map');
            var resizeWorldMapContainer = function () {
                chartMap.style.width  = '800px';
                chartMap.style.height = '780px';
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
            // let scatterdata = []
            // if(mapCode=='330225'){
            //     scatterdata=[{
            //         "name": "奥林公馆开关站",
            //         "value": [
            //             121.739516,29.368717,100,13373685112,793
            //         ]},{
            //         "name": "开关站1",
            //         "value": [
            //             121.789516,29.268717,100,13373685112,793
            //         ]},{
            //         "name": "开关站2",
            //         "value": [
            //             121.789516,29.228717,100,13373685112,793
            //         ]},{
            //         "name": "开关站3",
            //         "value": [
            //             121.889516,29.238717,100,13373685112,793
            //         ]},{
            //         "name": "开关站4",
            //         "value": [
            //             121.829516,29.368717,100,13373685112,793
            //         ]}
            //     ];
            // }

            let myChart = echarts.init(chartMap);
            var that=this;
            let option = {
                geo: {
                    map: mapName,
                    zoom: 1.2,
                    viewControl: {
                        center: [-10, 0, 10]
                    },
                    light: { //光照阴影
                        main: {
                            color: '#fff', //光照颜色
                            intensity: 1.2, //光照强度
                            shadow: false, //是否显示阴影
                            alpha: 55,
                            beta: 10
                        },
                        ambient: {
                            intensity: 0.3
                        }
                    },
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
                            backgroundColor: 'rgba(0,23,11,0)'
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
                    tooltip: 'axis', //提示框设置

                    formatter: val => {
                        return val
                    },
                },
                 series: [
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: that.convertData(chinaDatas1),
                        symbol: 'pin',
                        symbolSize: 30,
                        itemStyle:{
                            color:'#17e3ff',
                            borderColor:'#fff',
                            borderWidth:1,
                            opacity: 1
                        },
                        label:{
                            show:true,
                            formatter:'{b}',
                            position:'top',
                            textStyle:{
                                color:'#333',
                                backgroundColor:'#fff',
                                fontSize:'18px',
                            }
                        },
                        shading: 'lambert',
                    },
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        // blendMode: 'lighter',
                        symbolSize: 30,
                        symbol: 'pin',
                        minHeight: 0.8,
                        itemStyle: {
                            color: '#17e3ff',
                            borderColor:'#fff',
                            opacity: 1
                        },
                        label: {
                            show: true,
                            formatter:'{b}',
                            position:'top',
                            textStyle:{
                                color:'#333',
                                backgroundColor:'#fff',
                                fontSize:'18px',
                            }
                        },
                        shading: 'lambert',
                        data: that.scatterdata
                    }
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
