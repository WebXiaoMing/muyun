<template>
  <div class="detail">
    <header class="detail-header">
      <div class="header-title">{{ currBlog.title }}</div>
      <div class="header-info">
        <div class="info-item">
          <div class="time-icon"></div>
          <div class="time-text">{{ currBlog.createTime }}</div>
        </div>
        <div class="info-item">
          <div class="categories-icon"></div>
          <div class="categories-text">{{ currBlog.categories }}</div>
        </div>
      </div>
    </header>
    <main class="detail-info-wrapper">
      <div class="detail-info" v-html="detail" v-highlight></div>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

import { getBlogDetail, ERR_CODE } from 'api/blogApi'

export default {
  data () {
    return {
      detail: '',
    }
  },
  computed: {
    ...mapGetters([
      'currBlog'
    ])
  },
  created () {
    this._getBlogDetail()
  },
  mounted () {
  },
  methods: {
    _getBlogDetail () {
      getBlogDetail(this.currBlog.id).then(res => {
        if (res.data.code === ERR_CODE && res.data.data.length) {
          this.detail = res.data.data[0].fields.detail
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .detail
    margin-bottom 4em
    .detail-header
      .header-title
        font-size 1.5em
        padding 2em
        line-height 1.5em
        background $background-color
      .header-info
        display flex
        padding 0 2em
        height 3em
        font-size 0.875em
        align-items center
        .info-item
          display flex
          align-items center
          margin-right 2em
          color $font-color-l
          .time-icon, .categories-icon
            width 1.25em
            height 1.25em
            background url("../common/icon/calendar_icon.png")no-repeat
            background-size cover
            margin-right 0.25em
          .categories-icon
            background url("../common/icon/categories_icon.png")no-repeat
            background-size cover

    .detail-info-wrapper
      .detail-info
        background $background-color
        padding 2em
        padding-bottom 4em
        line-height 1.875em
</style>
