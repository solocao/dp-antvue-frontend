<template>
  <div style="width: 17%">
    <div style="position: absolute;top: 21rem;">
      <img style="position: relative;top: 3rem;left: 47rem;" src="./img/yangan-show-g.png">
      <img style="position: relative;top: 3rem;left: 50rem;" src="./img/yangan-show-r.png">
    </div>
    <div class="down_left1">
      <img class="left_bg" src="./img/title_bg.png">
      <img class="left_img" src="./img/icon3_select.png">
      <span class="left_span">烟感</span>
<!--      <img style=" position: absolute;top: 4rem;left: 1.5rem;" src="./img/radar.png">-->
      <span style="position: absolute;top: 22rem;left: 2rem;font-size: 16px;font-family:PingFang-SC;font-weight:bold;color:rgba(255,255,255,1);">状 态</span>
      <span style="position: absolute;top: 24rem;left: 2rem;font-size: 14px;font-family:PingFang-SC;color:rgba(255,255,255,1);">烟感1</span>
      <img style=" position: absolute;top: 26rem;left: 2rem;" src="./img/yangan-g.png">
      <span style="position: absolute;top: 29rem;left: 2rem;font-size: 14px;font-family:PingFang-SC;color:rgba(40,205,156,1);">正常</span>
      <span style="position: absolute;top: 24rem;left: 12rem;font-size: 14px;font-family:PingFang-SC;color:rgba(255,255,255,1);">烟感2</span>
      <img style=" position: absolute;top: 26rem;left: 12rem;" src="./img/yangan-r.png">
      <span style="position: absolute;top: 29rem;left: 12rem;font-size: 14px;font-family:PingFang-SC;color:red;">异常</span>
    </div>
    <div class="down_right">
      <img class="right_title_img" src="./img/right_img1.png">
      <span class="right_title_span1">烟感设备记录</span>
      <div class="right_detail" @click="detailHandle">
        <span class="right_title_span2">更多</span>
        <img class="right_title_icon" src="./img/right_img3.png">
      </div>
      <div class="right_info">
        <span class="right_info_span1">烟感</span>
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
          <div style="width: 33%;display: inline-block">
            <span>记录信息</span>
          </div>
          <div style="width: 33%;display: inline-block">
            <span>时间</span>
          </div>
        </div>
        <div  class="right_table_td2">
          <ul></ul>
          <!--<div style="width: 33%;display: inline-block;white-space:nowrap;">-->
            <!--<span>{{item.name}}</span>-->
          <!--</div>-->
          <!--<div style="width: 33%;display: inline-block;white-space:nowrap;">-->
            <!--<span  :class="{exception:item.flag=='0'}">{{item.msg}}</span>-->
          <!--</div>-->
          <!--<div style="width: 33%;display: inline-block;white-space:nowrap;">-->
            <!--<span>{{item.time}}</span>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  export default {
    name: 'yangan',
    data () {
      return {
        timeryangan1:'',
        timeryangan11:'',
        number:'',
        liNum:0,
        maxDate:0,
        count:2,
        data:[
          {name:'烟感1',msg:'正常',time:'21:10:10',flag:'1'},
          {name:'烟感2',msg:'异常',time:'21:10:10',flag:'0'},
          {name:'烟感1',msg:'正常',time:'21:10:10',flag:'1'},
          {name:'烟感2',msg:'异常',time:'21:10:10',flag:'0'},
          {name:'烟感2',msg:'异常',time:'21:10:10',flag:'0'},
          {name:'烟感1',msg:'正常',time:'21:10:10',flag:'1'},
          {name:'烟感2',msg:'正常',time:'21:10:10',flag:'1'},
        ],
        dataForm:{
          time:[]
        }
      }
    },
    props: ['stationdata'],
    created(){
      this.executeTime1();
    },
    methods:{
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
            that.timeryangan11 = setInterval(function () {


              if (datajson.length - 1 == l) {
                clearInterval(that.timeryangan11);
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
        var waterlevel=datajson.sf6>0?'不正常':'正常';
        const time = new Date(datajson.sf6time)
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
        var ul = $(".right_table_td2 ul");
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
      detailHandle(){
        this.$router.push({ name: 'yangan-detail'})
      }

    },
    beforeDestroy() {

      // if (this.timeryangan1) {
        clearInterval(this.timeryangan1); // 在Vue实例销毁前，清除我们的定时器
      // }
      // if (this.timeryangan11) {
        clearInterval(this.timeryangan11); // 在Vue实例销毁前，清除我们的定时器
      // }
    }
  }
</script>

<style scoped>
  ul{margin:0; padding:0}
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
    top: 0.8rem;
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
  .right_table_td2{
    margin-top: 1.7rem;
    overflow: hidden;
  }
  /*.right_table_td span{*/
    /*margin-right: 3.5rem;*/
    /*font-size: 16px;*/
    /*font-family:PingFang-SC;*/
    /*color:rgba(255,255,255,0.9);*/
  /*}*/
</style>
