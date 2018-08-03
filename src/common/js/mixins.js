import { mapMutations } from 'vuex'

export const showBlog = {
  methods: {
    showDetail (item) {
      this.setCurrBlog({
        id: item.pk,
        title: item.fields.title,
        categories: item.fields.categories,
        createTime: this._formatDate(item.fields.add_time)
      })

      this.$router.push({
        path: `/detail/${item.pk}`,
      })
    },
    _formatDate (time) {
      const date = new Date(time)
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    },
    _getPages (pages) {
      const ret = []
      for (let i = 1; i < pages; i ++) {
        ret.push(i)
      }
      return ret
    },
    ...mapMutations([
      'setCurrBlog',
    ])
  }
}
