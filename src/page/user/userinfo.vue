<template>
  <div style="width:90vw;">
    <div class="page">
      <div class="search-tab">
        <Input suffix="ios-search" placeholder="输入电话或者学号" style="width:15%;margin-left: 20px"/>
        <div class="title">基本信息管理</div>
      </div>
      <div class="info-box">
        <div class="info-tab">
          <div class="tab-item" style="width: 15%; border-top-left-radius: 5px;">电话</div>
          <div class="tab-item" style="width: 15%">学号</div>
          <div class="tab-item" style="width: 15%">生日</div>
          <div class="tab-item" style="width: 5%">性别</div>
          <div class="tab-item" style="width: 20%">学校</div>
          <div class="tab-item" style="width: 20%;">openid</div>
          <div class="tab-item" style="width: 10%; border-top-right-radius: 5px;">操作</div>
        </div>
        <div class="info" v-for="item in list" :key="item.tel">
          <div class="tab-item" style="width: 15%;border-bottom-left-radius: 5px;">{{ item.tel }}</div>
          <div class="tab-item" style="width: 15%">{{ item.number }}</div>
          <div class="tab-item" style="width: 15%">{{ item.birth.slice(0,10)}}</div>
          <div class="tab-item" style="width: 5%">
            <div v-if="item.gender==true||item.gender=='true'">男</div>
            <div v-else>女</div>
          </div>
          <div class="tab-item" style="width: 20%" v-for="i in school" :key="i.name" v-show="i.code==item.school">{{i.name}}</div>
          <div class="tab-item" style="width: 20%;border-bottom-right-radius: 5px;">{{ item.openid }}</div>
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
    <!--    弹窗-->
    <div class="pop" v-if="pop">
      <div class="pop-box">
        <Icon type="ios-close-circle-outline" size="30" style="margin-left: 88%;margin-top: -15px" @click="pop=false"/>
        <div class="box-title">修改基本信息</div>
        <div class="box-item">
          <div class="item-text">电话</div>
          <Input v-model="userinfo.tel" style="width: 300px"/>
        </div>
        <div class="box-item">
          <div class="item-text">学号</div>
          <Input v-model="userinfo.number" style="width: 300px"/>
        </div>
        <div class="box-item">
          <div class="item-text">生日</div>
          <Input v-model="userinfo.birth" style="width: 300px"/>
        </div>
        <div class="box-item">
          <div class="item-text">学校</div>
          <Select v-model="userinfo.school" filterable style="width: 300px">
            <Option v-for="item in school" :value="item.code" :key="item.code">{{item.name}}</Option>
          </Select>
        </div>
        <div class="box-item"
             style="display: flex;flex-direction: row;align-items: center;margin-top: 10px;width: 300px">
          <div class="item-text" style="margin-right: 40px">性别</div>
          <RadioGroup v-model="userinfo.gender">
            <Radio :label=true>男</Radio>
            <Radio :label=false>女</Radio>
          </RadioGroup>
        </div>
        <div class="btn1" @click="save">修改</div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "userinfo",
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
      schoolcode:'',
      userinfo: {},
      pop: false
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
    change(item) {
      this.userinfo = item
      this.pop = true
    },
    save() {
      console.log(this.userinfo)
      let userinfo = this.userinfo
      let info={
        id:userinfo.id,
        tel:userinfo.tel,
        number:userinfo.number,
        birth:userinfo.birth,
        school:userinfo.school,
        gender:userinfo.gender,
      }
     this.$api.put('sdbl-auth/users', info).then(res => {
       console.log(res)
       if(res.code==201){
         this.pop=false
         this.listUser()
       }
     })
    },
    deleted() {

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
  justify-content: space-around;
  padding: 11px 0;
  border: 1px solid snow;
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
  background: #2D8CF0;
  color: white;
  padding: 3px;
  font-size: 10px;
  border-radius: 3px;
}

.pop {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.2);
  top: 0;
}

.pop-box {
  width: 400px;
  padding: 20px 0;
  background: white;
  box-shadow: 1px 1px 5px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-title {
  margin: 5px 0;
  font-size: 20px;
  font-weight: bold;
}

.btn1 {
  background: #2D8CF0;
  margin-top: 20px;
  width: 80px;
  height: 30px;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}


</style>