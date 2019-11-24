<template>
  <div class="body">
  <!--<div class="loading">-->
    <!--<div class="loadbox"> <img src="../dpimg/firstdp/picture/loading.gif" /> 页面加载中... </div>-->
  <!--</div>-->

  <div class="head">
    <div class="weather_l ">
      <span> <button @click="rebackclick" class="form_select_L1">返回主页</button></span>
      <span></span>
      <sapn>
      <Select class="form_select_L1" @change="cityclick" id="city">
      <Option value ="宁波">宁波</Option>
      <Option value ="慈溪">慈溪</Option>
      </Select></sapn>
      <span >{{date1 | formatDateTime}}</span>
    </div>
    <h1 style="color:#00BB00">视频监控系统</h1>
    <div class="weather ">

      <span > <Select id="site" class="form_select_R1" @change="testclick" v-model="selected.site" >
     <Option value="0" >全部站点</Option>
      <Option value ="0574020B020238">骆城芳洲2</Option>
      <Option value ="13373685112">奥林公馆开关站</Option>
      <!--<Option value ="马新二号">奥林公馆开关站</Option>-->
      </Select></span></div>
  </div>
  <div class="mainbox">
    <ul class="clearfix">
      <li>
        <div class="boxall" style="height: 4.2rem">
          <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
          <span class="span_R1" style="color:#00BB00">综合统计分析</span>
          <img src="../dpimg/firstdp/bg-form-R1.png"></img>

          <div class="video_sycm">
            <ul>
              <li>
                <h2 class="video_span_L1">实时通道数</h2>
                <span class >257</span>
              </li>
              <li>
                <h2 class="video_span_L1">实时设备接入</h2>
                <span class>325</span>
              </li>
            </ul>
          </div>
          <pielayer></pielayer>

          <!--<div class="boxfoot"></div>-->
        </div>
        <div class="boxall" style="height: 4rem">
          <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
          <span class="span_R1" style="color:#00BB00">故障类型分析</span>
          <img src="../dpimg/firstdp/bg-form-R1.png"></img>
          <!--<div class="adduser">-->
            <!--<ul class="clearfix">-->

            <!--</ul>-->
          <!--</div>-->
          <pie3decharts></pie3decharts>
          <!--<div class="boxfoot"></div>-->
        </div>

      </li>
      <li >

        <div class="map">
          <!--<div class="map1"><img src="../dpimg/firstdp/picture/lbx.png"></div>-->
          <!--<div class="map4" id="map_1"></div>-->
          <mapecharts :cityName="cityName" :parameter="parameter"></mapecharts>
        </div>
      </li>
      <li>

        <div class="boxall1" style="height: 4.2rem;">
          <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
          <span class="span_R1" style="color:#00BB00">告警周数据监测</span>
          <img src="../dpimg/firstdp/bg-form-R1.png"></img>
          <!--<div class="alltitle">异常信息检测</div>-->
          <!--<div class="clearfix">-->
            <barecharts ref="barecharts"></barecharts>


          <div class="boxfoot"></div>
        </div>

        <div class="boxall1" style="height: 4rem;">
          <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
          <span class="span_R1" style="color:#00BB00">实时告警监测</span>
          <img src="../dpimg/firstdp/bg-form-R1.png" style="left:10px;"></img>

          <div class="video-form-R2">
            <ul>
              <li>
                <span style="">变电站</span>
              </li>
              <li>
                <span style="">告警类型</span>
              </li>
              <li>
                <span style="">发生时间</span>
              </li>
            </ul>
          </div>
          <!--<barecharts ref="barecharts"></barecharts>-->

          <div class="addNewdvideo" id="con" >
            <ul class="clearfix1">
            </ul>
          </div>
          <!--<div class="boxfoot1"></div>-->
        </div>

      </li>
    </ul>
  </div>
  </div>
</template>

<script type="es6">
  import  {axiosKj}  from '@/utils/requestKj'
  import axios from 'axios'
  import '@/views/dp/css/videoSurveillancedp.css'
  import $ from 'jquery'
  import map from './map/map.vue'
  import pie from './pie/piedou.vue'
  // import scatter from './scatter/scatterL3.vue'
  import pie3d from './pie/pie3d.vue'
  import bar from './bar/bar.vue'
  import pielayer from './pie/Pielayer'
  import qs from 'qs'
  // import echarts from 'echarts'
  // import $echarts from '../../node_modules/echarts/dist/echarts'
    export default {
        data() {
            return {
              selected:{site:0},
              timer1:'',
              timer11:'',
              timer2:'',
              dblick:0,
              date1: new Date(),
              myChart6: {},
              myChart7: {},
              myChart8: {},
              MaxId:0,
              cityName:'宁波',
              parameter:{
                start: 0,
                limit: 100000,
                stationNum:'',
                alarmTime_from:new Date()
              },
              maxDate:0,
              videosurl1:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACuUlEQVRIS6XWW6jmYxQG8N/jUJRDKGIokyTMhHGYK0YOjeRCjdQ4TERRSglpuJDSoGEccpiUnGqSpDApJsdIISUupgYpRC40cr5gaX3727P3/ubbu294Lv/vetez3rWetdY/5kPVbjgH5+M0LMbe+BVf4gNslrw3rw9k7GHVWXgE++MpvI0v8Dv2wTE4F2uGZFdLPh3nay5B1R64F1fgDmyU/LHAK/fDDbged0vWj9rOEFTtjudxEC6VfLfQ0+ecVZ2A5/Cm5LrZZ7MJ7sMpWCn5c2Ln04ZVB+BdPCnZMP15iqDqdLyCpZJvJnJetQxH4UXJ30M/J+IdLJO0EERVk3SBnh2Xw3lEcBi+xp6DGiQP7LCrenAgguS8aYIVeAFHSn6bMPpOxzYciMskm2YRHD5U1hLJtn7BXdhL0mrYGVXHYoVk40hhD8EiySc7XarqdL8mebgJ3sBDkpfGGC4fGE71Q8tw7YQvbCUtl6xpgm6gCyWfj0S4CB/h0Fnfb5OsM6WYdvKE5PsxgXX+10pWNMG3OFPSRDOo6u7t+ozipkHeacV8hlMlf43cPQPrJcubYCsumZPLqu7MVsMk2CC5cYTggqG6zm6Czdi0QwlVHXXXpTt7EvwzGIrJW7OU1K88WnJNE9yK4yT97G66HmZd1F3B9jkSr+pJ+5jkmSZYMizmYskPu+J1rG3VUnyMIyQ/To+K17FV0rn/f6jqpv1ZclU7miboZfIhVkl6YP03VF2Me3CSZPsMwVTuewfcOWyQyUf1dChTHf8+Vku6OQcYXTi3D5fNlZLug8lQtRqP4hbJ47Mv7bwyqy7H/XgV6yTdJ+NRdTI6qONxrWTLqOF8O/lg9Ai+aKiIl4fTs3fyvuh0rBponadxs+SXcVGMJ5jJa0/MlWP+Kr4a/lVskfy0UB4XJpisAgta/QsBUuMZHI9/7wAAAABJRU5ErkJggg==',
              videosurl2:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAChElEQVRIS5WWW4iNURTHf/+8iBIeJZpSXkQe5DKFhgelXMqdaWZiTIoijTxhEvHgkuSWUi4PeCCKNBgkCg/kRS4PQpNb7h6IpfVdzs3+zvnOqtPpnLW/9dt77f9a6xPVzGwwMA9oBBqAfsA34AVwHbiI5L8zTUGP2VBgCzAHuAD0AM+BH8AAYCQwA5gKnAC6kL6EYv0PMGsDNgK7gFNIHjRsZoMAX78S2IDkmymzcoDZJmB+tDvpTdX0lTrNxgDngW1IR0tdRYBZC9AJTEH6mDt4utBsOHALWIx0J/07BpgNSfI8Del13cGLkFHAaWA80nf/OwUcAh4i+Xe5xUr6jPQ3F9jsANCLtDUGmA1MFNIQlJzZbKADaM6VOrMRwE1gGNIfB7QCnprmDMk6wC+wF1iCdKPmScxc1tuRuh1wBLhXefuFIPEJHOD2O5Hj3qoQs82RX+pyQHcir/DOygFp3LNAK9LPjFMvS7LS5oDbwDqk+zVSVOl+DDQhfQgIYy6wCGmhAy5HVStdrQPgQVuQLmU84/faiNTugH3AU6T9OQGentVI7zLvwWwH8AlppwO8obUjzawBeJWsu5JDRY+A5UgPHNAXeAmMRnobyOcswOGdSF9zBB8HnETyjluoZK+6X2n1lQUx6+MFUzNwusDsDHAN6XApoH9UC7AC6W7uYJULY0mvBaanmyrtpk3A8cT5pG6I2QTgHDAZ6Vn6fOU8WADsiSZZVl2EyLFQDgJLkXyUFiw00cYCx6LuGteHF1TYzCYC6wHvuB2lOw+foHhRrqxVwBrgfTIrfNB7jy+dyQbsjjaU0c7DQ78Icv+k5ONvFS4Gf4vwF4AeJNd7VasOqPV0Dv8/XtXlGVv78JwAAAAASUVORK5CYII='
            }
        },
      components:{
        "mapecharts":map,
        "pieecharts":pie,
        "pielayer":pielayer,
        // "scatterecharts":scatter,
        "pie3decharts":pie3d,
        'barecharts':bar
      },
  //用于数据初始化
  created:function(){
    // $(window).load(function(){
    //   $(".loading").fadeOut()
    // })

    // $(window).resize(function(){
    //   var whei=$(window).width()
    //   $("html").css({fontSize:whei/20})
    // });
    /****/
    // $(document).ready(function(){
    //   var whei=$(window).width()
    //   $("html").css({fontSize:whei/20})
    //   $(window).resize(function(){
    //     var whei=$(window).width()
    //     $("html").css({fontSize:whei/20})
    //   });
    // });
  },
      mounted(){
        window.onresize=function(){

          var whei=$(window).width();
          $("html").css({fontSize:whei/20})
        }
        // $(".loading").fadeOut()
        // $(document).ready(function(){
        var that=this;
        var whei=$(window).width();
        $("html").css({fontSize:whei/20})
        //
        //
        //   var html=$(".addNewd ul").html()
        //   $(".addNewd ul").append(html)
        //   var ls=$(".addNewd li").length/2+1
        //   var i=0
        //   var ref = setInterval(function(){
        //     i++
        //     if(i==ls){
        //       i=1
        //       $(".addNewd ul").css({marginTop:0})
        //       $(".addNewd ul").animate({marginTop:-'.52'*i+'rem'},1000)
        //     }
        //     $(".addNewd ul").animate({marginTop:-'.52'*i+'rem'},1000)
        //
        //
        //   },2400);



      var params={params:{ start: 0,
        limit: 100000}
        // ,
        // headers: {
        //   'Content-Type': 'application/json;charset=UTF-8'
        // }
      };
      var headers={
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
        };
        var data={
          data: {
            ROLENAME:'超级管理员'
          }
          };

        const parameter = { }
        // start: 0,
        //   limit: 100000,ROLENAME:'超级管理员'
        parameter.start=0;
        parameter.limit=100000;
        parameter.ROLENAME=encodeURI('超级管理员');
        parameter.stationNum=13373685112;
        // new Date('2019-10-14 16:39:12').getTime()
        // axios.defaults.headers = {
        //   "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        // }
        // axios.defaults.transformRequest = [function (data) {
        //   var newData = "";
        //   for (var k in data) {
        //     newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
        //   }
        //   return newData
        // }]
        // axios.get('/GW/alarm/getKgzAlarmList.action', {
        //   params: {
        //     // stationID: 4,
        //     ROLENAME: '超级管理员',
        //     // endDt: '2019-10-15',
        //     start: 0,
        //     limit: 100000,
        //     stationNum:
        //   }
        // })
        this.executeTime1();
        this.executeTime2();
        this.executeTime3();
        this.timer1=setInterval(function(){
          that.executeTime1();
          // axiosKj({
          //   url: '/GW/alarm/getKgzAlarmList.action',
          //   method: 'post',
          //   headers: {
          //     'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
          //   },
          //   // data: parameter,
          //   params: parameter
          // }).then(response=>{
          //
          //   var obj3='{"Table" '+response.substr(response.search('Table')+5,response.length-1);
          //   var datajson=JSON.parse(obj3).Table;
          //  //  CREATEDATE
          //   debugger;
          //  for(var l=0;l<datajson.length;l++){
          //    Roll(datajson[datajson.length-1-l]);
          //
          //    }
          // });

          // that.axiosKj({
          //   url: '/GW/alarm/getKgzAlarmList.action',
          //   method: 'post',
          //   headers: {
          //     'Content-Type': 'application/json;charset=UTF-8'
          //   },
          //   data: parameter
          // });
            // axios.get('/GW/alarm/getKgzAlarmList.action', {
            //   params: {
            //     // stationID: 4,
            //     ROLENAME: '超级管理员',
            //     // endDt: '2019-10-15',
            //     start: 0,
            //     limit: 100000
            //   }
            // }).then(response => {
//             axios.post('/GW/alarm/getKgzAlarmList.action?ROLENAME=超级管理员',headers,qs.stringify({params})).then(response=>
//             {
// alert(response.data.size);
//             });
// l++;
//           if(l<=9) {
//             var html = ' <li class="clearfix1"> <span class="pulll_left1" style="color:#00CCFF">' + datatest[9 - l].CREATEDATE + '</span> <span class="pulll_center1" style="color:#00CCFF">' + datatest[9 - l].STATIONNAME + ' </span><span class="pulll_right" style="color:#00CCFF">' + datatest[9 - l].ALARMTYPE + '</span><img src="' + surl1 + '" id="testimg"></li>';
//             var ul = $(".addNewd ul");
//             var liHeight = ul.find("li:last").height();
//             var lis = ul.find("li").length;
//             ul.animate({
//               marginTop: -liHeight + "px"
//             }, 1000, function () {
//               if (lis > 9) {
//                 ul.find("li:first").remove();
//               }
//               ul.css({marginTop: 0});
//               ul.find("li:last").fadeIn(liHeight);
//               ul.append(html);
//
//             });
//             // if (lis > 9) {
//             //   ul.find("li:last").remove();
//             // }
//           }
      },60000);

        var surl2='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2MjVEMEY4RUMyQjExRTk4MzZBRERCOUEwQzhENTlBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2MjVEMEY5RUMyQjExRTk4MzZBRERCOUEwQzhENTlBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDYyNUQwRjZFQzJCMTFFOTgzNkFEREI5QTBDOEQ1OUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDYyNUQwRjdFQzJCMTFFOTgzNkFEREI5QTBDOEQ1OUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5rr3QDAAAAZklEQVR42mJ8oRHIAASqQNwBxC4MELAHiCuA+DYLkFAH4hNALMCAAEFA7ATEFkxAog1NEgZAYm1MSMZiA25MDAQAE9RBuMAukIJqIP6ARRIkVg1ScAPkWiBeB8SfoXgdVOwGQIABADmOEaKmFMIAAAAAAElFTkSuQmCC';
        var k=1;
      //   setInterval(function(){
      //     k++;
      //   var html2='<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear01</span> <span class="pulll_center" style="color:#00CCFF">异常 </span><img src="'+surl2+'" ><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" >未按正常操作规范</button></span> </li>';
      //
      //   var ul1 = $(".adduser ul");
      //   var liHeight1 = ul1.find("li:last").height();
      //   var lis1 = ul1.find("li").length;
      //   ul1.animate({
      //     marginTop: -liHeight1  + "px"
      //   }, 1000, function () {
      //     if (lis1 >= 9) {
      //       ul1.find("li:first").remove();
      //     }
      //     ul1.css({marginTop: 0});
      //     ul1.find("li:last").fadeIn(liHeight1);
      //     ul1.append(html2);
      //     $(".form_button_L").on('click', function() {
      //          alert("异常信息");
      //       // that.$router.push({ name: 'detailL',path:"/dp/detailL" });
      //       // that.$router.push({ name: 'detaildp',path:"/dp/detaildp" })
      //     });
      //   });
      //   // if (lis1 > 9) {
      //   //   ul1.find("li:first").remove();
      //   // }
      //
      // },2100);


        // var html2=$(".adduser ul").html()
          // $(".adduser ul").append(html2)
          // var ls=$(".adduser li").length/2+1
          // var i=0
          // var ref = setInterval(function(){
          //   i++
          //   if(i==ls){
          //     i=1
          //     $(".adduser ul").css({marginTop:0})
          //     $(".adduser ul").animate({marginTop:-'.52'*i+'rem'},800)
          //   }
          //   $(".adduser ul").animate({marginTop:-'.52'*i+'rem'},800)
          //
          //
          // },4300);

          // var html2=$(".adduser ul").html()
          // $(".adduser ul").append(html2)
          // var ls2=$(".adduser li").length/2+1
          // var a=0
          // var ref = setInterval(function(){
          //   a++
          //   if(a==ls2){
          //     a=1
          //     $(".adduser ul").css({marginTop:0})
          //     $(".adduser ul").animate({marginTop:-'.5'*a+'rem'},800)
          //   }
          //   $(".adduser ul").animate({marginTop:-'.5'*a+'rem'},800)
          //
          //
          // },4300);

          // var html3=$(".adduser1 ul").html()
          // $(".adduser1 ul").append(html3)
          // var ls2=$(".adduser1 li").length/2+1
          // var a=0
          // var ref = setInterval(function(){
          //   a++
          //   if(a==ls2){
          //     a=1
          //     $(".adduser1 ul").css({marginTop:0})
          //     $(".adduser1 ul").animate({marginTop:-'.5'*a+'rem'},800)
          //   }
          //   $(".adduser1 ul").animate({marginTop:-'.5'*a+'rem'},800)
          //
          //
          // },4300);
        // });

        var that = this;
        // var myChart6 = this.$echarts.init(document.getElementById('echarts6'));
        // var myChart7 = this.$echarts.init(document.getElementById('echarts7'));
        // var myChart8 = this.$echarts.init(document.getElementById('echarts8'));
        // that.myChart6=myChart6;
        // that.myChart7=myChart7;
        // that.myChart8=myChart8;
        // that.myChart6.resize();
        // that.myChart7.resize();
        // that.myChart8.resize();
        // that.capacityEachart();
        // setTimeout(function(){
        //   that.date1 = new Date();
        // },1000);
        var settime = setInterval(function(){
          that.date1 = new Date();
        },1000);
        // this.timer1 = setInterval(() => {
        //   this.date = new Date(); // 修改数据date
        // }, 1000)


      },
      filters: {
        formatDateTime(value) {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          let h = date.getHours();
          h = h < 10 ? "0" + h : h;
          let m = date.getMinutes();
          m = m < 10 ? "0" + m : m;
          let s = date.getSeconds();
          s = s < 10 ? "0" + s : s;
          return  y + "-" + MM + "-" + d + " "+h + ":" + m + ":" + s ;
        }
      },
      beforeDestroy() {
        $("html").css({fontSize:''});
        // if (this.timer1) {
          clearInterval(this.timer1); // 在Vue实例销毁前，清除我们的定时器
          clearInterval(this.timer11);
        // }
      },
      methods:{
        executeTime1(){
          var parms=this.parameter;

          if(this.parameter.stationNum=="0"||this.parameter.stationNum==""){
            delete parms.stationNum;
          }
          if(this.cityName!='宁波') {
            parms.groupName = this.cityName;
          }else{
            delete parms.groupName;
          }

          var now = new Date();
  var alarmdatefrom = new Date((now/1000-86400*10)*1000);//前3天
  var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
  var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
  var day = alarmdatefrom.getDate();        //获取当前日(1-31)
  parms.alarmTime_from=year+"-"+month+"-"+day+" 00:00:00";

  axiosKj({
    url: '/GW/alarm/getKgzAlarmList.action',
    method: 'post',
    headers: {
      'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
    },
    // data: parameter,
    params: parms
  }).then(response=>{
    // if(this.dblick==1){
    //   var ul = $(".addNewd ul");
    //   ul.find("li").remove();
    //   that.dblick=0;
    // }

    var obj3='{"Table" '+response.substr(response.search('Table')+5,response.length-1);
    var datajson=JSON.parse(obj3).Table;
    if(datajson.length>0) {
      var l = 0;
      var that = this;
      that.timer11 = setInterval(function () {

        if (datajson.length - 1 == l) {
          clearInterval(that.timer11);
        }
        that.Roll(datajson[datajson.length - 1 - l]);
        l++;
      }, 1000);

    }
    // }
  });
  },
        executeTime2(){
          var parms=this.parameter;

          if(this.parameter.stationNum=="0"||this.parameter.stationNum==""){
            delete parms.stationNum;
          }
          if(this.cityName!='宁波') {
            parms.groupName = this.cityName;
          }else{
            delete parms.groupName;
          }

          var now = new Date();
          var alarmdatefrom = new Date((now/1000-86400*10)*1000);//前3天
          var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
          var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
          var day = alarmdatefrom.getDate();        //获取当前日(1-31)
          parms.alarmTime_from=year+"-"+month+"-"+day+" 00:00:00";

          axiosKj({
            url: '/GW/alarm/getAlarmChartResult.action',
            method: 'post',
            headers: {
              'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
            },
            // data: parameter,
            params: parms
          }).then(response=>{
            if(response.length>0) {
              this.$refs.barecharts.setData(response);

            }
          });
        },
        executeTime3(){
          var parms=this.parameter;

          if(this.parameter.stationNum=="0"||this.parameter.stationNum==""){
            delete parms.stationNum;
          }
          // var now = new Date();
          // var alarmdatefrom = new Date((now/1000-86400*3)*1000);//前3天
          // var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
          // var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
          // var day = alarmdatefrom.getDate();        //获取当前日(1-31)
          // parms.alarmTime_from=year+"-"+month+"-"+day+" 00:00:00";

          axiosKj({
            url: '/GW/kgStation/getStatusStationList.action',
            method: 'post',
            headers: {
              'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
            },
            // data: parameter,
            params: parms
          }).then(response=>{

            var obj3='{"Table" '+response.substr(response.search('Table')+5,response.length-1);
            var datajson=JSON.parse(obj3).Table;
            if(datajson.length>0) {
              this.$refs.pieecharts.setData(datajson,this.cityName);

            }
          });
        },
        processing(arrayData){

  },
        Roll(datajson){

          var html = ' <li class="clearfix1"> <span class="pulll_left1" style="color:#00CCFF">' +datajson.STATIONNAME + '</span> <span class="pulll_center1" style="color:#00CCFF">' + datajson.ALARMTYPE + ' </span><span class="pulll_right" style="color:#00CCFF">' + datajson.CREATEDATE + '</span><img src="'+this.videosurl1+'" id="testimg"/><img src="'+this.videosurl2+'" id="testimg2"/></li>';
          var ul = $(".addNewdvideo ul");
          var thistime=new Date(datajson.CREATEDATE).getTime();
          if(this.maxDate<thistime) {
            this.maxDate =thistime;
          var liHeight = ul.find("li:last").height();
          var lis = ul.find("li").length;
          ul.animate({
            marginTop: -liHeight + "px"
          }, 1000, function () {
            if (lis > 8) {
              ul.find("li:first").remove();
            }
            ul.css({marginTop: 0});
            ul.find("li:last").fadeIn(liHeight);
            ul.append(html);
          });

        }
        },
        rng(){
          alert('OK')
        },
        rebackclick(){
          $("html").css({fontSize:''});
          this.$router.push({ name: 'first',path:"/dp/first" })
        },
        testclick(){
          //右下滚动
          this.maxDate=0;
          let site_ =  document.getElementById('site')
          var name = site_.options[site_.selectedIndex].text;
          var value=site_.options[site_.selectedIndex].value;
          this.parameter.stationNum=value;

          clearInterval(this.timer11);
          clearInterval(this.timer1);
          var ul1 = $(".addNewdvideo");
          var ul = $(".addNewdvideo ul");
          this.dblick=1;
          // ul.children().empty();
          // ul1.empty();

          window.setTimeout(function() {
            ul.find("li").remove();
          }, 1000);
          // ul.find("li:last").remove();
          var that=this;
          this.timer1=setInterval(function(){
            that.executeTime1();
          },30000);
          this.executeTime1();

          //右上bar
          this.executeTime2();


          // this.$router.push({ name: 'detaildp',path:"/dp/detaildp" })
        },
        cityclick(){
          let city_ =  document.getElementById('city')
          var name = city_.options[city_.selectedIndex].text;
          var value= city_.options[city_.selectedIndex].value;
          this.cityName=name;
          this.maxDate=0;
          clearInterval(this.timer11);
          clearInterval(this.timer1);
          var ul1 = $(".addNewdvideo");
          var ul = $(".addNewdvideo ul");
          this.dblick=1;
          window.setTimeout(function() {
            ul.find("li").remove();
          }, 1000);
          var that=this;
          this.timer1=setInterval(function(){
            that.executeTime1();
          },30000);
          this.executeTime1();
          this.executeTime2();
          this.executeTime3();
        },
        capacityEachart : function () {

          setTimeout(function(){
            // this.myChart6.clear();
            // myChart6.clear();
            // myChart7.clear();
            // myChart8.clear();
            // myChart6.resize();
            // myChart7.resize();
            // myChart8.resize();
            // myChart6.setOption(option6);
            // myChart7.setOption(option7);
            // myChart8.setOption(option8);
          }, 500);
        }
      }
    }
</script>

<style lang="less" scoped>

</style>
