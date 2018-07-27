<template>
  <div id="app">
    <div class="mine-wrapper">
      <mine></mine>
    </div>
    <div class="app-container">
      <div class="router-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Mine from 'views/mine'

export default {
  components: {
    Mine
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  #app
    width 100%
    height 100%
    display flex
    overflow hidden
    .mine-wrapper
      width 240px
      height 100%
      background $background-color
      box-shadow 0.5em 0.5em 0.625em #e5ebf0
    .app-container
      flex 1
      overflow auto
      display flex
      justify-content center
      .router-wrapper
        margin-top 2em
        width 660px
        min-height 100vh

  @media screen and (max-width: 960px)
    #app
      width calc(100% + 240px)
      transform translate3d(-240px, 0, 0)
      font-size 14px
      .app-container
        width 100vw
        .router-wrapper
          width 96%
</style>
