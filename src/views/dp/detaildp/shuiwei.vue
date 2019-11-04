<template>
  <div style="width: 17%">
    <div class="down_left1">
      <img class="left_bg" src="./img/title_bg.png">
      <img class="left_img" src="./img/icon4_select.png">
      <span class="left_span">水位</span>
      <img style="position: absolute;left: 2rem;top: 6rem;width: 16rem" src="./img/shuiwei-icon.png">
<!--      <span style="position: absolute;left: 2rem;top: 29rem;font-size: 18px;font-family:PingFang-SC;color:rgba(255,255,255,1);">状态</span>-->
<!--      <img style="position: absolute;left: 18rem;top: 28.5rem;" src="./img/icon4.png">-->
      <div style="position: absolute;width: 60rem;top: 21rem">
        <span style="position: absolute;left: 3rem;top: 5rem;font-size: 18px;font-family:PingFang-SC;color:rgba(255,255,255,1);">水位深度</span>
        <div class="light" style="left: 3rem;top:7rem">
          <div class="digits" v-html="number"></div>
          <span style="margin-left:1rem;font-size: 22px;font-family:PingFang-SC;color:rgba(255,255,255,1);">m</span>
        </div>
      </div>
    </div>
    <div class="down_right">
      <img class="right_title_img" src="./img/right_img1.png">
      <span class="right_title_span1">水位设备记录</span>
      <div class="right_detail" @click="detailHandle">
        <span class="right_title_span2">更多</span>
        <img class="right_title_icon" src="./img/right_img3.png">
      </div>
      <div class="right_info">
        <span class="right_info_span1">水位</span>
        <span class="right_info_span2">{{count}}</span>
        <span class="right_info_span3">个</span>
        <img class="right_info_img" src="./img/right_img2.png">
        <span class="right_info_span4">检测中</span>
      </div>
      <div class="right_table">
        <img class="right_table_img" src="./img/right_bg.png"/>
        <div class="right_table_th">
          <!--<div style="width: 33%;display: inline-block">-->
            <!--<span>设备名</span>-->
          <!--</div>-->
          <div style="width: 50%;display: inline-block">
            <span>记录信息</span>
          </div>
          <div style="width: 50%;display: inline-block">
            <span>时间</span>
          </div>
        </div>
        <div  class="right_table_td">
          <ul>
            <!--<li>-->
          <!--<div style="width: 33%;display: inline-block;white-space:nowrap;">-->
            <!--<span>{{item.name}}</span>-->
          <!--</div>-->
          <!--<div style="width: 33%;display: inline-block;white-space:nowrap;">-->
            <!--<span  :class="{exception:item.flag=='0'}">{{item.msg}}</span>-->
          <!--</div>-->
          <!--<div style="width: 33%;display: inline-block;white-space:nowrap;">-->
            <!--<span>{{item.time}}</span>-->
          <!--</div>-->
            <!--</li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  import Marquee from 'marquee'
  export default {
    name: 'yangan',
    data () {
      return {
        timershuiwei1:'',
        timershuiwei11:'',
        number:'',
        count:1,
        liNum:0,
        maxDate:0,
        data:[
          {name:'设备1',msg:'正常',time:'21:10:10',flag:'1'},
          {name:'设备2',msg:'异常',time:'21:10:10',flag:'0'},
          {name:'设备1',msg:'正常',time:'21:10:10',flag:'1'},
          {name:'设备2',msg:'异常',time:'21:10:10',flag:'0'},
          {name:'设备2',msg:'异常',time:'21:10:10',flag:'0'},
          {name:'设备1',msg:'正常',time:'21:10:10',flag:'1'},
          {name:'设备2',msg:'正常',time:'21:10:10',flag:'1'},
        ],
        dataForm:{
          time:[]
        }
      }
    },
    props: ['stationdata'],
    created(){
      this.init();
      this.executeTime1();
    },
    methods: {
      executeTime1(){
        if(this.stationdata==null ||this.stationdata=='undefined'|| this.stationdata==''){
          this.stationdata=sessionStorage.getItem('stationID');
        }
        this.dataForm.time = [new Date(new Date().getTime()-3*24*60*60*1000),new Date()]
        axios.get('/GW.WIR/show/getTemperatureReport.action', {
          params: {
            stationID: this.stationdata,
            startDt: this.formatDate(this.dataForm.time[0]),
            endDt: this.formatDate( this.dataForm.time[1]),
            start: 0,
            limit: 100000
          }
        }).then(response=>{
          // if(this.dblick==1){
          //   var ul = $(".addNewd ul");
          //   ul.find("li").remove();
          //   that.dblick=0;
          // }

          var obj3='{"Table" '+response.data.substr(response.data.search('Table')+5,response.data.length-1);
          var datajson=JSON.parse(obj3).Table;
          if(datajson.length>0) {
            var l = 0;
            var that = this;
            that.timershuiwei11 = setInterval(function () {


              if (datajson.length - 1 == l) {
                clearInterval(that.timershuiwei11);
              }
              that.Roll(datajson[datajson.length - 1 - l]);
              l++;
            }, 1000);

          }
          // }
        });
      },
      formatDate(now) {
        const year = now.getFullYear()
        const month = now.getMonth() + 1<10?'0'+(now.getMonth() + 1):now.getMonth() + 1
        const date = now.getDate()<10?'0'+now.getDate():now.getDate()
        const hour = now.getHours()<10?'0'+now.getHours():now.getHours()
        const minute = now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes()
        const second = now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
      },
      Roll(datajson){
        var waterlevel=datajson.waterlevel=='不正常'?'不正常':'正常';
        const time = new Date(datajson.temptime)
        const RecordingTime = this.formatDate(time)
        var stylevalue='';
        if(waterlevel=='不正常'){
          stylevalue='width: 20%;display: inline-block;font-size: 18px; ' +
          '    font-family:PingFang-SC; ' +
          '    color:red ';
        }else{
          stylevalue='width: 20%;display: inline-block;font-size: 18px; ' +
            '    font-family:PingFang-SC; ' +
            '    color:rgba(255,255,255,0.9) ';
        }
        var RecordingTimeStyle='width: 68%;display: inline-block;font-size: 18px; ' +
          '    font-family:PingFang-SC; ' +
          '    color:rgba(255,255,255,0.9);';
        var html = ' <li style="margin-bottom:20px"><span   style="'+stylevalue+'">' + waterlevel + ' </span> <span style="'+RecordingTimeStyle+'">' + RecordingTime + '</span></li>';
        var ul = $(".right_table_td ul");
        var thistime=time.getTime();
        if(this.maxDate<thistime) {
          this.maxDate = thistime;
          var lifirst = ul.find("li:first").height();
          // var lise=ul.find("li:eq(2)").height();
          // var hei=lise-lifirst;
          var liHeight = ul.find("li:last").height();
          var lis = ul.find("li").length;
          // var ls=$(".right_table_td li").length/2+1;

          if (lis>6) {

            // ul.find("li:first").animate({},1000,function () {
            //   ul.find("li:first").fadeOut(1000);
            // });

                ul.animate({marginTop:-46 + "px"},1000,function () {

                  ul.find("li:first").remove();
                  ul.find("li:last").fadeIn(liHeight);
                  ul.css({marginTop: 0});
                  ul.append(html);
                });

          } else{
            ul.find("li:last").fadeIn();
            ul.append(html);
          }
          }

      },
      getData(){

      },
      init(){
        this.clocknum(0.34)
      },
      clocknum(num) {
        this.number = ''
        var html = '';
        var strarr = num.toString().split('');
        var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
        for (var i = 0; i < strarr.length; i++) {
          if (strarr[i] == '.') {
            html += '<div class="dot"></div>'
          } else {
            var clasname = digit_to_name[strarr[i]];
            html += '<div class="' + clasname + '">' +
              '<span class="d1"></span>' +
              '<span class="d2"></span>' +
              '<span class="d3"></span>' +
              '<span class="d4"></span>' +
              '<span class="d5"></span>' +
              '<span class="d6"></span>' +
              '<span class="d7"></span>' +
              '</div>';
          }
        }
        this.number = html
      },
      detailHandle(){
        this.$router.push({ name: 'shuiwei-detail'})
      }
    },
    beforeDestroy() {

      // if (this.timershuiwei1) {
      clearInterval(this.timershuiwei1); // 在Vue实例销毁前，清除我们的定时器
      // }
      // if (this.timershuiwei11) {
        clearInterval(this.timershuiwei11); // 在Vue实例销毁前，清除我们的定时器
      // }
    },
  }
</script>

<style scoped>
  ul{margin:0; padding:0}
  li{ list-style-type:none;}
  .exception{
    color:red!important;
  }
  .down_left1{
    position: relative;
    top: 21rem;
  }
  .left_bg{
    position: absolute;
  }
  .left_img{
    position: absolute;
    top: 0.5rem;
    left: 2rem;
  }
  .left_span{
    position: absolute;
    top:0.8rem;
    left: 6rem;
    font-size: 18px;
    font-family:PingFang-SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .down_right{
    position: relative;
    top: 22rem;
    left: 96rem;
  }
  .right_title_span1{
    position: absolute;
    left: 3rem;
    font-size: 18px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,1);
  }
  .right_detail{
    position: relative;
    display: inline;
    left: 13rem;
  }
  .right_title_span2{
    font-size: 16px;
    font-family:PingFang-SC;
    color:rgba(10,205,196,1);
  }
  .right_title_icon{
    margin-left: 0.8rem;
    margin-bottom: 0.1rem;
  }
  .right_info{
    position: relative;
  }
  .right_info_span1{
    position: absolute;
    top: 1.5rem;
    font-size: 18px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,0.9);
  }
  .right_info_span2{
    position: absolute;
    top: 3rem;
    font-size: 28px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,1);
  }
  .right_info_span3{
    position: absolute;
    top: 3.6rem;
    left: 2rem;
    font-size: 18px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,0.9);
  }
  .right_info_span4{
    position: absolute;
    top: 3.6rem;
    left: 7.5rem;
    font-size: 18px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,0.9);
  }
  .right_info_img{
    position: absolute;
    top: 4.2rem;
    left: 6rem;
  }
  .right_table{
    position: absolute;
    top: 9.2rem;
    width: 100% ;
  }
  .right_table_img{
    position: absolute;
  }
  .right_table_th{
    position: relative;
    top: 0.5rem;
  }
  .right_table_th span{
    font-size: 16px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,0.8);
  }
  .right_table_td{
    margin-top: 1.7rem;
    overflow: hidden;
  }
  /*.right_table_td span{*/
    /*margin-right: 3rem;*/
    /*font-size: 20px;*/
    /*font-family:PingFang-SC;*/
    /*color:rgba(255,255,255,0.9);*/
  /*}*/
  .clearfix1:after, .clearfix1:before {
    display: table;
    content: " "
  }
  .clearfix1:after {
    clear: both
  }
</style>
