<template>
  <div style="width:90vw;">
    <div class="page">
      <div class="search-tab">
        <Input suffix="ios-search" placeholder="Enter text" style="width:15%;margin-left: 20px"/>
        <div class="title">Manuscript list</div>
      </div>
      <div class="info-box">
        <div class="info-tab">
          <div class="tab-item" style="width: 5%; border-top-left-radius: 5px;">Num</div>
          <div class="tab-item" style="width: 55%;">Title</div>
          <div class="tab-item" style="width: 30%">Unit</div>
          <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">Examine</div>
          <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">Delete</div>
        </div>
        <div class="info" v-for="(i,index) in list" :key="i.id">
          <div class="tab-item" style="width: 5%; border-top-left-radius: 5px;">{{ index + 1 }}</div>
          <div class="tab-item" style="width: 55%;">{{ i.title }}</div>
          <div class="tab-item" style="width: 30%">{{ i.unit }}</div>
          <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">
            <div class="btn" style="background: green">examine</div>
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
  name: "document",
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.$api.get('sdbl-car/orders').then(res => {
        console.log(res)
        if (res.code == 200) {
          this.list = res.data
        }
      })
    },
  }
}
</script>

<style scoped>
.page {
  margin-left: 230px;
  width: 98.5%;
  margin-top: 20px;
}

.search-tab {
  width: 96%;
  box-shadow: 1px 1px 5px gainsboro;
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
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

.btn {
  color: white;
  padding: 3px;
  font-size: 10px;
  border-radius: 3px;
  width: 60%;
  text-align: center;
}
</style>