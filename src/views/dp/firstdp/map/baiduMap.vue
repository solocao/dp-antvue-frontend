<template>
  <div id="map">
  </div>
</template>
<script>
  import BMap from 'BMap'
  export default {
    name: 'baiduMap',
    props: ['baiduCityName', 'initData', 'stationdata'],
    data() {
      return {
        map: null,
        stationNumgroup: {},
        datajson: '',
        stationdataqz: [],
        stationdatahs: [],
        stationdatafh: [],
        stationdatayy: [],
        stationdatacx: [],
        stationdatanh: [],
        stationdatajd: [],
        stationdatajb: [],
        stationdatabl: [],
        stationdatazh: [],
        stationdataxs: [],
        isload: 0
      }
    },
    created() {
      // this.$nextTick(()=>{
      //     this.map = new BMap.Map('map',{enableMapClick:false})
      //     this.init()
      //     // this.searchInput()
      // })
    },
    mounted() {
      var that = this
      // this.$nextTick(()=>{
      this.map = new BMap.Map('map', {
        enableMapClick: false
      })
      this.init()
      // this.searchInput()
      // })
    },
    methods: {
      panTo(lng, lat) {
        console.log("调用地图")
        var panTopoint = new BMap.Point(lng, lat);
        // this.map.panTo(panTopoint);
        var point = new BMap.Point(lng, lat)
        this.map.centerAndZoom(point, 20)
        this.addMarker(point, 12)
      },
      addMarker(point, index) { // 创建图标对象   
        var myIcon = new BMap.Icon("markers.png", new BMap.Size(23, 25), {
          // 指定定位位置。   
          // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
          // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
          // 图标中央下端的尖角位置。    
          anchor: new BMap.Size(10, 25),
          // 设置图片偏移。   
          // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
          // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
          imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移    
        });
        // 创建标注对象并添加到地图   
        console.log("创建标注对象并添加到地图")
        var marker = new BMap.Marker(point, {
          icon: myIcon
        });
        map.addOverlay(marker);
      },
      setdatajson(datajson, stationdataqz, stationdatahs, stationdatafh, stationdatayy, stationdatacx, stationdatanh, stationdatajd, stationdatajb, stationdatabl, stationdatazh, stationdataxs) {
        this.datajson = datajson;
        this.stationdataqz = stationdataqz;
        this.stationdatahs = stationdatahs;
        this.stationdatafh = stationdatafh;
        this.stationdatayy = stationdatayy;
        this.stationdatacx = stationdatacx;
        this.stationdatanh = stationdatanh;
        this.stationdatajd = stationdatajd;
        this.stationdatajb = stationdatajb;
        this.stationdatabl = stationdatabl;
        this.stationdatazh = stationdatazh;
        this.stationdataxs = stationdataxs;
      },
      setcenterAndZoom(cityName) {
        if (cityName == '象山县') {
          this.map.centerAndZoom(new BMap.Point(121.699637, 29.658938), 12)
        } else if (cityName == '奉化市') {
          this.map.centerAndZoom(new BMap.Point(121.505315, 29.796436), 12)
        } else if (cityName == '余姚市') {
          this.map.centerAndZoom(new BMap.Point(121.193711, 30.279668), 12)
        } else if (cityName == '慈溪市') {
          this.map.centerAndZoom(new BMap.Point(121.256952, 30.347509), 12)
        } else if (cityName == '宁海县') {
          this.map.centerAndZoom(new BMap.Point(121.508765, 29.501134), 12)
        } else if (cityName == '北仑区') {
          this.map.centerAndZoom(new BMap.Point(121.930753, 29.954774), 12)
        } else {
          this.map.centerAndZoom(new BMap.Point(121.539624, 29.926772), 12)
        }
      },
      init() {
        // 创建map实例
        //构造底图时，关闭底图可点功能
        // 初始化地图
        var styleJson = [{
          "featureType": "land",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#d5eaffff"
          }
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#a7f3f1ff"
          }
        }, {
          "featureType": "building",
          "elementType": "geometry.fill",
          "stylers": {
            "visibility": "on",
            "color": "#9ce7e2ff"
          }
        }, {
          "featureType": "building",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#8dd5c9ff"
          }
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": {
            "visibility": "on",
            "color": "#c4fff9ff"
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
            "color": "#004b43ff"
          }
        }, {
          "featureType": "city",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "continent",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
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
            "color": "#c4fff9ff"
          }
        }, {
          "featureType": "transportationlabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "transportationlabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "airportlabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#c4fff9ff"
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
            "color": "#5066d8ff"
          }
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#32b5adff"
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
            "color": "#3dccc7ff"
          }
        }, {
          "featureType": "scenicspots",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off",
            "color": "#a7f3f1ff"
          }
        }, {
          "featureType": "scenicspots",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#c4fff9ff"
          }
        }, {
          "featureType": "scenicspots",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaefff",
            "weight": "1"
          }
        }, {
          "featureType": "continent",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "country",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "city",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
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
            "color": "#9ceaefff",
            "weight": "1"
          }
        }, {
          "featureType": "airportlabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaefff",
            "weight": "1"
          }
        }, {
          "featureType": "transportationlabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
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
            "visibility": "off"
          }
        }, {
          "featureType": "highwaysign",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
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
            "color": "#004b43ff",
            "weight": "90"
          }
        }, {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "shopping",
          "elementType": "geometry",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "scenicspots",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
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
            "visibility": "off"
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
            "color": "#3dccc700"
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
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
            "visibility": "on",
            "color": "#50d8d5ff"
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
            "color": "#004b43ff"
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
            "color": "#50d8d5ff"
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
            "color": "#004b43ff"
          }
        }, {
          "featureType": "nationalway",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
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
            "color": "#50d8d5ff"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry.fill",
          "stylers": {
            "visibility": "on",
            "color": "#50d8d5ff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
            "visibility": "on",
            "color": "#50d8d5ff"
          }
        }, {
          "featureType": "tertiaryway",
          "elementType": "geometry.fill",
          "stylers": {
            "visibility": "on",
            "color": "#50d8d5ff"
          }
        }, {
          "featureType": "fourlevelway",
          "elementType": "geometry.fill",
          "stylers": {
            "visibility": "on",
            "color": "#50d8d5ff"
          }
        }, {
          "featureType": "local",
          "elementType": "geometry.fill",
          "stylers": {
            "visibility": "on",
            "color": "#50d8d5ff"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#32b5adff"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#32b5adff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#32b5adff"
          }
        }, {
          "featureType": "tertiaryway",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#32b5adff"
          }
        }, {
          "featureType": "fourlevelway",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#32b5adff"
          }
        }, {
          "featureType": "local",
          "elementType": "geometry.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#32b5adff"
          }
        }, {
          "featureType": "local",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "local",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "fourlevelway",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "tertiaryway",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "arterial",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "labels.text.fill",
          "stylers": {
            "visibility": "on",
            "color": "#004b43ff"
          }
        }, {
          "featureType": "provincialway",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "cityhighway",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "arterial",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "tertiaryway",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
            "weight": "1"
          }
        }, {
          "featureType": "fourlevelway",
          "elementType": "labels.text.stroke",
          "stylers": {
            "visibility": "on",
            "color": "#9ceaef00",
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
        }, {
          "featureType": "airportlabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "educationlabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#004b43ff"
          }
        }, {
          "featureType": "educationlabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "medicallabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#004b43ff"
          }
        }, {
          "featureType": "medicallabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "entertainmentlabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#004b43ff"
          }
        }, {
          "featureType": "entertainmentlabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "estatelabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#004b43ff"
          }
        }, {
          "featureType": "estatelabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "businesstowerlabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#004b43ff"
          }
        }, {
          "featureType": "businesstowerlabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "companylabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "governmentlabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#004b43ff"
          }
        }, {
          "featureType": "governmentlabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffff08"
          }
        }, {
          "featureType": "restaurantlabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "hotellabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "hotellabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "shoppinglabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "lifeservicelabel",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#004b43ff"
          }
        }, {
          "featureType": "lifeservicelabel",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#ffffff00"
          }
        }, {
          "featureType": "carservicelabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "financelabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "carservicelabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "lifeservicelabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "restaurantlabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "governmentlabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "companylabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "businesstowerlabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "entertainmentlabel",
          "elementType": "labels.icon",
          "stylers": {
            "visibility": "off"
          }
        }, {
          "featureType": "entertainmentlabel",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        }];
        var ctrlNav = new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_LEFT,
          type: BMAP_NAVIGATION_CONTROL_LARGE
        });
        this.map.addControl(ctrlNav);
        this.map.centerAndZoom(new BMap.Point(121.539624, 29.926772), 16)
        // 设置地图显示的城市 此项是必须设置的
        // this.map.setCurrentCity(this.baiduCityName)
        //开启鼠标滚轮缩放
        this.map.enableScrollWheelZoom(true)
        this.map.setMapStyleV2({
          styleJson: styleJson
        });
      },
      // 添加覆盖物  自定义图标  百度地图
      addPoint(stationv) {
        let that = this;
        var point = new BMap.Point(stationv.lng, stationv.lat)
        // var myIcon = new BMap.Icon("../dpimg/firstdp/markers.png", new BMap.Size(23, 25), {
        //
        //   offset: new BMap.Size(10, 25),
        //
        //   imageOffset: new BMap.Size(0, 0 - 10 * 25)
        //
        // });
        //   let marker=new BMap.Marker(point,{icon: myIcon});
        // let marker=new BMap.Marker(point);
        var myIcon = new BMap.Icon(require("../../img/bdIcon.png"), new BMap.Size(23, 25), {
          // 指定定位位置。   
          // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
          // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
          // 图标中央下端的尖角位置。    
          anchor: new BMap.Size(10, 25),
          // 设置图片偏移。   
          // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
          // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
          // imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
        });
        // 创建标注对象并添加到地图   
        var marker = new BMap.Marker(point, {
          icon: myIcon
        });
        var humi = '';
        var temp = '';
        marker.addEventListener("mouseover", function(e) {
          var txt = '<span style="color:white;font-size: 17px ;">' + stationv.kgzName + '</span><br/> <span style="color:#ffff00;font-size: 17px ;" >水位:</span><span style="color:#00ff00;font-size: 17px ;">' + stationv.waterLevel + '</span><br/><span style="color:#ffff00;font-size: 17px ;" >门状态:</span><span style="color:#00ff00;font-size: 17px ;">' + stationv.doorStatus + '</span>'
          var txttemp = '';
          if (typeof(stationv.temp) != 'undefined') {
            humi = stationv.humi.substr(stationv.humi.indexOf('&') + 1);
            temp = stationv.temp.substr(stationv.temp.indexOf('&') + 1);
            txttemp = '<br/><span style="color:#ffff00;font-size: 17px ;" >湿度:</span><span style="color:#00ff00;font-size: 17px ;">' + humi + '</span><br/><span style="color:#ffff00;font-size: 17px ;" >温度:</span><span style="color:#00ff00;font-size: 17px ;">' + temp + '</span>'
          }
          var label = new BMap.Label(txt + txttemp, {
            offset: new BMap.Size(-20, -120)
          });
          label.setStyle({
            opacity: "0.9",
            backgroundColor: "black",
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
        marker.addEventListener("mouseout", function(e) {
          var label = this.getLabel()
          //     label.setStyle({whiteSpace:"nowrap",
          // height:"20px"});
          label.setContent(""); //设置标签内容为空
          label.setStyle({
            opacity: "0"
          }); //设置标签边框宽度为0
        });
        marker.addEventListener("click", function(e) {
          that.$router.push({
            name: 'detaildp',
            params: {
              stationName: stationv.kgzName,
              stationNum: stationv.stationNum,
              stationID: stationv.id,
              waterLevel: stationv.waterLevel,
              doorStatus: stationv.doorStatus,
              humi: humi,
              temp: temp
            }
          })
          sessionStorage.setItem('waterLevel', stationv.waterLevel);
          sessionStorage.setItem('doorStatus', stationv.doorStatus);
          sessionStorage.setItem('humi', humi);
          sessionStorage.setItem('temp', temp);
        });
        this.map.addOverlay(marker);
      },
      // 添加多个覆盖物
      addMaker(cityName) {
        // this.init()
        this.setcenterAndZoom(cityName);
        var data = '';
        // if(this.isload==0) {
        if (cityName == '象山县') {
          data = this.stationdataxs
        } else if (cityName == '奉化市') {
          data = this.stationdatafh
        } else if (cityName == '余姚市') {
          data = this.stationdatayy
        } else if (cityName == '慈溪市') {
          data = this.stationdatacx
        } else if (cityName == '宁海县') {
          data = this.stationdatanh
        } else if (cityName == '北仑区') {
          data = this.stationdatabl
        } else if (cityName == '鄞州区') {
          data = this.stationdataqz
        } else if (cityName == '海曙区') {
          data = this.stationdatahs
        } else if (cityName == '江东区') {
          data = this.stationdatajd
        } else if (cityName == '江北区') {
          data = this.stationdatajb
        } else if (cityName == '镇海区') {
          data = this.stationdatazh
        }
        this.map.clearOverlays();
        for (var i = 0; i < data.length; i++) {
          var stationv = data[i];
          // 创建标注
          this.addPoint(stationv)
          this.isload = 1;
          // this.addMaker()
        }
        // }
      }
    }
  }
</script>
<style scoped>
  .main {
    width: 100%;
    height: 100%;
  }
</style>