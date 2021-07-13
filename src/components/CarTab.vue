<template>
  <div >
    <Menu theme="light" active-name="1" style="position: fixed;z-index: 10;height: 100%;margin-top: -20px">
      <MenuGroup title="车辆管理">
        <MenuItem name="1">
          <div @click="page=1" style="width: 100%">
            <Icon type="md-document"/>
            车辆信息
          </div>
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="订单管理">
        <MenuItem name="2">
          <div @click="page=2" style="width: 100%">
            <Icon type="md-heart"/>
            订单
          </div>
        </MenuItem>
      </MenuGroup>
    </Menu>
    <carInfo v-if="page==1"></carInfo>
    <carOrder v-if="page==2"></carOrder>
  </div>
</template>

<script>

import carOrder from "@/page/car/carOrder";
import carInfo from "@/page/car/carInfo";

export default {
  name: "CarTab",
  components: {carInfo, carOrder},
  data() {
    return {
      page: 1
    }
  }
}
</script>

<style scoped>

</style>