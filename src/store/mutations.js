import { saveCurrBlog, saveCurrCategories, saveCurrTags, saveUserInfo } from "utils/storage"

const mutations = {
  setCurrBlog (state, blog) {
    state.currBlog = saveCurrBlog(blog)
  },
  setCurrCategories (state, categories) {
    state.currCategories = saveCurrCategories(categories)
  },
  setCurrTags (state, tag) {
    state.currTags = saveCurrTags(tag)
  },
  setUserInfo (state, userInfo) {
    state.userInfo = saveUserInfo(userInfo)
  }
}

export default mutations
