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
    <h1 style="color:#00BB00">配变站所智能预警平台</h1>
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
          <div class="alltitle">
            <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
            <span class="span_L1" style="color:#00BB00">站点统计信息</span>
            <span class="span_L2" style="color:#00CCFF">安全运维：</span>
            <span class="span_L3" style="color:#00CCFF">100</span>
          </div>

          <div class="sycm">
            <!--<ul class="clearfix">-->
              <!--<li><h2>1824</h2><span>测试1</span></li>-->
              <!--<li><h2>1920</h2><span>测试1</span></li>-->
              <!--<li><h2>19%</h2><span>测试1</span></li>-->
            <!--</ul>-->
            <!--<div style="border-bottom: 1px solid rgba(255,255,255,.1)"></div>-->
            <!--<ul class="clearfix">-->
              <!--<li><h2>1824</h2><span>测试1</span></li>-->
              <!--<li><h2>1920</h2><span>测试1</span></li>-->
              <!--<li><h2>19%</h2><span>测试1</span></li>-->
            <!--</ul>-->
            <pieecharts ref="pieecharts"></pieecharts>

          </div>
          <!--<div class="boxfoot"></div>-->
        </div>
        <div class="boxall" style="height: 4rem">
          <div class="alltitle">
            <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
            <span class="span_L1" style="color:#00BB00">视频监测分析</span>
            <span class="span_L2" style="color:#00CCFF">报警总数：</span>
            <span class="span_L3" style="color:#00CCFF">108</span>
          </div>
          <div class="adduser">
            <ul class="clearfix">
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF"></span>奥林公馆 <span class="pulll_center" style="color:#00CCFF">异常 </span><img src="../dpimg/firstdp/bg-p-L2.png" ><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button></span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">奥林公馆</span> <span class="pulll_center" style="color:#00CCFF">异常 </span><img src="../dpimg/firstdp/bg-p-L2.png" ><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" >未按正常操作规范</button></span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear02</span><img src="../dpimg/firstdp/bg-p-L2.png"> <span class="pulll_center" style="color:#00CCFF">异常 </span><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button> </span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear03</span><img src="../dpimg/firstdp/bg-p-L2.png"> <span class="pulll_center" style="color:#00CCFF">异常 </span><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button> </span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear04</span><img src="../dpimg/firstdp/bg-p-L2.png"> <span class="pulll_center" style="color:#00CCFF">异常 </span><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button> </span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear01</span> <span class="pulll_center" style="color:#00CCFF">异常 </span><img src="../dpimg/firstdp/bg-p-L2.png" ><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button> </span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear02</span><img src="../dpimg/firstdp/bg-p-L2.png"> <span class="pulll_center" style="color:#00CCFF">异常 </span><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button> </span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear03</span><img src="../dpimg/firstdp/bg-p-L2.png"> <span class="pulll_center" style="color:#00CCFF">异常 </span><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button> </span> </li>-->
              <!--<li class="clearfix"> <span class="pulll_left" style="color:#00CCFF">Camear04</span><img src="../dpimg/firstdp/bg-p-L2.png"> <span class="pulll_center" style="color:#00CCFF">异常 </span><span class="pulll_right" style="color:#00CCFF" ><button class="form_button_L" @click="rng">未按正常操作规范</button> </span> </li>-->

            </ul>
          </div>
          <!--<div class="boxfoot"></div>-->
        </div>
        <!--<div class="boxall" style="height: 2.95rem">-->
          <!--<div class="alltitle">-->
            <!--<img src="../dpimg/firstdp/bg-icon-L1.png"></img>-->
            <!--<span class="span_L1" style="color:#00BB00">空开实时信息</span>-->
            <!--<span class="span_L2" style="color:#00CCFF">报警总数：</span>-->
            <!--<span class="span_L3" style="color:#00CCFF">68</span>-->
          <!--</div>-->
          <!--<div id="echarts4" style="height: 2.2rem; width: 100%;">-->
            <!--<scatterecharts></scatterecharts>-->
          <!--</div>-->
          <!--&lt;!&ndash;<div class="boxfoot"></div>&ndash;&gt;-->
        <!--</div>-->
      </li>
      <li >
        <!--<div class="bar">-->
          <!--<div class="barbox">-->
            <!--<ul class="clearfix">-->
              <!--<li class="pulll_left counter">12581189</li>-->
              <!--<li class="pulll_left counter">3912410</li>-->
            <!--</ul>-->
          <!--</div>-->
          <!--<div class="barbox2">-->
            <!--<ul class="clearfix">-->
              <!--<li class="pulll_left">在线</li>-->
              <!--<li class="pulll_left">离线</li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
        <div class="map">
          <!--<div class="map1"><img src="../dpimg/firstdp/picture/lbx.png"></div>-->
          <!--<div class="map4" id="map_1"></div>-->
          <mapecharts :cityName="cityName" :parameter="parameter"></mapecharts>
        </div>
      </li>
      <li>
        <!--<div class="boxall" style="height:3rem">-->

          <!--<img src="../dpimg/firstdp/bg-icon-L1.png"></img>-->
          <!--<span class="span_R1" style="color:#00BB00">告警类型分析</span>-->
          <!--<img src="../dpimg/firstdp/bg-form-R1.png"></img>-->
          <!--&lt;!&ndash;<div class="alltitle1">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="tabs">&ndash;&gt;-->
            <!--&lt;!&ndash;<ul class="clearfix">&ndash;&gt;-->
              <!--&lt;!&ndash;<li><a class="active" href="#">7天</a></li>&ndash;&gt;-->
              <!--&lt;!&ndash;<li><a href="#">15天</a></li>&ndash;&gt;-->
              <!--&lt;!&ndash;<li><a href="#">30天</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;</ul>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<div class="clearfix">-->
            <!--&lt;!&ndash;<div class="sy" id="echarts6"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="sy" id="echarts7"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="sy" id="echarts8"></div>&ndash;&gt;-->
            <!--<pie3decharts></pie3decharts>-->
          <!--</div>-->
          <!--&lt;!&ndash;<div class="addnew">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="tit02"><span>今日站点列表</span></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="adduser">&ndash;&gt;-->
              <!--&lt;!&ndash;<ul class="clearfix">&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="clearfix"> <span class="pulll_left"><img src="../dpimg/icon-g.png">马新一品</span> <span class="pulll_right">温度异常 </span> </li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="clearfix"> <span class="pulll_left"><img src="../dpimg/icon-g.png">马新一品</span> <span class="pulll_right">温度异常 </span> </li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="clearfix"> <span class="pulll_left"><img src="../dpimg/icon-g.png">马新一品</span> <span class="pulll_right">温度异常 </span> </li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="clearfix"> <span class="pulll_left"><img src="../dpimg/icon-g.png">马新一品</span> <span class="pulll_right">温度异常 </span> </li>&ndash;&gt;-->
              <!--&lt;!&ndash;</ul>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="boxfoot"></div>&ndash;&gt;-->
        <!--</div>-->
        <div class="boxall1" style="height: 7rem;">
          <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
          <span class="span_R1" style="color:#00BB00">24小时实时信息</span>
          <img src="../dpimg/firstdp/bg-form-R1.png"></img>
          <!--<div class="alltitle">异常信息检测</div>-->
          <!--<div class="clearfix">-->
            <barecharts ref="barecharts"></barecharts>
          <!--</div>-->
          <!--<div class="wrap">-->
            <!--<ul>-->
              <!--<li>-->
                <!--<p>马新一品-温度异常-2019.10.9 08:09:12</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p>马新一品-温度异常-2019.10.9 08:09:12</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p>马新一品-温度异常-2019.10.9 08:09:12</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p>马新一品-温度异常-2019.10.9 08:09:12</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p>马新一品-温度异常-2019.10.9 08:09:12</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p>马新一品-温度异常-2019.10.9 08:09:12</p>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
          <div class="addNewd" id="con" >
            <ul class="clearfix1">
              <!--<li class="clearfix1"> <span class="pulll_left" style="color:#00CCFF">001</span> <span class="pulll_center1" style="color:#00CCFF">马新一区站点通讯故障 </span><span class="pulll_right" style="color:#00CCFF">2019-10-10 15:20</span><img src="../dpimg/firstdp/bg-icon-R1.png"></li>-->
              <!--<li class="clearfix1"> <span class="pulll_left" style="color:#00CCFF">002</span> <span class="pulll_center1" style="color:#00CCFF">马新一区站点通讯故障 </span><span class="pulll_right" style="color:#00CCFF">2019-10-10 15:20</span><img src="../dpimg/firstdp/bg-icon-R1.png"> </li>-->
              <!--<li class="clearfix1"> <span class="pulll_left" style="color:#00CCFF">003</span> <span class="pulll_center1" style="color:#00CCFF">马新一区站点通讯故障 </span><span class="pulll_right" style="color:#00CCFF">2019-10-10 15:20 </span><img src="../dpimg/firstdp/bg-icon-R1.png"> </li>-->
              <!--<li class="clearfix1"> <span class="pulll_left" style="color:#00CCFF">004</span><span class="pulll_center1" style="color:#00CCFF">马新一区站点通讯故障 </span><span class="pulll_right" style="color:#00CCFF">2019-10-10 15:20</span><img src="../dpimg/firstdp/bg-icon-R1.png">  </li>-->
            </ul>
          </div>
          <div class="boxfoot"></div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script type="es6">
  import  {axiosKj}  from '@/utils/requestKj'
  import axios from 'axios'
  import '@/views/dp/css/firstdp.css'
  import $ from 'jquery'
  import map from './map/map.vue'
  import pie from './pie/piedou.vue'
  import scatter from './scatter/scatterL3.vue'
  import pie3d from './pie/pie3d.vue'
  import bar from './bar/bar.vue'
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
              surl1:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5QTNFRjYyRUJDMTExRTk5NEJDRjJEMDZCRkNCRDI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5QTNFRjYzRUJDMTExRTk5NEJDRjJEMDZCRkNCRDI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjlBM0VGNjBFQkMxMTFFOTk0QkNGMkQwNkJGQ0JEMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjlBM0VGNjFFQkMxMTFFOTk0QkNGMkQwNkJGQ0JEMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7TpXBaAAABoUlEQVR42pyUPUvDUBSGb9QiFCwqOnTLIAhVl0JcBMVZUNTBUSd3XfwdhYIO/QeiVms66CBYcNDRDyqVri4WtLpUa+N72hO5Ob0p1gNPSM7He0/ul1KepwRJsAfK4JMpsy/Zlq99REEGNIAXQoNzolKAHIUOhZLCrwgL7HZR7EM1ysIjAZk7YKmgvYMLfp8HAyJOw0/S6CmD+hkY0uZnGJwb8lIULArnC4gZVifGMT232IM2bNHaKaiqdqtyTDebBCLC+aHCTcYiJFASzlnDhCr2zQlfiQRywjkFtgwC261ZD1jOX8Z7Q8EROOD3VbBsyEn4M5z9x0bK6jtxAtS7KK43OxeHKdOFQMZ0GkcNG8UE5YyYBIiNPwish90HBK1KvkNxnnNCBYg4qBiKKxwL5LfUlOoFC2AR9INDRrcVpgZOgAu+ScUGD8AFm8ABfSCtjZ5mn8M5LtfY1MEOlGZ4dN2ok0vtfNRE/BhcWc0lUWqfbxxq6xY8gVftFqLbaRCM8Vmh330Da/4ckDlgCUyDcRDXjvoXeAaP4JpHv6HAjwADACgIe7tzSZ9WAAAAAElFTkSuQmCC'

        }
        },
      components:{
        "mapecharts":map,
        "pieecharts":pie,
        "scatterecharts":scatter,
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

          var html = ' <li class="clearfix1"> <span class="pulll_left1" style="color:#00CCFF">' + datajson.CREATEDATE + '</span> <span class="pulll_center1" style="color:#00CCFF">' + datajson.STATIONNAME + ' </span><span class="pulll_right" style="color:#00CCFF">' + datajson.ALARMTYPE + '</span><img src="' + this.surl1 + '" id="testimg"></li>';
          var ul = $(".addNewd ul");
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
          var ul1 = $(".addNewd");
          var ul = $(".addNewd ul");
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
          var ul1 = $(".addNewd");
          var ul = $(".addNewd ul");
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
