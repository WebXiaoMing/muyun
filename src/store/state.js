import { getCurrBlog, getCurrCategories, getCurrTags, getUserInfo } from 'utils/storage'

const state = {
  userInfo: getUserInfo(),
  currBlog: getCurrBlog(),
  currCategories: getCurrCategories(),
  currTags: getCurrTags()
}

export default state
