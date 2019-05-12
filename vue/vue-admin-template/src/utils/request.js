/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken } from './auth';

const service = axios.create({
  baseURL: '/api',
});
// 'x-token': 'xxxxxxx'
service.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
}, error => Promise.reject(error));

service.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
}, error => Promise.reject(error));

export default service;
