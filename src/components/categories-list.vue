<template>
  <transition name="cate">
    <div class="categories-list-wrapper">
      <blog-list :blogList="blogList"  @showDetail="showDetail"></blog-list>
      <page-index v-if="maxPage > 1"></page-index>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

import PageIndex from 'components/page-index'
import BlogList from 'components/blog-list'
import { showBlog } from 'common/js/mixins'

import { getBlogsByCategories, ERR_CODE } from 'api/blogApi'
export default {
  mixins: [showBlog],
  data () {
    return {
      page: 1,
      pageNum: 10,
      blogList: [],
      maxPage: null,
    }
  },
  created () {
    this._getBlogsByCategories()
  },
  computed: {
    ...mapGetters([
      'currCategories'
    ])
  },
  methods: {
    _getBlogsByCategories () {
      getBlogsByCategories(this.currCategories.name, this.page, this.pageNum).then(res => {
        if (res.data.code === ERR_CODE) {
          this.blogList = res.data.data
          this.maxPage = res.data.num_pages
        }
      })
    }
  },
  watch: {
    currCategories (newVal, oldVal) {
      if (newVal.index !== oldVal.index) {
        this._getBlogsByCategories()
      }
    }
  },
  components: {
    PageIndex,
    BlogList
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .categories-list-wrapper
    padding 2em
  .cate-enter, .cate-leave-to
    .categories-item
      transform translate3d(0, -50px, 0)
</style>
