import request from '@/utils/request'

// 查询货位列表
export function listWorkshop(query) {
  return request({
    url: '/base/workshop/list',
    method: 'get',
    params: query
  })
}

// 查询货位列表(所有)
export function listAllWorkshop(query) {
  return request({
    url: '/base/workshop/listAll',
    method: 'get',
    params: query
  })
}

// 查询货位详细
export function getWorkshop(workshopId) {
  return request({
    url: '/base/workshop/' + workshopId,
    method: 'get'
  })
}

// 新增货位
export function addWorkshop(data) {
  return request({
    url: '/base/workshop',
    method: 'post',
    data: data
  })
}

// 修改货位
export function updateWorkshop(data) {
  return request({
    url: '/base/workshop',
    method: 'put',
    data: data
  })
}

// 删除货位
export function delWorkshop(workshopId) {
  return request({
    url: '/base/workshop/' + workshopId,
    method: 'delete'
  })
}
