<template>
  <div class="index-wrap">
    <router-link
      v-for="(item, index) in linkList"
      :key="index"

      :to="'/' + item.link">
      <mt-cell :title="item.title"></mt-cell>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Index.vue',
  data () {
    return {
      linkList: [
        {
          link: 'Toast',
          title: 'Toast'
        }, {
          link: 'Indicator',
          title: 'Indicator'
        }, {
          link: 'Navbar',
          title: 'Navbar'
        }, {
          link: 'Button',
          title: 'Button'
        }, {
          link: 'Swipe',
          title: 'Swipe'
        }, {
          link: 'Radio',
          title: 'Radio'
        }, {
          link: 'Checklist',
          title: 'Checklist'
        }, {
          link: 'Field',
          title: 'Field'
        }, {
          link: 'Switch',
          title: 'Switch'
        }, {
          link: 'Lazyload',
          title: 'Lazyload'
        }, {
          link: 'Search',
          title: 'Search'
        }, {
          link: 'MessageBox',
          title: 'MessageBox'
        }, {
          link: 'DateTimePicker',
          title: 'DateTimePicker'
        }, {
          link: 'Picker',
          title: 'Picker'
        }, {
          link: 'Popup',
          title: 'Popup'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .mint-cell-wrapper{
    height: 60px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
  .index-wrap{
    padding: 15px;
  }
</style>
