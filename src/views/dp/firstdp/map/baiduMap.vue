<template>

        <div id="map" ></div>

</template>
<script>
import BMap from 'BMap'
export default {
    name:'baiduMap',
    props:['baiduCityName','initData','stationdata'],
    data(){
        return{
            map:null,
            stationNumgroup:{},
            datajson:'',
             isload:0
        }
    },
    created(){

        // this.$nextTick(()=>{
        //     this.map = new BMap.Map('map',{enableMapClick:false})
        //     this.init()
        //     // this.searchInput()
        // })
    },
    mounted(){

        var that = this


        // this.$nextTick(()=>{
            this.map = new BMap.Map('map',{enableMapClick:false})
            this.init()
            // this.searchInput()
        // })
    },
    methods:{
      panTo(lng,lat){
        var panTopoint=new BMap.Point(lng,lat);
        this.map.panTo(panTopoint);
      },
      setdatajson(datajson){
        this.datajson=datajson;
      },
      setcenterAndZoom(cityName){

          if(cityName=='象山县'){
            this.map.centerAndZoom(new BMap.Point(121.699637,29.658938),12)
          }else if(cityName=='奉化市'){
            this.map.centerAndZoom(new BMap.Point(121.505315,29.796436),12)
          }else if(cityName=='余姚市'){
            this.map.centerAndZoom(new BMap.Point( 121.193711,30.279668),12)
          }else if(cityName=='慈溪市'){
            this.map.centerAndZoom(new BMap.Point(121.256952,30.347509),12)
          }else if(cityName=='宁海县'){
            this.map.centerAndZoom(new BMap.Point(121.508765,29.501134),12)
          }else if(cityName=='北仑区'){
            this.map.centerAndZoom(new BMap.Point(121.930753,29.954774),12)
          } else{
            this.map.centerAndZoom(new BMap.Point(121.539624, 29.926772),12)
          }
      },
         init(){
            // 创建map实例
            //构造底图时，关闭底图可点功能
            // 初始化地图

           var styleJson=[{
             "featureType": "land",
             "elementType": "geometry",
             "stylers": {
               "visibility": "on",
               "color": "#002d8fff"
             }
           }, {
             "featureType": "water",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0137aaff"
             }
           }, {
             "featureType": "building",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#59a6ffff"
             }
           }, {
             "featureType": "building",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#001982ff"
             }
           }, {
             "featureType": "water",
             "elementType": "geometry",
             "stylers": {
               "visibility": "on",
               "color": "#88bfffff"
             }
           }, {
             "featureType": "village",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "town",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "district",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "country",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "city",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "continent",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "poilabel",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "poilabel",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "scenicspotslabel",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "scenicspotslabel",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "transportationlabel",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "transportationlabel",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "on"
             }
           }, {
             "featureType": "airportlabel",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "airportlabel",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "road",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0053ffff"
             }
           }, {
             "featureType": "road",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0038d7ff"
             }
           }, {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": {
               "weight": "3"
             }
           }, {
             "featureType": "green",
             "elementType": "geometry",
             "stylers": {
               "visibility": "on",
               "color": "#0053ffff"
             }
           }, {
             "featureType": "scenicspots",
             "elementType": "geometry",
             "stylers": {
               "visibility": "on",
               "color": "#0137aaff"
             }
           }, {
             "featureType": "scenicspots",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "scenicspots",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "continent",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "country",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "city",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "city",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "scenicspotslabel",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "airportlabel",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "transportationlabel",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "railway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "subway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "on"
             }
           }, {
             "featureType": "highwaysign",
             "elementType": "labels",
             "stylers": {
               "visibility": "on"
             }
           }, {
             "featureType": "nationalwaysign",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "nationalwaysign",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "provincialwaysign",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "provincialwaysign",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "tertiarywaysign",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "tertiarywaysign",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "subwaylabel",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "subwaylabel",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "road",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff",
               "weight": "90"
             }
           }, {
             "featureType": "road",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "shopping",
             "elementType": "geometry",
             "stylers": {
               "visibility": "on"
             }
           }, {
             "featureType": "scenicspots",
             "elementType": "labels",
             "stylers": {
               "visibility": "on"
             }
           }, {
             "featureType": "scenicspotslabel",
             "elementType": "labels",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "manmade",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "manmade",
             "elementType": "labels",
             "stylers": {
               "visibility": "on"
             }
           }, {
             "featureType": "highwaysign",
             "elementType": "labels.icon",
             "stylers": {
               "visibility": "off"
             }
           }, {
             "featureType": "water",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0053ff00"
             }
           }, {
             "featureType": "road",
             "stylers": {
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "stylers": {
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "stylers": {
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "stylers": {
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "road",
             "elementType": "labels.text",
             "stylers": {
               "fontsize": "24"
             }
           }, {
             "featureType": "highway",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "highway",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "highway",
             "elementType": "geometry.stroke",
             "stylers": {
               "color": "#1c4f7eff"
             }
           }, {
             "featureType": "highway",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "highway",
             "elementType": "geometry",
             "stylers": {
               "weight": "3"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "geometry.stroke",
             "stylers": {
               "color": "#1c4f7eff"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "geometry",
             "stylers": {
               "weight": "3"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "arterial",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "tertiaryway",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "fourlevelway",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "local",
             "elementType": "geometry.fill",
             "stylers": {
               "visibility": "on",
               "color": "#0c5bffff"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0038d7ff"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0038d7ff"
             }
           }, {
             "featureType": "arterial",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0038d7ff"
             }
           }, {
             "featureType": "tertiaryway",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0038d7ff"
             }
           }, {
             "featureType": "fourlevelway",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0038d7ff"
             }
           }, {
             "featureType": "local",
             "elementType": "geometry.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#0038d7ff"
             }
           }, {
             "featureType": "local",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "local",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "fourlevelway",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "tertiaryway",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "arterial",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "labels.text.fill",
             "stylers": {
               "visibility": "on",
               "color": "#4b85ffff"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "arterial",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "tertiaryway",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "fourlevelway",
             "elementType": "labels.text.stroke",
             "stylers": {
               "visibility": "on",
               "color": "#1415e0ff",
               "weight": "1"
             }
           }, {
             "featureType": "fourlevelway",
             "elementType": "geometry",
             "stylers": {
               "weight": "1"
             }
           }, {
             "featureType": "tertiaryway",
             "elementType": "geometry",
             "stylers": {
               "weight": "1"
             }
           }, {
             "featureType": "local",
             "elementType": "geometry",
             "stylers": {
               "weight": "1"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "geometry",
             "stylers": {
               "weight": "3"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "geometry",
             "stylers": {
               "weight": "3"
             }
           }, {
             "featureType": "arterial",
             "elementType": "geometry",
             "stylers": {
               "weight": "3"
             }
           }, {
             "featureType": "highway",
             "stylers": {
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "stylers": {
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "stylers": {
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "stylers": {
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "highway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "stylers": {
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "stylers": {
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "stylers": {
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "stylers": {
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "nationalway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "provincialway",
             "stylers": {
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "8-10"
             }
           }, {
             "featureType": "provincialway",
             "stylers": {
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "8-10"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "8-10"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "8-10"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "8-10"
             }
           }, {
             "featureType": "provincialway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "8-10"
             }
           }, {
             "featureType": "cityhighway",
             "stylers": {
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "stylers": {
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "stylers": {
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "stylers": {
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "6",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "7",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "8",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "cityhighway",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "6-9"
             }
           }, {
             "featureType": "arterial",
             "stylers": {
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "9-9"
             }
           }, {
             "featureType": "arterial",
             "elementType": "geometry",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "9-9"
             }
           }, {
             "featureType": "arterial",
             "elementType": "labels",
             "stylers": {
               "visibility": "off",
               "level": "9",
               "curZoomRegionId": "0",
               "curZoomRegion": "9-9"
             }
           }];


           var ctrlNav = new BMap.NavigationControl({
             anchor: BMAP_ANCHOR_TOP_LEFT,                        type: BMAP_NAVIGATION_CONTROL_LARGE                    });
           this.map.addControl(ctrlNav);
           this.map.centerAndZoom(new BMap.Point(121.539624, 29.926772),16)
           // 设置地图显示的城市 此项是必须设置的
           // this.map.setCurrentCity(this.baiduCityName)
           //开启鼠标滚轮缩放
           this.map.enableScrollWheelZoom(true)
           this.map.setMapStyleV2({styleJson:styleJson});
        },

        // 添加覆盖物
        addPoint(stationv){


           let that=this;
            var point = new BMap.Point(stationv.lng,stationv.lat)
          // var myIcon = new BMap.Icon("../dpimg/firstdp/markers.png", new BMap.Size(23, 25), {
          //
          //   offset: new BMap.Size(10, 25),
          //
          //   imageOffset: new BMap.Size(0, 0 - 10 * 25)
          //
          // });
          //   let marker=new BMap.Marker(point,{icon: myIcon});
          let marker=new BMap.Marker(point);
          var humi='';
          var temp='';
            marker.addEventListener("mouseover",function(e){

              var txt='<span style="color:white;font-size: 17px ;">'+stationv.kgzName+'</span><br/> <span style="color:#ffff00;font-size: 17px ;" >水位:</span><span style="color:#00ff00;font-size: 17px ;">'+stationv.waterLevel+'</span><br/><span style="color:#ffff00;font-size: 17px ;" >门状态:</span><span style="color:#00ff00;font-size: 17px ;">'+stationv.doorStatus+'</span>'
              var txttemp='';

              if(typeof(stationv.temp)!='undefined'){
                humi=stationv.humi.substr(stationv.humi.indexOf('&')+1);
                temp=stationv.temp.substr(stationv.temp.indexOf('&')+1);
                txttemp='<br/><span style="color:#ffff00;font-size: 17px ;" >湿度:</span><span style="color:#00ff00;font-size: 17px ;">'+humi+'</span><br/><span style="color:#ffff00;font-size: 17px ;" >温度:</span><span style="color:#00ff00;font-size: 17px ;">'+temp+'</span>'
              }

              var label = new BMap.Label(txt+txttemp,{offset:new BMap.Size(-20,-120)});
              label.setStyle({
                opacity:"0.9",
                backgroundColor :"black",
              })
              // label.setStyle({
              //   whiteSpace : "nowrap",
              //   color : "#ffffff"
              // });
                    // label.setStyle({display:"block"});
            //         label.setStyle({whiteSpace:"normal",
            // height:"auto"});
              marker.setLabel(label)
              // marker.setZIndex(999)
            });
            marker.addEventListener("mouseout",function(e){
                var label = this.getLabel()
            //     label.setStyle({whiteSpace:"nowrap",
            // height:"20px"});
              label.setContent("");//设置标签内容为空
              label.setStyle({opacity:"0"});//设置标签边框宽度为0
            });
          marker.addEventListener("click",function(e){
            that.$router.push({ name: 'detaildp', params: {stationName:stationv.kgzName,stationNum:stationv.stationNum,stationID:stationv.id,
                waterLevel:stationv.waterLevel,doorStatus:stationv.doorStatus,humi:humi,temp:temp } })
            sessionStorage.setItem('waterLevel',stationv.waterLevel);
            sessionStorage.setItem('doorStatus',stationv.doorStatus);
            sessionStorage.setItem('humi',humi);
            sessionStorage.setItem('temp',temp);
          });
          this.map.addOverlay(marker);
        },
        // 添加多个覆盖物
        addMaker(cityName){
          // this.init()
          this.setcenterAndZoom(cityName);
          if(this.isload==0) {
            for (var i = 0; i < this.datajson.length; i++) {
              var stationv = this.datajson[i];
              // 创建标注
              this.addPoint(stationv)
              this.isload=1;
              // this.addMaker()
            }
          }
        }
    }
}
</script>
<style scoped>
.main{
    width: 100%;
    height: 100%;
}
</style>