import storage from 'good-storage'

export function saveCurrBlog (blog) {
  storage.session.set('curr_blog', blog)
  return blog
}


export function getCurrBlog () {
  return storage.session.get('curr_blog', {})
}


export function saveCurrCategories (categories) {
  return storage.session.set('currCategories', categories)
  return categories
}


export function getCurrCategories() {
  return storage.session.get('currCategories', {index: 0})
}


export function saveCurrTags (tag) {
  return storage.session.set('currTags', tag)
  return tag
}


export function getCurrTags() {
  return storage.session.get('currTags', {})
}


export function saveUserInfo (userInfo) {
  return storage.session.set('userInfo', userInfo)
  return tag
}


export function getUserInfo () {
  return storage.session.get('userInfo', {})
}
