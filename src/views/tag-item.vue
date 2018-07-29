<template>
  <div class="tag-item">
    <div class="tag-item-wrapper">
      <div class="title">
        <div class="dot"></div>
        <div class="title-text">Vue</div>
      </div>
      <blog-list></blog-list>
      <page-index></page-index>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PageIndex from 'components/page-index'
import BlogList from 'components/blog-list'
export default {
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
