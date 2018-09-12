import { mapMutations } from 'vuex'

import { getBlogList, ERR_CODE } from 'api/blogApi'

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
      'setCurrBlog'
    ])
  }
}

export const getBlogs = {
  data () {
    return {
      page: 1,
      pageNum: 10,
      blogList: [],
      pages: []
    }
  },
  methods: {
    _getBlogList () {
      getBlogList(this.page, this.pageNum).then((res) => {
        if (res.data.code === ERR_CODE) {
          this.blogList = res.data.data
          this.pages = this._getPages(res.data.num_pages)
        }
      })
    },
    _getPages (pages) {
      let ret = []
      if (pages > 8) {
        for (let i = 1; i < 5; i ++) {
          ret.push(i)
        }
        ret.push("...")
        ret.push(pages)
      } else {
        for (let i = 1; i <= pages; i ++) {
          ret.push(i)
        }
      }
      return ret
    }
  }
}
