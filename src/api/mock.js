import Mock from "mockjs";
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import permission from "./mockServeData/permission";
// 1. 定义mock请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

// 用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser)//新增
Mock.mock('/api/user/edit', 'post', user.updateUser)//编辑
Mock.mock('/api/user/del', 'post', user.deleteUser)//删除
Mock.mock(/api\/user\/getUser/, 'get', user.getUserList)//获取


// 

Mock.mock(/api\/permission\/getMenu/, 'post',permission.getMenu)