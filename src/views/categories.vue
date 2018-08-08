<template>
  <div class="categories">
    <div class="categories-wrapper">
      <div class="tab-wrapper">
        <div class="tab-list">
          <div class="tab-item"
               v-for="(item, index) in categories.slice(0, 6)"
               :key="item.pk"
               :class="{'active': index === currCategories.index}"
               @click="showBlogList(item, index)"
          >
            <div class="item-text">{{ item.fields.name}}</div>
            <div class="item-count">{{ item.fields.count }}</div>
          </div>
          <div class="tab-item"
               @click.stop="showMoreItem"
               :class="{'active': currCategories.index > 6}"
               v-if="categories.length > 6"
          >
            <div class="item-text">更多</div>
            <div class="more-box" :class="{'active': showMore}">
                <div class="more-item"
                    v-for="(item, index) in categories.slice(6)"
                    @click="showBlogList(item, index + 7)"
                >
                    <div class="item-text">{{ item.fields.name}}</div>
                    <div class="item-count">{{ item.fields.count }}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="router-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations, mapGetters } from 'vuex'

import { getCategories, ERR_CODE } from 'api/blogApi'
export default {
  data () {
    return {
      categories: [],
      showMore: false,
    }
  },
  created () {
    this._getCategories()
  },
  computed: {
    ...mapGetters([
      'currCategories'
    ])
  },
  methods: {
    showMoreItem () {
      this.showMore = !this.showMore
    },
    showBlogList (item, index) {
      this.$router.push({
        path: `/categories/${item.fields.name}`
      })

      let categories = {
        index: index,
        name: item.fields.name,
        count: item.fields.count
      }
      this.setCurrCategories(categories)
    },
    _getCategories () {
      getCategories().then(res => {
        if (res.data.code === ERR_CODE) {
          this.categories = res.data.data
          let name = this.currCategories.name ? this.currCategories.name : res.data.data[0].fields.name
          this.$router.push({
            path: `/categories/${name}`
          })
        }
      })
    },
    ...mapMutations([
      'setCurrCategories'
    ])
  },
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .categories
    .categories-wrapper
      background $background-color
      .tab-wrapper
        height 4em
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
            .more-box
              position: absolute;
              top 4em
              left 0
              right 0
              z-index: 10
              background: $background-color
              border-radius 0.25em
              box-shadow: 0 0 8px 2px rgba(100, 100, 100, .1)
              height 0
              opacity: 0
              overflow: hidden;
              transition: all 0.3s ease-in-out
              &.active
                opacity: 1
                height auto
                overflow: inherit;
              &:before
                content ''
                position absolute
                width 0
                height 0
                border 0.75em solid
                border-color transparent transparent $background-color transparent
                top -1.5em
                left 50%
                margin-left -0.75em
              .more-item
                display: flex
                justify-content: center
                height 3em
                line-height: 3em
                padding 0 0.25em
                &:hover
                  background: $background-color-d
            .item-count
              margin-left 0.25em
              color $font-color-l
            .item-text
              no-wrap()
</style>
