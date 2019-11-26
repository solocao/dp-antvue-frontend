<template>
    <div class="demo1">
        <div id="demo1" style="width:500px;height:300px"></div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                formData: {
                    dataList: [],
                    timesList: [],
                    count1: [],
                    count2: [],
                }
            }
        },
        props: {
            name: {
                type: String,
                default: "直接访问"
            }
        },
        mounted() {
            //检测 图标自适应
            this.initChart()
            this.getMessage()
        },
        watch: {
            formData: {
                handler: function(val) {
                    console.log('监听---', val)
                    this.initChart()
                },
                deep: true
            },
        },
        beforeDestroy() {},
        methods: {
            getMessage() { //
                this.$axios.post("/epAgent/dataModel/interface/cfa1481ff4414fc8", {
                    "pageNum": 1,
                    "pageSize": 20,
                    "whereWord": {}
                }).then((res) => {
                    console.log("返回信息---", res.result.tableDatas)
                    res.result.tableDatas.map((item, index) => {
                        console.log("item----", item.times)
                        this.formData.timesList.push(item.times)
                        this.formData.count1.push(item.count1)
                        this.formData.count2.push(item.count2)
                    })
                })
            },
            initChart() {
                //这句申明建议写到外面去
                this.chart = this.$echarts.init(document.getElementById("demo1"))
                this.chart.setOption({
                    // backgroundColor: '#2c343c',
                    title: {
                        text: 'Customized Pie',
                        // left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    grid: [{
       left: '0',
       bottom: '0',
       top: '20%',
       right: '0'
   }],
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '65%',
                        top: [0, 200],
                        // center: ['50%', '50%'],
                        data: [{
                                value: 335,
                                name: '直接访问'
                            },
                            {
                                value: 310,
                                name: '邮件营销'
                            },
                            {
                                value: 274,
                                name: '联盟广告'
                            },
                            {
                                value: 235,
                                name: '视频广告'
                            },
                            {
                                value: 400,
                                name: '搜索引擎'
                            }
                        ].sort(function(a, b) {
                            return a.value - b.value;
                        }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 1)',
                                    fontSize: 20
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function(idx) {
                            return Math.random() * 200;
                        }
                    }]
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .demo1 {
        width: 100%;
    }
</style>


