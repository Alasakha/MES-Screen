import request from '../utils/request'


export const getProduceInfo = () => {
  return request({
    url: '/production/monthTotal',
    method: 'get'
  })
}