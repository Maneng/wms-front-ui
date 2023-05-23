import request from '@/utils/request'

// 查询商品主数据列表
export function listMat(query) {
  return request({
    url: '/base/mat/list',
    method: 'get',
    params: query
  })
}

// 查询商品主数据详细
export function getMat(matId) {
  return request({
    url: '/base/mat/' + matId,
    method: 'get'
  })
}

// 新增商品主数据
export function addMat(data) {
  return request({
    url: '/base/mat',
    method: 'post',
    data: data
  })
}

// 修改商品主数据
export function updateMat(data) {
  return request({
    url: '/base/mat',
    method: 'put',
    data: data
  })
}

// 删除商品主数据
export function delMat(matId) {
  return request({
    url: '/base/mat/' + matId,
    method: 'delete'
  })
}
