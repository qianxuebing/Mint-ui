<template>
    <div id="footer" v-if="footerIsShow">
      {{msg}}
    </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  props: {
    footerIsShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      msg: '页面底部'
    }
  }
}
</script>

<style lang="less" scoped>
  #footer{
    text-align: center;
  }
</style>
