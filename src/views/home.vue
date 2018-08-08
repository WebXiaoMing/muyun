<template>
  <transition name="fade">
    <div class="home" v-if="blogList.length">
      <div class="blog-item" v-for="item in blogList" :key="item.pk" @click="showDetail(item)">
        <div class="item-header">
          <div class="item-title">{{ item.fields.title}}</div>
          <div class="tag-list-wrapper">
            <div class="tag-icon"></div>
            <div class="tab-title">标签：</div>
            <div class="tag-list" v-if="tags.length">
              <a class="tag-item"
                 v-for="tag in _formatTags(item.fields.tags, tags)"
                 @click.stop="showTagsList(tag)"
              >
                {{tag.fields.tag_name}}
              </a>
            </div>
          </div>
        </div>
        <div class="blog-text" v-html="item.fields.short_text"></div>
        <div class="create-time-wrapper">
          <div class="create-time">
            <div class="time-icon"></div>
            <div class="time-text">{{ _formatDate(item.fields.add_time) }}</div>
          </div>
          <div class="show-more"></div>
        </div>
      </div>
      <page-index v-if="pages.length > 1"></page-index>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'

import PageIndex from 'components/page-index'

import { getTagList, ERR_CODE } from 'api/blogApi'
import { showBlog, getBlogs } from 'common/js/mixins'

export default {
  mixins: [showBlog, getBlogs],
  data () {
    return {
      tags: []
    }
  },
  created () {
    this._getBlogList()
    this._getTagList()
  },
  methods: {
    showTagsList (tags) {
      this.setCurrTags(tags)
      this.$router.push({
        path: `/tags/${tags.fields.tag_name}`
      })
    },
    _getTagList () {
      getTagList().then(res => {
        if (res.data.code === ERR_CODE) {
          this.tags = res.data.data
        }
      })
    },
    _formatTags (tags, tagList) {
      let ret = []
      for (let i = 0, len = tags.length; i < len; i ++) {
        let index = tagList.findIndex(tag => tag.pk === tags[i])
        ret.push(tagList[index])
      }
      return ret
    },
    ...mapMutations([
      'setCurrTags'
    ])
  },
  components: {
    PageIndex
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .home
    margin-bottom 4em
    .blog-item
      padding-top 1.5em
      background $background-color
      border-radius 0.25em
      cursor pointer
      margin-bottom 2em
      transition all 0.5s ease-in-out
      &:hover
        box-shadow 0.5em 0.5em 0.625em #e5ebf0
      .item-header
        padding 0 2em
        padding-bottom 1.5em
        border-bottom 1px solid #efefef
        .item-title
          font-size 1.25em
          line-height 1.2em
          margin-bottom 0.25em
        .tag-list-wrapper
          font-size 0.75em
          color $font-color-l
          display flex
          align-items center
          .tag-icon
            width 1.5em
            height 1.5em
            background url("../common/icon/tag_icon.png")no-repeat
            background-size cover
          .tag-list
            .tag-item
              margin-right 0.25em
      .blog-text
        padding 1.5em 2em
        font-size 0.875em
        line-height 1.5em
        border-bottom 1px solid #efefef
      .create-time-wrapper
        padding 0 2em
        height 4em
        display flex
        justify-content space-between
        align-items center
        .create-time
          display flex
          align-items center
          font-size 0.875em
          .time-icon
            width 1.5em
            height 1.5em
            background url("../common/icon/calendar_icon.png")no-repeat
            background-size cover
            margin-right 0.25em
        .show-more
          width 2em
          height 2em
          background url("../common/icon/more_icon.png")no-repeat
          background-size cover

  .fade-enter, .fade-leave-active
    .blog-item
      transform translate3d(0, 50px, 0)
      opacity 0
</style>
