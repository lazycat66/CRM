import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:9999';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
// axios.interceptors.response.use((res) =>{
//     if(!res.status.success){
//         return Promise.reject(res);
//     }
//     return res;
// }, (error) => {
//     return Promise.reject(error);
// });

export const fetch = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                console.log(err)
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

const serverHost = 'http://localhost:9999'
export default {
    getTodoData(params){
        return fetch('/api/todo',params)
    },

    getMessageData(params){
        return fetch('/api/message',params)
    },

    getRecordData(params){
        return fetch('/api/record',params)
    },

    getNewsData(params){
        return fetch('/api/news',params)
    },

    getCompanyNewsData(params){
        return fetch('/api/companyNews',params)
    },

    getTableData(url, params){
        return fetch('/api/' + url, params)
    }
}
