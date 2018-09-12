import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'common/stylus/index'
import 'utils/axios'
import 'common/stylus/atom-one-dark.css'
import hljs from 'highlight.js'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
