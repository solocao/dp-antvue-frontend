<template>
  <div style="width: 17%">
    <div style="width: 4rem;height: 3rem;position: absolute;top: 37rem;left: 34rem" @click="openMask(1)">

    </div>
    <div style="width: 2rem;height: 3rem;position: absolute;top: 31rem;left: 74rem" @click="openMask(2)">

    </div>
    <div class="down_left1">
      <img class="left_bg" src="./img/title_bg.png">
      <img class="left_img" src="./img/icon1_select.png">
      <span class="left_span">Camera1</span>
      <img class="left_img_watch" src="./img/watch.png" @click="openMask(1)">
      <img class="left_frame1" src="./img/left_frame1.png" @click="openMask(1)">
    </div>
    <div class="down_left2">
      <img class="left_bg" src="./img/title_bg.png">
      <img class="left_img" src="./img/icon1_select.png">
      <span class="left_span">Camera2</span>
      <img class="left_img_watch" src="./img/watch.png" @click="openMask(2)">
      <img class="left_frame1" src="./img/left_frame2.png" @click="openMask(2)">
    </div>
    <div class="down_right">
      <img class="right_title_img" src="./img/right_img1.png">
      <span class="right_title_span1">监测设备记录</span>
<!--      <div class="right_detail">-->
<!--        <span class="right_title_span2">详情</span>-->
<!--        <img class="right_title_icon" src="./img/right_img3.png">-->
<!--      </div>-->
      <div class="right_info">
        <span class="right_info_span1">摄像头</span>
        <span class="right_info_span2">{{count}}</span>
        <span class="right_info_span3">个</span>
        <img class="right_info_img" src="./img/right_img2.png">
        <span class="right_info_span4">检测中</span>
      </div>
      <div class="right_table">
        <img class="right_table_img" src="./img/right_bg.png"/>
        <div class="right_table_th">
          <div style="width: 33%;display: inline-block">
            <span>设备名</span>
          </div>
          <div style="width: 33%;display: inline-block">
            <span>记录信息</span>
          </div>
          <div style="width: 33%;display: inline-block">
            <span>时间</span>
          </div>
        </div>
        <div v-for="item in data" class="right_table_td">
          <div style="width: 33%;display: inline-block;white-space:nowrap;">
            <span>{{item.name}}</span>
          </div>
          <div style="width: 33%;display: inline-block;white-space:nowrap;">
            <span>{{item.msg}}</span>
          </div>
          <div style="width: 33%;display: inline-block;white-space:nowrap;">
            <span>{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
    <dialog-bar v-model="sendVal" :camid="camid" type="danger" :title="title" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()"></dialog-bar>
  </div>
</template>

<script>
  import dialogBar from '@/components/dialog/dialog.vue'
  export default {
    name: 'jianceshebei',
    components:{
      'dialog-bar': dialogBar,
    },
    data () {
      return {
        count:2,
        sendVal: false,
        title:undefined,
        camid:undefined,
        data:[
          {name:'Camera1',msg:'重启',time:'21:10:10'},
          {name:'Camera2',msg:'异常重启',time:'21:10:10'},
          {name:'Camera1',msg:'重启',time:'21:10:10'},
          {name:'Camera2',msg:'关闭',time:'21:10:10'},
          {name:'Camera2',msg:'异常关闭',time:'21:10:10'},
          {name:'Camera1',msg:'重启',time:'21:10:10'},
          {name:'Camera2',msg:'异常关闭',time:'21:10:10'},
        ],
      }
    },
    methods:{
      openMask(num){
        if(num==1){
          this.camid = '331004003'
          this.title = 'Camera1'
        }else if(num==2){
          this.camid = '331004004'
          this.title = 'Camera2'
        }
        this.$nextTick(()=>{
          this.sendVal = true;
        })
      },
      clickCancel(){
        console.log('点击了取消');
      },
      clickDanger(){
        console.log('这里是danger回调')
      },
      clickConfirm(){
        console.log('点击了confirm');
      }
    }
  }
</script>

<style scoped>
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
    top:0.7rem;
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
  .left_frame1{
    position: absolute;
    top: 4rem;
    left: 2rem;
  }
  .down_left2{
    position: relative;
    top: 39rem;
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
  }
  .right_table_td span{
    margin-right: 3.5rem;
    font-size: 16px;
    font-family:PingFang-SC;
    color:rgba(255,255,255,0.9);
  }
</style>
