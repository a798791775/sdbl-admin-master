<template>
  <div>
    <img class="bg" src="../assets/img/bg.jpg"/>
    <div class="page">
      <div class="title">闪电菠萝大学生服务平台</div>
      <div class="login-box">
        <div class="box-title">登 录</div>
        <div class="box-item">
          账号:
          <input class="box-input" v-model="email"/>
        </div>
        <div class="box-item">
          密码:
          <input type="password" class="box-input" v-model="pwd"/>
        </div>
        <div class="btn" @click="go" @keyup.enter="go">登 入</div>
        <div class="zhu">@Copyright 萌驼科技</div>
        <!--      <div class="text" @click="denlu=!denlu">我要成为商家</div>-->
      </div>
    </div>
    <!--    <div class="login-box" v-show="denlu==false" style="height: 550px;">-->
    <!--      <div class="box-title">商家注册</div>-->
    <!--      <div class="box-item">-->
    <!--        手机号:-->
    <!--        <input class="box-input" v-model="tel"/>-->
    <!--      </div>-->
    <!--      <div class="box-item">-->
    <!--        密码:-->
    <!--        <input type="password" class="box-input" v-model="pwd"/>-->
    <!--      </div>-->
    <!--      <div class="box-item">-->
    <!--        寄存店名:-->
    <!--        <input class="box-input" v-model="shopname"/>-->
    <!--      </div>-->
    <!--      <div class="btn" style="margin-top: 20px" @click="sign">注册</div>-->
    <!--      <div class="text" @click="denlu=!denlu">前往登录</div>-->
    <!--    </div>-->
  </div>
</template>

<script>

import store from "@/store";

export default {
  name: "login",
  data() {
    return {
      email: '',
      pwd: '',
    }
  },
  created() {
    this.goKey()
  },
  methods: {
    go() {
      if (this.email == '' || this.pwd == '') {
        this.$Message.info('Please fill in the information');
      } else {
        let user = {
          email: this.email,
          password: this.pwd
        }
        this.$api.post('sdbl-auth/tokens/admins', user).then(res => {
          if (res.code == 201) {
            store.commit("cleanSaToken")
            if (store.getters.getSaToken.tokenName === res.data.tokenName) {
              store.commit("setSaToken", res.data)
            }
            console.log(store.getters.getSaToken)
            this.$router.push({name: "Navbar"})
          }

        })
      }
    },

    goKey() {
      document.onkeydown = e => {
        if (e.keyCode === 13) {
          console.log(1)
          this.go()
        }
      }
    },


  }
}
</script>

<style scoped>
.bg {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  background: deepskyblue;
  object-fit: cover;
}

.page {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  font-size: 25px;
  margin-top: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

.login-box {
  z-index: 10;
  height: 400px;
  width: 350px;
  background: rgb(255, 255, 255, 0.6);
  border-radius: 20px;
  box-shadow: 2px 2px 10px;
  /*border: 1px white solid;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}


.box-title {
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0 10px 0;
  color: white;
}

.box-item {
  margin: 10px;
  color: white;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  padding: 0 20px;
  width: 85%;
}

.box-input {
  background: rgb(0, 160, 255, 0.4);
  border: none;
  color: white;
  font-size: 16px;
  padding: 0 10px;
  margin-top: 5px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
}

.box-input::placeholder {
  color: white;
}

.box-input:focus {
  outline: none;
}

.btn {
  width: 40%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
  background: rgb(0, 160, 255, 0.4);
  margin-top: 40px;
}

.text {
  text-decoration: underline;
  margin-top: 5px;
}

.text:hover {
  color: deepskyblue;
}

.zhu {
  margin-top: 20px;
}
</style>