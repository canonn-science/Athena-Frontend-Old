import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/apreports',
    method: 'get',
    params
  })
}
