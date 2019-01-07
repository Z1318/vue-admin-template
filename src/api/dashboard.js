import request from '@/utils/request'

export function fatchDashBoards() {
  return request({
    url: '/user/login',
    method: 'post'
  })
}

