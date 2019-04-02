<template>
  <div class="page-lazyload">
    <gheader :examplename="examplename"></gheader>
    <div class="page-lazyload-wrapper">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index">
          <img v-lazy="imgUrl"/>
        </li>
      </ul>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Lazyload',
  data () {
    return {
      examplename: 'Lazyload',
      imgUrl: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
      list: 9
    }
  }
}
</script>

<style lang="less" scoped>
  .page-lazyload-wrapper{
    li{
      padding: 10px;
      &:last-child{
        margin-bottom: 40px;
      }
      img{
        width: 100%;
        margin: auto;
      }
    }
  }
</style>
