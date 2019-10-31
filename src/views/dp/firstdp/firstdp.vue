<template v-for="route in navBarData">
  <div class="Index_bgImg_1 clearfloat">
    <p  class="Index_left_p2_1">泛在物联在线监测分析平台</p>
    <!--左边-->
    <!--<div class="fixHeight1 pic_left" style="top:10%;width:24.5%;height:100%;"></div>-->
    <!--<div class="fixHeight1 pic_left" style="top:10%;width:24.5%;height:100%;"></div>-->
    <!--<div class="fixHeight2 pic_right" style="top:10%; height:100%;">-->

    <!--</div>-->

    <div id="content">

      <!--左边-->
      <div class="content_left">
        <div class="pic_icon1" ></div>
        <div class="span_style1" >开关站</div>
        <div class="span_style2" >详情</div>
        <div class="pic_icont" ></div>


        <!--监测设备-->
        <div class="content_left1">
          <div class="pic_icong"></div>
          <div class="span_style3">监测设备</div>
        </div>
        <!--监测设备数字-->
        <div class="content_left2">
          <div class="span_style4">{{this.value2}}</div>
          <span  class="span_style5">个</span>
        </div>

        <!--门禁-->
        <div class="content_left1">
          <div class="pic_iconacccon"></div>
          <div class="span_style3">门禁</div>
        </div>
        <!--门禁数字-->
        <div class="content_left2">
          <div class="span_style4">{{this.value3}}</div>
          <span  class="span_style5">个</span>
        </div>

        <!--烟感-->
        <div class="content_left1">
          <div class="pic_iconsmoke"></div>
          <div class="span_style3">烟感</div>
        </div>
        <!--烟感数字-->
        <div class="content_left2">
          <div class="span_style4">108</div>
          <span  class="span_style5">个</span>
        </div>

        <!--水位-->
        <div class="content_left1">
          <div class="pic_iconwater"></div>
          <div class="span_style3">水位</div>
        </div>
        <!--水位数字-->
        <div class="content_left2">
          <div class="span_style4">60</div>
          <span  class="span_style5">个</span>
        </div>

        <!--除湿器-->
        <div class="content_left1">
          <div class="pic_icondehum"></div>
          <div class="span_style3">除湿器</div>
        </div>
        <!--除湿器数字-->
        <div class="content_left2">
          <div class="span_style4">{{this.value3}}</div>
          <span  class="span_style5">个</span>
        </div>




      </div>

      <!--中间-->
      <div class="centerDiv">
        <!--<div id="demo">-->
        <!--<p class="box green" id="greenBox">0</p>-->
        <!--</div>-->
        <div>
          <div class="centerDiv_Up">
            <div class="box1" >
              <span>{{this.box1}}</span>
            </div>
            <div class="box3">
              <span>40°</span>
            </div>
            <div class="box4">
              <span>60°</span>
            </div>
          </div>
          <div class="box2">{{this.box2}}</div>
        </div>
        <!--<div class="centerDiv_Up"></div>-->
        <div class="centerDiv_down">
          <div class="pic_stationname_L2" >
            <span class="span_styleCenter2">马新三品</span>
          </div>


        </div>

        <div class="pic_stationname_R2" >
          <span class="span_styleCenter2">马新二品</span>
        </div>
        <div class="centerDiv_down" >
          <div class=" pic_stationname_L1"  >
            <span class="span_styleCenter1" @click="testclick">奥林公馆开关站</span>

          </div>
        </div>
        <div class=" pic_stationname_R1" >
          <span class="span_styleCenter1">马新一品</span>
        </div>
      </div>

      <!--右边-->
      <div class="content_right">
        <div class="pic_icon1_r" ></div>
        <div class="span_style1_r" >异常信息检测</div>
        <div class="span_style2_r" >详情</div>
        <div class="pic_icont_r" ></div>

        <!--温度异常，电流异常-->
        <div class="content_left1_r">
          <div class="span_style3_r1">温度异常</div>
          <div class="span_style3_r2">电流异常</div>
        </div>
        <!--温度异常，电流异常数字-->
        <div class="content_left2">

          <span class="span_style4_r1">{{this.value1}}</span>
          <!--<span  class="span_style5_r1">个</span>-->
          <span  :class="this.value1>10 ? 'span_style5_r1_len': 'span_style5_r1' ">个</span>

          <span class="span_style4_r2">15</span>
          <span  class="span_style5_r2">个</span>

        </div>
        <!--电压异常-->
        <div class="content_left1_r1">
          <div class="span_style3_r1">电压异常</div>
        </div>
        <!--电压异常数字-->
        <div class="content_left2">
          <span class="span_style4_r1">{{this.value4}}</span>
          <span  class="span_style5_r1">个</span>

        </div>

        <!--异常信息详情-->
        <div class="content_left3">
          <ul >
            <li id="liI">
              <div class="span_style3_r3">异常信息详情</div>
            </li>
            <li id="liI">
              <div class="pic_iconbgr4">
                <span class="span_style4_r3">开关站</span>
                <span class="span_style4_r4">报警信息</span>
                <span class="span_style4_r5">重要程度</span>
              </div>
            </li>
          </ul>
        </div>
        <!--异常信息数据-->
        <div class="content_left4">

          <li id="liI1">
            <span class="span_styleNum_1">{{this.list1.name}}</span>
            <span class="span_styleNum_2">{{this.list1.value}}</span>
            <span class="span_styleNum_3">
                <img src="../dpimg/red-1.png"/>
              </span>
            <span class="span_styleNum_4">
              <img src="../dpimg/red-2.png"/>
              </span>
          </li>
          <li id="liI1">
            <span class="span_styleNum_1">{{this.list2.name}}</span>
            <span class="span_styleNum_2">{{this.list2.value}}</span>
            <span class="span_styleNum_3">
                <img src="../dpimg/red-1.png"/>
              </span>
            <span class="span_styleNum_4">
              <img src="../dpimg/red-2.png"/>
              </span>
          </li>
          <li id="liI1">
            <span class="span_styleNum_1">{{this.list3.name}}</span>
            <span class="span_styleNum_2">{{this.list3.value}}</span>
            <span class="span_styleNum_3">
                <img src="../dpimg/red-1.png"/>
              </span>
            <span class="span_styleNum_4">
              <img src="../dpimg/red-2.png"/>
              </span>
          </li>
          <li id="liI1">
            <span class="span_styleNum_1">{{this.list4.name}}</span>
            <span class="span_styleNum_2">{{this.list4.value}}</span>
            <span class="span_styleNum_3">
                <img src="../dpimg/red-1.png"/>
              </span>
            <span class="span_styleNum_4">
              <img src="../dpimg/red-2.png"/>
              </span>
          </li>
          <li id="liI1">
            <span class="span_styleNum_1">{{this.list5.name}}</span>
            <span class="span_styleNum_2">{{this.list5.value}}</span>
            <span class="span_styleNum_3">
                <img src="../dpimg/red-1.png"/>
              </span>
            <span class="span_styleNum_4">
              <img src="../dpimg/red-2.png"/>
              </span>
          </li>

        </div>




      </div>

    </div>
    <!--<div class="centerDiv">-->
    <!--&lt;!&ndash;<div class="fixHeight3 pic_station_L1" style="width:99%;margin-left:-100%;height:90%;"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="fixHeight3 pic_station_R1" style="width:99%;margin-right:-100%;height:90%;"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="fixHeight4 pic_link" style="width:100%;right:35%;height:78%;"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="fixHeight3 pic_station_L2" style="width:100%;margin-left:-100%;height:65%;"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="fixHeight3 pic_station_R2" style="width:100%;margin-left:-38%;height:65%;"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="fixHeight3 pic_station_M" style="width:100%;margin-left:-74%;height:47%;"></div>&ndash;&gt;-->
    <!--<div class="fixHeight3 pic_stationname_L1" style="top:65%;right:95%;" @click="testclick">奥林公馆开关站</div>-->
    <!--<div class="fixHeight3 pic_stationname_L2" style="top:50%;right:75%;">马新三品</div>-->
    <!--<div class="fixHeight3 pic_stationname_R1" style="top:65%;left:30%;">马新一品</div>-->
    <!--<div class="fixHeight3 pic_stationname_R2" style="top:50%;left:5%;">马新二品</div>-->
    <!--</div>-->
  </div>
</template>

<script>

  import axios from 'axios'
  import { getKgzAlarmList } from '@/api/login'
  import $ from 'jquery'

  export default {
    name: 'app',
    data () {
      return {
        list2:{
          name:'',
          value:''
        },
        list1:{
          name:'',
          value:''
        },
        list3:{
          name:'',
          value:''
        },
        list4:{
          name:'',
          value:''
        },
        list5:{
          name:'',
          value:''
        },
        timer:'',
        timer1:'',
        value1:0,
        value2:88,
        value3:108,
        value4:5,
        box1:'30°',
        box2:'58°',
        box3:'60°',
        box4:'58°'

      }
    },
    //用于数据初始化
    created:function(){
      this.getKgzAlarmList();
      // this.timer=setInterval(this.get,2000);
      // this.timer1=setInterval(this.getKgzAlarmList,2000);

      // getStatusStationsList().then(response => {
      //   debugger;
      //   console.log(response);
      // })
      axios.post('/GW/kgStation/getStatusStationList.action',{}).then(res=>
      {
        console.log(res)
      })
    },
    plusReady: function(){
      console.log(this.os.plus)
      console.log('plusReady')
      this.$geolocation.getCurrentPosition().then(function(position){
        this.city = position.address.city
        this.$nativeUI.toast(JSON.stringify(position))
      }.bind(this))
    },
    methods: {
      testclick(){
        this.$router.push({ name: 'detaildp',path:"/dp/detaildp" })
      },
      getKgzAlarmList(){
        // getKgzAlarmList().then(res=>{
        //   debugger;
        // })
        // $.getJSON("/GW/alarm/getKgzAlarmList.action", params, function(res){
        //   debugger
        // });

        // $.getJSON("/GW/alarm/getKgzAlarmList.action").then(res=>{
        //   debugger;
        //   console.log("json数据为:" + res)
        // });
        // this.$http.post('/GW/alarm/getKgzAlarmList.action').then(res => {
        //   console.log("json数据为:" + res.body)
        // })

        axios.post('/GW/alarm/getKgzAlarmList.action').then(response=>
        {
          // var obj=response.data;lo
          // var obj1=JSON.parse(JSON.stringify(response.data));
          // var obj2= '{Table:[{ "hiredate": "2008-01-01T12:00:00Z", "birthdate": "2008-12-25T12:00:00Z" }]}';
          var obj3='{"Table" '+response.data.substr(response.data.search('Table')+5,response.data.length-1);
          // var obj4='{"Table" :[{"ALARMTIME":"2019-08-28 11:46:08","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 11:46:08","ID":35524,"KGSTATIONID":420,"STATIONNAME":"浅水湾3号","STATIONNUM":"05740A0202051E"},{"ALARMTIME":"2019-08-28 11:38:36","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 11:38:36","ID":35523,"KGSTATIONID":393,"STATIONNAME":"金地澜悦站","STATIONNUM":"05740A020203D2"},{"ALARMTIME":"2019-08-28 11:16:13","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 11:16:13","ID":35522,"KGSTATIONID":736,"STATIONNAME":"骆城芳洲2","STATIONNUM":"0574020B020238"},{"ALARMTIME":"2019-08-28 10:46:11","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 10:46:11","ID":35521,"KGSTATIONID":736,"STATIONNAME":"骆城芳洲2","STATIONNUM":"0574020B020238"},{"ALARMTIME":"2019-08-28 10:46:03","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 10:46:03","ID":35520,"KGSTATIONID":420,"STATIONNAME":"浅水湾3号","STATIONNUM":"05740A0202051E"},{"ALARMTIME":"2019-08-28 09:45:58","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 09:45:58","ID":35519,"KGSTATIONID":420,"STATIONNAME":"浅水湾3号","STATIONNUM":"05740A0202051E"},{"ALARMTIME":"2019-08-28 08:45:53","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 08:45:53","ID":35518,"KGSTATIONID":420,"STATIONNAME":"浅水湾3号","STATIONNUM":"05740A0202051E"},{"ALARMTIME":"2019-08-28 08:15:57","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 08:15:57","ID":35517,"KGSTATIONID":736,"STATIONNAME":"骆城芳洲2","STATIONNUM":"0574020B020238"},{"ALARMTIME":"2019-08-28 07:45:55","ALARMTYPE":"水位报警","CREATEDATE":"2019-08-28 07:45:55","ID":35516,"KGSTATIONID":736,"STATIONNAME":"骆城芳洲2","STATIONNUM":"0574020B020238"},{"ALARMTIME":"2019-08-28 06:26:05","ALARMTYPE":"电源正常","CREATEDATE":"2019-08-28 06:26:05","ID":35515,"KGSTATIONID":452,"STATIONNAME":"君悦国际4号站","STATIONNUM":"05740A02020263"}]}'
          var datajson=JSON.parse(obj3);
          for(var i=0;i<=5;i++) {
            var j=Math.ceil(Math.random()*10);
            this.list1.name = response.data[i*j].STATIONNAME;
            this.list1.value = response.data[i*j].ALARMTYPE;
            this.list2.name = response.data[(i+1)*j].STATIONNAME;
            this.list2.value = response.data[(i+1)*j].ALARMTYPE;
            this.list3.name = response.data[(i+2)*j].STATIONNAME;
            this.list3.value = response.data[(i+2)*j].ALARMTYPE;
            this.list4.name = response.data[(i+3)*j].STATIONNAME;
            this.list4.value = response.data[(i+3)*j].ALARMTYPE;
            this.list5.name = response.data[(i+4)*j].STATIONNAME;
            this.list5.value = response.data[(i+4)*j].ALARMTYPE;
          }
        })

        // new Promise((resolve, reject) => {
        //   axios({
        //     method: 'post',
        //     url: '/GW/alarm/getKgzAlarmList.action',
        //     dataType: "json",
        //     crossDomain: true,
        //     cache: false
        //   }).then(res => {
        //     debugger;
        //     resolve(res)
        //   }).catch(error => {
        //     reject(error)
        //   })
        // })

      },
      get(){
        var v1=false;
        var v2=false;
        var v3=false;
        var v4=false;
        var b1=false;
        var b2=false;
        var b3=false;
        var b4=false;
        if(this.value1==20 && !v1){
          this.value1=0;
          v1=!v1;
        }
        if(this.value1==0 && !v1){
          this.value1=20;
          v1=!v1;
        }
        if(this.value2==88 && !v2){
          this.value2=60
          v2=!v2;
        }
        if(this.value2==60 && !v2){
          this.value2=88
          v2=!v2;
        }
        if(this.value3==108 && !v3){
          this.value3=50
          v3=!v3;
        }
        if(this.value3==50  && !v3){
          this.value3=108
          v3=!v3;
        }
        if(this.value4==5 && !v4){
          this.value4=10
          v4=!v4;
        }
        if(this.value4==10  && !v4){
          this.value4=5
          v4=!v4;
        }
        if(this.box1=='30°'  && !b1){
          this.box1='47°'
          b1=!b1;
        }
        if(this.box1=='47°'  && !b1){
          this.box1='30°'
          b1=!b1;
        }
        if(this.box2=='58°'  && !b2){
          this.box2='88°'
          b2=!b2;
        }
        if(this.box2=='88°'  && !b2){
          this.box2='58°'
          b2=!b2;
        }
      },
      mounted(){
        this.timer=setInterval(this.get,4000);
      },
      beforeDestroy(){
        clearInterval(this.timer);
      }
    }
  }
</script>

<style>
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 0 !important;height: 0;
  }
  #liI1{ list-style:none;
    float: left;margin-top: 15px}
  #liI{ list-style:none;
    float: left;}
  .Index_bgImg_1 {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url('../dpimg/bgNew2.png');
    padding: 1rem 2rem 2rem;
  }
  .Index_left_p2_1 {
    font-size:2em;height:50px;color:#fff;width:100%;font-weight:bold;text-align:center;line-height:50px;
    margin-top: 1rem;
    opacity: 0.65;
    left:500px;
    /*font-size: 40px;*/
    color: #FFFFFF;
    background: url('../dpimg/bt.png') center no-repeat;

  }
  .font_center {
    font-size:2em;height:100%;color:#fff;width:100%;text-align:center;
    /*font-size: 40px;*/
    color: #FFFFFF;

  }
  /*.pic_left{background:url(../dpimg/bgL.png) no-repeat left;}*/
  /*.pic_leftL2{background:url(../dpimg/bg-L-2.png) no-repeat left;}*/
  /*.pic_leftL3{background:url(../dpimg/bg-L-3.png) no-repeat left;}*/
  /*.fixHeight1{ opacity: 0.8;}*/
  /*.fixHeight2{position:absolute; width:25%;right:1%;opacity: 0.8;}*/
  /*.fixHeight3{position:absolute; opacity:1;}*/
  /*.fixHeight4{position:absolute;width:25%; opacity:1;}*/
  /*.fixHeight5{position:absolute;width:25%; opacity:0.1;}*/
  /*.pic_right{background:url(../dpimg/bgR.png) no-repeat right;}*/
  .pic_station_L1{background:url(../dpimg/stationL1.png) no-repeat 100% 100%;}
  .pic_station_L2{background:url(../dpimg/stationL2.png) no-repeat 100% 100%;}
  .pic_station_R1{background:url(../dpimg/stationR1.png) no-repeat 100% 100%;}
  .pic_station_R2{background:url(../dpimg/stationR2.png) no-repeat 100% 100%;}
  .pic_station_M{background:url(../dpimg/stationM.png) no-repeat 100% 100%;}
  .pic_stationname_L1{background:url(../dpimg/stationnameL1.png)  no-repeat;height:80px;margin-top: 70px;margin-left: 100px;}
  .pic_stationname_L2{background:url(../dpimg/stationnameL2.png)  no-repeat ; height:71px;margin-top: 130px;margin-left: 340px;}

  .pic_stationname_R1{background:url(../dpimg/stationnameR1.png)  no-repeat;
    height:80px;margin-top: 70px;margin-left: 950px;}
  .pic_stationname_R2{background:url(../dpimg/stationnameR2.png) no-repeat;height: 71px;margin-top: 130px;margin-left: 800px;}
  .pic_link{background:url(../dpimg/link.png) no-repeat 100% 100%;}
  /*.centerDiv{ width:35%;left:43%;top:10%;height:89%;}*/
  .pic_icon1{background:url(../dpimg/switchstation.png) no-repeat;}
  .pic_icon1_r{background:url(../dpimg/infoicon-r.png) no-repeat;}
  .pic_icont{background:url(../dpimg/icont.png) no-repeat;}
  .pic_icont_r{background:url(../dpimg/icont.png) no-repeat;}
  .pic_icong{background:url(../dpimg/icon-g.png) no-repeat;}
  .pic_iconacccon{background:url(../dpimg/AccessControl-icon.png) no-repeat;}
  .pic_iconwater{background:url(../dpimg/water-icon.png) no-repeat;}
  .pic_icondehum{background:url(../dpimg/Dehumidifier-icon.png) no-repeat;}
  .pic_iconsmoke{background:url(../dpimg/Smoke-icon.png) no-repeat;}
  .pic_iconbgr4{background:url(../dpimg/bg-R-4.png) no-repeat;margin-top:10px;margin-left:20px;width:318px;
    height: 40px;}
  .span_style1{font-size:18px;
    font-family:PingFang-SC;font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:25px;width: 54px; height:17px;float: left;margin-left:30px}
  .span_style1_r{font-size:18px;
    font-family:PingFang-SC;font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:25px;width: 108px; height:19px;float: left;margin-left:10px;
    margin-top: 10px;}
  #content{
    width: 100%;height:100%;}
  #content .content_left{width: 300px; height: 100%; float: left;
    padding-top: 230px;}
  #content .content_left1{width: 300px; height: 30px; float: left;
    padding-top: 70px;}
  #content .content_left1_r{width: 385px; height: 30px; float: left;
    padding-top: 50px;}
  #content .content_left1_r1{width: 385px; height: 30px; float: left;
    padding-top: 45px;}
  #content .content_left2{width: 385px; height: 30px; float: left;
    padding-top: 20px;}
  #content .content_left3{width: 385px; height: 30px; float: left;
    padding-top: 30px;}
  #content .content_left4{width: 385px; height: 30px; float: left;
    padding-top: 70px;}
  #content .centerDiv{width:1170px; height:100%; float:left;}
  #content .centerDiv_Up{
    width:800px; height:100px;  float:left;
  }
  #content .centerDiv_down{
    width:700px; height:30px; float:left;
  }
  #content .content_right{width: 385px; height: 100%; float: right;
    padding-top: 230px;}
  .pic_icon1{width: 36px; height:29px;
    float: left; margin-left:40px}
  .pic_icon1_r{width: 30px; height:30px;
    float: left; margin-left:70px;margin-top:10px}
  .pic_icont{width:9px;
    height:18px;
    float:left;margin-left:10px;margin-top:5px;}
  .pic_icont_r{width:9px;
    height:18px;
    float:left;margin-left:20px;margin-top:15px;}
  .span_style2{width:33px;
    height:16px;
    font-size:16px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(40,205,156,1);float: left;margin-left:83px}
  .span_style2_r{width:33px;
    height:16px;
    font-size:16px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(40,205,156,1);float: left;margin-left:80px;margin-top: 10px;}
  .pic_icong {width:35px;
    height:29px;
    float:left;margin-left:40px;}
  .pic_iconacccon,.pic_iconwater,.pic_icondehum,.pic_iconsmoke{width:35px;
    height:35px;
    float:left;margin-left:40px;}
  .span_style3{width:74px;
    height:17px;
    font-size:18px;
    font-family:PingFang-SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:5px;float: left;margin-left:10px}
  .span_style3_r1{width:73px;
    height:17px;
    font-size:18px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:5px;float: left;margin-left:60px}
  .span_style3_r2{width:72px;
    height:17px;
    font-size:18px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:5px;float: left;margin-left:140px}
  .span_style3_r3{
    width:112px;
    height:17px;
    font-size:18px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,1);
    font-weight:500;float: left;margin-left:20px
  }
  .span_style4{width:46px;
    height:19px;
    font-size:24px;
    font-family:Helvetica-Neue;
    font-weight:bold;
    color:rgba(40,205,156,1);
    line-height:25px;float: left;margin-left:90px}
  .span_style4_r1{width:35px;
    height:23px;
    font-size:30px;
    font-family:Helvetica-Neue;
    font-weight:bold;
    color:rgba(235,229,53,1);
    line-height:25px;float: left;margin-left:60px}
  .span_style4_r2{width:35px;
    height:23px;
    font-size:30px;
    font-family:Helvetica-Neue;
    font-weight:bold;
    color:rgba(235,229,53,1);
    line-height:25px;float: left;margin-left:140px}
  .span_style4_r3{width:48px;
    height:16px;
    font-size:16px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:25px;float: left;margin-left:10px}
  .span_style4_r4,.span_style4_r5{width:65px;
    height:16px;
    font-size:16px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:25px;float: left;margin-left:60px}
  /*.span_style4_r5{width:65px;*/
  /*height:16px;*/
  /*font-size:16px;*/
  /*font-family:PingFang-SC;*/
  /*font-weight:500;*/
  /*color:rgba(255,255,255,1);*/
  /*line-height:25px;float: left;margin-left:50px}*/
  .span_style5{width:10px;
    height:19px;
    font-size:15px;
    font-family:Helvetica-Neue;
    font-weight:bold;
    color:rgba(40,205,156,1);
    line-height:25px;}
  .span_style5_r1{width:35px;
    height:23px;
    font-size:30px;
    font-family:Helvetica-Neue;
    font-weight:bold;
    color:rgba(235,229,53,1);
    line-height:25px;float: left;}
  .span_style5_r1_len{width:35px;
    height:23px;
    font-size:30px;
    font-family:Helvetica-Neue;
    font-weight:bold;
    color:rgba(235,229,53,1);
    line-height:25px;float: left;margin-left: 10px}
  .span_style5_r2{width:35px;
    height:23px;
    font-size:30px;
    font-family:Helvetica-Neue;
    font-weight:bold;
    color:rgba(235,229,53,1);
    line-height:25px;float: left;}
  .span_styleNum_1{
    display: inline-block;
    width:100px;
    height:14px;
    font-size:14px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(0,255,255,1);
    line-height:25px;margin-left:50px;text-decoration: underline;
  }
  .span_styleNum_2{
    display: inline-block;
    width:60px;
    height:14px;
    font-size:14px;
    font-family:PingFang-SC;
    font-weight:500;
    color:rgba(0,255,255,1);
    line-height:25px;margin-left:40px;
  }
  .span_styleNum_3{
    height:16px;
    margin-left:60px;
  }
  .span_styleNum_4{
    height:16px;
    margin-left:10px;
  }
  .span_styleCenter2{font-size:1em;color:#fff;font-weight:bold;line-height:50px;margin-left:45px}
  .span_styleCenter1{font-size:1.5em;color:#fff;font-weight:bold;line-height:70px;margin-left:45px;
    margin-top: 15px;}


  .box {
    width:100px;
    height:100px;
    position:relative;
    border-radius:6px;
    margin-top:4px;
    text-align:center;
    line-height:100px;
    color:black;
    font-size:80px;
  }
  .box1 {
    display: inline-block;
    width:100px;
    height:10px;
    position:relative;
    border-radius:6px;
    margin-top:40px;
    margin-left:400px;
    text-align:center;
    line-height:100px;
    color:white;
    font-size:30px;
    opacity:0.5;

  }
  .box2 {
    display: inline-block;
    width:100px;
    height:100px;
    position:relative;
    border-radius:6px;
    padding-top:160px;
    margin-left:585px;
    text-align:center;
    line-height:100px;
    color:yellow;
    font-size:50px;
  }
  .box3 {
    display: inline-block;
    width:100px;
    height:10px;
    position:relative;
    border-radius:6px;
    padding-top: 50px;
    margin-left:400px;
    text-align:center;
    line-height:100px;
    color:white;
    font-size:40px;
  }
  .box4 {
    display: inline-block;
    width:100px;
    height:10px;
    position:relative;
    border-radius:6px;
    padding-top: 30px;
    margin-left:400px;
    text-align:center;
    line-height:100px;
    color:red;
    font-size:50px;
  }

  .green{
    background-color:#6fb936;
  }
  .superShadow {
    text-shadow:     0 1px 0 hsl(174,5%,80%),
    0 2px 0 hsl(174,5%,75%),
    0 3px 0 hsl(174,5%,70%),
    0 4px 0 hsl(174,5%,66%),
    0 5px 0 hsl(174,5%,64%),
    0 6px 0 hsl(174,5%,62%),
    0 7px 0 hsl(174,5%,61%),
    0 8px 0 hsl(174,5%,60%),

    0 0 5px rgba(0,0,0,.05),
    0 1px 3px rgba(0,0,0,.2),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.2),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.3);
  }
</style>

