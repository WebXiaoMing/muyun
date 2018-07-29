import storage from 'good-storage'

export function saveCurrBlog (blog) {
  storage.session.set('curr_blog', blog)
  return blog
}


export function getCurrBlog () {
  return storage.session.get('curr_blog', {})
}
