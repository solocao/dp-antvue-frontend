<template>
  <div class="firstdp_body">
  <!--<div class="loading">-->
    <!--<div class="loadbox"> <img src="../dpimg/firstdp/picture/loading.gif" /> 页面加载中... </div>-->
  <!--</div>-->

  <div class="firstdp_head">
    <div class="weather_l ">
      <span> <button @click="rebackclick" class="form_select_L1">返回</button></span>
      <span></span>
      <sapn>
      <Select class="form_select_L1" @change="cityclick" id="city">
        <option v-for="item in groupNames" :key="item.key" :label="item.label" :value="item.value"></option>
      <!--<Option value ="宁波">宁波</Option>-->
      <!--<Option value ="慈溪">慈溪</Option>-->
      </Select></sapn>
      <span >{{date1 | formatDateTime}}</span>
    </div>
    <button class="head_center_form" @click="backmap">
    <h1 style="color:rgba(40,205,156,1)">配变站所智能预警平台</h1>
    </button>
    <div class="weather ">

      <span > <Select id="site" class="form_select_R1" @change="testclick" v-model="selected.site" >
        <option v-for="item in stationNames" :key="item.key" :label="item.label" :value="item.value" ></option>
     <!--<Option value="0" >全部站点</Option>-->
      <!--<Option value ="0574020B020238">骆城芳洲2</Option>-->
      <!--<Option value ="13373685112">奥林公馆开关站</Option>-->
      <!--<Option value ="马新二号">奥林公馆开关站</Option>-->
      </Select></span>
      <el-button v-popover:popover4 class="form_select_L1">明细</el-button>
    </div>
  </div>
  <div class="firstmainbox">
    <ul class="clearfix">
      <li>
        <div class="boxall" style="height: 4.2rem;width: 5rem;">
          <div class="alltitle">
            <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
            <span class="span_L1" style="color:rgba(40,205,156,1)">站点统计信息</span>
            <span class="span_L2" style="color:#00CCFF">安全运维：</span>
            <span class="span_L3" style="color:#00CCFF">100</span>
          </div>

          <div class="sycm">
            <!--<ul class="clearfix">-->
              <!--<li><h2>1824</h2><span>测试1</span></li>-->
              <!--<li><h2>1920</h2><span>测试1</span></li>-->
              <!--<li><h2>19%</h2><span>测试1</span></li>-->
            <!--</ul>-->
            <!--<div style="border-bottom: 1px solid rgba(255,255,255,.1)"></div>-->
            <!--<ul class="clearfix">-->
              <!--<li><h2>1824</h2><span>测试1</span></li>-->
              <!--<li><h2>1920</h2><span>测试1</span></li>-->
              <!--<li><h2>19%</h2><span>测试1</span></li>-->
            <!--</ul>-->
            <pieecharts ref="pieecharts" @pieNum="setpieNum"></pieecharts>
            <div class="firstNew_left_div">
              <ul><!--
                --><li><!--
                  --><p>接入总数</p><!--
                  --><span>{{totalCommit}}个</span><!--
                --></li><!--
                --><li><!--
                  --><p>在线数</p><!--
                  --><span>{{opennumCommit}}个</span><!--
                --></li><!--
                --><li><!--
                  --><p>离线数</p><!--
                  --><span>{{closenumCommit}}个</span><!--
                --></li>
              </ul>
            </div>

          </div>
          <!--<div class="boxfoot"></div>-->
        </div>
        <div class="boxall" style="height: 5rem;    width: 6rem;">
          <div class="alltitle">
            <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
            <span class="span_L1" style="color:rgba(40,205,156,1)">视频监测分析</span>
            <span class="span_L2" style="color:#00CCFF">报警总数：</span>
            <span class="span_L3" style="color:#00CCFF">108</span>
          </div>
          <div class="video_div_left">
            <ul class="clearfix">
              <li class="clearfix">
                <p>摄像头</p>
                <span >10 </span>
                <img src="../dpimg/firstdp/bg-video-icon.png" />
              </li>
              <li class="clearfix">
                <p>温度</p>
                <span >6 </span>
                <img src="../dpimg/firstdp/bg-temp-icon.png" />
              </li>
              <li class="clearfix">
                <p>湿度</p>
                <span >2 </span>
                <img src="../dpimg/firstdp/bg-hum-icon.png" />
              </li>
              <li class="clearfix ">
                <p>门禁</p>
                <span class="video_div_left_span_offset">5 </span>
                <img src="../dpimg/firstdp/bg-access-icon.png" />
              </li>
              <li class="clearfix ">
                <p>烟感</p>
                <span class="video_div_left_span_offset">6 </span>
                <img src="../dpimg/firstdp/bg-smoke-icon.png" />
              </li>
              <li class="clearfix ">
                <p>水位</p>
                <span class="video_div_left_span_offset">2 </span>
                <img src="../dpimg/firstdp/bg-level-icon.png" />
              </li>
            </ul>
          </div>

        </div>

      </li>
      <li >

        <div class="map">


          <map-two :cityName="cityName"  :parameter="parameter"  :stationdata="stationdata" :dataJsonList="dataJsonList" ref="maptwo" ></map-two>
        </div>
      </li>
      <li>

        <div class="boxall1" style="height: 7.5rem;width: 5rem;">
          <img src="../dpimg/firstdp/bg-icon-L1.png"></img>
          <span class="span_R1" style="color:rgba(40,205,156,1)" >24小时实时信息</span>
          <img src="../dpimg/firstdp/bg-form-R1.png"></img>

          <pie3decharts ref="pie3decharts"  @pieClick="pieClick"></pie3decharts>

          <el-popover
            ref="popover4"
            placement="right"
            width="730"
            popper-class="popperclass"
            trigger="click">
            <el-table :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" style="width: 100%;max-height: 40rem;">
              <el-table-column width="200" property="CREATEDATE" label="日期"  header-align="center" align="center"></el-table-column>
              <el-table-column width="400" property="STATIONNAME" label="站点名称"  header-align="center" align="center"></el-table-column>
              <el-table-column width="100" property="ALARMTYPE" label="告警类型"  header-align="center" align="center"></el-table-column>
            </el-table>
            <el-pagination
              style="margin-top: 0.5rem"
              @size-change="sizeChangeHandle"
              @current-change="currentChangeHandle"
              :current-page="pageIndex"
              :page-sizes="[10]"
              :page-size="pageSize"
              :total="totalPage"
              layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
          </el-popover>

          <el-popover
            ref="popover5"
            placement="right"
            width="730"
            v-model="visible"
            popper-class="popperclass1"
            trigger="click">
            <el-table :data="tablePieData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" style="width: 100%;max-height: 40rem;">
              <el-table-column width="200" property="CREATEDATE" label="日期"  header-align="center" align="center"></el-table-column>
              <el-table-column width="400" property="STATIONNAME" label="站点名称"  header-align="center" align="center"></el-table-column>
              <el-table-column width="100" property="ALARMTYPE" label="告警类型"  header-align="center" align="center"></el-table-column>
            </el-table>
            <el-pagination
              style="margin-top: 0.5rem"
              @size-change="sizeChangeHandlePie"
              @current-change="currentChangeHandlePie"
              :current-page="pagePieIndex"
              :page-sizes="[10]"
              :page-size="pagePieSize"
              :total="totalPiePage"
              layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
          </el-popover>
          <el-dialog
            title=""
            :visible.sync="dialogVisible"
            custom-class="customdialog"
            :before-close="handleClose"
            width="30%"
            center
            :modal="false">
            <!--:before-close="handleClose">-->

            <span class="dialogstxt">{{dialogvalue}}</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">忽 略</el-button>
    <el-button type="primary" @click="handleClose">处 理</el-button>
  </span>
  </span>
          </el-dialog>

          <div class="firstdp_addNewd" id="con" @mouseenter="enter()" @mouseleave="leave()">
            <ul class="clearfix1">
            </ul>
          </div>
          <div class="boxfoot"></div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script type="es6">
  import  {axiosKj}  from '@/utils/requestKj'
  import axios from 'axios'
  import '@/views/dp/css/firstdp.css'
  import $ from 'jquery'
  import map from './map/map.vue'
  import mapTwo from './map/maptwo.vue'
  import pie from './pie/stationinfo.vue'
  import scatter from './scatter/scatterL3.vue'
  import pie3d from './pie/pie3d.vue'
  import bar from './bar/bar.vue'
  import qs from 'qs'
    export default {
        data() {
            return {
              dialogvalue:'',
              rollnum:0,
              dialogVisible: false,
              pageIndex: 1,
              pageSize: 10,
              totalPage: 0,
              tableData: [],
              tablePieData: [],
              pagePieIndex: 1,
              pagePieSize: 10,
              totalPiePage: 0,
              groupname:'',
              rolename:'',
              GroupID:'',
              groupNames:[],
              stationNames:[],
              dataJsonList:[],
              groupOp:{},
              selected:{site:0},
              timer1:'',
              timer11:'',
              timer2:'',
              dblick:0,
              date1: new Date(),
              myChart6: {},
              myChart7: {},
              myChart8: {},
              MaxId:0,
              flag:false,
              cityName:'宁波',
              stationdata:'',
              visible:false,
              alarmType:'',
              totalCommit:'',
              opennumCommit:'',
              closenumCommit:'',
              parameter:{
                start: 0,
                limit: 100000,
                stationNum:'',
                alarmTime_from:new Date()
              },
              maxDate:0,
              surl1:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5QTNFRjYyRUJDMTExRTk5NEJDRjJEMDZCRkNCRDI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5QTNFRjYzRUJDMTExRTk5NEJDRjJEMDZCRkNCRDI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjlBM0VGNjBFQkMxMTFFOTk0QkNGMkQwNkJGQ0JEMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjlBM0VGNjFFQkMxMTFFOTk0QkNGMkQwNkJGQ0JEMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7TpXBaAAABoUlEQVR42pyUPUvDUBSGb9QiFCwqOnTLIAhVl0JcBMVZUNTBUSd3XfwdhYIO/QeiVms66CBYcNDRDyqVri4WtLpUa+N72hO5Ob0p1gNPSM7He0/ul1KepwRJsAfK4JMpsy/Zlq99REEGNIAXQoNzolKAHIUOhZLCrwgL7HZR7EM1ysIjAZk7YKmgvYMLfp8HAyJOw0/S6CmD+hkY0uZnGJwb8lIULArnC4gZVifGMT232IM2bNHaKaiqdqtyTDebBCLC+aHCTcYiJFASzlnDhCr2zQlfiQRywjkFtgwC261ZD1jOX8Z7Q8EROOD3VbBsyEn4M5z9x0bK6jtxAtS7KK43OxeHKdOFQMZ0GkcNG8UE5YyYBIiNPwish90HBK1KvkNxnnNCBYg4qBiKKxwL5LfUlOoFC2AR9INDRrcVpgZOgAu+ScUGD8AFm8ABfSCtjZ5mn8M5LtfY1MEOlGZ4dN2ok0vtfNRE/BhcWc0lUWqfbxxq6xY8gVftFqLbaRCM8Vmh330Da/4ckDlgCUyDcRDXjvoXeAaP4JpHv6HAjwADACgIe7tzSZ9WAAAAAElFTkSuQmCC'

        }
        },
      components:{
        "mapecharts":map,
        "pieecharts":pie,
        "scatterecharts":scatter,
        "pie3decharts":pie3d,
        'barecharts':bar,
        mapTwo
      },
  //用于数据初始化
  created:function(){

    //加载站点数据
    axiosKj({
      url: '/GW.WIR/show/getKgzInfo.action',
      method: 'post'
      // data: parameter,
      // params: loginParams
    }).then((response) => {
      var datajson = eval('(' + response + ')').data;
      if(datajson.length>0){
        this.$refs.maptwo.setstationdata(datajson);
        this.stationdata=datajson;
      }
    });

  },
      mounted(){
        var that=this;
        window.onresize=function(){
          var whei=$(window).width();
          $("html").css({fontSize:whei/20})
          that.$refs.maptwo.resize(that.cityName);
          // that.$refs.pieecharts.resize();


        }
        this.groupname=sessionStorage.getItem('groupname');
        this.rolename=sessionStorage.getItem('rolename');

        // sessionStorage.getItem('loginname', retdata.loginname);
        if(this.rolename==1) {
          axiosKj({
            url: '/GW.WIR/cabTGroup/getGroupList.action',
            method: 'post',
            // headers: {
            //   'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
            // },
            // data: parameter,
            // params: loginParams
          }).then((response) => {

            var obj3 = '{"Table" ' + response.substr(response.search('Table') + 5, response.length - 1);
            var datajson = JSON.parse(obj3).Table;
            var groupopall={};
            groupopall.key='宁波';
            groupopall.value='宁波';
            groupopall.label='宁波';
            this.groupNames.push(groupopall);
            for (var i = 0; i < datajson.length; i++) {
              var groupop={};
              groupop.key=datajson[i].groupName;
              groupop.value=datajson[i].groupName;
              groupop.label=datajson[i].groupName;
              this.groupNames.push(groupop);
            }
            this.cityName=this.groupNames[0].label;

            this.getgroupid();
            this.stationAction();

            this.executeTime1();
            this.executeTime2();
            this.executeTime3();
          }).catch((res)=>{
            this.$router.push({ name: 'dplogin' })
          });
        }else{
          axiosKj({
            url: '/GW.WIR/cabTGroup/getGroupList.action',
            method: 'post',
          }).catch((res)=> {
            this.$router.push({name: 'dplogin'})
          });
          this.groupOp.key=this.groupname;
          this.groupOp.value=this.groupname;
          this.groupOp.label=this.groupname;
          this.groupNames.push(this.groupOp);
          this.cityName=this.groupNames[0].label;
          this.$refs.maptwo.load(this.cityName);
          this.getgroupid();
          this.stationAction();
          this.executeTime1();
          this.executeTime2();
          this.executeTime3();

        }


        var whei=$(window).width();
        $("html").css({fontSize:whei/20})

      var params={params:{ start: 0,
        limit: 100000}
        // ,
        // headers: {
        //   'Content-Type': 'application/json;charset=UTF-8'
        // }
      };
      var headers={
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
        };
        var data={
          data: {
            ROLENAME:'超级管理员'
          }
          };

        const parameter = { }
        // start: 0,
        //   limit: 100000,ROLENAME:'超级管理员'
        parameter.start=0;
        parameter.limit=100000;
        parameter.ROLENAME=encodeURI('超级管理员');
        parameter.stationNum=13373685112;


        var surl2='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2MjVEMEY4RUMyQjExRTk4MzZBRERCOUEwQzhENTlBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2MjVEMEY5RUMyQjExRTk4MzZBRERCOUEwQzhENTlBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDYyNUQwRjZFQzJCMTFFOTgzNkFEREI5QTBDOEQ1OUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDYyNUQwRjdFQzJCMTFFOTgzNkFEREI5QTBDOEQ1OUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5rr3QDAAAAZklEQVR42mJ8oRHIAASqQNwBxC4MELAHiCuA+DYLkFAH4hNALMCAAEFA7ATEFkxAog1NEgZAYm1MSMZiA25MDAQAE9RBuMAukIJqIP6ARRIkVg1ScAPkWiBeB8SfoXgdVOwGQIABADmOEaKmFMIAAAAAAElFTkSuQmCC';
        var k=1;


        var that = this;

        var settime = setInterval(function(){
          that.date1 = new Date();
        },1000);






          },
      filters: {
        formatDateTime(value) {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          let h = date.getHours();
          h = h < 10 ? "0" + h : h;
          let m = date.getMinutes();
          m = m < 10 ? "0" + m : m;
          let s = date.getSeconds();
          s = s < 10 ? "0" + s : s;
          return  y + "-" + MM + "-" + d + " "+h + ":" + m + ":" + s ;
        }
      },
      watch:{
        $route(){
          //跳转到该页面后需要进行的操作
          // $("html").css({fontSize:''});
          // if (this.timer1) {
          // clearInterval(this.timer1); // 在Vue实例销毁前，清除我们的定时器
          // clearInterval(this.timer11);
        }
      },
      beforeDestroy() {
        $("html").css({fontSize:''});
        // if (this.timer1) {
          clearInterval(this.timer1); // 在Vue实例销毁前，清除我们的定时器
          clearInterval(this.timer11);
        // }
      },
      methods:{
        handleClose(){
          this.dialogVisible=false;
          var that = this;
          var datajson = this.tableData
          this.timer11 = setInterval(function () {

            if (datajson.length - 1 == that.rollnum) {
              clearInterval(that.timer11);
            }
            that.Roll(datajson[datajson.length - 1 - that.rollnum]);
            that.rollnum++;
          }, 1000);
        },
        enter(){
          // clearInterval(this.timer1); // 在Vue实例销毁前，清除我们的定时器
          clearInterval(this.timer11);
        },
        leave(){
          if(!this.dialogVisible) {
            var that = this;
            var datajson = this.tableData
            this.timer11 = setInterval(function () {

              if (datajson.length - 1 == that.rollnum) {
                clearInterval(that.timer11);
              }
              that.Roll(datajson[datajson.length - 1 - that.rollnum]);
              that.rollnum++;
            }, 1000);
          }
        },
        pieClick(data){
          if(this.alarmType==data.name){
            this.visible=!this.visible;
          }else{
            this.visible=true;
          }
          if(this.visible) {
            this.executePieTime(data.name);
          }
          this.alarmType=data.name;

        },
        setpieNum(totalCommit,opennumCommit,closenumCommit){
          this.totalCommit=totalCommit;
          this.opennumCommit=opennumCommit;
          this.closenumCommit=closenumCommit;
        },
        sizeChangeHandle (val) {
          this.pageSize = val
          this.pageIndex = 1
          this.getTableData()
        },
        sizeChangeHandlePie (val) {
          this.pagePieSize = val
          this.pagePieIndex = 1
          this.getTableData()
        },
        // 当前页
        currentChangeHandle (val) {
          this.pageIndex = val
          this.getTableData()
        },
        currentChangeHandlePie (val) {
          this.pagePieIndex = val
          this.getTableData()
        },
          getgroupid(){
            var data=this.cityName;
            if(data=='鄞州'){
             this.GroupID=1
            }else if(data=='海曙'){
              this.GroupID=2
            }else if(data=='奉化'){
              this.GroupID=3
            }else if(data=='余姚'){
              this.GroupID=4
            }else if(data=='慈溪'){
              this.GroupID=5
            }else if(data=='集中'){
              this.GroupID=21
            }else if(data=='宁海'){
              this.GroupID=22
            }else if(data=='江东'){
              this.GroupID=41
            }else if(data=='江北'){
              this.GroupID=42
            }else if(data=='北仑'){
              this.GroupID=61
            }else if(data=='镇海'){
              this.GroupID=81
            }
          },
          stationAction(){
            this.stationNames=[];
            var parm={GroupID:this.GroupID};
            if(this.cityName=='宁波'){
              delete parm.GroupID;
            }
            axiosKj({
              url: '/GW.WIR/kgStation/getKgStationDataList.action',
              method: 'post',
              // headers: {
              //   'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
              // },
              // data: parameter,
              params: parm
            }).then((response) => {

              var datajson = eval('(' + response + ')').data;
              var groupopALL={};
              groupopALL.key='0';
              groupopALL.value='0';
              groupopALL.label='全部站点';
              this.stationNames.push(groupopALL);
              for (var i = 0; i < datajson.length; i++) {
                var groupop={};
                groupop.key=datajson[i].STATIONNUM;
                groupop.value=datajson[i].STATIONNUM;
                groupop.label=datajson[i].STATIONNAME;
                this.stationNames.push(groupop);
              }
            });
          },
        executeTime1(){
          var parms=this.parameter;

          if(this.parameter.stationNum=="0"||this.parameter.stationNum==""){
            delete parms.stationNum;
          }
          if(this.cityName!='宁波') {
            parms.groupName = this.cityName;
          }else{
            delete parms.groupName;
          }

          var now = new Date();
  var alarmdatefrom = new Date((now/1000-86400*1)*1000);//前3天
  var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
  var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
  var day = alarmdatefrom.getDate();        //获取当前日(1-31)
  parms.alarmTime_from=year+"-"+month+"-"+day+" 00:00:00";

  axiosKj({
    url: '/GW.WIR/alarm/getKgzAlarmList.action',
    method: 'post',
    headers: {
      'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
    },
    // data: parameter,
    params: parms
  }).then(response=>{
    // if(this.dblick==1){
    //   var ul = $(".addNewd ul");
    //   ul.find("li").remove();
    //   that.dblick=0;
    // }

    // var obj3='{"Table" '+response.substr(response.search('Table')+5,response.length-1);
    // var datajson=JSON.parse(obj3).Table;
    var obj3= eval('(' + response + ')');
    var datajson=obj3.Table;
    if(datajson.length>0) {
      this.totalPage = parseInt(obj3.RecordCount)
      this.tableData = datajson
      this.rollnum = 0;
      var that = this;
      this.RollInit(datajson);
      that.timer11 = setInterval(function () {

        if (datajson.length - 1 == that.rollnum) {
          clearInterval(that.timer11);
        }
        that.Roll(datajson[datajson.length - 1 - that.rollnum]);
        that.rollnum++;
      }, 1000);

    }else{
      this.tableData = [];
      clearInterval(this.timer11);
      var ul = $(".firstdp_addNewd ul");
      window.setTimeout(function() {
        ul.find("li").remove();
      }, 1000);
    }
    // }
  });
  },
        cloneObjectFn(obj){
          return JSON.parse(JSON.stringify(obj))
        },
          executePieTime(data){
          var parms=this.cloneObjectFn(this.parameter);

          if(this.parameter.stationNum=="0"||this.parameter.stationNum==""){
            delete parms.stationNum;
          }
          if(this.cityName!='宁波') {
            parms.groupName = this.cityName;
          }else{
            delete parms.groupName;
          }
           parms.alarmType=data;
          var now = new Date();
          var alarmdatefrom = new Date((now/1000-86400*1)*1000);//前3天
          var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
          var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
          var day = alarmdatefrom.getDate();        //获取当前日(1-31)
          parms.alarmTime_from=year+"-"+month+"-"+day+" 00:00:00";

          axiosKj({
            url: '/GW.WIR/alarm/getKgzAlarmList.action',
            method: 'post',
            headers: {
              'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
            },
            // data: parameter,
            params: parms
          }).then(response=>{
            // if(this.dblick==1){
            //   var ul = $(".addNewd ul");
            //   ul.find("li").remove();
            //   that.dblick=0;
            // }

            // var obj3='{"Table" '+response.substr(response.search('Table')+5,response.length-1);
            // var datajson=JSON.parse(obj3).Table;
            var obj3= eval('(' + response + ')');
            var datajson=obj3.Table;
            if(datajson.length>0) {
              this.totalPiePage = parseInt(obj3.RecordCount)
              this.tablePieData = datajson

            }else{
              this.tablePieData = [];
            }
            // }
          });
        },


        executeTime2(){

          var parms=this.parameter;

          if(this.parameter.stationNum=="0"||this.parameter.stationNum==""){
            delete parms.stationNum;
          }
          if(this.cityName!='宁波') {
            parms.groupName = this.cityName;
          }else{
            delete parms.groupName;
          }

          var now = new Date();
          var alarmdatefrom = new Date((now/1000-86400*1)*1000);//前3天
          var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
          var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
          var day = alarmdatefrom.getDate();        //获取当前日(1-31)
          parms.alarmTime_from=year+"-"+month+"-"+day+" 00:00:00";

          axiosKj({
            url: '/GW.WIR/alarm/getAlarmChartResult.action',
            method: 'post',
            headers: {
              'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
            },
            // data: parameter,
            params: parms
          }).then(response=>{

            if(response.length>0) {
              this.$refs.pie3decharts.setData(response);

            }
          });
        },
        executeTime3(){
          var parms=this.parameter;

          if(this.parameter.stationNum=="0"||this.parameter.stationNum==""){
            delete parms.stationNum;
          }

          axiosKj({
            url: '/GW.WIR/kgStation/getStatusStationList.action',
            method: 'post',
            headers: {
              'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
            },
            // data: parameter,
            params: parms
          }).then(response=>{

            var obj3='{"Table" '+response.substr(response.search('Table')+5,response.length-1);
            var datajson=JSON.parse(obj3).Table;
            this.dataJsonList=datajson;
            this.$refs.maptwo.load(this.cityName,datajson);
            this.flag = true;
            if(datajson.length>0) {
              this.$refs.pieecharts.setData(datajson,this.cityName);

            }
          });
        },
        processing(arrayData){

  },
        Roll(datajson){

           if(typeof datajson === 'undefined'){
                return;
           }
           var that=this;
          var html = ' <li class="clearfix1"> <span class="pulll_left1" style="color:#00CCFF">' + datajson.CREATEDATE + '</span> <span class="pulll_center1" style="color:#00CCFF">' + datajson.STATIONNAME + ' </span><span class="pulll_right" style="color:#00CCFF">' + datajson.ALARMTYPE + '</span><img src="' + this.surl1 + '" id="testimg'+this.rollnum+'"  /></li>';
          var ul = $(".firstdp_addNewd ul");
          var thistime=new Date(datajson.CREATEDATE).getTime();
          if(this.maxDate<thistime) {
            this.maxDate =thistime;
          var liHeight = ul.find("li:last").height();
          var lis = ul.find("li").length;
          ul.animate({
            marginTop: -liHeight + "px"
          }, 1000, function () {
            if (lis > 12) {
              ul.find("li:first").remove();
            }
            ul.css({marginTop: 0});
            ul.find("li:last").fadeIn(liHeight);


          });
            ul.append(html);
            // $("#testimg15").on("click",function(Index){
            //   debugger
            //   alert(that.tableData[that.tableData.length-1-Index.currentTarget.id.substr(7)].STATIONNAME)
            // });
          // debugger
          //   alert(that.rollnum);
            $("#testimg"+that.rollnum).on("click",function(Index){
              that.dialogvalue=that.tableData[that.tableData.length-1-Index.currentTarget.id.substr(7)].STATIONNAME+'【'+that.tableData[that.tableData.length-1-Index.currentTarget.id.substr(7)].ALARMTYPE+'】'
              that.dialogVisible=true;
              // alert(that.tableData[that.tableData.length-1-Index.currentTarget.id.substr(7)].STATIONNAME)
            });
        }
        },
        RollInit(datajson){

          var that=this;
          var ul = $(".firstdp_addNewd ul");
             for(var i=0;i<datajson.length;i++){
               if(i==13){
                 break;
               }
               var data=datajson[datajson.length - 1 - i];
               var html = ' <li class="clearfix1"> <span class="pulll_left1" style="color:#00CCFF">' + data.CREATEDATE + '</span> <span class="pulll_center1" style="color:#00CCFF">' + data.STATIONNAME + ' </span><span class="pulll_right" style="color:#00CCFF">' + data.ALARMTYPE + '</span><img src="' + this.surl1 + '" id="testimg'+this.rollnum+'" /></li>';


               var thistime=new Date(data.CREATEDATE).getTime();
               if(this.maxDate<thistime) {
                 this.maxDate =thistime;
                 var liHeight = ul.find("li:last").height();
                 var lis = ul.find("li").length;

                   ul.append(html);
                 $("#testimg"+that.rollnum).on("click",function(Index){
                   that.dialogvalue=that.tableData[that.tableData.length-1-Index.currentTarget.id.substr(7)].STATIONNAME+'【'+that.tableData[that.tableData.length-1-Index.currentTarget.id.substr(7)].ALARMTYPE+'】'

                   that.dialogVisible=true;
                   // alert(that.tableData[that.tableData.length-1-Index.currentTarget.id.substr(7)].STATIONNAME)
                 });
                 this.rollnum++;

               }
             }
        },
        rng(){
          alert('OK')
        },
        rebackclick(){

          // this.$router.push({ name: 'first-detail',path:"/dp/first-detail" })
          this.$router.push({name: 'first'})

          // $("html").css({fontSize:''});
          // if (this.timer1) {
          clearInterval(this.timer1); // 在Vue实例销毁前，清除我们的定时器
          clearInterval(this.timer11);
        },
        backmap(){
          this.$refs.maptwo.backmap();
        },
        testclick(){
          //右下滚动
          this.maxDate=0;

          let site_ =  document.getElementById('site')
          var name = site_.options[site_.selectedIndex].label;
          var value=site_.options[site_.selectedIndex].value;
          this.parameter.stationNum=value;

          clearInterval(this.timer11);
          clearInterval(this.timer1);
          var ul1 = $(".firstdp_addNewd");
          var ul = $(".firstdp_addNewd ul");
          this.dblick=1;
          this.visible=false;
          // ul.children().empty();
          // ul1.empty();

          window.setTimeout(function() {
            ul.find("li").remove();
          }, 1000);
          // ul.find("li:last").remove();
          var that=this;

          window.setTimeout(function() {
            that.executeTime1();
          that.timer1=setInterval(function(){
            that.executeTime1();
          },30000);
          }, 1000);


          //右上bar
          this.executeTime2();


          this.$refs.maptwo.setcenterAndZoom(value);

          // this.$router.push({ name: 'detaildp',path:"/dp/detaildp" })
        },
        sleep(d) {
          return new Promise((resolve) => setTimeout(resolve, d))
        },
        cityclick(){
            this.$refs.maptwo.backmap();
          let city_ =  document.getElementById('city')

          var name = city_.options[city_.selectedIndex].label;
          var value= city_.options[city_.selectedIndex].value;
          this.cityName=name;
          this.maxDate=0;
          this.parameter.stationNum='';
          clearInterval(this.timer11);
          clearInterval(this.timer1);
          var ul1 = $(".firstdp_addNewd");
          var ul = $(".firstdp_addNewd ul");
          this.dblick=1;
          this.visible=false;
          window.setTimeout(function() {
            ul.find("li").remove();
          }, 1000);
          var that=this;
          this.timer1=setInterval(function(){
            that.executeTime1();
          },30000);
          this.getgroupid();
          this.stationAction();
          window.setTimeout(function() {
            that.executeTime1();
          }, 1000);
          this.executeTime2();
          this.executeTime3();
        },
        capacityEachart : function () {

          setTimeout(function(){
          }, 500);
        }
      }
    }
</script>

<style lang="less" scoped>

</style>
