<template>
  <div class="toast">
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
          @click="IconToast">
          带icon的Toast
        </mt-button>
      </li>
      <li>
        <mt-button
          size="large"
          @click="PositionToast">
          自定义位置Toast
        </mt-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Toast',
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
