import request from '@/utils/request'

// 查询商品BOM列表
export function listBom(query) {
  return request({
    url: '/base/bom/list',
    method: 'get',
    params: query
  })
}
// 查询商品BOM详情列表
export function detailListBom(query) {
  return request({
    url: '/base/bom/detailList',
    method: 'get',
    params: query
  })
}

// 查询商品BOM详细
export function getBom(bomId) {
  return request({
    url: '/base/bom/' + bomId,
    method: 'get'
  })
}

// 新增商品BOM
export function addBom(data) {
  return request({
    url: '/base/bom',
    method: 'post',
    data: data
  })
}

// 修改商品BOM
export function updateBom(data) {
  return request({
    url: '/base/bom',
    method: 'put',
    data: data
  })
}

// 删除商品BOM
export function delBom(matCodes) {
  return request({
    url: '/base/bom/' + matCodes,
    method: 'delete'
  })
}
