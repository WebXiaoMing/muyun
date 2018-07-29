<template>
  <transition name="fade">
    <div class="tags">
      <div class="tags-title">目前共计26个标签</div>
      <div class="tags-list">
        <div class="tag">Vue</div>
        <div class="tag">Django</div>
        <div class="tag">Python</div>
        <div class="tag">H5</div>
        <div class="tag">移动端</div>
        <div class="tag">小程序</div>
        <div class="tag">CSS3</div>
        <div class="tag">外国名著</div>
        <div class="tag">古典文学</div>
        <div class="tag">诗词鉴赏</div>
        <div class="tag">小说</div>
        <div class="tag">H5</div>
        <div class="tag">移动端</div>
        <div class="tag">小程序</div>
        <div class="tag">CSS3</div>
        <div class="tag">外国名著</div>
        <div class="tag">古典文学</div>
        <div class="tag">诗词鉴赏</div>
        <div class="tag">小说</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .tags
    background $background-color
    padding 2em
    .tags-title
      font-size 1.5em
      height 2em
      border-bottom 1px dashed $font-color-l
    .tags-list
      margin-top 2em
      display flex
      flex-wrap wrap
      .tag
        padding 0.5em 1em
        margin 0 1em 1em 0
        background $background-color-d
        cursor pointer
        border-radius 0.25em
        transition all 0.5s ease-in-out
        &:hover
          background $theme-color2
  .fade-enter, .fade-leave-to
    .tag
      opacity 0
      transform translate3d(-20px , 0, 0)
</style>
