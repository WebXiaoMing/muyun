<template>
  <transition name="fade">
    <div class="tags">
      <div class="tags-title">目前共计{{tagList.length}}个标签</div>
      <div class="tags-list">
        <div class="tag"
             v-for="tag in tagList"
             @click.stop="showTagsList(tag)"
        >{{tag.fields.tag_name}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'

import { getTagList, ERR_CODE } from 'api/blogApi'
export default {
  data () {
    return {
      tagList: []
    }
  },
  created () {
    this._getTagList()
  },
  methods: {
    showTagsList (tags) {
      this.setCurrTags(tags)
      this.$router.push({
        path: `/tags/${tags.fields.tag_name}`
      })
    },
    _getTagList () {
      getTagList().then(res => {
        if (res.data.code === ERR_CODE) {
          this.tagList = res.data.data
        }
      })
    },
    ...mapMutations([
      'setCurrTags'
    ])
  }
}
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
