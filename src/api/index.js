import http from '@/utils/index'

// 请求首页的数据
export const getData = () => {
  // 返回一个promoise对象
  return http.get('/home/getData');
};
// 获取列表数据
export const getUser = (params) => {
  // 返回用户列表
  return http.get('/user/getUser', params)
}

// 新增用户
export const addUser = (data) => {
  // 返回用户列表
  return http.post('/user/add', data)
}

// 编辑用户
export const editUser = (data) => {
  // 返回用户列表
  return http.post('/user/edit', data)
}

// 删除用户
export const delUser = (data) => {
  // 返回用户列表
  return http.post('/user/del', data)
}

export const getMenu = (data) => {

  return http.post('/permission/getMenu', data)
}