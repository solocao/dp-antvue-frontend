<template>
  <div>
      <div id="container" style="height:400px;width:450px"></div>
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
        option: {
          chart: {
            backgroundColor: 'rgba(255, 255, 255, 0)', // 改变整体背景颜色
            // renderTo: name,
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
            enabled: true,
            // layout: 'vertical',
            verticalAlign: 'bottom',
            align: 'center',
            itemStyle: {
              color: "#0EFCFF",
              fontSize: 14
            },
            squareSymbol:true,//当此设定为true时，图例标志的长、宽将相等。长、宽尺寸默认与图例项字体大小一致。 默认是：true.
            itemDistance: 30,//图例项间距
            itemWidth: 120,//设定每个图例项的宽度。当图例有很多图例项，并且用户想要这些图例项在同一平面内垂直对齐，此时这个属性可帮用户实现此效果。
            itemMarginTop: 10,//设定图例项行高。2.1 版本后已经废弃该属性，取而代之的是可在 itemStyle 设置行高。图例各项行高和内边距可用 itemMarginTop 和 itemMarginBottom来设置。 默认是：16
            itemMarginBottom: 10,//设定图例项行高。2.1 版本后已经废弃该属性，取而代之的是可在 itemStyle 设置行高。图例各项行高和内边距可用 itemMarginTop 和 itemMarginBottom来设置。 默认是：16
            symbolRadius: 0,//图例标志的边框圆角。默认为 symbolHeight值的一半。
            x: 0,
            y: 0
          },
          colors: ['#ACD4E9', '#1F8CE6', '#279AED', '#33A8ED','#79C8EB','#4AB6ED'], // 不同块显示的颜色
          title: {
            text: ''
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              size:200,
              innerSize: 100,
              depth: 40,
              allowPointSelect: false,
              cursor: 'pointer',
              showInLegend: true,  // 是否显示图例
              dataLabels: {
                // connectorWidth: 1,
                enabled: true,
                // borderWidth: 30,
                formatter: function() {     //设置字体与引导线和饼图颜色一致
                  if(this.point.name == '视频干扰'){
                    return '<span style="color:#1F8CE6;font-size:14px;">'+ this.point.name +'</span><br/><span style="color:#1F8CE6;font-size:14px;">'+ HighCharts.numberFormat(this.percentage, 2)+'%</span>';
                  }else if(this.point.name == '监控报警'){
                    return '<span style="color:#1F8CE6;font-size:14px;">'+ this.point.name +'</span><br/><span style="color:#1F8CE6;font-size:14px;">'+ HighCharts.numberFormat(this.percentage, 2)+'%</span>';
                  }else if(this.point.name == '电压报警'){
                    return '<span style="color:#1F8CE6;font-size:14px;">'+ this.point.name +'</span><br/><span style="color:#1F8CE6;font-size:14px;">'+HighCharts.numberFormat(this.percentage, 2)+'%</span>';
                  }else if(this.point.name == '电流报警'){
                    return '<span style="color:#1F8CE6;font-size:14px;">'+ this.point.name +'</span><br/><span style="color:#1F8CE6;font-size:14px;">'+ HighCharts.numberFormat(this.percentage, 2)+'%</span>';
                  }else if(this.point.name == '取流失败'){
                    return '<span style="color:#1F8CE6;font-size:14px;">'+ this.point.name +'</span><br/><span style="color:#1F8CE6;font-size:14px;">'+ HighCharts.numberFormat(this.percentage, 2)+'%</span>';
                  }else if(this.point.name == '电池故障'){
                    return '<span style="color:#1F8CE6;font-size:14px;">'+ this.point.name +'</span><br/><span style="color:#1F8CE6;font-size:14px;">'+ HighCharts.numberFormat(this.percentage, 2)+'%</span>';
                  }
                }
              }
            }
          },
          series: [{
            name: '所占比',
            data: [
              ['视频干扰', 62],
              ['监控报警',57],
              ['电压报警', 41],
              ['电流报警', 35],
              ['取流失败', 22],
              ['电池故障', 12]
            ]
          }]
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
      //   let self = this;

        this.getPie3d();

      });
    },
    methods: {
    getPie3d() {

      // HighCharts.chart('container',this.option1 );
      HighCharts.chart('container', this.option);
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
