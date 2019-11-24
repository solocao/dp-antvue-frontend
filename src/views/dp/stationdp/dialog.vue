<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dialog-title">
      </div>
      <div >
        <br/>
        <video id="video1" webkit-playsinline='true' playsinline='true'>
          你的浏览器不支持html5的video标签
        </video>
        <div style="float: right;width:5rem;margin-left:13rem;margin-top:-8rem;text-align:center; display: table-cell;
    vertical-align: middle;" id="video_dialog">
          <ul class="clearfix1">
            <li >
              <div class="dialog_button">
              <el-button @click="play()" class="station_video_button">播放</el-button>
              <el-button @click="Close()" class="station_video_button">关闭</el-button>
              </div>
            </li>
            <li>
              <div class="video_center" >
              <button class="quartercircle divLeft"  @click="PL()" style="">
                <!--<a  style="background: url(./img/L.png) no-repeat center;"></a>-->
              </button>
              <button class="quartercircle1 divTop" @click="TU()" style="">
                <!--<a  style="background: url(./img/up.png) no-repeat center;"></a>-->
              </button>
              <button class="quartercircle divRight" @click="PR()" style="">
                <!--<a  style="background: url(./img/R-hover.png) no-repeat center;"></a>-->
              </button>
              <button class="quartercircle1 divBottom" @click="TD()" style="">
                <!--<a  style="display:block;position:absolute;z-index:50;background: url(./img/down-hover.png) no-repeat center;"></a>-->
              </button>
                <!--<div class="circle" style="">-->
                  <!--&lt;!&ndash;<span style="">OK</span>&ndash;&gt;-->
                <!--</div>-->
              </div>
            </li>
            <li class="video_li">
              <span class="span_p">远近</span>
              <button class="station_video_btn1" @click="ZOUT()">
              <!--<img class="station_video_distance" src="./img/station_video_distance.png"/>-->
                <img class="station_video_reduce" src="./img/station_video_reduce.png"/>
                <!--<img class="station_video_plus" src="./img/station_video_plus.png"/>-->
              </button>
              <button class="station_video_btn2" @click="ZIN()">
                <!--<img class="station_video_distance" src="./img/station_video_distance.png"/>-->
                <img class="station_video_plus" src="./img/station_video_plus.png"/>
                <!--<img class="station_video_plus" src="./img/station_video_plus.png"/>-->
              </button>
            </li>
          </ul>
          <!--<p>-->
            <!--<el-button style="width: 1rem" type="button" @click="ZIN()">拉近</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="ZOUT()">拉远</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="FN()">调近</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="FR()">调远</el-button>-->
          <!--</p>-->
          <!--<p>-->
            <!--<el-button style="width: 1rem" type="button" @click="TU()">上</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="TD()">下</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="PL()">左</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="PR()">右</el-button>-->
          <!--</p>-->
          <!--<p>-->
            <!--<el-button style="width: 1rem" type="button" @click="TUPL()">左上</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="TDPL()">左下</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="TUPR()">右上</el-button>-->
            <!--<el-button style="width: 1rem" type="button" @click="TDPR()">右下</el-button>-->
          <!--</p>-->
          <!--<p>-->
            <!--<el-button style="width: 1rem" type="button" @click="STOP()">停止</el-button>-->
          <!--</p>-->
        </div>
      </div>
      <div class="btns">
      </div>
      <div class="close-btn station_video_button" @click="closeMask"><i style="color: #fff;" class="el-icon-close"></i></div>
    </div>
  </div>
</template>
<script>
  // import test from './hls/hls'
  var hls = undefined
  export default {
    props: {
      value: {},
      // 类型包括 defalut 默认， danger 危险， confirm 确认，
      type: {
        type: String,
        default: 'default'
      },
      title: {
        type: String,
        default: ''
      },
      camid:{
        type:String,
        required:true,
      }
    },
    data() {
      return {
        showMask: false
      }
    },
    methods: {
      closeMask() {
        this.showMask = false
        this.Close()
      },
      play()
      {
        // var m3u8 = hlsUrl.value;
        var m3u8 = '/video/'+this.camid+'.m3u8'
        console.log(m3u8)
        var video = document.querySelector('#video1')
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = m3u8
          if (video.paused) {
            video.play()
          } else {
            video.pause()
          }
        } else if (Hls.isSupported()) {
          hls = new Hls()
          hls.loadSource(m3u8)
          hls.attachMedia(video)
          hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play()
          })
        } else {
          alert('hls no support')
        }
      },
      Close() {
        var video = document.querySelector('#video1')
        video.src = null
        if (hls != undefined) {
          hls.destroy()
        }
      },
      SendHttpRequest(jsonstr) {

        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/viptz/ptz')
        xhr.send(jsonstr)
        window.setTimeout(()=>{
          var data = { 'camid': this.camid, 'cmd': 'STOP', 'speed': 3 }
          var jsonstr1 = JSON.stringify(data)
          var xhr1 = new XMLHttpRequest()
          xhr1.open('POST', '/viptz/ptz')
          xhr1.send(jsonstr1)
        },500)
      },
      ZIN() {
        var data = { 'camid': this.camid, 'cmd': 'ZIN', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      ZOUT() {
        var data = { 'camid': this.camid, 'cmd': 'ZOUT', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      FN() {
        var data = { 'camid': this.camid, 'cmd': 'FN', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      FR() {
        var data = { 'camid': this.camid, 'cmd': 'FR', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      TU() {
        var data = { 'camid': this.camid, 'cmd': 'TU', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      TD() {
        var data = { 'camid': this.camid, 'cmd': 'TD', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      PL() {
        var data = { 'camid': this.camid, 'cmd': 'PL', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      PR() {
        var data = { 'camid': this.camid, 'cmd': 'PR', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      TUPL() {
        var data = { 'camid': this.camid, 'cmd': 'TUPL', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      TDPR() {
        var data = { 'camid': this.camid, 'cmd': 'TDPR', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      TUPR() {
        var data = { 'camid': this.camid, 'cmd': 'TUPR', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      TDPL() {
        var data = { 'camid': this.camid, 'cmd': 'TDPL', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      },
      STOP() {
        var data = { 'camid': this.camid, 'cmd': 'STOP', 'speed': 3 }
        var jsonstr = JSON.stringify(data)
        this.SendHttpRequest(jsonstr)
      }
    },
    mounted() {
      this.showMask = this.value
    },
    watch: {
      value(newVal, oldVal) {
        this.showMask = newVal
      },
      showMask(val) {
        this.$emit('input', val)
      }
    }
  }
</script>
<style lang="less" scoped>
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
  *,dialog{font-family: "微软雅黑";}
  .dialog {
    position: fixed;
    /* display: table; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;

  .dialog-container {
    width: 14rem;
    height: 8rem;
    background: black;
    position: relative;
    /* float: none; */
    top: 1rem;
    left: 3rem;
    bottom: 2rem;

  .dialog-title {
    width: 4rem;
    height: 60px;
    font-size: 18px;
    color: #FFF;
    font-weight: 600;
    padding: 16px 50px 0 20px;
    box-sizing: border-box;
  }

  .content {
    color: #797979;
    line-height: 26px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .inp {
    margin: 10px 0 0 20px;
    width: 200px;
    height: 40px;
    padding-left: 4px;
    border-radius: 4px;
    border: none;
    background: #efefef;
    outline: none;

  &
  :focus {
    border: 1px solid #509EE3;
  }

  }
  .btns {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: right;
    padding: 0 16px;
    box-sizing: border-box;

  &
  > div {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    color: #ffffff;
    background: #f1f1f1;
    border-radius: 8px;
    margin-right: 12px;
    cursor: pointer;
  }

  .default-btn {
    color: #787878;

  &
  :hover {
    color: #509EE3;
  }

  }
  .danger-btn {
    background: #EF8C8C;

  &
  :hover {
    background: rgb(224, 135, 135);
  }

  &
  :active {
    background: #EF8C8C;
  }

  }
  .confirm-btn {
    color: #ffffff;
    background: #509EE3;

  &
  :hover {
    background: #6FB0EB;
  }

  }
  }
  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;

  &
  :hover {
    font-weight: 600;
  }

  }
  }
  }
  video {
    bottom: 0px;
    width: 10rem;
    height: 8rem;
    border: 2px solid #fff;
    position: absolute;
    -o-object-fit: fill;
    object-fit: fill;
    background-color: #000;
  }
</style>
