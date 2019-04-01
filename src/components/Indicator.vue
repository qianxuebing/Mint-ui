<template>
    <div class="indicator">
      <gheader :examplename="examplename"></gheader>
      <div class="room">
        <ul>
          <li>
            <mt-button
              size="large"
              @click="indicator1">
              Indicator1
            </mt-button>
          </li>
          <li>
            <mt-button
              size="large"
              @click="indicator2">
              Indicator2
            </mt-button>
          </li>
          <li>
            <mt-button
              size="large"
              @click="indicator3">
              Indicator3
            </mt-button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Indicator',
  data () {
    return {
      examplename: 'Indicator'
    }
  },
  methods: {
    indicator1 () {
      this.$indicator.open()
      setTimeout(() => {
        this.$indicator.close()
      }, 3000)
    },
    indicator2 () {
      this.$indicator.open('加载中')
      setTimeout(() => {
        this.$indicator.close()
      }, 3000)
    },
    indicator3 () {
      this.$indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        this.$indicator.close()
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
  .room{
    padding: 10px;
    ul li{
      margin-bottom: 20px;
      &:first-child{
        margin-top: 30px;
      }
    }
  }
</style>
