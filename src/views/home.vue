<template>
  <transition name="fade">
    <div class="home">
      <div class="blog-item" v-for="item in list" :key="item">
        <div class="item-header">
          <div class="item-title">JS字符串补全方法padStart()和大家我是东方padEnd()简介</div>
          <div class="tag-list-wrapper">
            <div class="tag-icon"></div>
            <div class="tab-title">标签：</div>
            <div class="tag-list">
              <a class="tag-item">javascript</a>
              <a class="tag-item">vue</a>
              <a class="tag-item">ES6</a>
            </div>
          </div>
        </div>
        <div class="blog-text">在JS中，字符串补全是常用操作，以前我们的做法是先检测字符串长度够不够，不够，自己再拼接字符串以到达我们需要的字符串长度。到了ES6，浏览器天然支持字符串长度补全方法，这个方法就是padStart()和padEnd()。乍一看好像很简单，但是，仔细一深入，发现意想不到的细节还挺多的，要不，你进来瞅一瞅？</div>
        <div class="create-time-wrapper">
          <div class="create-time">
            <div class="time-icon"></div>
            <div class="time-text">2018年8月26日</div>
          </div>
          <div class="show-more"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      list: [0, 1, 2, 3, 4]
    }
  },
  components: {
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
      transition all 0.4s ease-in-out
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
