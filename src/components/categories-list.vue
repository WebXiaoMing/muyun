<template>
  <transition name="cate">
    <div class="categories-list-wrapper">
      <blog-list></blog-list>
      <page-index></page-index>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import PageIndex from 'components/page-index'
import BlogList from 'components/blog-list'
export default {
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
