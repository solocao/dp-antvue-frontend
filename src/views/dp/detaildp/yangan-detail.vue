<template>
  <div class="Index_bgImg">
    <p  class="Index_left_p2" style="color:rgba(40,205,156,1)">智能预警平台</p>
    <div style="position: relative;top: 5rem;">
      <img style="position: absolute;top:0.28rem;" src="./img/icon-back.png">
      <span @click="backHandle" style="position: absolute;left:1rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">返回</span>
    </div>
    <div style="position: relative;top: 8rem;">
      <img style="position: absolute;top:0.8rem;left: 1rem" src="./img/icon2_select.png">
      <img style="position: absolute;top:0.28rem;" src="./img/menjin-titel-1.png">
      <span style="position: absolute;left:4rem;top:1.28rem;font-size: 16px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">烟感记录信息</span>
      <!--      <img style="position: absolute;top:0.7rem;left: 15.5rem;" src="./img/menjin-add.png">-->
      <!--      <span style="position: absolute;left:17.8rem;top:1.2rem;font-size: 16px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">+门禁卡添加</span>-->
    </div>
    <div style="position: relative;top: 8rem;">
      <div style="position: relative;top: 6rem;">
        <img style="position: absolute;top:0.28rem;" src="./img/menjin-shaixuan.png">
        <span style="position: absolute;left:2rem;top:0.8rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">查询时间</span>
        <div style="position: relative;left: 11rem">
          <el-date-picker
            style="position: absolute;top:0.29rem;left:0;width: 12rem"
            v-model="dataForm.startTime"
            type="date"
            placeholder="选择生效日期">
          </el-date-picker>
          <el-date-picker
            style="position: absolute;top:0.29rem;left:15rem;width: 12rem"
            v-model="dataForm.endTime"
            type="date"
            placeholder="选择失效日期">
          </el-date-picker>
          <el-button @click="searchHandle" style="position: absolute;top:0.29rem;left: 27rem" type="primary" icon="el-icon-search">搜索</el-button>
          <img style="position: absolute;top:0.8rem;left: 40rem" src="./img/yangan-export.png">
        </div>
      </div>
    </div>
    <div style="position: relative;top: 20rem;">
      <el-table
        :data="tableData"
        style="width: 100%;max-height: 40rem;">
        <el-table-column prop="ALARMTYPE" label="报警类型" header-align="center" align="center"　width="300"/>
        <el-table-column prop="STATIONNAME" label="站点名称" header-align="center" align="center" width="400"/>
        <el-table-column prop="STATIONNUM" label="站点编号" header-align="center" align="center" width="400"/>
        <el-table-column prop="ALARMTIME" label="报警时间" header-align="center" align="center" width="180">
          <template slot-scope="scope">
            <span>{{formatDate(new Date(scope.row.ALARMTIME))}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 2rem"
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[10]"
        :page-size="pageSize"
        :total="totalPage"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataForm:{
          station:'1',
          person:'',
          startTime:'',
          endTime:''
        },
        stationOptions:[{key:'1',value:'1',label:'A站'},{key:'2',value:'2',label:'B站'}],
        personOptions:[{key:'1',value:'1',label:'A负责人'},{key:'2',value:'2',label:'B负责人'}],
        tableData: []
      }
    },
    created(){
      this.dataForm.startTime = new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000)
      this.dataForm.endTime = new Date()
      this.getTableData()
    },
    methods:{
      searchHandle(){
        this. getTableData();
      },
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getTableData()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getTableData()
      },
      backHandle(){
        this.$router.push({ name: 'detaildp'})
      },
      getTableData(){

        // parameter: {
        //   start: 0,
        //     limit: 100000,
        //     stationNum: '',
        //     alarmTime_from: new Date()
        // },
        // var now = new Date();
        // var alarmdatefrom = new Date((now / 1000 - 86400 * 1) * 1000); //前3天
        // var year = alarmdatefrom.getFullYear(); //获取完整的年份(4位,1970-????)
        // var month = alarmdatefrom.getMonth() + 1; //获取当前月份(1-12)
        // var day = alarmdatefrom.getDate(); //获取当前日(1-31)

        var alarmdatefrom=this.formatDate(this.dataForm.startTime);
        var parm={
          // stationID:sessionStorage.getItem('stationID'),
          // stationName:
          stationNum:sessionStorage.getItem('stationNum'),
          alarmType:'烟雾报警',
          start: 0,
          limit: 100000,
          alarmTime_from:alarmdatefrom
        }

        axios.get('/GW.WIR/alarm/getKgzAlarmList.action', {params:parm}
        ).then(({data})=>{
          data = eval('(' + data + ')')
          if(data.Table.length>0){
            this.totalPage = parseInt(data.RecordCount)
            this.tableData = data.Table
          }
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
  .Index_bgImg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url('./img/menjin-detail-bg.png');
    padding: 1rem 2rem 2rem;
  }
  .Index_left_p2 {
    font-size:2em;height:50px;width:100%;text-align:center;line-height:50px;
    margin-top: 1rem;
    opacity: 1;
    position: absolute;
    /*font-size: 40px;*/
    color: #FFFFFF;
    background: url('../dpimg/bt.png') center no-repeat;

  }
</style>