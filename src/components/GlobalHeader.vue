<template>
  <div id="header" class="clearfix" v-if="headerIsShow">
    <router-link to="/" class="tohomepage">首页</router-link>
    <span class="examplename">{{examplename}}</span>
    <a href="javascript:;" @click="goback" class="goback">返回</a>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {
    headerIsShow: {
      type: Boolean,
      default: true
    },
    examplename: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      msg: '页面顶部'
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  #header{
    text-align: center;
  }
</style>
