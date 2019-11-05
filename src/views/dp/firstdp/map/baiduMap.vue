<template>

        <div id="map" ></div>

</template>
<script>
import BMap from 'BMap'
export default {
    name:'baiduMap',
    props:['baiduCityName','initData'],
    data(){
        return{
            map:null
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
        console.log(that.baiduCityName, 'baiducityName')
        console.log(that.initData, 'initData')
        // this.$nextTick(()=>{
            this.map = new BMap.Map('map',{enableMapClick:false})
            this.init()
            // this.searchInput()
        // })
    },
    methods:{
         init(){
            // 创建map实例
            //构造底图时，关闭底图可点功能
            // 初始化地图
           var ctrlNav = new BMap.NavigationControl({
             anchor: BMAP_ANCHOR_TOP_LEFT,                        type: BMAP_NAVIGATION_CONTROL_LARGE                    });
           this.map.addControl(ctrlNav);
            this.map.centerAndZoom(new BMap.Point(121.889215117188,29.2913259101563),11)
            // 设置地图显示的城市 此项是必须设置的
            this.map.setCurrentCity(this.baiduCityName)
            //开启鼠标滚轮缩放
            this.map.enableScrollWheelZoom(true)

            // 创建标注
            var point = new BMap.Point(121.889215117188,29.2913259101563)
            this.addPoint(point,this.baiduCityName)
            this.addMaker()

        },
        // 添加覆盖物
        addPoint(point,value){
           let that=this;
            let marker=new BMap.Marker(point);
            this.map.addOverlay(marker);
            // let label = new BMap.Label(value,{offset:new BMap.Size(-20,-25)});
            // label.setStyle({
            //     color : "red",
            //     fontSize : "12px",
            //     height : "20px",
            //     lineHeight : "20px",
            //     fontFamily:"微软雅黑",
            //     width:"50px",
            //     overflow:"hidden",
            //     whiteSpace:"nowrap",
            //     textOverflow:"ellipsis"
            // });
            // marker.setLabel(label);
            marker.addEventListener("mouseover",function(e){
              var label = new BMap.Label(value,{offset:new BMap.Size(-20,-25)});
              label.setStyle({
                  color : "red",
                  fontSize : "12px",
                  height : "20px",
                  lineHeight : "20px",
                  fontFamily:"微软雅黑",
                  width:"50px",
                  overflow:"hidden",
                  whiteSpace:"nowrap",
                  textOverflow:"ellipsis"
              });
                    // label.setStyle({display:"block"});
                    label.setStyle({whiteSpace:"normal",
            height:"auto"});
              marker.setLabel(label)
            });
            marker.addEventListener("mouseout",function(e){
                var label = this.getLabel()
            //     label.setStyle({whiteSpace:"nowrap",
            // height:"20px"});
              label.setContent("");//设置标签内容为空
              label.setStyle({borderWidth:"0px"});//设置标签边框宽度为0
            });
        },
        // 添加多个覆盖物
        addMaker(){
            let that = this
            for(let i = 0; i<that.initData.length; i++){
                let points = new BMap.Point(that.initData[i].value[0], that.initData[i].value[1])
                that.addPoint(points,that.initData[i].name)
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