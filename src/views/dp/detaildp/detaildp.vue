<template>
  <div class="Index_bgImg">
    <p  class="Index_left_p2" style="color:rgba(40,205,156,1)">智能预警平台</p>
    <div style="position: relative;top: 5rem;">
      <img style="position: absolute;top:0.28rem;" src="./img/icon-back.png">
      <span @click="backHandle" style="position: absolute;left:1rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">返回</span>
    </div>
    <div class="top_center">
      <div class="div_icon_station"></div>
      <div class="div_text_station">
        <!--<keep-alive>-->
           <!--<router-view>-->
        {{stationName}}
           <!--</router-view>-->
        <!--</keep-alive>-->
      </div>
    </div>
    <div class="center_div">
      <el-row>
        <el-col :span="4">
          <div class="col_div" @click="changeActive(1)">
            <img v-if="activeNum!=1" class="col_img" src="./img/frame.png">
            <img v-if="activeNum==1" class="col_img" src="./img/frame_select.png">
            <img  v-if="activeNum!=1" class="col_icon" style="width: 15%;height: 35%;top: 1.7rem" src="./img/icon1.png">
            <img  v-if="activeNum==1" class="col_icon" style="width: 15%;height: 35%;top: 1.7rem" src="./img/icon1_select.png">
            <span class="col_span">视频监控</span>
          </div>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="col_div" @click="changeActive(2)">
            <img v-if="activeNum!=2" class="col_img" src="./img/frame.png">
            <img v-if="activeNum==2" class="col_img" src="./img/frame_select.png">
            <img  v-if="activeNum!=2" class="col_icon" src="./img/icon2.png">
            <img  v-if="activeNum==2" class="col_icon" src="./img/icon2_select.png">
            <span class="col_span">门 &nbsp; 禁</span>
          </div>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="col_div" @click="changeActive(4)">
            <img v-if="activeNum!=4" class="col_img" src="./img/frame.png">
            <img v-if="activeNum==4" class="col_img" src="./img/frame_select.png">
            <img  v-if="activeNum!=4" class="col_icon" src="./img/icon4.png">
            <img  v-if="activeNum==4" class="col_icon" src="./img/icon4_select.png">
            <span class="col_span">水 &nbsp; 位</span>
          </div>
        </el-col>
<!--        <el-col :span="4">-->
<!--          <div class="col_div" @click="changeActive(5)">-->
<!--            <img v-if="activeNum!=5" class="col_img" src="./img/frame.png">-->
<!--            <img v-if="activeNum==5" class="col_img" src="./img/frame_select.png">-->
<!--            <img  v-if="activeNum!=5" class="col_icon" style="width: 15%;height: 35%;top: 1.7rem" src="./img/icon5.png">-->
<!--            <img  v-if="activeNum==5" class="col_icon" style="width: 15%;height: 35%;top: 1.7rem" src="./img/icon5_select.png">-->
<!--            <span class="col_span">除 湿 器</span>-->
<!--          </div>-->
<!--        </el-col>-->
        <el-col :span="4" :offset="1">
          <div class="col_div" @click="changeActive(6)">
            <img v-if="activeNum!=6" class="col_img" src="./img/frame.png">
            <img v-if="activeNum==6" class="col_img" src="./img/frame_select.png">
            <img  v-if="activeNum!=6" class="col_icon" src="./img/icon6.png">
            <img  v-if="activeNum==6" class="col_icon" src="./img/icon6_select.png">
            <span class="col_span">温湿度检测仪</span>
          </div>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="col_div" @click="changeActive(3)">
            <img v-if="activeNum!=3" class="col_img" src="./img/frame.png">
            <img v-if="activeNum==3" class="col_img" src="./img/frame_select.png">
            <img  v-if="activeNum!=3" class="col_icon" style="width: 15%;height: 35%;top: 1.7rem" src="./img/icon3.png">
            <img  v-if="activeNum==3" class="col_icon" style="width: 15%;height: 35%;top: 1.7rem" src="./img/icon3_select.png">
            <span class="col_span">烟 &nbsp; 感</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-if="activeNum==1" class="div_middle middle1">
    </div>
    <div v-if="activeNum==2" class="div_middle middle2">
    </div>
    <div v-if="activeNum==3" class="div_middle middle3">
    </div>
    <div v-if="activeNum==4" class="div_middle middle4">
    </div>
    <div v-if="activeNum==5" class="div_middle middle5">
    </div>
    <div v-if="activeNum==6" class="div_middle middle6">
    </div>
    <jianceshebei v-if="activeNum==1" :stationdata="stationID"></jianceshebei>
    <menjin v-if="activeNum==2" :stationdata="stationID" :stationnum="stationNum"></menjin>
    <yangan v-if="activeNum==3" :stationdata="stationID"></yangan>
    <shuiwei v-if="activeNum==4" :stationdata="stationID"></shuiwei>
    <chushiqi v-if="activeNum==5" :stationdata="stationID"></chushiqi>
    <wenshidu v-if="activeNum==6" :stationdata="stationID"></wenshidu>
  </div>
</template>

<script>
  import menjin from './menjin'
  import jianceshebei from './jianceshebei'
  import yangan from './yangan'
  import shuiwei from './shuiwei'
  import chushiqi from './chushiqi'
  import wenshidu from './wenshidu'
  export default {
    name: 'detail',
    components:{
      menjin,
      jianceshebei,
      yangan,
      shuiwei,
      chushiqi,
      wenshidu

    },
    data () {
      return {
        stationName:'',
        stationNum:'',
        stationID:''
      }
    },
    mounted(){
      window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
      // alert(this.$route.params.cityName);
      if(this.$route.params.stationName==null ||this.$route.params.stationName=='undefined'){
        this.stationName=sessionStorage.getItem('stationName');
        this.stationNum=sessionStorage.getItem('stationNum')
        this.stationID=sessionStorage.getItem('stationID')
      }else{
        this.stationName=this.$route.params.stationName;
        this.stationNum=this.$route.params.stationNum;
        this.stationID=this.$route.params.stationID;
      }
    },
    methods:{
      changeActive(num){
        this.activeNum = num
        //温湿度
        if(num==6){
          // this.$refs.wenshidu.getTemp();
        }
      },
      backHandle(){
        this.activeNum = 1
        this.$router.push({ name: 'firstdp'})
      },
      beforeunloadHandler(){
        sessionStorage.setItem('stationName', this.stationName);
        sessionStorage.setItem('stationNum', this.stationNum);
        sessionStorage.setItem('stationID', this.stationID);
      }
    },
    computed:{
      activeNum: {
        get() {
          return this.$store.state.detail.activeNum;
        },
        set(val) {
          this.$store.commit("detail/updateActiveNum", val);
        }
      },
    },
    beforeDestroy() {
      sessionStorage.setItem('stationName', this.stationName);
      sessionStorage.setItem('stationNum', this.stationNum);
      sessionStorage.setItem('stationID', this.stationID);
      // this.$session.set('stationName', this.$route.params.stationName);
    },
  }
</script>

<style scoped>
  .el-row{
    height: 100%;
  }
  .el-col-4{
    height: 100%;
  }
  .Index_bgImg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url('./img/detailbg.png');
    padding: 1rem 2rem 2rem;
  }
  .Index_left_p2 {
    font-size:2em;height:50px;width:100%;text-align:center;line-height:50px;
    margin-top: 1rem;
    opacity: 1;
    position: absolute;
    /*font-size: 40px;*/

    background: url('../dpimg/bt.png') center no-repeat;

  }
  .top_center{
    position: relative;
    top: 8.5rem;
    left: 15rem;
  }
  .div_icon_station{
    background:url(./img/switch_station.png) no-repeat;
    height: 2rem;
    display: inline-block;
    width: 3rem;
  }
  .div_text_station{
    display: inline-block;
    height: 2rem;
    position:relative;
    top:-0.8rem;
    font-size: 18px;
    font-family:PingFang-SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .center_div{
    position: absolute;
    width:91rem;
    height: 6rem;
    left: 14.5rem;
    top:12.9rem;
  }
  .col_div{
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
  }
  .col_img{
    width: 95%;
    height: 60%;
    margin-top: 15px;
  }
  .col_icon{
    position: absolute;
    top:1.5rem;
    left: 2.5rem;
  }
  .col_span{
    position: absolute;
    top:1.7rem;
    left: 6rem;
    font-size: 18px;
    font-family:PingFang-SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .div_middle{
    width: 62%;
    height: 90%;
    position: absolute;
    top: 30rem;
    left: 25rem;
  }
  .middle1{
    background: url(./img/middle1.png) no-repeat;
  }
  .middle2{
    background: url(./img/middle2.png) no-repeat;
  }
  .middle3{
    background: url(./img/middle3.png) no-repeat;
  }
  .middle4{
    background: url(./img/middle4.png) no-repeat;
  }
  .middle5{
    background: url(./img/middle5.png) no-repeat;
  }
  .middle6{
    background: url(./img/middle6.png) no-repeat;
  }
</style>

