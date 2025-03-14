import request from '../utils/request'



export const getabnormalProductionMonthInfo = (prodLine) => {
  return request({
    url: '/production/abnormalProductionMonth',
    method: 'get',
    params: { prodLine } // 传递 prodLine 参数
  })
}

export const getabnormalProductionDaliyInfo = (prodLine) => {
  return request({
    url: '/production/abnormalProductionDay',
    method: 'get',
    params: { prodLine } // 传递 prodLine 参数
  })
}

export const getMonthTotalInfo = (prodLine) => {
  return request({
    url: '/production/monthTotal',
    method: 'get',
    params: { prodLine } // 传递 prodLine 参数
  })
}
export const getTodayProductionInfo = (prodLine) => {
  return request({
    url: '/production/todayProduction',
    method: 'get',
    params: { prodLine } // 传递 prodLine 参数
  })
}