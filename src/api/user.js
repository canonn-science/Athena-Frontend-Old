import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/local',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/users/me',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/users/me',
    method: 'get'
  })
}
