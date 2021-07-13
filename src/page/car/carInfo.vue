<template>
  <div style="width:90vw;">
    <div class="page">
      <div class="search-tab">
        <Input suffix="ios-search" placeholder="Enter text" style="width:15%;margin-left: 20px"/>
        <div class="title">车辆信息管理</div>
      </div>
      <div class="info-box">
        <div class="info-tab">
          <div class="tab-item" style="width: 8%; border-top-left-radius: 5px;">图片</div>
          <div class="tab-item" style="width: 17%;">车牌</div>
          <div class="tab-item" style="width: 10%;">类型</div>
          <div class="tab-item" style="width: 25%">学校</div>
          <div class="tab-item" style="width: 20%;">电话</div>
          <div class="tab-item" style="width: 10%;">状态</div>
          <div class="tab-item" style="width: 10%;border-top-right-radius: 5px;">操作</div>
        </div>
        <div class="info" v-for="i in list" :key="i.id">
          <div class="tab-item" style="width: 8%; border-top-left-radius: 5px;"><img :src="i.photo"></div>
          <div class="tab-item" style="width: 17%;">{{ i.num }}</div>
          <div class="tab-item" style="width: 10%;">{{ i.type }}</div>
          <div class="tab-item" style="width: 25%" v-for="e in school" :key="e.name" v-show="e.code==i.school">{{e.name}}</div>
          <div class="tab-item" style="width: 20%;">{{ i.tel }}</div>
          <div class="tab-item" style="width: 10%;">{{ i.status }}</div>
          <div class="tab-item" style="width: 10%; border-top-right-radius: 5px;">
            <div class="item-btn" @click="change(item)">
              <Icon type="ios-build-outline" style="margin-right: 5px"/>
              修改
            </div>
            <div class="item-btn" style="background: #EA4B67" @click="deleted">
              <Icon type="ios-power" style="margin-right: 5px"/>
              删除
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carInfo",
  data() {
    return {
      list: [],
      school: [
        {
          name:'云南民族大学',
          code:'YMU'
        },
        {
          name:'云南师范大学',
          code:'YNU'
        }
      ],
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.$api.get('sdbl-car/cars').then(res => {
        console.log(res)
        if (res.code == 200) {
          this.list = res.data
        }
      })
    },
    change(){

    },
    deleted(){

    }
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
  justify-content: space-around;
  padding: 2px 0;
  border: 1px solid snow;

}

.tab-item img {
  width: 70px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
}

.item-btn {
  width: 40%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #79D1FA;
  color: white;
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