import request from '../utils/request';

// ip https://www.easy-mock.com/mock/5cd65bbd39bc7734cdef4c10
// /api
// /user/login
// /index/list
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
}


export function info() {
  return request({
    url: '/user/info',
    method: 'get',
  });
}
