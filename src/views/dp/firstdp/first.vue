<template>
  <div style=" height: 100%;">
    <img class="bg" src="../img/first.png">
    <div class="click_div" @click="toFirstDp">

    </div>
    <div class="click2_div" @click="toSecondDp">

    </div>

    <div class="click3_div" @click="tothreeDp">

    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      toFirstDp(){
        this.$router.push({name:'firstdp'})
      },
      toSecondDp(){
        this.$router.push({name:'VideoSurveillancedp'})
      },
      tothreeDp(){
        this.$router.push({name:'seconddp'})
      }
    }
  }
</script>
<style>
  .bg {width:100%;height:100%;position:absolute;z-index:-1;}
  .click_div{
    height: 13%;
    width: 28%;
    position: relative;
    top:35%;
    left: 70%;
  }
  .click2_div{
    height: 13%;
    width: 28%;
    position: relative;
    top:43%;
    left: 70%;
  }
  .click3_div{
    height: 13%;
    width: 28%;
    position: relative;
    top:51%;
    left: 70%;
  }
</style>