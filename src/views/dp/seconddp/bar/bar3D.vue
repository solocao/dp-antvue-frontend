<template>
  <div>
    <div id="bar3d" style="height:300px;width:400px"></div>
  </div>
</template>


  <script type="es6">　　 // 在之前已经单独引入了echarts文件　　 // 在此只需引入需要的地区的json文件

  import '@/views/dp/css/seconddp.css'
  import $ from 'jquery'
  import  {axiosKj}  from '@/utils/requestKj'
  // import np from './chinamaincity/'
  export default {

    data () {
      return {

      }
    },
    props: {
      width: {
        type: String,
        default: '400px'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    watch: {},
    methods: {
      setData(data){
        var valdata=[data[0].HWBJ,data[0].SDBJ,data[0].WDBJ,data[0].SWBJ,data[0].MCBJ,data[0].DYGJ];
        this.getBar(valdata);

        // data[0].DYGJ;//电源告警
        // data[0].DYZC;//电源正常
        // data[0].HWBJ;//红外报警
        // data[0].MCBJ;//门磁报警
        // data[0].SDBJ;//湿度报警
        // data[0].SWBJ;//水位报警
        // data[0].WDBJ;//温度报警
      },

     getBar(data) {
       let bar = document.getElementById('bar3d');
       let barChart = this.$echarts.init(bar);
       // var data = [78, 60, 60, 70, 69,86]
       var option = {
         graphic: {
           elements: [
             {
               type: 'image',
               style: {
                 image: './image/room-bottom.png',
                 width: 400,
                 height: 20
               },
               left: 'center',
               top: '240px'
             }
             ]
         },
         xAxis: {
           data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
           offset: 12,
           show:false,
           axisLine: {
             show: false
           },
           axisTick: {
             show: false
           },
           axisLabel: {
             show: false
           },
           splitArea:{
             show:false
           }
         },
         yAxis: {
           show:false,
           axisLine: {
             show: false
           },
           axisTick: {
             show: false
           },
           axisLabel: {
             show: false
           }, splitArea:{
             show:false
           }
         },
         series: [{
           type: 'bar',
           barWidth: 17,
           emphasis: {
             itemStyle: {
               color: '#52adff'
             }
           },
           itemStyle: {
             normal: {
               color: '#52adff',
               barBorderRadius: [0, 0, 0, 0],
             }
           },
           data: [220, 182, 191, 234, 290, 330, 310]
         },
           {
           name: 'a',
           tooltip: {
             show: false
           },
           type: 'bar',
           barWidth: 17,
           label: {
               normal: {
                 color:'#00d4c7',
                 show: true,
                 position:[-7, -25]
               }
             },
           emphasis: {
             itemStyle: {
               color: '#2e9bff'
             }
           },
           itemStyle: {
             normal: {
               color: '#2e9bff',
               barBorderRadius: [0, 0, 0, 0]
             }
           },
           data: [220, 182, 191, 234, 290, 330, 310],
           barGap: 0,
           legendHoverLink: false,
         }, {
           name: 'b',
           tooltip: {
             show: false
           },
           type: 'pictorialBar',

           itemStyle: {
             normal: {
               color: '#73bbff',
               // borderWidth:1,
               // borderColor:'#3c93fc'
             }
           },
           symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
           symbolRotate: 0,
           symbolSize: ['34', '24'],
           symbolOffset: ['0', '14'],
           symbolPosition: 'start',
           data: [220, 182, 191, 234, 290, 330, 310],
           z: 3
         },
           {
             name: 'b',
             tooltip: {
               show: false
             },
             type: 'pictorialBar',
             itemStyle: {
               normal: {
                 color: '#73bbff',
                 // borderWidth:1,
                 // borderColor:'#3c93fc'
               }
             },

             symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABIElEQVQ4jaWVMWoCQRSGv0iKFIm3MLVFYshFbGxMEwTTeQxrBTuFVMkRPMBWhhQpAh5CEBEJhMgjb2T0ze7Mrh8sLPNm5h++nZm9GMz/SKQOjLVrD9ikDLs0LWGawBvQ0GoLaAOfwd4eNdNieQYyb3L0PdNaIUUBN8ArMAGuTPW/baJ9rk1VyQsQJQugYyoW6fOhYwyhgJCSGLnK/ICYkhhBZS6gjJIYHZ2r6QKqKIlx65RJwAr4iQyowq/MKwHvwF3KoSnBl845dd9gCTx6V8E5TIEH4JuTXbQD+noFrCsEyN30pM/WNYbOQRVlouReV39EKABP2chULEdKUgNQZS8FykRJ91RJmQBHSJlTMosNTv0fOGVDvQZkM+Su+gCwB/qVO5cbNt4bAAAAAElFTkSuQmCC',
             symbolRotate: 0,
             symbolSize: ['34', '24'],
             symbolOffset: ['0', '-12'],
             symbolPosition: 'end',
             data: [220, 182, 191, 234, 290, 330, 310],
             z: 3
           }
         ]
       };
       barChart.clear();
       barChart.resize();
       barChart.setOption(option);
     }
    },
    filters: {},
    computed: {

    },
    created () {
      this.$nextTick(function(){
        let self = this;

        this.getBar(10);
        // window.addEventListener("resize",function(){
        //   myChart.resize();
        // });
      });
    },
    mounted () {



    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>

</style>
