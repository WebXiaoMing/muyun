<template>
  <div class="mine">
    <div class="main">
      <div class="user-container">
        <img :src="avatar" alt="" class="user-avatar">
        <div class="user-name">{{userInfo.nick_name}}</div>
        <div class="signature">{{ userInfo.signature }}</div>
      </div>
      <div class="tab-wrapper">
        <router-link tag="div" to="/archives" class="tab-item">
          <div class="item-count">{{ userInfo.archives_counts }}</div>
          <div class="item-title">日志</div>
        </router-link>
        <router-link tag="div" to="/categories" class="tab-item">
          <div class="item-count">{{ userInfo.categories_counts }}</div>
          <div class="item-title">分类</div>
        </router-link>
        <router-link tag="div" to="/tags" class="tab-item">
          <div class="item-count">{{ userInfo.tags_counts }}</div>
          <div class="item-title">标签</div>
        </router-link>
      </div>
      <router-link tag="div" to="/home" class="home">首&nbsp;&nbsp;页</router-link>
    </div>
    <div class="footer-wrapper">
      <div class="create-time">&copy;2015-2018&nbsp;·&nbsp;暮云春树</div>
      <div class="web-info">Dsigned && Powerd by MuYun</div>
      <div class="case-nums">粤ICP备0244578554号</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations, mapGetters } from 'vuex'

import { getUserInfo, ERR_CODE } from 'api/blogApi'
import defaultAvatar from 'common/icon/avatar.jpeg'

export default {
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    avatar () {
      return this.userInfo.avatar ? `/media/${this.userInfo.avatar}` : defaultAvatar
    }
  },
  created () {
    this._getUserInfo()
  },
  methods: {
    _getUserInfo () {
      if (this.userInfo.nick_name) {
        return
      }
      getUserInfo('ming_admin').then(res => {
        if (res.data.code === ERR_CODE) {
          this.setUserInfo(res.data.data[0].fields)
        }
      })
    },
    ...mapMutations([
      'setUserInfo'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .mine
    width 100%
    height 100%
    display flex
    flex-direction column
    .main
      flex 1
      .user-container
        margin-top 20%
        display flex
        align-items center
        flex-direction column
        .user-avatar
          width 100px
          height 100px
          border-radius 50%
        .user-name
          margin 1.2em 0
          padding 0.6em 0.5em
          border 2px solid $font-color
          border-radius 0.25em
          cursor pointer
        .signature
          width 90%
          text-align center
          font-size 0.875em
      .tab-wrapper
        margin-top 2em
        width 100%
        display flex
        flex-direction row
        justify-content center
        .tab-item
          display flex
          flex-direction column
          align-items center
          width 3.5em
          border-right 1px solid #ccc
          cursor pointer
          position relative
          &.router-link-active
            color $theme-color
            &:after
              content ''
              position absolute
              bottom -0.5em
              width 2em
              height 0.25em
              background $theme-color
            .item-title
              color $theme-color
          &:hover
            color $theme-color
            .item-title
              color $theme-color
          &:last-child
            border none
          .item-count
            margin-bottom 0.5em
            font-size 1.25em
          .item-title
            font-size 0.875em
            color $font-color-l
      .home
        padding 0.5em 0
        border 1px solid #ccc
        width 80px
        text-align center
        margin 2em auto
        border-radius 0.25em
        cursor pointer
        &:hover
          color $font-color-ll
          border-color $theme-color
          background $theme-color
          box-shadow 0.25em 0.25em 0.5em #e5ebf0
    .footer-wrapper
      width 100%
      font-size 0.75em
      display flex
      flex-direction column
      align-items center
      line-height 1.5em
      margin-bottom 1em
</style>
