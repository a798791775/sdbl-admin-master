import axios from "axios";
import store from "@/store";



/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'api/'+url,
            method: 'GET',
            headers: {
                token: store.getters.getSaToken.isLogin ? store.getters.getSaToken.tokenValue : null
            },
            params: params
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'api/'+url,
            method: 'POST',
            headers: {
                token: store.getters.getSaToken.isLogin ? store.getters.getSaToken.tokenValue : null
            },
            data: data
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function deletes(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'api/'+url,
            method: 'DELETE',
            headers: {
                token: store.getters.getSaToken.isLogin ? store.getters.getSaToken.tokenValue : null
            },
            data: data
        })
            .then(response => {
                resolve(response);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'api/'+url,
            method: 'PUT',
            headers: {
                token: store.getters.getSaToken.isLogin ? store.getters.getSaToken.tokenValue : null
            },
            data: data
        })
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
    })
}
