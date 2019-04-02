<template>
  <div class="page-switch">
    <gheader :examplename="examplename"></gheader>
    <div class="page-part">
      <mt-switch v-model="value1">
        <label v-text="value1"></label>
      </mt-switch>
    </div>
    <div class="page-part">
      <mt-switch v-model="value2">
        <label v-text="value2"></label>
      </mt-switch>
    </div>
    <mt-cell :title="'选项 ' + value3">
      <mt-switch v-model="value3" @change="handleChange(value3)"></mt-switch>
    </mt-cell>
    <mt-cell :title="'选项 ' + value4">
      <mt-switch v-model="value4" @change="handleChange(value4)"></mt-switch>
    </mt-cell>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  data () {
    return {
      examplename: 'Switch',
      value1: false,
      value2: true,
      value3: false,
      value4: true
    }
  },
  methods: {
    handleChange (event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>

</style>
