<template>
  <div style="width: 22rem">
    <div class="down_left">
      <img class="right_title_img" src="./img/icon6_1_select.png">
      <span class="right_title_span1">湿度 (RH)</span>
      <div class="right_detail" @click="detailHandle1">
        <span class="right_title_span2">详情</span>
        <img class="right_title_icon" src="./img/right_img3.png">
      </div>
      <div class="right_info">
        <span class="right_info_span1">状态</span>
        <img class="right_info_img" src="./img/right_img2.png">
        <span class="right_info_span4">正常</span>
        <span class="right_info_span5">{{lastHumidityTime}}</span>
        <img style="position: absolute;top: 5.6rem;left: 2rem;width: 3rem" src="./img/icon6_1.png">
        <span
          style="position: absolute;top: 5.6rem;left: 6rem;font-size: 28px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">{{lastHumidityValue}}</span>
        <span
          style="position: absolute;top: 6.3rem;left: 9.9rem;font-size: 18px;font-family:PingFang-SC;color:rgba(255,255,255,1);">%</span>
        <!--        <span style="position: absolute;top: 10rem;left: 6rem;font-size: 14px;font-family:PingFang-SC;color:rgba(255,255,255,0.9);">过去一小时最大湿度是{{a}}%</span>-->
      </div>
      <div @click="changeTestHandle" style="position: absolute;top: 12.6rem;width: 100%;height: 20rem">
        <v-chart style="width: 100%;height: 100%" :options="tempOption"/>
      </div>
    </div>
    <div class="down_right">
      <img class="right_title_img" src="./img/icon6_2_select.png">
      <span class="right_title_span1">环境温度</span>
      <div class="right_detail" @click="detailHandle2">
        <span class="right_title_span2">详情</span>
        <img class="right_title_icon" src="./img/right_img3.png">
      </div>
      <div class="right_info">
        <span class="right_info_span1">状态</span>
        <img class="right_info_img" src="./img/right_img2.png">
        <span class="right_info_span4">正常</span>
        <span class="right_info_span5">{{lastTempTime}}</span>
        <img style="position: absolute;top: 5.6rem;left: 2rem;width: 2rem" src="./img/icon6_2.png">
        <span
          style="position: absolute;top: 5.6rem;left: 6rem;font-size: 28px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">{{lastTempValue}}</span>
        <span
          style="position: absolute;top: 6.3rem;left: 9.9rem;font-size: 18px;font-family:PingFang-SC;color:rgba(255,255,255,1);">℃</span>
      </div>
      <div style="position: absolute;top: 12.6rem;width: 100%;height: 20rem">
        <v-chart style="width: 100%;height: 100%" :options="humidityOption"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ECharts from 'vue-echarts'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/title'
  import axios from 'axios'

  export default {
    components: {
      'v-chart': ECharts
    },
    name: 'wenshidu',
    data() {
      const colors = ['rgba(79,247,214,0.6)']
      return {
        count: 2,
        lastTempValue:'',
        lastTempTime:'',
        lastHumidityValue:'',
        lastHumidityTime:'',
        tempOption: {
          color: colors,
          title: {
            subtext: `{a|过去一小时最大湿度是%}`,
            right: '7%',
            subtextStyle: {
              rich: {
                a: {
                  color: '#fff'
                }
              }
            }
          },
          legend: {
            data: ['湿度'],
            bottom: '0px',
            textStyle: {
              color: '#fff'
            },
            selectedMode: 'single'
          },
          xAxis: {
            axisLabel: {
              color: '#fff',
              fontSize: 10
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            type: 'category',
            data: []
          },
          yAxis: {
            axisLabel: {
              color: '#fff'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(79,247,214,0.6)'
              }
            },
            type: 'value'
          },
          series: [{
            name: '湿度',
            data: [],
            type: 'line',
            lineStyle: {
              color: 'rgba(79,247,214,1)'
            },
            itemStyle: {
              borderColor: 'rgba(79,247,214,1)'
            }
          }]
        },
        humidityOption: {
          color: colors,
          title: {
            subtext: `{a|过去一小时最大温度是℃}`,
            right: '7%',
            subtextStyle: {
              rich: {
                a: {
                  color: '#fff'
                }
              }
            }
          },
          legend: {
            data: ['温度'],
            bottom: '0px',
            textStyle: {
              color: '#fff'
            },
            selectedMode: 'single'
          },
          xAxis: {
            axisLabel: {
              color: '#fff',
              fontSize: 10
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            type: 'category',
            data: []
          },
          yAxis: {
            axisLabel: {
              color: '#fff'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(79,247,214,0.6)'
              }
            },
            type: 'value'
          },
          series: [{
            name: '温度',
            data: [],
            type: 'line',
            lineStyle: {
              color: 'rgba(79,247,214,1)'
            },
            itemStyle: {
              borderColor: 'rgba(79,247,214,1)'
            }
          }]
        }
      }
    },
    props: ['stationdata'],
    created() {
      this.changeTestHandle()
    },
    // mounted(){
    //   alert("2");
    // },
    methods: {
      getTime(){
        var now = new Date();
        var alarmdatefrom = new Date((now/1000-3*24*60*60)*1000);//前1天
        var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
        var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
        var day = alarmdatefrom.getDate();        //获取当前日(1-31)
        return year+"-"+month+"-"+day+" 00:00:00";
      },
      detailHandle1() {
        this.$router.push({ name: 'shidu-detail' })
      },
      detailHandle2() {
        this.$router.push({ name: 'wendu-detail' })
      },
      changeTestHandle() {
        this.getTemp()
        this.getHumidity()
      },
      getTemp() {
        var that=this;
        if(this.stationdata==null ||this.stationdata=='undefined'||this.stationdata==''){
          this.stationdata=sessionStorage.getItem('stationID');
        }

        axios.get('/GW.WIR/show/getTemperatureReport.action', {
          params: {
            stationID:this.stationdata,
            startDt:this.getTime(),
            endDt:this.formatDate(new Date()),
            start: 0,
            limit: 100000
          }
        }).then(({ data }) => {
          const now = new Date().getTime()
          const start = now - 60 * 60 * 1000
          data = eval('(' + data + ')')
          //温度信息
          data.Table.sort((a, b) => {
            return b.temptime - a.temptime
          })
          that.lastTempTime = that.formatDate(new Date(data.Table[0].temptime))
          that.lastTempValue = data.Table[0].temperature
          const tempList = data.Table.filter((item) => {
            return item.temptime >= start && item.temptime <= now
          })
          const xTempList = []
          const yTempList = []
          tempList.forEach((item, index) => {
            const time = new Date(item.temptime)
            const x = time.getHours() + ':' + time.getMinutes()
            xTempList.push(x)
            yTempList.push(item.temperature)
          })
          const maxTempValue = yTempList.length == 0?0:Math.max.apply(null, yTempList)
          that.tempOption.title.subtext = '{a|过去一小时最大温度是' + maxTempValue + '℃}'
          that.tempOption.xAxis.data = xTempList
          that.tempOption.series[0].data = yTempList
        })
      },
      getHumidity(){
        var that=this;
        if(this.stationdata==null ||this.stationdata=='undefined'||this.stationdata==''){
          this.stationdata=sessionStorage.getItem('stationID');
        }
        axios.get('/GW.WIR/show/getHumidityReport.action', {
          params: {
            stationID: this.stationdata,
            startDt:this.getTime(),
            endDt:this.formatDate(new Date()),
            start: 0,
            limit: 100000
          }
        }).then(({ data }) => {
          const now = new Date().getTime()
          const start = now - 60 * 60 * 1000
          data = eval('(' + data + ')')
          //湿度信息
          data.Table.sort((a, b) => {
            return b.humiditytime - a.humiditytime
          })
          that.lastHumidityTime = this.formatDate(new Date(data.Table[0].humiditytime))
          that.lastHumidityValue = data.Table[0].humidity
          const humidityList = data.Table.filter((item) => {
            return item.humiditytime >= start && item.humiditytime <= now
          })
          const xHumidityList = []
          const yHumidityList = []
          humidityList.forEach((item, index) => {
            const time = new Date(item.humiditytime)
            const x = time.getHours() + ':' + time.getMinutes()
            xHumidityList.push(x)
            yHumidityList.push(item.humidity)
          })
          const maxHumidityValue = yHumidityList.length == 0?0:Math.max.apply(null, yHumidityList)
          that.humidityOption.title.subtext = '{a|过去一小时最大湿度是'+ maxHumidityValue +'%}'
          that.humidityOption.xAxis.data = xHumidityList
          that.humidityOption.series[0].data = yHumidityList
        })
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
    }
  }
</script>

<style scoped>
  .down_left {
    position: relative;
    top: 22rem;
    left: 0.5rem;
  }

  .down_right {
    position: relative;
    top: 20rem;
    left: 95.4rem;
  }

  .right_title_span1 {
    position: absolute;
    left: 4rem;
    top: 0.3rem;
    font-size: 18px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 1);
  }

  .right_detail {
    position: relative;
    display: inline;
    left: 13rem;
  }

  .right_title_span2 {
    font-size: 16px;
    font-family: PingFang-SC;
    color: rgba(10, 205, 196, 1);
  }

  .right_title_icon {
    margin-left: 0.8rem;
    margin-bottom: 0.1rem;
  }

  .right_info {
    position: relative;
  }

  .right_info_span1 {
    position: absolute;
    top: 1.5rem;
    font-size: 18px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 0.9);
  }

  .right_info_span2 {
    position: absolute;
    top: 3rem;
    font-size: 28px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 1);
  }

  .right_info_span3 {
    position: absolute;
    top: 3.6rem;
    left: 2rem;
    font-size: 18px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 0.9);
  }

  .right_info_span4 {
    position: absolute;
    top: 3.6rem;
    left: 2rem;
    font-size: 16px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 0.9);
  }

  .right_info_span5 {
    position: absolute;
    top: 3.6rem;
    left: 6rem;
    font-size: 16px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 0.9);
  }

  .right_info_img {
    position: absolute;
    top: 4.2rem;
  }

  .right_table_th span {
    font-size: 16px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 0.8);
  }

  .right_table_td span {
    margin-right: 3.5rem;
    font-size: 16px;
    font-family: PingFang-SC;
    color: rgba(255, 255, 255, 0.9);
  }
</style>
