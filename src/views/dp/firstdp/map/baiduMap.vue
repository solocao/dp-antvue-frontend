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
           var ctrlNav = new BMap.NavigationControl({
             anchor: BMAP_ANCHOR_TOP_LEFT,                        type: BMAP_NAVIGATION_CONTROL_LARGE                    });
           this.map.addControl(ctrlNav);
            this.map.centerAndZoom(new BMap.Point(121.539624, 29.926772),12)
            // 设置地图显示的城市 此项是必须设置的
            // this.map.setCurrentCity(this.baiduCityName)
            //开启鼠标滚轮缩放
            this.map.enableScrollWheelZoom(true)




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

            marker.addEventListener("mouseover",function(e){

              var txt='<span style="color:white;font-size: 17px ;">'+stationv.kgzName+'</span><br/> <span style="color:#ffff00;font-size: 17px ;" >水位:</span><span style="color:#00ff00;font-size: 17px ;">'+stationv.waterLevel+'</span><br/><span style="color:#ffff00;font-size: 17px ;" >门状态:</span><span style="color:#00ff00;font-size: 17px ;">'+stationv.doorStatus+'</span>'
              var txttemp='';

              if(typeof(stationv.temp)!='undefined'){
                var humi=stationv.humi.substr(stationv.humi.indexOf('&')+1);
                var temp=stationv.temp.substr(stationv.temp.indexOf('&')+1);
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
            that.$router.push({ name: 'detaildp', params: {stationName:stationv.kgzName,stationNum:stationv.stationNum,stationID:stationv.id} })
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