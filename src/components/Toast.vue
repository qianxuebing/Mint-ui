<template>
  <div class="toast">
    <gheader :examplename="examplename"></gheader>
    <ul>
      <li>
        <mt-button
          size="large"
          @click="DefaultToast">
          默认Toast
        </mt-button>
      </li>
      <li>
        <mt-button
          size="large"
          @click="IconToast"
          type="primary">
          带icon的Toast
        </mt-button>
      </li>
      <li>
        <mt-button
          size="large"
          @click="PositionToast"
          type="danger">
          自定义位置Toast
        </mt-button>
      </li>
    </ul>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      examplename: 'Toast'
    }
  },
  methods: {
    DefaultToast () {
      this.$toast('默认Toast')
    },
    IconToast () {
      this.$toast({
        message: '操作成功',
        iconClass: 'indexicon icon-toastsuccess'
      })
    },
    PositionToast () {
      this.$toast({
        message: '提示',
        position: 'bottom',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="less" scoped>
  ul{
    padding: 20px 10px 0;
    li {
      margin: 20px 0;
    }
  }
</style>
