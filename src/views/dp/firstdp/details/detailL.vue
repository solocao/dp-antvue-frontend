<template>
  <div >
   1234
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

</style>


