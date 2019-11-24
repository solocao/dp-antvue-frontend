<template>
  <div style="width: 17%">
    <div class="down_left1">
      <img class="left_bg" src="./img/title_bg.png">
      <img class="left_img" src="./img/icon5_select.png">
      <span class="left_span">除湿器</span>
      <span style="position: absolute;top: 4rem;left: 2rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">状 态</span>
      <img style="position: absolute;top: 6.5rem;left: 2rem;" src="./img/right_img2.png">
      <span style="position: absolute;top: 6rem;left: 4rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">运行</span>
      <img style="position: absolute;top: 8rem;left: 4rem;" src="./img/icon5.png">
      <span style="position: absolute;top: 12rem;left: 2rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">操作</span>
      <el-switch
        style="position: absolute;top: 12.2rem;left: 16rem;"
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
      <img style="position: absolute;top: 16rem;left: 2rem;" src="./img/chushiqi-show-1.png">
    </div>
    <div class="down_right">
      <img class="right_title_img" src="./img/right_img1.png">
      <span class="right_title_span1">除湿器设备记录</span>
      <div class="right_detail" @click="detailHandle">
        <span class="right_title_span2">详情</span>
        <img class="right_title_icon" src="./img/right_img3.png">
      </div>
      <div class="right_info">
        <span class="right_info_span1">除湿器</span>
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
            <span  :class="{exception:item.flag=='0'}">{{item.msg}}</span>
          </div>
          <div style="width: 33%;display: inline-block;white-space:nowrap;">
            <span>{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'yangan',
    data () {
      return {
        value:true,
        count:1,
        data:[
          {name:'除湿器1',msg:'运行',time:'21:10:10',flag:'1'},
          {name:'除湿器12',msg:'停止',time:'21:10:10',flag:'0'},
          {name:'除湿器123',msg:'运行',time:'21:10:10',flag:'1'},
          {name:'除湿器',msg:'停止',time:'21:10:10',flag:'0'},
          {name:'除湿器',msg:'停止',time:'21:10:10',flag:'0'},
          {name:'除湿器',msg:'运行',time:'21:10:10',flag:'1'},
          {name:'除湿器',msg:'运行',time:'21:10:10',flag:'1'},
        ],
      }
    },
  methods:{
    detailHandle(){
      this.$router.push({ name: 'chushiqi-detail'})
    }
  },
  }
</script>

<style scoped>
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
