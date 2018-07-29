<template>
  <div id="app">
    <div class="mine-wrapper" ref="mineWrapper" @click="hide">
      <keep-alive>
        <mine></mine>
      </keep-alive>
    </div>
    <div class="app-container" ref="appContent">
      <div class="router-wrapper">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <div class="home-btn-wrapper">
      <div class="btn-item table" @click.stop="showMineWrapper">
        <div class="icon table-icon"></div>
      </div>
      <div class="btn-item" @click.stop="scrollToTop">
        <div class="icon top-icon"></div>
      </div>
    </div>
    <div class="bg-layer" v-show="show" @click="hide"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Mine from 'views/mine'

import { scrollPosition } from "common/js/windowScroll"

export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    hide () {
      this.show = false
    },
    showMineWrapper () {
      this.show = !this.show
    },
    scrollToTop () {
      scrollPosition()
    },
  },
  watch: {
    show (newVal) {
      if (newVal) {
        this.$refs.mineWrapper.style.left = 0
      } else {
        this.$refs.mineWrapper.style.left = '-240px'
      }
    }
  },
  components: {
    Mine
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  #app
    width 100%
    .bg-layer
      position fixed
      top 0
      left 0
      bottom 0
      right 0
      background rgba(0, 0, 0, .5)
    .mine-wrapper
      position fixed
      width 240px
      top 0
      left 0
      bottom 0
      z-index 10
      background $background-color
      box-shadow 0.5em 0.5em 0.625em #e5ebf0
      transition all 0.4s ease-in-out
    .app-container
      margin-left 240px
      display flex
      justify-content center
      .router-wrapper
        margin-top 2em
        width 660px
        min-height 100vh
    .home-btn-wrapper
      position fixed
      z-index 10
      bottom 1em
      right 1em
      .btn-item
        width 3em
        height 3em
        background $background-color
        border-radius 50%
        display flex
        align-items center
        justify-content center
        margin-top 1em
        box-shadow 0.5em 0.5em 0.625em rgba(0, 0, 0, 0.1)
        cursor pointer
        overflow hidden
        &.table
          width 0
        &:hover
          background $theme-color2
        .icon
          width 1.5em
          height 1.5em
          &.table-icon
            background url("./common/icon/table_icon.png")no-repeat
            background-size cover
          &.top-icon
            background url("./common/icon/top_icon.png")no-repeat
            background-size cover
  @media screen and (max-width: 960px)
    #app
      font-size 14px
      .mine-wrapper
        left -240px
        box-shadow none
      .app-container
        margin-left 0
        .router-wrapper
          width 96%
      .home-btn-wrapper
        .btn-item.table
          width 3em
</style>
