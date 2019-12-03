<template>
  <div>
    <div id="Dashboardpie1" style="height:200px;width:180px;left:.1rem;top:.2rem;;position:absolute"></div>
    <div id="Dashboardpie2" style="height:200px;width:180px;left:2.3rem;top:.2rem;position:absolute"></div>
    <div id="Dashboardpie3" style="height:200px;width:180px;left:.1rem;top:2.2rem;;position:absolute"></div>
    <div id="Dashboardpie4" style="height:200px;width:180px;left:2.3rem;top:2.2rem;position:absolute"></div>
  </div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件
  import echarts from "echarts";
  import  {axiosKj}  from '@/utils/requestKj'
  import '@/views/dp/css/seconddp.css'
  import dfaultSettings from '@/config/defaultSettings'
  import  axios  from 'axios'
  export default {

    data () {
      return {
        dotArray:[],
        color_percent0:[],
        color_percent100:[]
      }
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
      getMessage() {
          let parmas = {
            "start":"2019-06-01",
            "end":"2019-07-07"
          }

        axios.get('/aaa/sas/api/asset/room-alarm', {
          params: parmas
        }).then(({ data }) => {
          console.log("data---",data)
        })
      },
      setData(data,cityname){
        var totalAll=0,opennumAll=0,closenumAll=0;
        var total=0,opennum=0,closenum=0;
        var totalCommit=0,opennumCommit=0,closenumCommit=0;

         for(var i=0;i<data.length;i++){
           totalAll=totalAll+data[i].total;
           opennumAll=opennumAll+data[i].opennum;
           closenumAll=closenumAll+data[i].closenum;
           if(data[i].groupname==cityname){
             total=data[i].total;
             opennum=data[i].opennum;
             closenum=data[i].closenum;
           }
         }
         if(total==0){
           totalCommit=totalAll;
           opennumCommit=opennumAll;
           closenumCommit=closenumAll;
         }else{
           totalCommit=total;
           opennumCommit=opennum;
           closenumCommit=closenum;
         }
         this.getPie(totalCommit,opennumCommit,closenumCommit)
      },
      setpieData(){
        var data1=[{name:'Dashboardpie1',
                    color_percent0:'#8ECEFF',
                    color_percent100:'#0052FF',
                    titlename:'电压异常',
                    value:'40'},{name:'Dashboardpie2',
          color_percent0:'#6ABD87',
          color_percent100:'#00FFFF',
          titlename:'电流异常',
          value:'32'},{name:'Dashboardpie3',
          color_percent0:'#C2AC3E',
          color_percent100:'#FBEEAE',
          titlename:'功率异常',
          value:'24'},{name:'Dashboardpie4',
          color_percent0:'#D95373',
          color_percent100:'#FDB8C9',
          titlename:'温度异常',
          value:'28'}]

        this.getPie(data1[0]);
        this.getPie(data1[1]);
        this.getPie(data1[2]);
        this.getPie(data1[3]);
      },
     getPie(data){
       let Dashboardpie1 = document.getElementById(data.name);
       let pieChart1 = this.$echarts.init(Dashboardpie1);
       var titlename=data.titlename;
       var percent =data.value; //百分数
       var color_percent0 = data.color_percent0,
         color_percent100 = data.color_percent100,
         dotArray = [];
       if (percent <= 20) {
         this.dotArray.push(80)
         // color_percent0 = 'rgba(12,255,0,1)'
         // color_percent100 = 'rgba(12,255,0,.3)'
       }else if (percent > 20&&percent<=40) {
         this.dotArray.push(...[80,80])
         // color_percent0 = '#8ECEFF'
         // color_percent100 = '#0052FF'
       }else if (percent > 40&&percent<=60) {
         this.dotArray.push(...[80,80,80])
         // color_percent0 = 'rgba(255,123,0,1)'
         // color_percent100 = 'rgba(255,123,0,.3)'
       }else if (percent > 60&&percent<=80) {
         this.dotArray.push(...[80,80,80,80])
         // color_percent0 = 'rgba(255,0,36,1)'
         // color_percent100 = 'rgba(255,0,36,.3)'
       }else if (percent > 80&&percent<=100) {
         this.dotArray.push(...[80,80,80,80,80])
         // color_percent0 = 'rgba(255,0,36,1)'
         // color_percent100 = 'rgba(255,0,36,.3)'
       }
       var option = {

         // title: {
         //   "x": '50%',
         //   "y": '45%',
         //   textAlign: "center",
         //   top: '68%',//字体的位置
         //   'text': '哈哈',
         //   "textStyle": {
         //
         //     "fontWeight": 'normal',
         //     "color": '#FFF',
         //     "fontSize": 60
         //   },
         //   "subtextStyle": {//副标题的文字的样式
         //     "fontWeight": 'bold',
         //     "fontSize": 18,
         //     "color": '#3ea1ff'
         //   },
         //
         // },
         graphic: {
           elements: [
             {
               type: 'image',
               style: {
                 image: './image/bottomPlatform.png',
                 width: 70,
                 height: 20
               },
               left: 'center',
               top: '130px'
             },
             {
               type: 'image',
               style: {
                 image: './image/bg-title.png',
                 width: 140,
                 height: 40
               },
               left: 'center',
               top: '160px'
             },
             {
               type: 'text',
               z: 100,
               left: 'center',
               top: '170px',
               style: {
                 fill: '#00CCFF',
                 text: [
                   titlename
                 ],
                 font: 'normal 16px Microsoft YaHei'
               }
             }
           ]
         },
         xAxis: {
           show: false,//是否展示x轴
           min: function(value) {//调整x轴上面数据的位置
             return value.min - 7;
           },
           max: function(value) {
             return value.max + 7;
           },
           splitLine: {
             lineStyle: {
               show: true,
               type: 'dashed'
             }
           },
           "axisLabel": {
             "interval": 0,
             rotate: 40,
             textStyle: {
               fontSize: 12,
               color: '#000'
             },
           },
           data: ['1', '2', '3', '4', '5']
         },
         yAxis: {
           show: false,
           name: '万元',
           max: 200,
           splitLine: {
             lineStyle: {
               type: 'dashed'
             }
           }
         },
         series: [  {
           name: '外圈',
           type: 'pie',
           startAngle: 315,
           hoverAnimation: false,
           radius: ["74%", "75%"],
           label: {
             normal: {
               show: false,
               position: 'center'
             },
             emphasis: {
               show: true,
               textStyle: {
                 fontSize: '10',
                 fontWeight: 'bold'
               }
             }
           },
           labelLine: {
             normal: {
               show: false
             }
           },
           data: [{
             value: 25,
             itemStyle: {
               normal: {
                 color: "rgba(0,0,0,0)"
               }
             }
           },
             {
               value: 75,
               itemStyle: {
                 normal: {
                   color: "rgba(20,198,249,1)"
                 }
               }
             },
           ]
         },{
           "name": '',
           "type": 'pie',
           "radius": ['50%', '70%'],
           "avoidLabelOverlap": false,
           "startAngle": 225,
           "color": [{
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0.4,
             y2: 1,
             colorStops: [{
               offset: 0,
               color: color_percent0 // 0% 处的颜色
             }, {
               offset: 1,
               color: color_percent100 // 100% 处的颜色
             }],
             globalCoord: false // 缺省为 false
           }, 'none'],
           "hoverAnimation": false,//是否开启 hover 在扇区上的放大动画效果。
           "legendHoverLink": false,//是否启用图例 hover 时的联动高亮。
           "label": {
             "normal": {
               "show": false,
               "position": 'center'
             },
             "emphasis": {
               "show": true,
               "textStyle": {
                 "fontSize": '30',
                 "fontWeight": 'bold'
               }
             }
           },
           "labelLine": {
             "normal": {
               "show": false
             }
           },
           "data": [{
             "value": 75,
             "name": '1'
           }, {
             "value": 25,
             "name": '2'
           }]
         }, {
           "name": ' ',
           "type": 'pie',
           "radius": ['48%', '47%'],
           "avoidLabelOverlap": false,//是否启用防止标签重叠策略
           "startAngle": 225,

           "hoverAnimation": false,
           "legendHoverLink": false,
           "label": {
             "normal": {
               "show": false,
               "position": 'center'
             },
             "emphasis": {
               "show": true,
               "textStyle": {
                 "fontSize": '30',
                 "fontWeight": 'bold'
               }
             }
           },
           "labelLine": {
             "normal": {
               "show": false
             }
           },
           "data": [{
             "value": 75,
             "name": '1'
           }, {
             "value": 25,
             "name": '2'
           }]
         }, {
           "name": '',
           "type": 'pie',
           "radius": ['50%', '70%'],
           "avoidLabelOverlap": false,
           "startAngle": 315,
           "color": ['rgba(34,34,34,.9)', "#ff7a00", "transparent"],
           "hoverAnimation": false,
           "legendHoverLink": false,
           "clockwise": false,//饼图的扇区是否是顺时针排布。
           "itemStyle": {
             "normal": {
               "borderColor": "transparent",
               "borderWidth": "20"
             },
             "emphasis": {
               "borderColor": "transparent",
               "borderWidth": "20"
             }
           },
           "z": 10,
           "label": {
             "normal": {
               "show": false,
               "position": 'center'
             },

           },
           "labelLine": {
             "normal": {
               "show": false
             }
           },
           "data": [{
             "value": (100 - percent) * 270 / 360,

             "label": {
               normal: {
                 formatter: percent,
                 position: 'center',
                 show: true,
                 textStyle: {
                   fontSize: '20',
                   fontWeight: 'normal',
                   color: '#fff'
                 }
               }
             },
             "name": ''
           }, {
             "value": 1,
             "name": ''
           }, {
             "value": 100 - (100 - percent) * 270 / 360,
             "name": ''
           }]
         },
         ]
       };

       pieChart1.clear();

       pieChart1.resize();

       pieChart1.setOption(option);

     },
      calculateDot(data) {
        if (data <= 20) {
          this.dotArray.push(80)
          color_percent0 = 'rgba(12,255,0,1)'
          color_percent100 = 'rgba(12,255,0,.3)'
        }else if (data > 20&&data<=40) {
          this.dotArray.push(...[80,80])
          color_percent0 = 'rgba(12,255,0,1)'
          color_percent100 = 'rgba(12,255,0,.3)'
        }else if (data > 40&&data<=60) {
          this.dotArray.push(...[80,80,80])
          color_percent0 = 'rgba(255,123,0,1)'
          color_percent100 = 'rgba(255,123,0,.3)'
        }else if (data > 60&&data<=80) {
          this.dotArray.push(...[80,80,80,80])
          color_percent0 = 'rgba(255,0,36,1)'
          color_percent100 = 'rgba(255,0,36,.3)'
        }else if (data > 80&&data<=100) {
          this.dotArray.push(...[80,80,80,80,80])
          color_percent0 = 'rgba(255,0,36,1)'
          color_percent100 = 'rgba(255,0,36,.3)'
        }

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
         console.log("---------------------mounted请求",dfaultSettings.baseURL.dev)
      // this.setpieData();
      this.getMessage()

    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>

</style>
