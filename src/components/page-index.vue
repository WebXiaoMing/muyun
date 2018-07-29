<template>
  <div class="page-index-wrapper">
    <div class="index-item prev">&#10140;</div>
    <div class="index-item">1</div>
    <div class="index-item">2</div>
    <div class="index-item">3</div>
    <div class="index-item">...</div>
    <div class="index-item">12</div>
    <div class="index-item next">&#10140;</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .page-index-wrapper
    height 6em
    display flex
    align-items center
    justify-content center
    position relative
    .index-item
      width 2em
      height 2em
      line-height 2em
      text-align center
      border-radius 50%
      cursor pointer
      transform-origin center
      &:hover
        background $theme-color2
      &.prev
        line-height 2.5em
        transform rotate(180deg)
</style>
