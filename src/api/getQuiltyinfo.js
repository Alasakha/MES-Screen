import request from '../utils/request'



export const getPaassedInfo = (prodLine) => {
  return request({
    url: '/quality/passData',
    method: 'get',
    params: { prodLine } // 传递 prodLine 参数
  })
}

export const getcumulativePassRate = (prodLine) => {
  return request({
    url: '/quality/cumulativePassRate',
    method: 'get',
    params: { prodLine } // 传递 prodLine 参数
  })
}