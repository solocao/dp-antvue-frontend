<template>
  <div class="timebox">
    <div class="box-header">
      <div class="backbtn" @click="backHandle()"><i class="el-icon-back"></i> 返回 </div>
      <h4 class="">设备录像时间轴({{ devid }}-{{ channel }})</h4>
    </div>
    <div class="datapicker">
      <el-date-picker
        v-model="days"
        type="date"
        size="mini"
        value-format="yyyyMMdd"
        @change="getDays"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div>
      <LivePlayer
        muted
        :hasaudio="hasAudio"
        :videoUrl="videoUrl"
        @ended="onVideoEnd"
        @timeupdate="onVideoTimeUpdate"
        v-loading="videoLoading"
        style="margin:0 auto; max-width:9.5rem;border: 2px solid #fff;">
      </LivePlayer>
    </div>
    <br>
    <TimeRule :videos="videos" @timeChange="onTimeChange" ref="timeRule" v-loading="loading"></TimeRule>
  </div>
</template>

<script>
import moment from 'moment'
import $ from 'jquery'
import TimeRule from './TimeRule.vue'
import LivePlayer from '@liveqing/liveplayer'
import {
        recordlist,
        playbackStop,
        playbackStart
      } from '../../../utils/util'
import axios from 'axios'

export default {
  props: {
    devid: {
      type: String,
      default: ''
    },
    channel: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'timebox'
    },
    token: {
      type: String,
      default: ''
    },
    day: {
      type: String,
      default: () => moment().format('YYYYMMDD')
    }
  },
  data () {
    return {
      timerange: [
        moment(this.day, 'YYYYMMDD').startOf('hour').toDate(),
        moment(this.day, 'YYYYMMDD').startOf('hour').toDate()
      ],
      videoLoading: false,
      loading: false,
      records: [],
      value1:"",
      currentTime: null,
      videos: [],
      video: null,
      videoUrl: '',
      days: '20191217',
      hasAudio: false,
      streamid: '',
      touchTimer: 0
    }
  },
  watch: {
    day: function (newVal, oldVal) {
      this.timerange = [
        moment(this.day, 'YYYYMMDD').startOf('hour').toDate(),
        moment(this.day, 'YYYYMMDD').startOf('hour').toDate()
      ]
    },
    video: function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.startPlayback()
      } else {
        this.stopPlayback()
      }
    }
  },
  mounted () {
    const mmt = moment()
    let n = mmt.diff(mmt.clone().startOf('day'), 'minutes')
    n -= 10
    if (n < 0) n = 0
    this.$refs.timeRule.clickMinute(n)
    this.getRecords(true)
    this.days = this.day
  },
  components: {
    LivePlayer,
    TimeRule
  },
  methods: {
    testClick(e){
      this.$nextTick(() => {
              this.days = null;
              this.$set(this.days, "time", e);
            });
    },
    getDays () {
      let endtime = moment(this.days, 'YYYYMMDD').add(1, 'days')
      let starttime = moment(this.days).format('YYYY-MM-DDTHH:mm:ss')
      let endtimes = moment(endtime).format('YYYY-MM-DDTHH:mm:ss')
      recordlist(this.devid,this.channel,this.token,3,starttime,endtimes).then(res => {
        this.records = res.data.RecordList
        if (res.data.RecordList.length === 0) {
          this.videos = []
          this.videoUrl = ''
        } else {
          this.videos = this.records
        }
        // this.loading = false
      })
      // recordlist(params).then(({ data }) => {
      //   this.records = data.RecordList
      //   if (data.RecordList.length === 0) {
      //     this.videos = []
      //     this.videoUrl = ''
      //   } else {
      //     this.videos = this.records
      //   }
      //   this.loading = false
      // }).catch(() => {
      //   this.$nextTick(() => {
      //     this.loading = false
      //   })
      // })
    },
    backHandle () {
      this.$emit('closePlayBack')
    },
    nextTimeRange () {
      var end = moment(this.day, 'YYYYMMDD').add(24, 'hours')
      var now = moment().startOf('second')
      if (end.isAfter(now, 'second')) {
        end = now
      }
      var r1 = moment(this.timerange[1])
      if (r1.isSameOrAfter(end, 'second')) {
        return false
      }
      var r2 = moment(this.timerange[1]).add(24, 'hours')
      if (r2.isAfter(end)) {
        r2 = end
      }
      if (r2.startOf('minute').isSameOrBefore(r1.startOf('minute'), 'second')) {
        return false
      }
      this.timerange = [r1.toDate(), r2.toDate()]
      return true
    },
    getRecords (refresh) {
      if (refresh) {
        // this.loading = true
        this.records = []
      }
      if (!this.nextTimeRange()) {
        this.videos = this.records
        // this.loading = false
        return
      }
      let starttime = moment(this.timerange[0]).format('YYYY-MM-DDTHH:mm:ss')
      let endtime = moment(this.timerange[1]).format('YYYY-MM-DDTHH:mm:ss')
      recordlist(this.devid,this.channel,this.token,3,starttime,endtime).then(res => {
        this.records = res.data.RecordList
        if (res.data.RecordList.length === 0) {
          this.videos = []
          this.videoUrl = ''
        } else {
          this.videos = this.records
        }
        // this.loading = false
      }).catch(() => {
        this.$nextTick(() => {
          this.getRecords(false)
          // this.loading = false
        })
      })
      // axios.get('/apitest/api/v1/playback/recordlist', {
      //   params: {
      //     token: this.token,
      //     timeout: 3,
      //     serial: this.devid,
      //     code: this.channel,
      //     starttime: moment(this.timerange[0]).format('YYYY-MM-DDTHH:mm:ss'),
      //     endtime: moment(this.timerange[1]).format('YYYY-MM-DDTHH:mm:ss')
      //   }
      // }).then(({ data }) => {
      //   this.records = this.records.concat(data.RecordList)
      //   this.videos = this.records
      //   this.loading = false
      // }).catch(() => {
      //   this.$nextTick(() => {
      //     this.getRecords(false)
      //     this.loading = false
      //   })
      // })
    },
    stopPlayback () {
      return new Promise((resolve, reject) => {
        if (this.touchTimer) {
          clearInterval(this.touchTimer)
          this.touchTimer = 0
        }
        if (!this.streamid) {
          resolve()
          return
        }
        console.log(this.token)
        playbackStop(this.streamid,this.token).then( res => {
          this.streamID = ''
          this.videoUrl = ''
          resolve()
        })
        // axios.get('/apitest/api/v1/playback/stop', {
        //   params: {
        //     streamid: this.streamid,
        //     token: this.token
        //   }
        // }).then(({ data }) => {
        //   this.streamID = ''
        //   this.videoUrl = ''
        //   resolve()
        //   // this.records = this.records.concat(data.RecordList)
        // })
      })
    },
    async  startPlayback () {
      await this.stopPlayback()
      if (!this.video) return
      // this.videoLoading = true
        playbackStart(this.devid,this.channel,this.token,this.video.StartTime,this.video.EndTime,).then( res => {
        this.streamID = res.data.StreamID
        this.hasAudio = res.data.AudioEnable && data.SourceAudioCodecName != ''
        var indexnum = res.data.FLV.indexOf('10000');
        var fivurl = res.data.FLV.substr(indexnum + 5);
         this.videoUrl = fivurl || ''
        // this.videoLoading = false
        })
      // axios.get('/apitest/api/v1/playback/start', {
      //   params: {
      //     serial: this.devid,
      //     code: this.channel,
      //     starttime: this.video.StartTime,
      //     endtime: this.video.EndTime,
      //     token: this.token
      //   }
      // }).then(({ data }) => {
      //   this.streamID = data.StreamID
      //   this.hasAudio = data.AudioEnable && data.SourceAudioCodecName != ''
      //   this.videoUrl = data.FLV
      //   this.videoLoading = false
      // })
      // this.videoLoading = false
    },
    onTimeChange (video) {
      this.video = video
    },
    onVideoEnd () {

    },
    onVideoTimeUpdate () {

    }
  },
  beforeDestroy () {
    this.stopPlayback()
  },
  beforeRouteLeave (to, from, next) {
    this.stopPlayback()
    next()
  },
  beforeRouteUpdate (to, from, next) {
    this.stopPlayback()
    next()
    this.$nextTick(() => {
      this.getRecords(true)
    })
  }
}
</script>
<style scoped>
/deep/ .el-input__inner {
  color: black;
}
  .box-header h4{
    width: 14rem;
    text-align: center;
    font-size: .25rem;
    color: #fff;
  }
  .backbtn {
    color: #4ff7d6;
    position: absolute;
    font-size: .2rem;
    left: .15rem;
    cursor: pointer;
  }
</style>
