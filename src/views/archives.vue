<template>
  <transition name="fade">
  <div class="archives">
    <div class="archives-container">
      <div class="archives-title">
        <div class="dot"></div>
        <div class="title-text">嗯...!目前共计14篇日志。继续努力！</div>
      </div>
      <div class="archives-list-wrapper">
        <div class="year-title">
          <div class="dot"></div>
          <div class="year-text">2018</div>
        </div>
        <div class="archives-list">
          <div class="list-item">
            <div class="dot"></div>
            <div class="create-time">07-18</div>
            <div class="item-text">django实战资源下载jango实战资源下载jango实战资源下载jango实战资源下载jango实战资源下载</div>
          </div>
          <div class="list-item">
            <div class="dot"></div>
            <div class="create-time">07-18</div>
            <div class="item-text">django实战资源下载</div>
          </div>
          <div class="list-item">
            <div class="dot"></div>
            <div class="create-time">07-18</div>
            <div class="item-text">django实战资源下载</div>
          </div>
        </div>
      </div>
    </div>
    <page-index></page-index>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import PageIndex from 'components/page-index'
export default {
  components: {
    PageIndex
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .archives
    padding 2em
    background $background-color
    .archives-container
      border-left 0.25em solid $background-color-d
      .archives-title
        position relative
        padding-left 1em
        .dot
          position absolute
          left -0.5em
          top -0.125em
          width 0.75em
          height 0.75em
          border-radius 50%
          background $font-color-l
        .title-text
          font-size 0.875em
      .archives-list-wrapper
        .year-title
          height 6em
          line-height 6em
          position relative
          padding-left 1em
          .dot
            position absolute
            top calc((6em - 0.625em) / 2 - 0.125em)
            width 0.625em
            height 0.625em
            border-radius 50%
            background $font-color-l
            left -0.375rem
          .year-text
            font-size 1.5em
            transition all 0.5s ease-in-out
        .list-item
          display flex
          align-items center
          height 2em
          line-height 2em
          padding-left 1em
          position relative
          border-bottom 1px dashed $font-color-l
          cursor pointer
          color $font-color-l
          margin-top 1.75em
          transition all 0.5s ease-in-out
          &:first-child
            margin-top 0
          &:hover
            color $font-color
            border-color $font-color
            .dot
              background $theme-color2
          .dot
            position absolute
            width 0.5em
            height 0.5em
            background $font-color-l
            border-radius 50%
            left -0.375em
          .create-time
            margin-right 0.5em
            font-size 0.875em
          .item-text
            flex 1
            no-wrap()
  .fade-enter, .fade-leave-to
    .year-text
      opacity 0
      transform translate3d(-20px, 0, 0)
    .list-item
      opacity 0
      transform translate3d(0, -20px, 0)
</style>
