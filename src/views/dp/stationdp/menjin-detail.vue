<template>
  <div class="Index_bgImg">
    <p  class="Index_left_p2" style="color:rgba(40,205,156,1)">配变站所智能预警平台</p>
    <div style="position: relative;top: 5rem;">
      <img style="position: absolute;top:0.28rem;" src="./img/icon-back.png">
      <span @click="backHandle" style="position: absolute;left:1rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">返回</span>
    </div>
    <div style="position: relative;top: 8rem;">
      <img style="position: absolute;top:0.8rem;left: 1rem" src="./img/icon2_select.png">
      <img style="position: absolute;top:0.28rem;" src="./img/menjin-titel-1.png">
      <span style="position: absolute;left:4rem;top:1.28rem;font-size: 16px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">门 禁 卡</span>
<!--      <img style="position: absolute;top:0.7rem;left: 15.5rem;" src="./img/menjin-add.png">-->
<!--      <span style="position: absolute;left:17.8rem;top:1.2rem;font-size: 16px;font-weight:bold;font-family:PingFang-SC;color:rgba(255,255,255,1);">+门禁卡添加</span>-->
    </div>
    <div style="position: relative;top: 8rem;">
      <div style="position: relative;top: 6rem;">
        <img style="position: absolute;top:0.28rem;" src="./img/menjin-shaixuan.png">
        <span style="position: absolute;left:2rem;top:0.8rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">开关站点</span>
        <div style="position: relative;left: 9rem">
<!--          <img style="position: absolute;top:0.2rem;" src="./img/menjin-shaixuan-2.png">-->
          <el-select v-model="dataForm.station" style="position: absolute;top:0.29rem;width: 18rem" placeholder="请选择开关站点">
            <el-option v-for="item in stationOptions" :key="item.key" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>
      <div style="position: relative;top: 6rem;left: 29rem">
        <img style="position: absolute;top:0.28rem;" src="./img/menjin-shaixuan.png">
        <span style="position: absolute;left:2rem;top:0.8rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">责任人</span>
        <div style="position: relative;left: 9rem">
          <el-select v-model="dataForm.person" style="position: absolute;top:0.29rem;width: 18rem" placeholder="请选择责任人">
            <el-option v-for="item in personOptions" :key="item.key" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>
      <div style="position: relative;top: 6rem;left: 58rem">
        <img style="position: absolute;top:0.28rem;" src="./img/menjin-shaixuan.png">
        <span style="position: absolute;left:2rem;top:0.8rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">生效时间</span>
        <div style="position: relative;left: 9rem">
          <el-date-picker
            style="position: absolute;top:0.29rem;width: 18rem"
            v-model="dataForm.startTime"
            type="date"
            placeholder="选择生效日期">
          </el-date-picker>
        </div>
      </div>
      <div style="position: relative;top: 6rem;left: 87rem">
        <img style="position: absolute;top:0.28rem;" src="./img/menjin-shaixuan.png">
        <span style="position: absolute;left:2rem;top:0.8rem;font-size: 16px;font-family:PingFang-SC;color:rgba(255,255,255,1);">失效时间</span>
        <div style="position: relative;left: 9rem">
          <el-date-picker
            style="position: absolute;top:0.29rem;width: 18rem"
            v-model="dataForm.endTime"
            type="date"
            placeholder="选择失效日期">
          </el-date-picker>
        </div>
      </div>
    </div>
    <div style="position: relative;top: 20rem;">
    <el-table
      :data="tableData"
      style="width: 100%;max-height: 40rem;">
      <el-table-column prop="cardnum" label="门禁卡编号" header-align="center" align="center"/>
      <el-table-column prop="hostnum" label="责任人工号" header-align="center" align="center"/>
      <el-table-column prop="uesrname" label="用户名称" header-align="center" align="center" width="180"/>
      <el-table-column prop="operatype" label="操作类型" header-align="center" align="center" width="180"/>
      <el-table-column prop="operator" label="操作人" header-align="center" align="center" width="180"/>
      <el-table-column prop="operatime" label="操作时间" header-align="center" align="center" width="180">
        <template slot-scope="scope">
          <span>{{formatDate(new Date(scope.row.operatime))}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="effectivetime" label="生效时间" header-align="center" align="center" width="180">
        <template slot-scope="scope">
          <span>{{formatDate(new Date(scope.row.effectivetime))}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="uneffectivetime" label="失效时间" header-align="center" align="center" width="180">
        <template slot-scope="scope">
          <span>{{formatDate(new Date(scope.row.uneffectivetime))}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="hostflag" label="是否责任人" header-align="center" align="center" width="180"/>
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
  import $ from 'jquery'
  export default {
    data(){
      return {
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
        tableData: []
      }
    },
    created(){
      this.getTableData()
    },
    mounted(){

    },
    methods:{
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
        axios.get('/GW.WIR/card/getKgCardList.action',{
          params:{start:this.pageIndex,limit:this.pageSize,queryCardString :""}
        }).then(({data})=>{
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