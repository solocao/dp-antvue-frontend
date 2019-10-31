<template>
<div>
    <div id="linepower1" style="height:400px;width:500px;top:-75px;left:-40px;"></div>
</div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
  import echarts from "echarts";
  import '@/views/dp/css/seconddp.css'

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

      // setData(data,cityname){
      //   var totalAll=0,opennumAll=0,closenumAll=0;
      //   var total=0,opennum=0,closenum=0;
      //   var totalCommit=0,opennumCommit=0,closenumCommit=0;
      //
      //    for(var i=0;i<data.length;i++){
      //      totalAll=totalAll+data[i].total;
      //      opennumAll=opennumAll+data[i].opennum;
      //      closenumAll=closenumAll+data[i].closenum;
      //      if(data[i].groupname==cityname){
      //        total=data[i].total;
      //        opennum=data[i].opennum;
      //        closenum=data[i].closenum;
      //      }
      //    }
      //    if(total==0){
      //      totalCommit=totalAll;
      //      opennumCommit=opennumAll;
      //      closenumCommit=closenumAll;
      //    }else{
      //      totalCommit=total;
      //      opennumCommit=opennum;
      //      closenumCommit=closenum;
      //    }
      //    this.getPie(totalCommit,opennumCommit,closenumCommit)
      // },
     getPie(){

       let linepower = document.getElementById('linepower1');
       let lineChart = echarts.init(linepower);
       // let total=totalCommit;
       let opennum=100;
       let closenum=50;
       let fontColor = '#30eee9';
       let option ={
         // title:{
         //   text:'分所销售水量占比',
         //   top:'5%',
         //   left:'center',
         //   textStyle:{
         //     color:'#FFF',
         //     align:'center',
         //   }
         // },
         // backgroundColor:'#11183c',
         grid: {
           // left: '9%',
           // right: '10%',
           top:'20%',
           bottom: '15%',
           containLabel: true
         },
         tooltip : {
           show: true,
           trigger: 'item'
         },
         legend: {
           show:true,
           x:'center',
           top:'12%',
           y:'35',
           icon: 'stack',
           itemWidth:10,
           itemHeight:10,
           textStyle:{
             color:'#1bb4f6'
           },
           data:['今日用电量','昨日用电量']
         },
         xAxis : [
           {
             type : 'category',
             boundaryGap : false,
             axisLabel:{
               color: fontColor
             },
             axisLine:{
               show:true,
               lineStyle:{
                 color:'#397cbc'
               }
             },
             axisTick:{
               show:false,
             },
             splitLine:{
               show:false,
               lineStyle:{
                 color:'#195384'
               }
             },
             data : ['1','2','3','4','5','6','7','8','9','10','11','12']
           }
         ],
         yAxis : [
           {
             type : 'value',
             // name : '立方米',
             min:0,
             max:1000,
             axisLabel : {
               formatter: '{value}',
               textStyle:{
                 color:'#2ad1d2'
               }
             },
             axisLine:{
               lineStyle:{
                 color:'#27b4c2'
               }
             },
             axisTick:{
               show:false,
             },
             splitLine:{
               show:true,
               lineStyle:{
                 color:'#11366e'
               }
             }
           }
         ],
         series : [
           {
             name:'今日用电量',
             type:'line',
             stack: '总量',
             symbol:'circle',
             symbolSize: 8,
             itemStyle: {
               normal: {
                 color:'#0092f6',
                 lineStyle: {
                   color: "#0092f6",
                   width:1
                 },
                 areaStyle: {
                   // color: '#94C9EC',
                   color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                     offset: 0,
                     color: 'rgba(7,44,90,0.3)'
                   }, {
                     offset: 1,
                     color: 'rgba(0,146,246,0.9)'
                   }])
                 }
               }
             },
             markPoint:{
               itemStyle:{
                 normal:{
                   color:'red'
                 }
               }
             },
             data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280]
           }
           ,
           {
             name:'昨日用电量',
             type:'line',
             stack: '总量',
             symbol:'circle',
             symbolSize: 8,
             itemStyle: {
               normal: {
                 color:'#00d4c7',
                 lineStyle: {
                   color: "#00d4c7",
                   width:1
                 },
                 areaStyle: {
                   // color: '#94C9EC',
                   color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                     offset: 0,
                     color: 'rgba(7,44,90,0.3)'
                   }, {
                     offset: 1,
                     color: 'rgba(0,212,199,0.9)'
                   }])
                 }
               }
             },
             data:[220, 182, 191, 210, 230, 270, 270,201, 154, 140, 240, 250]
           }

         ]
       };

       lineChart.clear();
       lineChart.resize();
       lineChart.setOption(option);
     }

    },
    filters: {},
    computed: {

    },
    created () {
      // this.$nextTick(function(){
        let self = this;



        // window.addEventListener("resize",function(){
        //   myChart.resize();
        // });
      // });
    },
    mounted () {

      this.getPie();

    },
    destroyed () {}
  }
</script>

<style >

</style>
