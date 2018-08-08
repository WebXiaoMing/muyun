<template>
  <transition name="fade">
    <div class="categories-list">
      <div class="categories-item" v-for="(item, index) in blogList" @click="showDetail(item)">
        <div class="dot"></div>
        <div class="item-time">{{ item.fields.add_time.substr(0, 10) }}</div>
        <div class="item-title">{{ item.fields.title }}</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

export default {
  props: {
    blogList: {
      type: Array,
      default: []
    }
  },
  methods: {
    showDetail (item) {
      this.$emit('showDetail', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .categories-list
    border-left 0.25em solid $background-color-d
    .categories-item
      margin-top 2em
      display flex
      align-items center
      height 2em
      line-height 2em
      color $font-color-l
      border-bottom 1px dashed $font-color-l
      cursor pointer
      transition all 0.5s ease-in-out
      &:hover
        border-color $font-color
        color $font-color
        .dot
          background $theme-color2
      .dot
        width 0.5em
        height 0.5em
        border-radius 50%
        background $font-color-l
        margin-left -0.375em
      .item-time
        margin 0 0.5em 0 1em
        font-size 0.875em
      .item-title
        flex 1
        no-wrap()

  .fade-enter, .fade-leave-to
    .categories-item
      opacity 0
      transform translate3d(0, -20px, 0)
</style>
