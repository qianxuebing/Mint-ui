<template>
  <div class="page-search">
    <mt-search
      autofocus
      v-model="value">
      <mt-cell
        v-for="(item, index) in filterResult"
        :key="index"
        :title="item">
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      filterResult: []
    }
  }
}
</script>

<style lang="less" scoped>

</style>
