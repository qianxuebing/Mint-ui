<template>
  <div>
    <gheader :examplename="examplename"></gheader>
    <div class="page-datetime border">
      <div class="btn-group">
        <mt-button
          size="large"
          type="primary"
          @click="open('picker1')">
          点击弹出DateTimePicker
        </mt-button>
        <mt-button
          size="large"
          @click="open('picker2')">
          点击弹出DatePicker
        </mt-button>
        <mt-button
          size="large"
          type="danger"
          @click="open('picker3')">
          点击弹出TimePicker
        </mt-button>
        <mt-button
          size="large"
          type="primary"
          @click="open('picker4')">
          自定义模板
        </mt-button>
        <mt-button
          size="large"
          @click="open('picker5')">
          设定初始值
        </mt-button>
      </div>
      <mt-datetime-picker
        ref="picker1"
        v-model="value1"
        :closeOnClickModel="false"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker2"
        type="date"
        v-model="value2"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker3"
        v-model="value3"
        type="time"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker4"
        type="date"
        v-model="value4"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker5"
        type="time"
        v-model="value5"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-cell
        title="选择的时间是">
        {{dateVal}}
      </mt-cell>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
// import {formatDate} from '../assets/js/formatDate'
export default {
  name: 'DateTimePicker',
  data () {
    return {
      examplename: 'DateTimePicker',
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: '04:12',
      dateVal: ''
    }
  },
  methods: {
    open (picker) {
      this.$refs[picker].open()
    },
    handleChange (value) {
      this.dateVal = value
    }
  }
}
</script>

<style lang="less" scoped>
  .page-datetime{
    height: calc(100vh - 90px);
    overflow-y: auto;
    margin: 10px;
    .btn-group{
      padding: 20px 0;
      .mint-button{
        height: 80px;
        margin: 0 auto 30px;
      }
    }
  }
</style>
