import { saveCurrBlog } from "utils/storage"

const mutations = {
  setCurrBlog (state, blog) {
    state.currBlog = saveCurrBlog(blog)
  }
}

export default mutations
