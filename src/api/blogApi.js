import axios from 'axios'

export const ERR_CODE = 0

/**
 * 获取博客列表
 * @param page 当前页
 * @param pageNum 每页博客数
 * @returns {AxiosPromise<any>}
 */
export function getBlogList (page=1, pageNum=10) {
  return axios.get(`/api/getBlogList?page=${page}&pageNum=${pageNum}`)
}


/**
 * 根据id获取博客详情
 * @param id 当前博客id
 * @returns {AxiosPromise<any>}
 */
export function getBlogDetail (id) {
  return axios.get(`/api/getBlogDetail?id=${id}`)
}


/**
 * 根据用户名获取用户信息
 * @param name 用户名
 * @returns {AxiosPromise<any>}
 */
export function getUserInfo (name) {
  return axios.get(`/user/getUserInfo?name=${name}`)
}


/**
 * 获取所有标签
 * @returns {AxiosPromise<any>}
 */
export function getTagList () {
  return axios.get(`/api/getTagList`)
}
