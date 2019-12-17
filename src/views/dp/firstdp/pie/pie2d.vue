


<template>
    <div>
        <div id="powerInfoEchart" style="height:3.2rem;width:5rem; "></div>
    </div>
</template>

<script>
    import HighCharts from 'highcharts'
    export default {
        components: {},
        data() {
            return {
                show: false,
                borderHeight: 5,
                borderWidth: 5,
                powerInfoEchart: null,
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
                }, {
                    date: '变电站一',
                    name: '路桥开关站',
                    percent: 50
                }],
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
        mounted() {},
        created() {
            this.$nextTick(function() {
                let self = this;
                this.getPie3d();
            });
        },
        methods: {
            clickEvent(event) {
                this.$emit('pieClick', event)
            },
            setData(data) {
                // var valdata=[data[0].HWBJ,data[0].SDBJ,data[0].WDBJ,data[0].SWBJ,data[0].MCBJ,data[0].DYGJ];
                this.getPie3d(data);
                // data[0].DYGJ;//电源告警
                // data[0].DYZC;//电源正常
                // data[0].HWBJ;//红外报警
                // data[0].MCBJ;//门磁报警
                // data[0].SDBJ;//湿度报警
                // data[0].SWBJ;//水位报警
                // data[0].WDBJ;//温度报警
            },
            getPie3d(data) {
                var that = this;
                console.log("3333333333333333333", data)
                var titlename = ['红外报警', '湿度报警', '温度报警', '水位报警', '门磁报警', '电源告警',"烟雾报警","凝露报警"];
                var valdata = [{
                        value: data[0].HWBJ,
                        name: '红外报警',
                    },
                    {
                        value: data[0].SDBJ,
                        name: '湿度报警'
                    },
                    {
                        value: data[0].WDBJ,
                        name: '温度报警'
                    },
                    {
                        value: data[0].SWBJ,
                        name: '水位报警'
                    },
                    {
                        value: data[0].MCBJ,
                        name: '门磁报警'
                    },
                    {
                        value: data[0].DYGJ,
                        name: '电源告警'
                    },
                    {
                        value: data[0].YWBJ,
                        name: '烟雾报警'
                    },
                    {
                        value: data[0].NLBJ,
                        name: '凝露报警'
                    },
                ]
                this.powerInfoEchart = this.$echarts.init(document.getElementById("powerInfoEchart"))
                this.powerInfoEchart.on('click', (params) => {
                    console.log("-----", params)
                    this.clickEvent(params.data)
                })
                var colorList = ['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', "rgba(250,250,250,0.5)", "#0f0","#daa520","red"];
                this.powerInfoEchart.setOption({
                    grid: {
                        top: "50%",
                        bottom: "0%",
                        left: 0,
                        right: '10%'
                    },
                    legend: {
                        show: false,
                        orient: 'vertical',
                        top: "bottom",
                        right: "5%",
                        textStyle: {
                            color: '#f2f2f2',
                            fontSize: 25,
                        },
                    },
                    series: [
                        // 主要展示层的
                        {
                            radius: ['40%', '59%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 5,
                                    length2: 120,
                                    lineStyle: {
                                        color: '#d3d3d3'
                                    },
                                    align: 'right'
                                },
                                color: "#000",
                                emphasis: {
                                    show: true
                                }
                            },
                            label: {
                                normal: {
                                    formatter: function(params) {
                                        var str = '';
                                        switch (params.name) {
                                            case '红外报警':
                                                str = '{a|}\n{nameStyle|红外报警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                            case '湿度报警':
                                                str = '{b|}\n{nameStyle|湿度报警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                            case '温度报警':
                                                str = '{c|}\n{nameStyle|温度报警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                            case '水位报警':
                                                str = '{d|}\n{nameStyle|水位报警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                            case '门磁报警':
                                                str = '{e|}\n{nameStyle|门磁报警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                            case '电源告警':
                                                str = '{e|}\n{nameStyle|电源告警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                            case '烟雾报警':
                                                str = '{e|}\n{nameStyle|烟雾报警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                            case '凝露报警':
                                                str = '{e|}\n{nameStyle|凝露报警 }' + '' + '{rate|' + params.value + '%}';
                                                break;
                                        }
                                        return str
                                    },
                                    padding: [-5, -110],
                                    height: 135,
                                    rich: {
                                        a: {
                                            width: 38,
                                            height: 38,
                                            lineHeight: 50,
                                            align: 'left',
                                        },
                                        b: {
                                            width: 29,
                                            height: 45,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        c: {
                                            width: 34,
                                            height: 33,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        d: {
                                            width: 34,
                                            height: 44,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        e: {
                                            width: 38,
                                            height: 30,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        nameStyle: {
                                            fontSize: 16,
                                            color: "#0EFCFF",
                                            align: 'left'
                                        },
                                        rate: {
                                            fontSize: 16,
                                            color: "#fff",
                                            align: 'left'
                                        }
                                    }
                                }
                            },
                            data: valdata
                        },
                        // 边框的设置
                        {
                            radius: ['60%', '63%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            animation: false,
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0,
                                            color: 'rgba(255,255,255,.5)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(255,255,255,.5)' // 100% 处的颜色
                                        }],
                                        global: false // 缺省为 false
                                    },
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                    shadowBlur: 10
                                }
                            },
                            data: [{
                                value: 1,
                            }],
                        }
                    ]
                });
                // window.onresize = this.powerInfoEchart.resize // 加这行代码，没错！
                window.addEventListener("resize", () => {
                    this.powerInfoEchart.resize();
                });
            }
        }
    }
</script>
<style>

</style>

<style scoped>
    .echarts {}
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




