import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)

import createVuexAlong from "vuex-along";


const satoken = {
    tokenName: "token",
    tokenValue: "",
    isLogin: false,
    loginId: "",
    loginKey: "",
    tokenTimeout: 2591999,
    sessionTimeout: -2,
    tokenActivityTimeout: -1
}
/**
 * state 存放状态
 * mutations state成员操作
 * getters 加工state成员给外界
 * actions 异步操作
 * modules 模块化状态管理
 * @type {{}}
 */
const store = new Vuex.Store({
    state: {
        satoken
    },
    getters: {
        getSaToken: ((state) => {
            return state.satoken
        })
    },
    mutations: {
        setSaToken: ((state, payload) => {
            state.satoken.loginId = payload.loginId
            state.satoken.loginKey = payload.loginKey
            state.satoken.isLogin = true
            state.satoken.tokenValue = payload.tokenValue
        }),
        cleanSaToken: (state => {
            state.satoken.loginId = ""
            state.satoken.loginKey = ""
            state.satoken.isLogin = false
            state.satoken.tokenValue = ""
        })
    },
    plugins: [
        createVuexAlong({
            name: "SaToken",
            local: {
                list: ["satoken"]
            }
        })
    ]
});

export default store;
