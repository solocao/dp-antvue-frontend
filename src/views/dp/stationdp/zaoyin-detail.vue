<template>
  <div class="Index_bgImg">
    <p class="Index_left_p2" style="color:rgba(255,255,255,1)">智能预警平台</p>
    <div style="position: relative;top: 5rem;">
      <img style="position: absolute;top:0.28rem;" src="./img/icon-back.png">
      <span @click="backHandle" style="position: absolute;left:1rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">返回</span>
    </div>
    <div style="position: relative;top: 8rem;">
      <img style="position: absolute;top:0.8rem;left: 1rem" src="./img/icon6_1_select.png">
      <img style="position: absolute;top:0.28rem;" src="./img/menjin-titel-1.png">
      <span style="position: absolute;left:4rem;top:1.28rem;font-size: 16px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">噪音检测仪</span>
    </div>
    <div style="position: relative;top: 13rem;">
      <img style="position: absolute;top:0.8rem;left: 2rem;" src="./img/icon6_1.png">
      <span style="position: absolute;top:1.6rem;left: 5rem;font-size: 18px;font-family:PingFang-SC;color:rgba(255,255,255,1);">历史湿度趋势</span>
      <!--      <span style="position: absolute;top:1.9rem;left: 14rem;font-size: 14px;font-family:PingFang-SC;color:#4ff7d6;">2019-10-09 12:13:14</span>-->
      <!--      <span style="position: absolute;top:3.9rem;left: 42rem;font-size: 15px;font-family:PingFang-SC;color:rgba(255,255,255,0.9);">过去一小时最大湿度是50%</span>-->
    </div>
    <div style="position: absolute;top: 18.6rem;width: 50%;height: 45rem">
      <v-chart style="width: 100%;height: 100%" :options="zaoShengOption" />
    </div>
    <div style="position: relative;top: 13rem;left:60rem">
      <div style="position: relative;top:-4rem">
        <img style="position: absolute;top:0.28rem;" src="./img/menjin-shaixuan.png">
        <span style="position: absolute;left:2rem;top:0.8rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">查询时间</span>
        <div style="position: relative;left: 11rem">
          <el-date-picker style="position: absolute;top:0.29rem;left:0;width: 12rem" v-model="dataForm.startTime" type="date" placeholder="选择生效日期">
          </el-date-picker>
          <el-date-picker style="position: absolute;top:0.29rem;left:15rem;width: 12rem" v-model="dataForm.endTime" type="date" placeholder="选择失效日期">
          </el-date-picker>
          <el-button @click="searchHandle" style="position: absolute;top:0.29rem;left: 30rem" type="primary" icon="el-icon-search">搜索</el-button>
          <img style="position: absolute;top:0.8rem;left: 40rem" src="./img/yangan-export.png">
        </div>
      </div>
      <el-table :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" :cell-class-name="cellClassHandle" style="width: 55rem;max-height: 48rem;">
        <el-table-column prop="stationname" label="开关站名称">
        </el-table-column>
        <el-table-column prop="zaoSheng" label="湿度" header-align="center" align="center" width="180">
          <template slot-scope="scope">
              <span>{{scope.row.zaoSheng+'%'}}</span>
</template>
        </el-table-column>
        <el-table-column
          prop="tempTime"
          label="时间"
          header-align="center"
          align="center">
<template slot-scope="scope">
  <span>{{formatDate(new Date(scope.row.tempTime))}}</span>
</template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 1rem"
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[15]"
        :page-size="pageSize"
        :total="totalPage"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import ECharts from 'vue-echarts'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/markPoint'
  import axios from 'axios'
  export default {

    components: {
      'v-chart': ECharts
    },
    data() {
      const colors = ['rgba(79,247,214,0.6)']
      return {
        pageIndex: 1,
        pageSize: 15,
        totalPage: 0,
        dataForm: {
          stationID: '',
          time: [],
          startTime: "",
          endTime: ""
        },
        zaoShengOption: {
          color: colors,
          title: {
            subtext: `{a|时间范围内最大湿度是%}`,
            right: '7%',
            subtextStyle: {
              rich: {
                a: {
                  color: '#fff',
                  fontSize: 14
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
            },
            markPoint: {
              data: [
                // {name: '周最低', value: -2, xAxis: '周三', yAxis: -2}
              ],
              itemStyle: {
                color: 'rgba(255,12,0,1)'
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(79,247,214,1)' // 0% 处的颜色
                }, {
                  offset: 0.5,
                  color: 'rgba(79,247,214,0.5)' // 5% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(79,247,214,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          }]
        },
        tableData: []
      }
    },
    created() {
      this.dataForm.startTime = new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000)
      this.dataForm.endTime = new Date()
      this.getzaoSheng()
    },
    methods: {
      sizeChangeHandle(val) {
        this.pageSize = val
        this.pageIndex = 1
      },
      // 当前页
      currentChangeHandle(val) {
        this.pageIndex = val
      },
      backHandle() {
        this.$router.push({
          name: 'detaildp'
        })
      },
      getzaoSheng() {
         console.log("噪声返回值------------",data)
        var that = this;
        this.dataForm.stationID = sessionStorage.getItem('stationID');
        axios.get('/GW.WIR/show/getZaoShengData.action', {
          params: {
            stationID: this.dataForm.stationID,
            // startDt:  this.formatDateT(this.dataForm.startTime),
            // endDt: this.formatDateT(new Date(new Date(this.dataForm.endTime.toLocaleDateString()).getTime()+24*60*60*1000)),
            // start: 0,
            // limit: 100000
          }
        }).then(({
          data
        }) => {
          // const now = new Date().getTime()
          // const start = now - 60 * 60 * 1000
          console.log("噪声返回值------------",data)
          data = eval('(' + data + ')')
          that.tableData = data.Table
          that.totalPage = that.tableData.length;
          //湿度信息
          data.Table.sort((a, b) => {
            return a.tempTime - b.tempTime
          })
          const zaoShengList = data.Table
          const xzaoShengList = []
          const yzaoShengList = []
          zaoShengList.forEach((item, index) => {
            const time = new Date(item.tempTime)
            const x = that.formatDate(time)
            xzaoShengList.push(x)
            yzaoShengList.push(item.zaoSheng)
          })
          const maxzaoShengValue = yzaoShengList.length == 0 ? 0 : Math.max.apply(null, yzaoShengList)
          that.zaoShengOption.title.subtext = '{a|时间范围内最大湿度是' + maxzaoShengValue + '%}'
          that.zaoShengOption.xAxis.data = xzaoShengList
          that.zaoShengOption.series[0].data = yzaoShengList
          const exception = zaoShengList.filter((item) => {
            return item.zaoSheng >= 70
          })
          const exceptionList = []
          exception.forEach((item, index) => {
            const time = new Date(item.tempTime)
            const x = time.getHours() + ':' + time.getMinutes()
            const exceptionItem = {}
            exceptionItem.name = item.zaoSheng
            exceptionItem.value = item.zaoSheng
            exceptionItem.xAxis = x
            exceptionItem.yAxis = item.zaoSheng
            exceptionList.push(exceptionItem)
          })
          this.zaoShengOption.series[0].markPoint.data = exceptionList
          // console.log(JSON.stringify(this.zaoShengOption))
        })
      },
      formatDate(now) {
        const year = now.getFullYear()
        const month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
        const date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
        const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
        const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
      },
      formatDateT(now) {
        const year = now.getFullYear()
        const month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
        const date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
        const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
        const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
        return year + '-' + month + '-' + date + 'T' + hour + ':' + minute + ':' + second
      },
      searchHandle() {
        this.getzaoSheng()
      },
      cellClassHandle({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        if (row.zaoSheng >= 70 && columnIndex == 1) {
          return 'exception'
        }
      }
    }
  }
</script>

<style scoped>
  .Index_bgImg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url('./img/menjin-detail-bg.png');
    padding: 1rem 2rem 2rem;
  }
  .Index_left_p2 {
    font-size: 2em;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    margin-top: 1rem;
    opacity: 1;
    position: absolute;
    /*font-size: 40px;*/
    color: #FFFFFF;
    background: url('../dpimg/bt.png') center no-repeat;
  }
</style>
<style>
  .exception {
    color: rgba(255, 12, 0, 1);
  }
</style>