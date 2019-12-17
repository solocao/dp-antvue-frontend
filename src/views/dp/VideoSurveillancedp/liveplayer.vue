<!--  -->
<template>
    <div class="video-container">
        <el-button @click="goBack">返回</el-button>
        <div class="videoPlay" >
            <playBack v-if="playBackVisible" :devid="serial" :channel="code" :streamID="streamID" @closePlayBack="closePlayBack" :token="token"></playBack>
            <live-player v-if="!playBackVisible" class="video" ref="player" :videoUrl="videoUrl" v-loading="loading" fluent autoplay live stretch></live-player>
        </div>
        <div class="myVideoControl">
             <div class="video_center" >
              <button class="quartercircle divLeft" @click="ptzControl('left')"  style="">
                <!--<a  style="background: url(./img/L.png) no-repeat center;"></a>-->
              </button>
              <button class="quartercircle1 divTop" @click="ptzControl('up')" style="">
                <!--<a  style="background: url(./img/up.png) no-repeat center;"></a>-->
              </button>
              <button class="quartercircle divRight" @click="ptzControl('right')" style="">
                <!--<a  style="background: url(./img/R-hover.png) no-repeat center;"></a>-->
              </button>
              <button class="quartercircle1 divBottom" @click="ptzControl('down')" style="">
                <!--<a  style="display:block;position:absolute;z-index:50;background: url(./img/down-hover.png) no-repeat center;"></a>-->
              </button>
             </div>
             <div class="dialog_button">
              <el-button  class="station_video_button" @click="play(players)">播放</el-button>
              <el-button  class="station_video_button" @click="stop()">暂停</el-button>
              </div>
             <div class="dialog_button1">
              <el-button class="station_video_button" @click="ptzControl('zoomout')">-</el-button>
              <el-button  class="station_video_button" @click="ptzControl('zoomin')">+</el-button>
              </div>
             <div class="dialog_button2">
              <el-button class="station_video_button" v-for="(item,index) in players" :key="index" type="primary" @click="shuld(item)">{{ item.Model }}{{item.Channel}}</el-button>
              </div>
             <div class="dialog_button3">
                <el-button class="station_video_button" @click="lookHistory()"  type="primary">历史回放</el-button>
              </div>
        </div>
        <!-- <div class="videoControl" id="video_dialog">
            <div class="video_button">
                <el-button type="primary" @click="play(players)">播放</el-button>
                <el-button type="primary" @click="stop()">暂停</el-button>
            </div>
            <div class="video_button">
                <el-button type="primary" @click="ptzControl('zoomin')">放大</el-button>
                <el-button type="primary" @click="ptzControl('zoomout')">缩小</el-button>
            </div>
            <div class="video_button">
                <el-button type="primary" @click="ptzControl('left')"> 左</el-button>
                <el-button type="primary" @click="ptzControl('up')">上</el-button>
                <el-button type="primary" @click="ptzControl('right')"> 右</el-button>
                <el-button type="primary" @click="ptzControl('down')">下</el-button>
            </div>
            <div class="video_button">
                 <el-button v-for="(item,index) in players" :key="index" type="primary" @click="shuld(item)">{{ item.Model }}{{item.Channel}}</el-button>
            </div>
            <div class="video_button">
                <el-button type="primary" @click="lookHistory()">历史回放</el-button>
            </div>
        </div> -->
    </div>
</template>

<script>
    import LivePlayer from '@liveqing/liveplayer'
    //需要用到的接口
    import {
        Login,
        getChannelList,
        streamStart,
        controlPtz,
        streamStop
    } from '../../../utils/util'
    import playBack from './PlaybackTimebox'
    export default {
        data() {
            return {
                camidList: [],
                players: [],
                token: '',
                code: '',
                serial: '',
                command: '',
                streamID: '',
                videoUrl: '',
                loading: false,
                playBackVisible: false
            }
        },
        components: {
            LivePlayer,
            playBack
        },
        mounted() {
            this.getChannels()
        },
        methods: {
            goBack() {
               this.$router.go(-1)
            },
            camera(){
               
            },
            closePlayBack () {},
            lookHistory () {
                this.playBackVisible = true
            },
            getChannels() {
                // 接口需要token  调用登录接口获取token
                this.loading = true
                const parmas = {
                    'username': "admin",
                    'password': "413b483076832cb36e29c6a8de54ae1e"
                }
                Login(parmas.username, parmas.password).then(res => {
                    this.token = res.data.URLToken
                    getChannelList(this.token, 'true').then(res => {
                        console.log(res)
                        this.players = res.data.ChannelList.filter(function (value) {
                            return value.DeviceID === '34020000001110000009'
                            })
                        this.shuld(this.players[0])
                    })
                })
            },
            shuld(data) {
                this.serial = data.DeviceID
                this.code = data.ID
                this.play()
            },
            play() {
                this.loading = true
                streamStart(this.serial, this.code, this.token).then(res => {
                    var indexnum = res.data.FLV.indexOf('10000');
                    var fivurl = res.data.FLV.substr(indexnum + 5);
                    this.videoUrl = fivurl || ''
                    this.streamID = res.data.StreamID
                    this.loading = false
                })
            },
            ptzControl(command) {
                controlPtz(this.serial, this.code, command, this.token).then(res => {
                    window.setTimeout(() => {
                        this.ptzStop()
                    }, 100)
                })
            },
            ptzStop() {
                controlPtz(this.serial, this.code, 'stop', this.token).then(res => {})
            },
            stop() {
                streamStop(this.serial, this.code, this.token).then(res => {})
            }
        }
    }
</script>

<style scoped>
    .video-container {
        overflow: hidden;
        background-color: rgba(0,0,0,.4);
        height: 1080px;
    }
    .myVideoControl {
      height: 560px;
      width: 400px;
      background-color: black;
      position: absolute;

      top: 140px;
      left: 1100px;
    }
        .videoPlay {
        width: 1000px;
        height: 800px;
        position: relative;
        left: 30%;
        top: 100px;
        transform: translateX(-50%);
    }
    /* .video {
        width: 100%;
    }
    .videoControl {
        width: 30%;
    }
    */
    .video_button {
        margin-top: 20px;
        margin-left: 30px;
    } 

    .video_center{
  background:url('../stationdp/img/video-center.png') center no-repeat;
  width: 400px;
  height: 400px;
  position: absolute;
left: 0;
top: 0
  /* -webkit-box-shadow: 0px 0px 110px rgba(180, 180, 180, 0.3) inset, 0px 0px 5px #D3D3D3; */
  /* box-shadow: 0px 0px 110px rgba(180, 180, 180, 0.3) inset, 0px 0px 5px #D3D3D3; */
}

.quartercircle{
  border: 0;
  outline: none;
  cursor: pointer;
  position: absolute;
  width: 85px;
  height: 200px;
  /*-webkit-border-radius: 200px 0 0 0;*/
}
.quartercircle1{
  border: 0;
  outline: none;
  cursor: pointer;
  position: absolute;
  width: 200px;
  height: 85px;
  /*-webkit-border-radius: 200px 0 0 0;*/
}
.divLeft{
  background:url('../stationdp/img/L.png') center no-repeat;
  top: 25%;
  left: 14.2%;
  /*transform:rotate(-45deg);*/
  /*-webkit-mask: url(../stationdp/img/L.png);*/
  /*-webkit-mask-size: cover;*/
}
.divTop{
  background:url('../stationdp/img/up.png') center no-repeat;
  top: 14.21%;
  left: 25.15%;
  /*transform:rotate(45deg);*/
}
.divRight{
  background:url('../stationdp/img/R.png') center no-repeat;
  top: 25%;
  left: 65%;
  /*transform:rotate(135deg);*/
}
.divBottom{
  background:url('../stationdp/img/down.png') center no-repeat;
  top: 64.7%;
  left: 25.17%;
  /*transform:rotate(-135deg);*/
}
.divLeft:hover{background: url('../stationdp/img/L-hover.png') no-repeat center;
 }
.divTop:hover{background: url('../stationdp/img/up-hover.png') no-repeat center;
}
.divRight:hover{background: url('../stationdp/img/R-hover.png') no-repeat center;
}
.divBottom:hover{background: url('../stationdp/img/down-hover.png') no-repeat center;
}

.dialog_button{
  position: absolute;
  width: 100%;
  /* height: 2rem; */
  text-align: center;
  /* background-color: #0f0; */
  position: absolute;
  top: 400px;
  left: 0;
}
.dialog_button1{
  position: absolute;
  width: 100%;
  /* height: 2rem; */
  text-align: center;
  /* background-color: #0f0; */
  position: absolute;
  top: 440px;
  left: 0;
}
.dialog_button2{
  position: absolute;
  width: 100%;
  /* height: 2rem; */
  text-align: center;
  /* background-color: #0f0; */
  position: absolute;
  top: 480px;
  left: 0;
}
.dialog_button3{
  position: absolute;
  width: 100%;
  /* height: 2rem; */
  text-align: center;
  /* background-color: #0f0; */
  position: absolute;
  top: 5px;
  right: -115px;
}
.station_video_button {
  /* 清除默认边框 */
  border: 0;

  /* 清除默认的箭头样式 */
  /*appearance: none;*/
  /*-moz-appearance: none;*/
  /*-webkit-appearance: none;*/
  /*appearance:none;*/
  /*-moz-appearance:none;*/
  /*-webkit-appearance:none;*/
  /* 右侧添加小箭头的背景图 */
  background: url('../dpimg/firstdp/bg-select-L1.png')  no-repeat;background-size:100% 100%;
  /*background-size: 1rem;*/
  color: #00CCFF;
  width:120px;
  font-size: 16px;
  height:35px;
  text-align: center;
}


</style>