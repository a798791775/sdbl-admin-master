<template>
  <div style="width:90vw;">
    <div class="page">
      <div class="search-tab">
        <Input suffix="ios-search" placeholder="Enter text" style="width:15%;margin-left: 20px"/>
        <div class="title">Manuscript list</div>
      </div>
      <div class="info-box">
        <div class="info-tab" >
          <div class="tab-item" style="width: 5%; border-top-left-radius: 5px;">Num</div>
          <div class="tab-item" style="width: 45%;">Title</div>
          <div class="tab-item" style="width: 20%">Unit</div>
          <div class="tab-item" style="width: 20%">User</div>
          <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">Examine</div>
          <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">Delete</div>
        </div>
        <div class="info" v-for="(i,index) in list" :key="i.id">
            <div class="tab-item" style="width: 5%; border-top-left-radius: 5px;">{{ index + 1 }}</div>
            <div class="tab-item" style="width: 45%;">{{ i.title }}</div>
            <div class="tab-item" style="width: 20%">{{ i.unit }}</div>
          <div class="tab-item" style="width: 20%" ><div v-for="item in user" :key="item.id" v-show="i.userId==item.id">{{ item.firstName }}</div></div>
            <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">
              <div class="btn" style="background: green" @click="examine(i)">examine</div>
            </div>
            <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">
              <div class="btn" style="background: red">delete</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "manuscriptList",
  data() {
    return {
      list: [],
      user:[]
    }
  },
  mounted() {
    this.getList()
    this.userList()
  },
  methods: {
    getList() {
      this.$api.listContribution().then(res => {
        console.log(res)
        this.list = res.data
      })
    },
    userList(){
      this.$api.listUser().then(res=>{
        console.log(res)
        this.user=res.data
      })
    },
    examine(i) {
      this.$router.push({
        name: "contributionInfo", params: {
          item: i
        }
      })
    }
  }
}
</script>

<style scoped>
.page {
  margin-left: 230px;
  width: 98.5%;
}

.search-tab {
  width: 96%;
  box-shadow: 1px 1px 5px gainsboro;
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
  border-radius: 5px;
}

.title {
  width: 82%;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
}

.info-box {
  width: 96%;
  box-shadow: 1px 1px 5px gainsboro;
  margin-left: 2%;
  margin-top: 10px;
  border-radius: 5px;
}

.info-tab {
  display: flex;
  background: #F0FAFF;
  height: 50px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 0;
  border: 1px solid snow;
}

.info {
  display: flex;
  flex-direction: row;
}

.btn{
  color: white;
  padding: 3px;
  font-size: 10px;
  border-radius: 3px;
  width: 60%;
  text-align: center;
}

</style>