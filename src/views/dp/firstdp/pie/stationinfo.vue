<template>
    <div >
      <div id="stationinfopie" style="height:0rem;width:0rem; "></div>
    </div>

</template>

<script>

  import HighCharts from 'highcharts'
  export default {
    components: {

    },
    data () {
      return {
        show: false,
        borderHeight: 5,
        borderWidth: 5,
        id: 'test2',
        dataForm: {
          page: 1,
          limit: 2,
          orderField: '',
          order: '',
          name: ''
        },
        tableData: [{
          date: '变电站一',
          name: '路桥开关站',
          percent: 50
        }, {
          date: '变电站一',
          name: '路桥开关站',
          address: '开关柜异常',
          percent: 50
        },{
          date: '变电站一',
          name: '路桥开关站',
          percent: 50
        } ],
      }
    },
    props: {
      width: {
        type: String,
        default: '400px'
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    watch: {},
    mounted() {

    },
    created () {
      this.$nextTick(function(){
        let self = this;

      });
    },
    methods: {
      clickEvent(event){

        this.$emit('pieClick',event.point)
      },
      setData(data,cityname){
        var totalAll=0,opennumAll=0,closenumAll=0;
        var total=0,opennum=0,closenum=0;
        var totalCommit=0,opennumCommit=0,closenumCommit=0;

        for(var i=0;i<data.length;i++){
          totalAll=totalAll+data[i].total;
          opennumAll=opennumAll+data[i].opennum;
          closenumAll=closenumAll+data[i].closenum;

          if(data[i].groupname==cityname){
            total=data[i].total;
            opennum=data[i].opennum;
            closenum=data[i].closenum;
          }
        }
        if(total==0){
          if(cityname=='宁波') {
            totalCommit = totalAll;
            opennumCommit = opennumAll;
            closenumCommit = closenumAll;
          }else{
            totalCommit=total;
            opennumCommit=opennum;
            closenumCommit=closenum;
          }
        }else{
          totalCommit=total;
          opennumCommit=opennum;
          closenumCommit=closenum;
        }
        this.getstationinfo(totalCommit,opennumCommit,closenumCommit);
        this.$emit('pieNum',totalCommit,opennumCommit,closenumCommit)
      },
    getstationinfo(totalCommit,opennumCommit,closenumCommit) {
        var that=this;
      var titlename = ['在线', '离线'];
      var valdata=[['在线',opennumCommit],
                ['离线',closenumCommit]];

      var  option={
        chart: {
          // plotBackgroundColor:'',
          // backgroundColor:'',
          // backgroundColor:'rgba(128, 128, 128, 0)', //rgba设置透明度0.1
          backgroundColor: 'rgba(255, 255, 255, 0)', // 改变整体背景颜色
          renderTo: name,
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 50
          }
        },
        credits:{
          enabled: false
        },
        legend: {  // 图例位置和样式
          enabled: false,
          layout: 'horizontal',
          align: 'center',
          itemStyle: {
            color: "#fff",
            fontSize: 14,
          },
          // x: 0,
          // y: '30%',
          show:false,
          verticalAlign: 'bottom',
          squareSymbol:true,//当此设定为true时，图例标志的长、宽将相等。长、宽尺寸默认与图例项字体大小一致。 默认是：true.
          itemDistance: 30,//图例项间距
          itemWidth: 120,//设定每个图例项的宽度。当图例有很多图例项，并且用户想要这些图例项在同一平面内垂直对齐，此时这个属性可帮用户实现此效果。
          itemMarginTop: 10,//设定图例项行高。2.1 版本后已经废弃该属性，取而代之的是可在 itemStyle 设置行高。图例各项行高和内边距可用 itemMarginTop 和 itemMarginBottom来设置。 默认是：16
          itemMarginBottom: 10,//设定图例项行高。2.1 版本后已经废弃该属性，取而代之的是可在 itemStyle 设置行高。图例各项行高和内边距可用 itemMarginTop 和 itemMarginBottom来设置。 默认是：16
          symbolRadius: 0,//图例标志的边框圆角。默认为 symbolHeight值的一半。
        },
        colors: ['#00FFFF', '#FB457A'], // 不同块显示的颜色
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          series: {
            dataLabels: {
              color:'white',
              style: {
                fontWeight: 'bold',
                fontSize: '18px',
                color: 'red'
              },
              zIndex:10,
              borderWidth: 0,
              enabled: true,
              backgroundColor: 'rgba(252, 255, 255, 0)',
            },
            cursor: 'pointer',
            events: {
              click: function(event) {
               that.clickEvent(event);
                // alert(this.name +' clicked\n'+
                //   'Alt: '+ event.altKey +'\n'+
                //   'Control: '+ event.ctrlKey +'\n'+
                //   'Shift: '+ event.shiftKey +'\n');
                // location.href='http://www.baidu.com';
              }
            }
          }
,
          pie: {
            // backgroundColor: '#1089E7',
            borderColor:'',
            size:200,
            innerSize: 100,
            depth: 30,
            allowPointSelect: false,
            cursor: 'pointer',
            showInLegend: true,  // 是否显示图例
            dataLabels: {
              // connectorWidth: 1,
              enabled: true,
              // borderWidth: 30,
              formatter: function() {     //设置字体与引导线和饼图颜色一致
                if(this.point.name == '在线'){
                  return  this.point.name +'<br/>'+ HighCharts.numberFormat(this.percentage, 2)+'%';
                }else if(this.point.name == '离线'){
                  return  this.point.name +'<br/>'+ HighCharts.numberFormat(this.percentage, 2)+'%';
                }
              }
            }
          }
        },
        series: [{
          name: '所占比',
          data: valdata
        }]
      };
      HighCharts.chart('stationinfopie', option)
    }
      }

  }
</script>
<style>

</style>

<style scoped>
    .echarts {
    }

    .percent {
        width: 0.5rem;
        height: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        background-color: #2d68b2;
        font-size: 0.12rem;
        border-radius: 0.22rem;
    }
</style>
