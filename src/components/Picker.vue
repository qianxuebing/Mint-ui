<template>
  <div>
    <gheader :examplename="examplename"></gheader>
    <div class="page">
      <div class="picker-wrapper">
        <mt-picker
          :slots="yearSlot"
          @change="onYearChange"
          :visible-item-count="3">
        </mt-picker>
      </div>
      <mt-cell
        title="出生年份">
        {{ year }}
      </mt-cell>
      <div class="picker-wrapper">
        <mt-picker
          :slots="dateSlot"
          @change="onDateChange"
          :visible-item-count="3">
        </mt-picker>
      </div>
      <mt-cell
        title="在校时间">
        {{ dateStart }} -- {{ dateEnd }}
      </mt-cell>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Picker',
  data () {
    return {
      examplename: 'Picker',
      year: '1945',
      number: 0,
      yearSlot: [{
        flex: 1,
        values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
        className: 'slot1'
      }],
      dateSlot: [
        {
          flex: 1,
          values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2015', '2016'],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      dateStart: '2002',
      dateEnd: '2002'
    }
  },
  methods: {
    onYearChange (picker, values) {
      this.year = values[0]
    },
    onDateChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      this.dateStart = values[0]
      this.dateEnd = values[1]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
