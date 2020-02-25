<template>
  <div  class="login_first_main">
    <ul>
      <li>
        <div class="login_main_left">
    <img class="login_center_first" src="../dpimg/logindp/login_center.png">
          <span class="login_span1">泛在物联</span>
          <span class="login_span2">在线监测分析平台</span>
        </div>
      </li>
      <li>
        <div class="login_main_right">
          <ul>
            <li>
              <a-form
                id="formLogin"
                class="user-layout-login"
                ref="formLogin"
                :form="form"
                @submit="handleSubmit"
              >
                <a-tabs
                  :activeKey="customActiveKey"
                  :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
                  @change="handleTabClick"
                >
                  <a-tab-pane key="tab1" tab="账号密码登陆">
                    <a-form-item>
                      <a-input
                        size="large"
                        type="text"
                        placeholder="帐户名"
                        v-decorator="[
                'LoginName',
                {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
              ]"
                      >
                        <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                      </a-input>
                    </a-form-item>

                    <a-form-item>
                      <a-input
                        size="large"
                        type="password"
                        autocomplete="false"
                        placeholder="密码"
                        v-model="psw"
                        v-decorator="[
                'Password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
                      >
                        <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                      </a-input>
                    </a-form-item>

                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="16">
                        <a-form-item>
                          <a-input size="large" type="text" placeholder="验证码" v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
                            <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                          </a-input>
                        </a-form-item>
                      </a-col>
                      <a-col class="gutter-row" :span="8">
                        <img alt="验证码"  :src="srcyzm" id="code" @click="showImageCode" />
                      </a-col>
                    </a-row>


                  </a-tab-pane>

                </a-tabs>

                <!--<a-form-item>-->
                <!--<a-checkbox v-decorator="['rememberMe']"  class="rememberMe">自动登陆</a-checkbox>-->
                <!--<router-link-->
                <!--:to="{ name: 'recover', params: { user: 'aaa'} }"-->
                <!--class="forge-password"-->
                <!--style="float: right;"-->
                <!--&gt;忘记密码</router-link>-->
                <!--</a-form-item>-->

                <a-form-item style="margin-top:24px">
                  <a-button
                    size="large"
                    type="primary"
                    htmlType="submit"
                    class="login-button login-button-change"
                    :loading="state.loginBtn"
                    :disabled="state.loginBtn"
                  >确定</a-button>
                </a-form-item>

                <!--<div class="user-login-other">-->
                <!--<span class="rememberMe">其他登陆方式</span>-->
                <!--<a>-->
                <!--<a-icon class="item-icon" type="alipay-circle"></a-icon>-->
                <!--</a>-->
                <!--<a>-->
                <!--<a-icon class="item-icon" type="taobao-circle"></a-icon>-->
                <!--</a>-->
                <!--<a>-->
                <!--<a-icon class="item-icon" type="weibo-circle"></a-icon>-->
                <!--</a>-->
                <!--<router-link class="register" :to="{ name: 'register' }">注册账户</router-link>-->
                <!--</div>-->
              </a-form>

              <two-step-captcha
                v-if="requiredTwoStepCaptcha"
                :visible="stepCaptchaVisible"
                @success="stepCaptchaSuccess"
                @cancel="stepCaptchaCancel"
              ></two-step-captcha>
            </li>
          </ul>
        </div>
      </li>
    </ul>>

        <div style="width:100%;position:absolute;bottom:0px;z-index:999;margin:0 auto; padding:20px 0;">
		 		 <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33020502000343">
          <img src="../img/beian.png" style="position:absolute;top:25%;;left:41%;transform:translate(50%,0%);" />
          <p style="float:left;height:23px;width:100%;line-height:23px; text-align: center;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33020502000343号</p>
         </a>
         <a target="_blank" href="http://beian.miit.gov.cn">
          <p style="float:left;height:23px;width:100%;line-height:23px; text-align: center;margin: 0px 0px 0px 5px; color:#939393;">浙ICP备19016846号-16 浙ICP备19016846号-5</p>
         </a>
		 	</div>
  </div>
</template>

<script type="es6">
  import md5 from 'md5'
  import base64 from 'js-base64'
    import '@/views/dp/css/login.css'
  import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
  import { mapActions } from 'vuex'
  import { timeFix } from '@/utils/util'
  import { getSmsCaptcha, get2step } from '@/api/login'
  import  {axiosKj}  from '@/utils/requestKj'

  export default {
    components: {
      TwoStepCaptcha
    },
    data () {
      return {
        customActiveKey: 'tab1',
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        requiredTwoStepCaptcha: false,
        stepCaptchaVisible: false,
        form: this.$form.createForm(this),
        psw:"",
        state: {
          time: 60,
          loginBtn: false,
          // login type: 0 email, 1 username, 2 telephone
          loginType: 0,
          smsSendBtn: false
        },
        code:'',
        srcyzm:''
      }
    },
    created () {
      this.srcyzm = "/GW.WIR/CodeServlet?code=" + this.createCode();
      sessionStorage.setItem('success', false);
      get2step({ })
        .then(res => {
          this.requiredTwoStepCaptcha = res.result.stepCode
        })
        .catch(() => {
          this.requiredTwoStepCaptcha = false
        })
      // this.requiredTwoStepCaptcha = true
    },
    methods: {
      ...mapActions(['Login', 'Logout']),
      // handler
      handleUsernameOrEmail (rule, value, callback) {
        const { state } = this
        const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
        if (regex.test(value)) {
          state.loginType = 0
        } else {
          state.loginType = 1
        }
        callback()
      },
      showImageCode(){
        // 显示验证码
        document.getElementById("code").src = "/GW.WIR/CodeServlet?code=" + this.createCode();
      },
      createCode() {
        this.code='';
        var codeLength = 5;// 验证码的长度
        // 所有候选组成验证码的字符，可以用中文
        var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C',
          'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
          'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c',
          'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
          'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        for (var i = 0; i < codeLength; i++) {
          var charIndex = Math.floor(Math.random() * 60);
          this.code += selectChar[charIndex];
        }
        return this.code;
      },
      handleTabClick (key) {
        this.customActiveKey = key
        // this.form.resetFields()
      },
      handleSubmit (e) {
        // let isOk = /^(?![A-z0-9]+$)(?![A-z~@*()_]+$)(?![0-9~@*()_]+$)([A-z0-9~@*()_]{10,})$/;
        // if( !isOk.test(this.psw)  ) {
        //     alert("系统不允许弱口令访问")
        //     return
        // }
        var inputCode = document.getElementById("captcha").value.toLowerCase();
        if (inputCode.length <= 0) {
          alert("请输入验证码！");
          return ;
        } else if (inputCode != this.code.toLowerCase()) {
          alert("验证码输入错误！");
          this.showImageCode();// 刷新验证码
          return ;
        }


        e.preventDefault()
        const {
          form: { validateFields },
          state,
          customActiveKey,
          Login
        } = this

        state.loginBtn = true

        const validateFieldsKey = customActiveKey === 'tab1' ? ['LoginName', 'Password'] : ['mobile', 'captcha']
        validateFields(validateFieldsKey, { force: true }, (err, values) => {
          if (!err) {
            const loginParams = { ...values }
            delete loginParams.LoginName
            loginParams[!state.loginType ? 'email' : 'LoginName'] = values.LoginName
            // alert(base64.encode(values.password));

            // Base64.encode(values.password);
            loginParams.Password=values.Password
            // loginParams.password=base64.Base64.encode(values.password)
            // loginParams.password = md5(values.password)
            
             
            axiosKj({
              url: '/GW.WIR/cabTPerson/findCabTPerson.action',
              method: 'post',
              // headers: {
              //   'Content-Type': ' application/x-www-form-urlencoded;charset=UTF-8'
              // },
              // data: parameter,
              params: loginParams
            }).then((res) => this.loginSuccess(res)).catch(err => this.requestFailed(err)).finally(() => {
              state.loginBtn = false
            });


            // Login(loginParams)
            //   .then((res) => this.loginSuccess(res))
            //   .catch(err => this.requestFailed(err))
            //   .finally(() => {
            //     state.loginBtn = false
            //   })
          } else {
            setTimeout(() => {
              state.loginBtn = false
            }, 600)
          }
        })
      },
      getCaptcha (e) {
        e.preventDefault()
        const { form: { validateFields }, state } = this

        validateFields(['mobile'], { force: true }, (err, values) => {
          if (!err) {
            state.smsSendBtn = true

            const interval = window.setInterval(() => {
              if (state.time-- <= 0) {
                state.time = 60
                state.smsSendBtn = false
                window.clearInterval(interval)
              }
            }, 1000)

            const hide = this.$message.loading('验证码发送中..', 0)
            getSmsCaptcha({ mobile: values.mobile }).then(res => {
              setTimeout(hide, 2500)
              this.$notification['success']({
                message: '提示',
                description: '验证码获取成功，您的验证码为：' + res.result.captcha,
                duration: 8
              })
            }).catch(err => {
              setTimeout(hide, 1)
              clearInterval(interval)
              state.time = 60
              state.smsSendBtn = false
              this.requestFailed(err)
            })
          }
        })
      },
      stepCaptchaSuccess () {
        this.loginSuccess()
      },
      stepCaptchaCancel () {
        this.Logout().then(() => {
          this.loginBtn = false
          this.stepCaptchaVisible = false
        })
      },
      loginSuccess (res) {

        var obj3='{"success" '+res.substr(res.search('success')+7,res.search(',')-8)+'}';
        var issuccess=JSON.parse(obj3).success;
        if(issuccess) {
          var retdataobj='{"data" '+res.substr(res.search('data')+4,res.length-1);
          var retdata=JSON.parse(retdataobj).data;

          sessionStorage.setItem('success', issuccess);
          sessionStorage.setItem('groupname', retdata.groupname);
          sessionStorage.setItem('rolename', retdata.rolename);
          sessionStorage.setItem('loginname', retdata.loginname);
          // sessionStorage.setItem('groupname', '鄞州');
          // sessionStorage.setItem('rolename','1' );
          // sessionStorage.setItem('loginname','jane');
          this.$router.push({name: 'first'})
          // 延迟 1 秒显示欢迎信息
          setTimeout(() => {
            this.$notification.success({
              message: '欢迎',
              description: `${timeFix()}，欢迎回来`
            })
          }, 1000)
        }else{
          sessionStorage.setItem('success', issuccess);
          this.loginBtn = false;
          this.requestFailed(res);
        }
      },
      requestFailed (err) {
        this.$notification['error']({
          message: '错误',
          description: ((err.response || {}).data || {}).message || '帐户名或密码错误',
          duration: 4
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  /*.main{*/
  /*background:#f0f2f5 url(../img/bg.png) no-repeat;*/
  /*}*/
  .tabsStyle {
  :global .am-tabs-tab {
    height: 1.3rem !important;
  }
  :global .ant-tabs-nav .ant-tabs-tab:last-child {
    margin-right: 0 !important;
    margin-top: .1rem !important;
  }
  }
  .user-layout-login {
  label {
    font-size: 14px;
  }
  .rememberMe{
    color: white;
  }
  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

  .item-icon {
    font-size: 24px;
    color:white;
    margin-left: 16px;
    vertical-align: middle;
    cursor: pointer;
    transition: color 0.3s;

  &:hover {
     color: #1890ff;
   }
  }

  .register {
    float: right;
  }
  }
  }
</style>

