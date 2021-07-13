<template>
  <div>
    <div class="navbar">
      <div class="logo" @click="home">
      <img src="../assets/img/shuiguo3.png" class="logo-icon" />
        闪电菠萝管理端
      </div>
      <Menu mode="horizontal" :theme="theme1" style="margin-left: 2%" :active-name="name">
        <MenuItem name="1">
          <div @click="user">
            <Icon type="ios-people"/>
            用户
          </div>
        </MenuItem>
        <MenuItem name="2">
          <div @click="literature">
            <Icon type="ios-paper"/>
            租车
          </div>
        </MenuItem>
        <MenuItem name="3">
          <div @click="periodical">
            <Icon type="logo-octocat"/>
            包裹
          </div>
        </MenuItem>
        <MenuItem name="4">
          <div @click="periodical">
            <Icon type="logo-octocat"/>
            跑腿
          </div>
        </MenuItem>
        <MenuItem name="5">
          <div @click="periodical">
            <Icon type="logo-octocat"/>
          维修
          </div>
        </MenuItem>
      </Menu>
    </div>
    <div style="height: 60px"></div>
    <home v-if="page=='home'"></home>
    <user-tab v-if="page=='user'"></user-tab>
    <CarTab v-if="page=='literature'"></CarTab>
    <manuscript-tab v-if="page=='manuscript'"></manuscript-tab>
  </div>
</template>

<script>
import Home from "@/page/home";
import UserTab from "@/components/UserTab";
import CarTab from "@/components/CarTab";
import ManuscriptTab from "@/components/ManuscriptTab";

export default {
  name: "navbar",
  components: {ManuscriptTab, CarTab, UserTab, Home},
  data() {
    return {
      theme1: 'light',
      userInfo: JSON.parse(localStorage.getItem('userInfo')),
      page: 'home',
      name: null,
    }
  },
  methods: {
    periodical() {
      this.page = 'manuscript'
      this.name = 3
    },
    home() {
      this.page = 'home'
      this.name = 0
    },
    literature() {
      this.page = 'literature'
      this.name = 2
    },
    user() {
      this.page = 'user'
      this.name = 1
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 10;
  align-items: center;
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 2px solid gainsboro;
}

.logo {
  font-size: 20px;
  margin-left: 2%;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo-icon{
  width: 45px;
  height: 45px;
  margin-right: 10px;
}

.admin-box {
  display: flex;
  align-items: center;
  flex-direction: row;
  font-weight: bold;
  margin-left: 2%;
}

.admin-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  background: beige;
}

</style>