<template>
  <div class="page-checklist">
    <gheader :examplename="examplename"></gheader>
    <div class="page-checklist-wrapper">
      <mt-checklist
        class="page-part"
        title="复选框列表"
        v-model="value1"
        :options="options1">
      </mt-checklist>
      <div>
        <mt-cell title="选中的项">{{ value1 }}</mt-cell>
      </div>
      <mt-checklist
        class="page-part"
        title="第二个复选框"
        v-model="value2"
        :options="options2">
      </mt-checklist>
      <div>
        <mt-cell title="选中的项">{{ value2 }}</mt-cell>
      </div>
      <mt-checklist
        class="page-part"
        :max="2"
        title="最多选两个"
        v-model="value3"
        :options="options3">
      </mt-checklist>
      <div>
        <mt-cell title="选中的项">{{ value3}}</mt-cell>
      </div>
      <mt-checklist
        class="page-part"
        title="右对齐"
        align="right"
        v-model="value4"
        :options="options4">
      </mt-checklist>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Checklist',
  data () {
    return {
      examplename: 'Checklist',
      value1: [],
      value2: ['选中禁用的值'],
      value3: ['A'],
      value4: []
    }
  },
  created () {
    this.options1 = ['A', 'B', 'C']
    this.options3 = ['A', 'B', 'C', 'D']
    this.options4 = ['A', 'B', 'C', 'D']
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      }, {
        label: '选中禁用',
        value: '选中禁用的值',
        disabled: true
      }, {
        label: 'A',
        value: '值A'
      }, {
        label: 'B',
        value: '值B'
      }
    ]
  }
}
</script>

<style lang="less" scoped>

</style>
