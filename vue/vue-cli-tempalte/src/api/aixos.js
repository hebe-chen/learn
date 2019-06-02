import axios from 'axios';
import qs from 'qs';

const root = '/api';
const instance = axios.create({
  baseURL:root
})

// 设置全局请求头部
instance.interceptors.request.use(config => {
  config.data = qs.stringify(config.data)
  return config;
},err => {
  console.log("请求失败")
  return Promise.reject(err);
});


instance.interceptors.response.use(data => {
  return data;
},err => {
  console.log("响应失败");
  return Promise.reject(err);
});

function getAxios(config) {
  const promise = instance(config);
  return promise.then(res => {
    console.log(res)
    return Promise.resolve(res)
  },err => {    
    console.log("getAxios的err")
    return Promise.reject(err)
  })
}

export default {
  post(url,params = {}){
    return getAxios({
      url:url,
      method:'post',
      data:params
    })
  }
}


