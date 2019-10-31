<template>
  <div style="width: 17%">
    <div class="down_left1">
      <img class="left_bg" src="./img/title_bg.png">
      <img class="left_img" src="./img/icon2_select.png">
      <span class="left_span">门 禁</span>
<!--      <img class="left_img_watch" src="./img/watch.png">-->
      <span class="left2_span">状 态</span>
      <img style="position: absolute;top: 6rem;left: 1rem;" src="./img/right_img2.png">
      <span style="position: absolute;top: 5.5rem;left: 2.5rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">正 常</span>
      <img style="position: absolute;top: 8rem;left: 2.5rem;" src="./img/icon2.png">
      <img style="position: absolute;top: 8rem;left: 18rem;" src="./img/watch_adorn.png">
      <span style="position: absolute;top: 12rem;left:1rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">基本信息</span>
    </div>
    <div class="right_table" style="top:35rem;left: 1rem">
      <img class="right_table_img" src="./img/right_bg.png"/>
      <div class="right_table_th">
        <div style="width: 50%;display: inline-block;text-align: left">
          <span>门编号</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: right">
          <span>{{dataForm.doornum}}</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: left;margin-top: 2rem">
          <span>门状态</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: right">
          <span>{{dataForm.doorstatus}}</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: left;margin-top: 2rem">
          <span>卡编号</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: right">
          <span>{{dataForm.cardnum}}</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: left;margin-top: 2rem">
          <span>设备编号</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: right">
          <span>{{dataForm.equipnum}}</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: left;margin-top: 2rem">
          <span>设备地址</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: right">
          <span>{{dataForm.equipaddeess}}</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: left;margin-top: 2rem">
          <span>设备端口</span>
        </div>
        <div style="width: 50%;display: inline-block;text-align: right">
          <span>{{dataForm.equipport}}</span>
        </div>
      </div>
    </div>
    <div class="down_right">
      <img class="right_title_img" src="./img/right_img1.png">
      <span class="right_title_span1">门禁管理</span>
      <div class="right_detail" @click="detailHandle">
        <span class="right_title_span2">详情</span>
        <img class="right_title_icon" src="./img/right_img3.png">
      </div>
      <div class="right_info">
        <span class="right_info_span1">门禁</span>
        <span class="right_info_span2">{{count}}</span>
        <span class="right_info_span3">个</span>
        <img class="right_info_img" src="./img/right_img2.png">
        <span class="right_info_span4">使用中</span>
      </div>
      <div class="right_table">
        <img class="right_table_img" src="./img/right_bg.png"/>
        <div class="right_table_th">
          <div style="width: 50%;display: inline-block;white-space:nowrap;">
            <span>操作人</span>
          </div>
          <div style="width: 50%;display: inline-block;white-space:nowrap;">
            <span>操作时间</span>
          </div>
        </div>
        <div  class="right_table_td1">
          <ul></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  export default {
    name: 'menjin',
    data () {
      return {
        count:1,
        maxDate:0,
        timermenjin11:'',
        dataForm:{
          doornum:'',
          doorstatus:'',
          cardnum:'',
          equipnum:'',
          equipaddeess:'',
          equipport:'',
        },
        data:[
          {person:'运检001',time:'21:10:10'},
          {person:'运检001',time:'21:10:10'},
          {person:'运检001',time:'21:10:10'},
          {person:'运检001',time:'21:10:10'},
          {person:'运检001',time:'21:10:10'},
          {person:'运检001',time:'21:10:10'},
          {person:'运检001',time:'21:10:10'},
        ],

      }
    },
    props: ['stationdata','stationnum'],
    methods:{
      detailHandle(){
        this.$router.push({ name: 'menjin-detail'})
      },
      executeTime1(){
        if(this.stationdata==null ||this.stationdata=='undefined'||this.stationdata==''){
          this.stationdata=sessionStorage.getItem('stationID');
        }
        if(this.stationnum==null ||this.stationnum=='undefined'||this.stationnum==''){
          this.stationnum=sessionStorage.getItem('stationNum');
        }

        axios.get('/GW/host/getKgHostList.action', {
          params: {
            stationNum: this.stationnum,
            stationID: this.stationdata,
            start:0,
            limit:1000,
            queryHostString:''
          }
        }).then(response=>{

          var obj3='{"Table" '+response.data.substr(response.data.search('Table')+5,response.data.length-1);
          var datajson=JSON.parse(obj3).Table;
          if(datajson.length>0) {
            var l = 0;

            var that = this;
            that.timermenjin11 = setInterval(function () {
              l++;

              if (datajson.length - 1 == l) {
                clearInterval(that.timermenjin11);
              }
              that.Roll1(datajson[l]);

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
      Roll1(datajson){

       var hostname=datajson.hostname;
        const time = new Date(datajson.operatime)
        const RecordingTime = this.formatDate(time)
        var stylevalue='';
          stylevalue='width: 30%;display: inline-block;font-size: 18px; ' +
            '    font-family:PingFang-SC; ' +
            '    color:rgba(255,255,255,0.9); ';

        var RecordingTimeStyle='width: 68%;display: inline-block;font-size: 18px; ' +
          '    font-family:PingFang-SC; ' +
          '    color:rgba(255,255,255,0.9);';
        var html = ' <li style="margin-bottom:20px"><span   style="'+stylevalue+'">' + hostname + ' </span> <span style="'+RecordingTimeStyle+'">' + RecordingTime + '</span></li>';
        var ul = $(".right_table_td1 ul");
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

      }
    },
    created(){
      axios.get('/GW/door/getKgDoorList.action',{
        params:{start:0,limit:1,kgStationId:4,queryString:""}
      }).then(({data})=>{
        data = eval('(' + data + ')')
        if(data.Table.length>0){
          this.dataForm = data.Table[0]
        }
      });
      this.executeTime1();

    },
    beforeDestroy() {

      // if (this.timershuiwei11) {
        clearInterval(this.timermenjin11); // 在Vue实例销毁前，清除我们的定时器
      // }
      // if (this.timershuiwei1) {
        clearInterval(this.timermenjin1); // 在Vue实例销毁前，清除我们的定时器
      // }
    }
  }
</script>

<style scoped>
  .right_table_td1>ul>li{ float: left;}
  ul{margin:0; padding:0}
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
  .left2_span{
    position: absolute;
    top:3.7rem;
    left: 1rem;
    font-size: 16px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,1);
  }
  .left_img_watch{
    position: absolute;
    top: 0.8rem;
    left: 18rem;
  }
  .down_right{
    position: absolute;
    top: 25.75rem;
    left: 98rem;
    width: 17%;
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
    position: relative;
    top: 6rem;
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
  .right_table_td1{
    width:100%;
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
