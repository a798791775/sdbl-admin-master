<template>
  <div style="width: 90vw">
    <div class="page">
      <div class="search-tab">
        <div class="btn-box">
          <Input suffix="ios-search" placeholder="Enter text" style="width:65%;margin-left: 20px"/>
        </div>

        <div class="title">其他信息管理</div>
      </div>
      <div class="info-box" v-if="list.length!=0">
        <div class="info-tab">
          <div class="tab-item" style="width: 20%; border-top-left-radius: 5px;">电话</div>
          <div class="tab-item" style="width: 20%">学号</div>

          <div class="tab-item" style="width: 50%;">余额</div>
          <div class="tab-item" style="width: 10%;border-top-right-radius: 5px;">提现记录</div>
        </div>
        <div class="info" v-for="item in list" :key="item.tel">
          <div class="tab-item" style="width: 20%">{{ item.tel }}</div>
          <div class="tab-item" style="width: 20%">{{ item.number }}</div>
          <div class="tab-item" style="width: 50%;">
            {{ item.reward }}
          </div>
          <div class="tab-item" style="width: 10%;border-top-right-radius: 5px;">
            <div class="item-btn" @click="popOpen(item)">
              <Icon type="ios-build-outline" style="margin-right: 5px"/>
              查看
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    弹窗-->
    <div class="pop" v-show="pop">
      <div class="pop-box">
        <div class="pop-title">提现记录</div>
        <div class="pop-item" v-for="i in carList" :key="i.num" v-show="type==0">
          <div class="item-info">
            <div>车牌：{{ i.num }}</div>
            <div v-for="b in school" :key="b.name" v-show="i.school==b.code">学校:{{ b.name }}</div>
          </div>
          <Icon type="ios-power" style="margin-right: 5px" size="30" @click="deleteCar(i)"/>
        </div>
        <div class="pop-item" v-for="e in addressList" :key="e.id" v-show="type==1">
          <div class="item-info">{{ e.address }}</div>
          <Icon type="ios-power" style="margin-right: 5px" @click="deleteAddress(e)"/>
        </div>
      </div>
      <div style="height: 20px;border: 1px solid darkgrey"></div>
      <Icon type="ios-close-circle-outline" size="40" style="margin-top: -5px" @click="pop=false"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "permission",
  data() {
    return {
      id: '',
      pop: false,
      list: [],
      school: [
        {
          name: '云南民族大学',
          code: 'YMU'
        },
        {
          name: '云南师范大学',
          code: 'YNU'
        }
      ],
    }
  },
  mounted() {
    this.listUser()
  },
  methods: {
    listUser() {
      this.$api.get('sdbl-auth/users').then(res => {
        console.log(res)
        this.list = res.data
      })
    },
    popOpen(item) {
      this.pop=true
      this.getRewards(item.id)
    },
    getRewards(id){
      this.$api.get('sdbl-common/rewards/users/'+id).then(res=>{
        console.log(res)
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
  padding: 0px 0;
  margin-top: 20px;
  border-radius: 5px;
  height: 55px;
}

.title {
  width: 76%;
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
  background: #2D8CF0;
  color: white;
  padding: 3px;
  font-size: 10px;
  border-radius: 3px;
}

.pop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  z-index: 100;
  background: #ffffff90;
  flex-direction: column;
}

.pop-box {
  width: 300px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 5px dimgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}

.pop-title {
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.btn-box1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 85%;
  margin-top: 20px;
}

.btn2 {
  border: 1px solid rgb(212, 214, 219);
  padding: 3px 5px;
  border-radius: 5px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn3 {
  border: 1px solid rgb(212, 214, 219);
  padding: 3px 5px;
  border-radius: 5px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn2:hover {
  color: #2D8CF0;
  border: 1px solid #2D8CF0;
}

.btn3:hover {
  color: red;
  border: 1px solid red;
}

.pop-item {
  width: 90%;
  background: #76CEF7;
  margin: 3px 0;
  padding: 5px;
  display: flex;
  align-items: center;
  color: white;
  border-radius: 5px;
}

.item-info {
  width: 90%;
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

</style>