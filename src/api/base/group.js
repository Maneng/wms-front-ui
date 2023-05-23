import request from '@/utils/request'

// 查询商品组列表
export function listGroup(query) {
  return request({
    url: '/base/group/list',
    method: 'get',
    params: query
  })
}

// 查询商品组(所有)
export function listAllGroup(query) {
  return request({
    url: '/base/group/listAll',
    method: 'get',
    params: query
  })
}

// 查询商品组详细
export function getGroup(groupId) {
  return request({
    url: '/base/group/' + groupId,
    method: 'get'
  })
}

// 新增商品组
export function addGroup(data) {
  return request({
    url: '/base/group',
    method: 'post',
    data: data
  })
}

// 修改商品组
export function updateGroup(data) {
  return request({
    url: '/base/group',
    method: 'put',
    data: data
  })
}

// 删除商品组
export function delGroup(groupId) {
  return request({
    url: '/base/group/' + groupId,
    method: 'delete'
  })
}
