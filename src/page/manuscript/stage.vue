<template>
  <div style="width: 90vw">
    <div class="page">
      <div class="search-tab">
        <div class="btn-box">
          <div class="btn" v-for="item in stage" :key="item.id" @click="getContribution(item)">
            <Icon type="ios-paper" v-if="item.id==1"/>
            <Icon type="md-school" v-if="item.id==2"/>
            <Icon type="md-brush" v-if="item.id==3"/>
            <Icon type="md-contact" v-if="item.id==4"/>
            {{ item.stage }}
          </div>
        </div>
        <Input suffix="ios-search" placeholder="Enter text" style="width:15%;margin-left: 20px"/>
        <div class="title">Role management</div>
      </div>
      <div class="info-box">
        <div class="info-tab" v-if="list.length!=0">
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
            <div class="btn1" style="background: green" >examine</div>
          </div>
          <div class="tab-item" style="width: 5%; border-top-right-radius: 5px;">
            <div class="btn1" style="background: red">delete</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stage",
  data() {
    return {
      stage: [],
      list: [],
    }
  },
  mounted() {
    this.listStage()

  },
  methods: {
    listStage() {
      this.$api.listStage().then(res => {
        console.log(res)
        this.stage = res.data
      })
    },
    getContribution(item) {
      this.$api.getContributionByStageId(item.id).then(res => {
        console.log(res)
        this.list = res.data
      })
    },

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
  padding: 0px 0;
  margin-top: 20px;
  border-radius: 5px;
  height: 55px;
}

.title {
  width: 60%;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
}

.btn-box {
  margin: 15px 0;
  display: flex;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: row;
  flex-direction: row;
  width: 22%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(to right, #F0FAFF, white);
}


.btn:hover {
  color: #2D8CF0;
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

.btn1 {
  width: 60%;
  text-align: center;
  color: white;
  padding: 3px;
  font-size: 10px;
  border-radius: 3px;
}

</style>