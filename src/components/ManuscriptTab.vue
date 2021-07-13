<template>
  <div>
    <Menu theme="light" active-name="1" style="position: fixed;z-index: 10;height: 100%;margin-top: -20px">
      <MenuGroup title="Literature  management">
        <MenuItem name="1">
          <div @click="page=1" style="width: 100%">
            <Icon type="md-document"/>
            Preiodical
          </div>
        </MenuItem>
        <MenuItem name="2">
          <div @click="page=2" style="width: 100%">
            <Icon type="md-chatbubbles"/>
            Stage
          </div>
        </MenuItem>
        <MenuItem name="3">
          <div @click="page=3" style="width: 100%">
            <Icon type="md-chatbubbles"/>
            Keyword
          </div>
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="content management">
        <MenuItem name="4">
          <div @click="page=4" style="width: 100%">
            <Icon type="md-heart"/>
            Country list
          </div>
        </MenuItem>
      </MenuGroup>
    </Menu>
    <manuscript-list v-if="page==1"></manuscript-list>
    <stage v-if="page==2"></stage>
  </div>
</template>

<script>
import manuscriptList from "@/page/manuscript/manuscriptList";
import Stage from "@/page/manuscript/stage";

export default {
  name: "ManuscriptTab",
  components: {Stage, manuscriptList,},
  data() {
    return {
      page: 1
    }
  }
}
</script>

<style scoped>

</style>