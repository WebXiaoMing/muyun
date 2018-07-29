<template>
  <div class="categories">
    <div class="categories-wrapper">
      <div class="tab-wrapper">
        <div class="tab-list">
          <div class="tab-item active">
            <div class="item-text">前端</div>
            <div class="item-count">12</div>
          </div>
          <div class="tab-item">
            <div class="item-text">后端</div>
            <div class="item-count">12</div>
          </div>
          <div class="tab-item">
            <div class="item-text">阅读</div>
            <div class="item-count">12</div>
          </div>
          <div class="tab-item">
            <div class="item-text">随笔</div>
            <div class="item-count">12</div>
          </div>
          <div class="tab-item">
            <div class="item-text">杂谈</div>
            <div class="item-count">12</div>
          </div>
          <div class="tab-item">
            <div class="item-text">诗词</div>
            <div class="item-count">12</div>
          </div>
          <div class="tab-item">
            <div class="item-text">更多</div>
          </div>
        </div>
      </div>
      <div class="router-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .categories
    .categories-wrapper
      background $background-color
      .tab-wrapper
        height 4em
        overflow hidden
        .tab-list
          height 100%
          display flex
          align-items center
          box-sizing border-box
          position relative
          border-bottom 0.25em solid $background-color-d
          .tab-item
            display flex
            flex 1
            align-items center
            justify-content center
            height 100%
            line-height 4em
            cursor pointer
            position relative
            &.active
              &:before
                content ''
                position absolute
                left 0
                right 0
                bottom -0.25em
                height 0.25em
                background $theme-color2
                border-radius 0.125em
            .item-count
              margin-left 0.25em
              color $font-color-l
            .item-text
              no-wrap()
</style>
