<template>
    <div class="main">
        <div id="map" style="height:800px;width:600px"></div>
    </div>
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
        this.$nextTick(()=>{
            this.map = new BMap.Map('map',{enableMapClick:false}) 
            this.init()
            // this.searchInput()
        })
    },
    mounted(){
        var that = this
        console.log(that.baiduCityName, 'baiducityName')
        console.log(that.initData, 'initData')
        this.$nextTick(()=>{
            this.map = new BMap.Map('map',{enableMapClick:false}) 
            this.init()
            // this.searchInput()
        })
    },
    methods:{
         init(){
            // 创建map实例
            //构造底图时，关闭底图可点功能
            // 初始化地图

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
            let marker=new BMap.Marker(point);  
            this.map.addOverlay(marker); 
            let label = new BMap.Label(value,{offset:new BMap.Size(-20,-25)});
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
            marker.setLabel(label);
            marker.addEventListener("mouseover",function(e){ 
                    var label = this.getLabel() 
                    console.log(label)
                    // label.setStyle({display:"block"});
                    label.setStyle({whiteSpace:"normal",
            height:"auto"});
            });
            marker.addEventListener("mouseout",function(e){ 
                var label = this.getLabel() 
                label.setStyle({whiteSpace:"nowrap",
            height:"20px"});
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