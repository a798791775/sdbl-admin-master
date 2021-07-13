<template>
  <div>
    <div style="height: 60px">1</div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      userInfo:JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
.user-box{
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
  height: 40px;
  background: rgb(120,120,120,0.1);
  border-radius: 10px;
}

.xuhao{
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.item{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>