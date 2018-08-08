<template>
  <div class="tag-item">
    <div class="tag-item-wrapper">
      <div class="title">
        <div class="dot"></div>
        <div class="title-text">{{currTags.fields.tag_name}}</div>
      </div>
      <blog-list :blogList="blogList" @showDetail="showDetail"></blog-list>
      <page-index v-if="blogList.length > pageNum"></page-index>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

import PageIndex from 'components/page-index'
import BlogList from 'components/blog-list'

import { getBlogsByTag, ERR_CODE } from 'api/blogApi'
import { showBlog } from 'common/js/mixins'

export default {
  mixins: [showBlog],
  data () {
    return {
      blogList: [],
      page: 1,
      pageNum: 5,
      pages: []
    }
  },
  computed: {
    ...mapGetters([
      'currTags'
    ])
  },
  created () {
    this._getBlogsByTag()
  },
  methods: {
    _getBlogsByTag () {
      getBlogsByTag(this.currTags.pk, this.page, this.pageNum).then(res => {
        if (res.data.code === ERR_CODE) {
          this.blogList = res.data.data
          this.pages = this._getPages(res.data.num_pages)
        }
      })
    }
  },
  components: {
    BlogList,
    PageIndex
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .tag-item
    background $background-color
    .tag-item-wrapper
      padding 2em
      .title
        height 3em
        display flex
        align-items center
        font-size 1.5em
        border-left 0.25em solid $background-color-d
        .dot
          width 0.625em
          height 0.625em
          margin-left -0.375em
          border-radius 50%
          background $theme-color2
        .title-text
          margin-left 0.5em
</style>
