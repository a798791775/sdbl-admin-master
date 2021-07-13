<template>
  <div>
    <Menu theme="light" active-name="1" style="position: fixed;z-index: 10;height: 100%;margin-top: -20px">
      <MenuGroup title="用户信息">
          <MenuItem name="1">
            <div @click="page=1" style="width: 100%">
            <Icon type="md-document"/>
            基本信息
            </div>
          </MenuItem>
        <MenuItem name="2" >
          <div @click="page=2" style="width: 100%">
          <Icon type="md-chatbubbles"/>
            其他信息
          </div>
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="奖励金管理">
        <MenuItem name="3">
          <div @click="page=3" style="width: 100%">
          <Icon type="md-heart"/>
          奖励金
          </div>
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="管理员管理">
        <MenuItem name="4">
          <div @click="page=4" style="width: 100%">
            <Icon type="md-heart"/>
           管理员
          </div>
        </MenuItem>
      </MenuGroup>
    </Menu>
    <userinfo v-if="page==1"></userinfo>
    <otherInfo v-if="page==2"></otherInfo>
    <rewards v-if="page==3"></rewards>
    <admin v-if="page==4"></admin>
  </div>
</template>

<script>
import Userinfo from "@/page/user/userinfo";
import otherInfo from "@/page/user/otherinfo";
import rewards from "@/page/user/rewards";
import admin from "@/page/user/admin"

export default {
  name: "UserTab",
  components: {rewards, otherInfo, Userinfo,admin},
  data() {
    return {
      page: 1
    }
  }
}
</script>

<style scoped>

</style>