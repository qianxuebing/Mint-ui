<template>
  <div class="page-search">
    <mt-search
      autofocus
      v-model="value">
      <mt-cell
        v-for="(item, i) in filterResult"
        :key="i"
        :title="item"
      @click.native="searchItem(i)">
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
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  computed: {
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  },
  methods: {
    searchItem (i) {
      this.value = this.filterResult[i]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
