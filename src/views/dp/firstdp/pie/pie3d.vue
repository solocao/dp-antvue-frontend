<template>
    <div >
      <div id="pie3d" style="height:200px;width:400px"></div>
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
            layout: 'vertical',
            align: 'right',
            itemStyle: {
              color: "#fff",
              fontSize: 14,
            },
            x: 0,
            y: 30,
            show:false,
            verticalAlign: 'middle',
          },
          colors: ['#66eec0', '#a362fa', '#0199ec', '#f9986b'], // 不同块显示的颜色
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
              depth: 20,
              allowPointSelect: false,
              cursor: 'pointer',
              showInLegend: true  // 是否显示图例
            }
          },
          series: [{
            name: '所占比',
            data: [
              ['90%~100%', 8],
              ['80%~90%', 3],
              ['70%~80%', 8],
              ['70%以下', 3]
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
        let self = this;

        this.getPie3d();

      });
    },
    methods: {
    getPie3d() {
      HighCharts.chart('pie3d', this.option)
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
