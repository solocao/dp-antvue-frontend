<template>
  <div class="Index_bgImg">
    <p  class="Index_left_p2" style="color:#00BB00">配变站所智能预警平台</p>
    <div style="position: relative;top: 5rem;">
      <img style="position: absolute;top:0.28rem;" src="./img/icon-back.png">
      <span @click="backHandle" style="position: absolute;left:1rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">返回</span>
    </div>
    <div style="position: relative;top: 8rem;">
      <img style="position: absolute;top:0.8rem;left: 1rem" src="./img/icon5_select.png">
      <img style="position: absolute;top:0.28rem;" src="./img/menjin-titel-1.png">
      <span style="position: absolute;left:4rem;top:1.28rem;font-size: 16px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">除湿器</span>
    </div>
<!--    <div style="position: relative;top: 12rem;">-->
<!--      <img style="position: absolute;top:1.8rem;left: 1rem" src="./img/icon5.png">-->
<!--      <span style="position: absolute;left:4rem;top:2.28rem;font-size: 16px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">除湿器实时监测</span>-->
<!--      <span style="position: absolute;left:4rem;top:5.28rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">状态</span>-->
<!--      <img style="position: absolute;top:4.8rem;left: 8rem" src="./img/chushiqi-status-1.png">-->
<!--      <span style="position: absolute;left:4rem;top:8.28rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">操作</span>-->
<!--      <el-switch-->
<!--        style="position: absolute;top:8.4rem;left: 8rem"-->
<!--        v-model="value"-->
<!--        active-color="#13ce66"-->
<!--        inactive-color="#ff4949">-->
<!--      </el-switch>-->
<!--      <span v-if="value==true" style="position: absolute;left:12rem;top:8.28rem;font-size: 16px;font-family:PingFang-SC;color:lawngreen;">运行</span>-->
<!--      <span v-if="value==false" style="position: absolute;left:12rem;top:8.28rem;font-size: 16px;font-family:PingFang-SC;color:red;">关闭</span>-->
<!--      <img style="position: absolute;top:14.8rem;left: 10rem" src="./img/chushiqi-show-2.png">-->
<!--      <img style="position: absolute;top:36.8rem;left: 2rem" src="./img/time-show-bg-1.png">-->
<!--      <span style="position: absolute;top:41.8rem;left: 12rem;-->
<!--      font-size: 50px;font-weight:bold;font-family:PingFang-SC;color:deepskyblue;">2019-09-12 22:12:33</span>-->
<!--    </div>-->
    <div style="position: relative;top: 19rem;">
      <div style="position: relative;top:-4rem">
        <img style="position: absolute;top:0.28rem;" src="./img/menjin-shaixuan.png">
        <span style="position: absolute;left:2rem;top:0.8rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">查询时间</span>
        <div style="position: relative;left: 9rem">
          <el-date-picker
            style="position: absolute;top:0.29rem;width: 22rem"
            v-model="dataForm.startTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-button style="position: absolute;top:0.29rem;left: 23rem" type="primary" icon="el-icon-search">搜索</el-button>
          <img style="position: absolute;top:0.8rem;left: 32rem" src="./img/yangan-export.png">
        </div>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;max-height: 40rem;">
        <el-table-column
          prop="date"
          label="除湿器名称"
          header-align="center"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="记录信息"
          header-align="center"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          header-align="center"
          align="center"
          label="时间">
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 3rem"
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="pageSize"
        :total="totalPage"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value:'1',
        number:'',
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataForm:{
          station:'1',
          person:'',
          startTime:'2019-10-06',
          endTime:'2019-10-06'
        },
        stationOptions:[{key:'1',value:'1',label:'A站'},{key:'2',value:'2',label:'B站'}],
        personOptions:[{key:'1',value:'1',label:'A负责人'},{key:'2',value:'2',label:'B负责人'}],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods:{
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
      },
      backHandle(){
        this.$router.push({ name: 'detaildp'})
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


