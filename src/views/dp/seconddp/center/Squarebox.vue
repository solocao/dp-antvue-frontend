<template>
  <div :class="this.activeNum>0 ? 'squbox1': 'squbox'" @click="changeActive(0)">

        <!--<el-row :gutter="20" >-->
          <!--<el-col :span="10" v-for="(project,index) in allprojects"  :offset="10" class="s_box_abnormal" >-->

          <!--</el-col>-->

        <!--</el-row>-->

  </div>
</template>

<script type="es6">
  import '@/views/dp/css/seconddp.css'
    export default {
        data() {
            return {
              activeNum:0,
              allprojects:[
                {
                  pid:'123',
                  pname:'pname',
                  pcname:'pcname',
                  pdatesave:'2018-4-9 11:11:11',
                  ppageview:10
                },
                {
                  pid:'123',
                  pname:'pname',
                  pcname:'pcname',
                  pdatesave:'2018-4-9 11:11:11',
                  ppageview:10
                },
                {
                  pid:'123',
                  pname:'pname',
                  pcname:'pcname',
                  pdatesave:'2018-4-9 11:11:11',
                  ppageview:10
                },
                {
                  pid:'123',
                  pname:'pname',
                  pcname:'pcname',
                  pdatesave:'2018-4-9 11:11:11',
                  ppageview:10
                },
                {
                  pid:'123',
                  pname:'pname',
                  pcname:'pcname',
                  pdatesave:'2018-4-9 11:11:11',
                  ppageview:10
                },
                {
                  pid:'123',
                  pname:'pname',
                  pcname:'pcname',
                  pdatesave:'2018-4-9 11:11:11',
                  ppageview:10
                }
              ]
            }
        },
      methods: {
        changeActive(){
          this.activeNum=1;
        }
      }
    }
</script>

<style lang="less" scoped>
  .el-row{
    height: 100%;
  }
</style>
