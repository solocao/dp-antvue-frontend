<template>
  <div  class="first_main">
    <img class="bg_center_first" src="../img/bg-center.png">

    <button class="btn1 ripple" @click="toFirstDp">
      <span class="btn_span_1">1</span>
      <span class="btn_span_2">标准化站所智能预警系统</span>
      <span class="btn_span_3">Intelligent Early Warning System</span>
    </button>
    <button class="btn2 ripple" @click="toSecondDp">
      <span class="btn_span_1">2</span>
      <span class="btn_span_2">视频监控系统</span>
      <span class="btn_span_3_2">Video Surveillance System</span>
    </button>
    <button class="btn3 ripple" @click="tothreeDp">
      <span class="btn_span_1">3</span>
      <span class="btn_span_2">空开系统</span>
      <span class="btn_span_3_1">Open system</span>
    </button>
    <button class="btn4 ripple" >
      <span class="btn_span_1">4</span>
      <span class="btn_span_2">全天候智能监控系统</span>
      <span class="btn_span_3">All weather intelligent monitoring system</span>
    </button>

  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    // created:function(){
    //
    //   $("html").css({fontSize:'100'});
    // },
    // watch:{
    //   $route(){
    //     alert(1)
    //     //跳转到该页面后需要进行的操作
    //     $("html").css({fontSize:'100'});
    //   }
    // },
    mounted(){
      window.onresize=function(){

        var whei=$(window).width();
        $("html").css({fontSize:whei/10})
      }
      var that=this;
      var whei=$(window).width();
      $("html").css({fontSize:whei/10})
    },
    methods:{
      toFirstDp(){
        this.$router.push({name:'firstdp'})
      },
      toSecondDp(){
        this.$router.push({name:'VideoSurveillancedp'})
      },
      tothreeDp(){
        window.location.href = "https://115.236.28.75:47094/#/"
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
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box}
  *,first_main{padding:0px;	margin:0px;font-family: "微软雅黑";}
  /*.bg {width:100%;height:100%;position:absolute;z-index:-1;}*/
  .bg_center_first{
    margin-top: 1.5rem;
    margin-left: .5rem;
    width: 9rem;
    height: 4rem;

    /*margin-top: 3rem;*/
    /*margin-left: .5rem;*/
    /*width: 17rem;*/
    /*height: 7rem;*/
  }
  .first_main{
   background:#000d4a url(../img/bg-backgroud.png) center top; background-size:100% 100%; padding-bottom: 30px;font-size: .1rem;height:100%;width:100%;
  }
  .btn1{
    cursor:pointer;
    outline: none;
    background: url('../img/bg-form-1.png');
    background-size:100% 100%;
    margin-top: -9rem;
    margin-left: .1rem;
    /* position: absolute; */
    /* float: left; */
    width: 2.5rem;
    height: .8rem;
    border: 0;
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* background: url(../dpimg/firstdp/bg-select-L1.png) no-repeat; */
    /* background-size: 100% 100%; */
    /* background-size: 1rem; */
    color: #00CCFF;
    /* width: 1.1rem; */
    font-size: .2rem;
    /* height: 0.5rem; */
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .btn1:hover,.btn2:hover,.btn3:hover,.btn4:hover{background: url('../img/bg-form-2.png');
    background-size:100% 100%;}
  .btn1:active,.btn2:active,.btn3:active,.btn4:active{box-shadow:inset 0 10px 15px rgba(0,0,0,.125);}

  .ripple {
    position: relative;
    overflow: hidden;
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  .btn2{
    cursor:pointer;
    outline: none;
    background: url('../img/bg-form-1.png');
    background-size:100% 100%;
    margin-top: -7rem;
    /* position: absolute; */
    /* float: left; */
    width: 2.5rem;
    height: .8rem;
    border: 0;
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* background: url(../dpimg/firstdp/bg-select-L1.png) no-repeat; */
    /* background-size: 100% 100%; */
    /* background-size: 1rem; */
    color: #00CCFF;
    /* width: 1.1rem; */
    font-size: .2rem;
    /* height: 0.5rem; */
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .btn3{
    cursor:pointer;
    outline: none;
    background: url('../img/bg-form-1.png');
    background-size:100% 100%;
    margin-top: -9rem;
    margin-left: -.04rem;
    /* position: absolute; */
    /* float: left; */
    width: 2.5rem;
    height: .8rem;
    border: 0;
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* background: url(../dpimg/firstdp/bg-select-L1.png) no-repeat; */
    /* background-size: 100% 100%; */
    /* background-size: 1rem; */
    color: #00CCFF;
    /* width: 1.1rem; */
    font-size: .2rem;
    /* height: 0.5rem; */
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .btn4{
    cursor:pointer;
    outline: none;
    background: url('../img/bg-form-1.png');
    background-size:100% 100%;
    margin-top: -7rem;
    margin-left: 7.5rem;
    /* position: absolute; */
    /* float: left; */
    width: 2.5rem;
    height: .8rem;
    border: 0;
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* -webkit-appearance: none; */
    /* background: url(../dpimg/firstdp/bg-select-L1.png) no-repeat; */
    /* background-size: 100% 100%; */
    /* background-size: 1rem; */
    color: #00CCFF;
    /* width: 1.1rem; */
    font-size: .2rem;
    /* height: 0.5rem; */
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .btn_span_1{
    font-size: .4rem;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: rgba(143,194,230,0.5);
    float: left;
    margin-left: .3rem;
  }
  .btn_span_2{
    font-size: .15rem;
    font-family: Noto Sans S Chinese;
    /* font-weight: 500; */
    color: rgba(255,255,255,1);
    float: left;
    margin-top: .1rem;
    margin-left: .03rem;
    /* margin-left: 1rem; */
    /* margin-left: 1rem; */
    display: inline-block;
  }
  .btn_span_3{
    font-size: .09rem;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: rgba(40,205,156,1);
    margin-top: 0rem;
    margin-left: .03rem;
    /* margin-left: 1rem; */
    /* position: absolute; */
    /* top: -2rem; */
    float: left;
    display: inline-block;
  }
  .btn_span_3_1{
    font-size: .09rem;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: rgba(40,205,156,1);
    margin-top: .34rem;
    margin-left: -0.6rem;
    /* position: absolute; */
    /* top: -2rem; */
    float: left;
  }

  .btn_span_3_2{
    font-size: .09rem;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: rgba(40,205,156,1);
    margin-top: .35rem;
    margin-left: -0.9rem;
    /* position: absolute; */
    /* top: -2rem; */
    float: left;
  }

  .click_div{
    height: 13%;
    width: 28%;
    position: relative;
    top:35%;
    left: 70%;
  }
  .click2_div{
    height: 13%;
    width: 28%;
    position: relative;
    top:43%;
    left: 70%;
  }
  .click3_div{
    height: 13%;
    width: 28%;
    position: relative;
    top:51%;
    left: 70%;
  }
</style>