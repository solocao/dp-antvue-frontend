<template>
  <div class="stationbody">
    <!--<div class="loading">-->
    <!--<div class="loadbox"> <img src="../dpimg/firstdp/picture/loading.gif" /> 页面加载中... </div>-->
    <!--</div>-->

    <div class="head">
      <div class="weather_l ">
        <span> <button @click="backHandle" class="form_select_L1">返回</button></span>
        <span></span>
        <!--<sapn>-->
          <!--<Select class="form_select_L1" @change="cityclick" id="city">-->
            <!--<option v-for="item in groupNames" :key="item.key" :label="item.label" :value="item.value"></option>-->

          <!--</Select></sapn>-->
        <!--<span >{{date1 | formatDateTime}}</span>-->
      </div>
      <h1 style="color:rgba(40,205,156,1)">智能预警平台</h1>
      <!--<div class="weather ">-->

      <!--<span > <Select id="site" class="form_select_R1" @change="testclick" v-model="selected.site" >-->
        <!--<option v-for="item in stationNames" :key="item.key" :label="item.label" :value="item.value"></option>-->

      <!--</Select></span></div>-->
    </div>
    <div class="stationmainbox">
      <ul class="clearfix">
        <li>
          <div class="stationboxall" style="height: 8rem">
            <!--<img src="../stationdp/img/bg-form-L-2.png" ></img>-->
            <img src="./img/bg-from-L1.png"></img>
            <span class="span_text_L1_1">设备状态检测</span>
            <span class="span_num">7个</span>
            <div class="station_sycm">
              <ul >
                <li>
                  <button  @click="openMask(1)" class="li1-img1 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li1-span1">摄像头1</span>
                  <button  @click="openMask(2)" class="li1-img2 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <!--<img src="./img/icon-L1-1.png" class="li1-img2 btn btn-default ripple btn-lg" style="cursor:pointer" @click="openMask"/>-->
                  <span class="li1-span2">摄像头2</span>
               <img src="./img/line-L1.png" class="li1-img3"/>
                </li>
                <li>
               <!--<img src="./img/icon-L2.png" class="li2-img1"/>-->
                  <button  @click="detailHandle2" class="li2-img1 icon-1 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">温度</span>
                  <span class="li2-span2" ><span class="li2-span2-span2" style="color:rgba(40,205,156,1);">{{temp}}℃</span></span>
                  <img src="./img/line-L1.png" class="li2-img2-1"/>
                </li>
                <li>
                  <!--<img src="./img/icon-L3.png" class="li2-img1"/>-->
                  <button  @click="detailHandle1" class="li2-img1 icon-2 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">湿度</span>
                  <span class="li2-span2" ><span class="li2-span2-span2" style="color:rgba(40,205,156,1);">{{humi}}%</span></span>
                  <img src="./img/line-L1.png" class="li2-img2"/>
                </li>
                <li>
                  <!--<img src="./img/icon-L4.png" class="li2-img1"/>-->
                  <button  @click="detailHandle" class="li2-img1 icon-3 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">门禁</span>
                  <span class="li2-span2" >
                   <span class="li2-span2-span2" style="color:rgba(40,205,156,1);">{{doorStatus}}</span>
                    <!--<img :src="this.doorStatus=='关' ? this.doorclose : this.dooropen"  />-->
                  </span>
                  <img src="./img/line-L1.png" class="li2-img2"/>
                </li>
                <li>
                  <!--<img src="./img/icon-L5.png" class="li2-img1"/>-->
                  <button  @click="detailHandle3" class="li2-img1 icon-4 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">烟感</span>
                  <span class="li2-span2"><img src="./img/icon-sucess.png" class="li2-span2-img2"/></span>
                  <img src="./img/line-L1.png" class="li2-img2"/>
                </li>
                <li>
                  <!--<img src="./img/icon-L5.png" class="li2-img1"/>-->
                  <button  @click="zaoyin" class="li2-img1 icon-4 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">噪音</span>
                  <span class="li2-span2"><img src="./img/icon-sucess.png" class="li2-span2-img2"/></span>
                  <img src="./img/line-L1.png" class="li2-img2"/>
                </li>
                <li>
                  <!--<img src="./img/icon-L5.png" class="li2-img1"/>-->
                  <button  @click="mupaiwendu" class="li2-img1 icon-4 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">母排</span>
                  <span class="li2-span2"><img src="./img/icon-sucess.png" class="li2-span2-img2"/></span>
                  <img src="./img/line-L1.png" class="li2-img2"/>
                </li>
                <li>
                  <!--<img src="./img/icon-L5.png" class="li2-img1"/>-->
                  <button @click="nil"  class="li2-img1 icon-4 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">凝露</span>
                  <span class="li2-span2"><img src="./img/icon-sucess.png" class="li2-span2-img2"/></span>
                  <img src="./img/line-L1.png" class="li2-img2"/>
                </li>
                <li>
                  <!--<img src="./img/icon-L6.png" class="li2-img1"/>-->
                  <button  @click="detailHandle4" class="li2-img1 icon-5 btn btn-default ripple btn-lg " style="cursor:pointer;"></button>
                  <span class="li2-span1">水位</span>
                  <span class="li2-span2"><img :src="this.waterLevel=='正常' ? this.iconsucc : this.iconerr" class="li2-span2-img2" /></span>
                  <img src="./img/line-L1.png" class="li2-img2"/>
                </li>
                <li>
                  <span class="li-last" style="color:rgba(14,252,255,1);">{{date1 | formatDateTime}}</span>
                  <img src="./img/icon-last.png" class="li-last-img"/>
                </li>
              </ul>

            </div>
            <!--<dialog-bar v-model="sendVal" :camid="camid" type="danger" :title="title" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()"></dialog-bar>-->
            <!--<div class="boxfoot"></div>-->
          </div>

        </li>
        <li >

          <div class="stationboxall1" style="height: 8rem;">
            <img src="../stationdp/img/bg-form-R.png" ></img>
            <img src="../stationdp/img/bg-center.png" ></img>
            <img src="../stationdp/img/bg-icon-R.png" ></img>
            <span class="div_station_text">{{stationName}}</span>
            <div class="addNewd" id="con" >
              <ul class="clearfix1">
              </ul>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
      <dialog-bar v-model="sendVal" :camid="camid" type="danger" :title="title" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()"></dialog-bar>
      <!--<menjin v-if="activeNum==2" :stationdata="stationID" :stationnum="stationNum"></menjin>-->
      <!--<yangan v-if="activeNum==3" :stationdata="stationID"></yangan>-->
      <!--<shuiwei v-if="activeNum==4" :stationdata="stationID"></shuiwei>-->
      <!--<chushiqi v-if="activeNum==5" :stationdata="stationID"></chushiqi>-->
      <!--<wenshidu v-if="activeNum==6" :stationdata="stationID"></wenshidu>-->
    </div>
  </div>
</template>

<script>
  import dialogBar from './dialog.vue'
  import menjin from './menjin'
  import jianceshebei from './jianceshebei'
  import yangan from './yangan'
  import shuiwei from './shuiwei'
  import chushiqi from './chushiqi'
  import wenshidu from './wenshidu'
  import '@/views/dp/css/stationdp.css'
  import $ from 'jquery'
  import axios from 'axios'
  export default {
    name: 'detail',
    components:{
      menjin,
      jianceshebei,
      yangan,
      shuiwei,
      chushiqi,
      wenshidu,
      'dialog-bar': dialogBar,

    },
    data () {
      return {
        sendVal: false,
        title:undefined,
        camid:undefined,
        selected:{site:0},
        date1: new Date(),
        groupNames:[],
        stationNames:[],
        stationName:'',
        stationNum:'',
        stationID:'',
        waterLevel:'',
        doorStatus:'',
        humi:'',
        temp:'',
        iconerr:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC4UlEQVRIS62VW0gUURjH/9+4a7bd0CBnNZYu5IwVFb0EShQqZa3oLtEGSvTaS0pEFBEIPeSLBNJLvkQvGlm5s4rpg+SLG/UYJM5uBaXlXgKxC1535ovZXW/rmqPbeTvM//v/zvl/Z84hmBzhYvdh0jHIxMQxrcT+qXvITCmZERmasFxTCwhtCb1eJ6q+djO1cQADFC12V2habLQg2K2mKzQLGN1XdcBqsTjyg8prAjgOCMmuGwRqZmBWZ3gKA15fKsSICDr7iQB9lYjCsruKwS8ItAngO6KqNMUBYdn9AMD1pOmMxtrRwkBXwEwE85rvUrUkkPA+YR4fraLqvRoHTDicuTO27H4GjscjY63MHugaMKL7UeSq1AScA2MXQEKilnUQotDRKwaVPiOKMam6UqCs3kQ9himG0+Jnb3ShyQZkyma9C3DIrvqajfm0zdoBUMW/d8L9OZNznh0jPT8jsusWMzkohkbD3KhLe4qMlUckdz8IZaZiYgzkB7zlxk5S9WkBoaKa8yQIPabMkyLWdac96Hu1AjAmuRoIVJo4ruwvCCgtYdndAqB+PQCAH4qqUp/qR2HJrYGQaB5DEwNeS1h2tQFUuwbgN4BtixpuF1WlLtWPwrLLD1BJ8nS8EVWl1ASglZhtTHR5BSDFL20PVgMweIZA176pI092y44QgJ2pAFNNTg/gMZBwQRzufBuRa84yhL7lZomINgQgwD9FdHHPcKexaoSK3FdAcBI4D0TlyXg3BmDCo3HB0nBo6Pns0tVFpOojjKxOEPZnBJg3JR2N+UHvPWMelVwenfAYoC3/rQe6hoODHy3Bk9LcfSLcBIx7denIoAcAPsz9mTxl3br5KUBn0v8fGQAY/JKYji3mnQ6RAcDclbEG4KvDmZtjy27SGXkgPkEghznj5BkCj4DpnUAYn5zm23u/KBPGl4VGhSSXh4iercd0NS0zX7IHlI5lgPk3F0TbM4EQ+NfSN/svkDdhdWCSKfkAAAAASUVORK5CYII=',
        iconsucc:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC2klEQVRIS62VT0gUYRjGn3daFbQCDTrFHpKcMSLTHQv0UKikpbdoA6UinNU6pEREEYHRIS8SSCDq7koXjaSEDmWE5KE2DHcEI3F2UwijhD1E/4jUnXljd9ZV11VHt+82fM/7/L553u8PweLIH/ccMMJ4QwCFdaNk6nDDhJVSsiKKaCS/pxaE3qieUafJSp+VWhPAoHy/u0In43NQbtSSFVoF7B3p3GdLt9mDRcqriHMUIPndV0HUBmCeDXYGil1PEyGxiHwEQljXk0YkqT01gP4YoAwIuKkVKq0mQO2+BwhXoqaEOdapIFBcH7ASwaJGHPWKJBjjUXNzdGkO5WIUYH/fkZ25kDEEcFE0MaaygFw/HMHljXmrBMM4wYTdYBLMRbBBjJAhCIPBovoXkRJR9VQRMGgmzpNhW8ax6YJzoXiTo5D59FsAZjVZaTOhaf0AVaz/Jzz0J23BOTMQ+iHV7LnOYHs4LdwyXXApZAaSbDBIHHMPEajMSkzMGA44lHIQOFGfFJA36j4pCPTMivmixhC4Oljoer4KIPo9zQBKYxO+gKy0S2PedjA3bQYA5vua7GpK9CNRdesEs3nM0AOyYpP8nl4QatcFMH6BsCOuYfRpslKX6EeS6vYBVGIK+a3mcJVaAHQxkEnA2URAol/SHqwN4DmAL2vMDySyzQK8KxFgqclrAL4S+NSkwzUiqd2VgBDZ/0sjFtHWAAQfGfrpSblxNmKQ5/ecJ6AahBwCys10zR5sGkDEncLUl+YJ5+355cWi6j4I0AABuSkB4vuc0RKUlTuRb1H1OgncAyDrv/VAB+//OP0yKOZW3iXg2qpbYKsRxVb44fccjm5Px0MQjic9HykCnjBwKJ53MkKKgI1vjY0A9tcd2ZlZ6a1sIIeIjwBk39h1xUGYYaZ3JODbX9p241Phhe+R2fhJFtVuJ0F4tDnT5GqGcSbgaOhfAVh6c7EzNQj9XP5m/wP0DVkGN/ATEwAAAABJRU5ErkJggg==',
        dooropen:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAYAAAC8/X7cAAAD6klEQVRYR8VYbUxTZxR+TgvtVLCR8SGjMLSDXgEHsg/jjHEsKZnf0UQIbsIysyg/Zkzchn+2+MfgGP7TGS0xY5FMuixZ4ldMDFuiwsSiWdYCQmTNoOAoVAqkt90tfZd7DdcKpbZF6Jv0T89Hz3Pec857nhJCHP1d4yrEUxn58QED8kiBFDCoQ9nMW0bwMj8cBHQyBVogMNPD9Z/9PZdfCiZYbT6XpYLiJAOVEUE576BCONAo1di6YjU2abTQL0lCStwSSdvh49HDO3F73D5102X7ud87UdP39sF/ZrqaBYC7b6wAo3MAEhcycDUpcXBlIapSC7BUGR/yp9xTApocXZONDsuhO29+1BSo/BwAzmw8CqLvAAS9mZcFSKtKwGmdQcp4JKeHf8JODbZ/ef6ND09N28mBcuaGfSBcXPjgE3ExdxvSVMsiiV3WdQhuVjfUXln/eokY69NMSzVPCitACVF5DdNILJtmbqec+U97r6NtYjBMa6Cr+ICka/O6PMf7Wwsac7Y+kgDoOxouEVAetqcoFQ+nF6M6fZ1sfcvVD6fPI33q7O04tLIQ2WqNLP/W3o5Vag3KkvXSd7tezZFlreP2Kxs12h0kjco46iUs/LRpKSgP2rD93gmUWk1oyt2O4oQ0OUiDxYS3EtJwMnvzrJTxfh+rH7i7lnLNxmMKotookxq2WUXyGnyT9V5Q/WgAiI46J0dPENfRcANAadiRRKn4vc6AEk3WSwXwyDNmJX2HcYBAGVHGFbaZWD7pqmcz4vTQfZwZehC2vai4IfE1XMjZItuMCLxXvAEBQFxEnqJQ/rPoE6gUzx71bvcoHvJOyVM378QPwxZ8lfEukuJembOJRdkmTaYsF5ifxQxAYA5+HLaiduAPmAsrsSzgVQ7VxKK9BCBWJRQI4Ehfizjb8eua3c/d7YsATJfQojTxWZ0B7wdp4mHBjVKLCftT83E0452IAPR5x6zEmY3HEKMx6mN+fN53E23jg7ictweZ6uURAeh0j56I2UPmFHh8YftdWiW+ztyAfSl5s0bDix+yB2tjtkp4/D5U9VyTSmd7ki7oXKvsuYr8pcmo0a6fJW+dsF/ZuFy7I2CZU1oWgwOYuJ3IjXCNnhm9zePyHB8IWOZEBe6esQIKEsnCAnOB+a/T9YPm/XXZmyViEzNCc0ZniPgmevknrH4uQjN9TYtLKYtQlZofFqX8aaRrsvHxX9W3ij6WiMz0CVouXNvZbKjiaxnD3sUg9dsCSH1y/FNSPyLw0qohkfox2y//TrlqutdV22b2Q8h6F7kCKVEOohJGyCOGVACqKFahSEz+Y4RhYugEY7+xKTSH+lvlf/9fm/7pcOCoAAAAAElFTkSuQmCC',
        doorclose:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAYAAAC8/X7cAAAEe0lEQVRYhc2YfUzUdRzHX7/juDvhOJkbHMwdLRSIBzHFnq4HbZXQskx5MHBOJcOwRg/MHvwjIprLNcSlTgu0DEq8WtRqS8AGMYO5Wm0kjwWJaHJHBpyHcHdy1x8H5/3uAXW7Y7222+77/ny/n70/2+e+331OsNvt+CIkThMD5AEPA0lABCD3ecA/mIALwADQDJwA/vK1WfBWQEicJiYqInLv2vTH161+aJUkJSERdUQkFquFi0OX6B84R/2PTei++4bRsbEA1eHEhqOIN4DzNyzgdu3yrK3ZuTUvPbtdPl+lmjXzmNFIRdVh9n9cycTkpB89e8UEFADHXUVRAekbs0srSt59Kyk+4ZYyd/b2kFmwhYGLF/xhdDbsQDFQMSNIZr6s2ZxXeLT8Aw/z1o4+jyw2o0mkJ8UncKr2KxZGRQfAswgBKAc2zAgSgJVZT8WV7XzzgLuB8ao6RvNLmRrUi/SrlXX8m7VTpC+Miqb2YCXzFIoA+gccRVQBMTBdQN7TmbplKUsk7jvn5TyGMD8UY8khp2YzmpjQNaLI0BKkUYv2p6Uu5cUt2wJpfgYlsAcgSG82LX3lucK35fLrt+PUoB5LWztTg3okKiXW37oR5DKmBvVM6Bqx/tqFYu0qbIYRbMMjokLSlizlSO1nTJoD/qNOAo5J71mWVqoKCxNFJnQNjFfViTRjyWHR2lReDUBw8iIWfPm+U1eFhZHz5Fo+rDkWGNvXkQDPCKd/PmO4f8XdEe5Rm9EkWl+trGO8qo6IM5+Ks6iUHpm/bzpFZsFW/9r1Tr00Nua2Bd4i7sZsxnGCNGqvht1ZckeSf+zdmBTBbLHYZcHBTsXR5w0eOyfrWwFQpGs9YsJ8JaHb1jnXFquV8KTYAPj1wCI1W8y4FmDt6PPof1e8xYKTF4kKmEukw5cvXwsLVUpnBEWGFplW3OcTukZM5dXOFgo/WiKKu7eV4Z/hAFoWMSy5ZNCPuKsSldL5AcetJLsvFeWrm7B29DGha/TY48rv3Z2Bt+7grOSP/r5WX1FLWzuj+aXYx8ZRlRaiyNCiLN6EqbwaY8lhj5tqhoaW5kAZdqcpSB0b073yXu3zrg+Zpa0d095qTOXVCAoZ4Yd2IV2sAUC2PBFBIeNqVR3m+lbsZivSxRoEuQwA45Ur7Nj12lw8ZDagIOiX021Dn3xRu35F6p1qgMmTrYzu2I3NMELIpidQ7SlCqokSnZQtT0SWlsi1PwcdL3NbO/NyVgOw+8A+fvipJdDmwTEjHBHsdjuP5q6P3//Oe12JcfEScPS8PEN7U3f+5MlWgjRqgpMX0dnbw4OZa+ZqNkgGzjvngdwXCl7eW1JWER2pnvWkL/7WD5G+MZu+gXN+c+kDO44xtxZc5oHjBz/al19cVNbZ23PLGTt7e3hkw7q5Mr+TafPgZaRc/MBdWZuzNtQU5Rf8H0fK7cDnruJsQ33F9FAvpCQkEjXdWkMGPWd7umhoaebEt1/P1VCvA17nZoZ6V9z+VkkGIoFgnwf8gxUwAB1AEw7z/b42/wdxCa/Waz3hJQAAAABJRU5ErkJggg=='
      }
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
    mounted(){
      // $(document).ready(function() { $(".rippler").rippler({ effectClass : 'rippler-effect' ,effectSize : 16}); });
      window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
      // alert(this.$route.params.cityName);
      if(this.$route.params.stationName==null ||this.$route.params.stationName=='undefined'){
        this.stationName=sessionStorage.getItem('stationName');
        this.stationNum=sessionStorage.getItem('stationNum')
        this.stationID=sessionStorage.getItem('stationID');
        this.waterLevel=sessionStorage.getItem('waterLevel');
        this.doorStatus=sessionStorage.getItem('doorStatus');
        this.humi=sessionStorage.getItem('humi')
        this.temp=sessionStorage.getItem('temp')
      }else{
        this.stationName=this.$route.params.stationName;
        sessionStorage.setItem('stationName',this.$route.params.stationName);
        this.stationNum=this.$route.params.stationNum;
        sessionStorage.setItem('stationNum',this.$route.params.stationNum);
        this.stationID=this.$route.params.stationID;
        sessionStorage.setItem('stationID',this.$route.params.stationID);
        this.waterLevel=this.$route.params.waterLevel;
        this.doorStatus=this.$route.params.doorStatus;
        this.humi=this.$route.params.humi;
        this.temp=this.$route.params.temp;;
      }

      window.onresize=function(){
        if(document.documentElement.baseURI.match('-detail')!=null &&document.documentElement.baseURI.match('-detail').length>=1) {
        }else {

          var whei = $(window).width();
          $("html").css({fontSize: whei / 20})
        }
      }

      var that=this;
      var whei=$(window).width();
      $("html").css({fontSize:whei/20})
      var settime = setInterval(function(){
        that.date1 = new Date();
      },1000);
      // this.getTemp();
    },
    methods:{
      nil() {
        this.$router.push({ name: 'nil-detail' })
      },
      getTime(){
        var now = new Date();
        var alarmdatefrom = new Date((now/1000-3*24*60*60)*1000);//前1天
        var year = alarmdatefrom.getFullYear();    //获取完整的年份(4位,1970-????)
        var month = alarmdatefrom.getMonth()+1;       //获取当前月份(1-12)
        var day = alarmdatefrom.getDate();        //获取当前日(1-31)
        return year+"-"+month+"-"+day+" 00:00:00";
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
      getTemp() {
        var that=this;
        // if(this.stationID==null ||this.stationID=='undefined'||this.stationID==''){
        //   this.stationID=sessionStorage.getItem('stationID');
        // }

        axios.get('/GW.WIR/show/getTemperatureReport.action', {
          params: {
            stationID:this.stationID,
            startDt:this.getTime(),
            endDt:this.formatDate(new Date()),
            start: 0,
            limit: 100000
          }
        }).then(({ data }) => {
          const now = new Date().getTime()
          const start = now - 60 * 60 * 1000
          data = eval('(' + data + ')')
          //温度信息
          data.Table.sort((a, b) => {
            return b.temptime - a.temptime
          })
          that.lastTempTime = that.formatDate(new Date(data.Table[0].temptime))
          that.lastTempValue = data.Table[0].temperature
          const tempList = data.Table.filter((item) => {
            return item.temptime >= start && item.temptime <= now
          })
          const xTempList = []
          const yTempList = []
          tempList.forEach((item, index) => {
            const time = new Date(item.temptime)
            const x = time.getHours() + ':' + time.getMinutes()
            xTempList.push(x)
            yTempList.push(item.temperature)
          })
          const maxTempValue = yTempList.length == 0?0:Math.max.apply(null, yTempList)
          that.tempOption.title.subtext = '{a|过去一小时最大温度是' + maxTempValue + '℃}'
          that.tempOption.xAxis.data = xTempList
          that.tempOption.series[0].data = yTempList
        })
      },
      detailHandle1() {
        this.$router.push({ name: 'shidu-detail' })
      },
      nil(){
        this.$router.push({ name: 'nil-detail' })
      },
      zaoyin() {
        this.$router.push({ name: 'zaoyin-detail' })
      },
      mupaiwendu() {
        this.$router.push({ name: 'mupaiwendu-detail' })
      },
      detailHandle2() {
        this.$router.push({ name: 'wendu-detail' })
      },
      detailHandle(){
        this.$router.push({ name: 'menjin-detail'})
      },
      detailHandle3(){
        this.$router.push({ name: 'yangan-detail'})
      },
      detailHandle4(){
        this.$router.push({ name: 'shuiwei-detail'})
      },
      openMask(num){

        this.$router.push({
          path:"/dp/liveplayer",
          query:{}
        })
        // if(num==1){
        //   this.camid = '330225001'
        //   this.title = 'Camera1'
        // }else if(num==2){
        //   this.camid = '330225002'
        //   this.title = 'Camera2'
        // }
        // this.$nextTick(()=>{
        //   this.sendVal = true;
        // })
      },
      clickCancel(){
        console.log('点击了取消');
      },
      clickDanger(){
        console.log('这里是danger回调')
      },
      clickConfirm(){
        console.log('点击了confirm');
      },
      // changeActive(num){
      //   this.activeNum = num
      //   //温湿度
      //   if(num==6){
      //     // this.$refs.wenshidu.getTemp();
      //   }
      // },
      backHandle(){
        // this.activeNum = 1
        this.$router.push({ name: 'firstdp'})
      },
      beforeunloadHandler(){
        sessionStorage.setItem('stationName', this.stationName);
        sessionStorage.setItem('stationNum', this.stationNum);
        sessionStorage.setItem('stationID', this.stationID);
      }
    },
    // computed:{
    //   activeNum: {
    //     get() {
    //       return this.$store.state.detail.activeNum;
    //     },
    //     set(val) {
    //       this.$store.commit("detail/updateActiveNum", val);
    //     }
    //   },
    // },
    beforeDestroy() {
      $("html").css({fontSize:''});
      sessionStorage.setItem('stationName', this.stationName);
      sessionStorage.setItem('stationNum', this.stationNum);
      sessionStorage.setItem('stationID', this.stationID);
      // this.$session.set('stationName', this.$route.params.stationName);
    },
  }
</script>

<style lang="less" scoped>
  .video-js .vjs-big-play-button{}
</style>