import axios from './http'
import qs from 'qs'

//创建token
var createToken = function (data) {
	return axios.post('/createToken', getJson(data))
}

//用户登录
var login = function (data) {
	return axios.post('/login', getJson(data))
}

//用户退出登录
var logout = function (data) {
	return axios.post('/logout', getJson(data))
}
//用户密码修改
var updateUser = function(data){
	return axios.post('/updateUser', getJson(data))
}

//用户在线人数
var online = function(data){
  return axios.post('/online', getJson(data))
}

//在线用户列表
var onlineUsers = function(data){
  return axios.post('/online_users', getJson(data))
}

//获取服务器硬件信息
var hardware = function(data){
  return axios.get('/hardware', getJson(data))
}

//课程访问频率
var courseFrequency = function(data){
  return axios.get('/get_visit_course_frequency?per_page='+data.per_page+'&page='+data.page+'&category_name='+data.category_name+'&start='+data.dateRangeStart+'&end='+data.dateRangeEnd)
}



//查询学生信息
var search_user = function(data){
	return axios.get('/search_user?per_page='+data.per_page+'&page='+data.page+'&search='+data.search)
}

//获取凭证jwt
var jwt = function(data){
	return axios.post('/api.v1/session', data,{headers: {'Content-Type':'application/json'}})
}


//用户信息修改
var modify_user =function(data){
	return axios.post('/modify_user',data,{headers: {'Content-Type':'application/json'}})
}
//删除用户
var delete_user =function(params){
	return axios.delete('/delete_user',{data:params})
}


/*查询课程表*/
var course =function(data){
	return axios.get('/categoryTree?type=0')
}


//用户重置密码
var updateUserPassword =function(data){
  return axios.post('/update_userPassword',data,{headers: {'Content-Type':'application/json'}})
}


export{
	login,updateUser,createToken,online,onlineUsers,hardware,courseFrequency,search_user,jwt,modify_user,
	delete_user,course,logout,updateUserPassword
}

function getJson (data) {
	return qs.stringify(data)
}

