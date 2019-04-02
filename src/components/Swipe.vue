<template>
  <div class="page-swipe">
    <gheader :examplename="examplename"></gheader>
    <div class="bannerList">
      <p class="bannerItemTitle">基础Swipe</p>
      <div class="banner1 bannerItem">
        <mt-swipe :auto="4000">
          <mt-swipe-item
            v-for="(item, index) in imglist"
            :key="index">
            <img :src="item.img" alt=""/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="bannerItemTitle">隐藏 indicator</p>
      <div class="banner2 bannerItem">
        <mt-swipe :show-indicators="false">
          <mt-swipe-item
            v-for="(item, index) in imglist"
            :key="index">
            <img :src="item.img" alt=""/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="bannerItemTitle">取消自动播放</p>
      <div class="banner3 bannerItem">
        <mt-swipe :auto="0">
          <mt-swipe-item
            v-for="(item, index) in imglist"
            :key="index">
            <img :src="item.img" alt=""/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="bannerItemTitle">默认Item</p>
      <div class="banner4 bannerItem">
        <mt-swipe :auto="0" :defaultIndex="1">
          <mt-swipe-item
            v-for="(item, index) in imglist"
            :key="index">
            <img :src="item.img" alt=""/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="bannerItemTitle">滑动事件 当前是第{{bannerindex5}}个Item</p>
      <div class="banner5 bannerItem">
        <mt-swipe @change="handleChange">
          <mt-swipe-item
            v-for="(item, index) in imglist"
            :key="index">
            <img :src="item.img" alt=""/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Swipe',
  data () {
    return {
      examplename: 'Swipe',
      bannerindex5: 1,
      imglist: [
        {img: 'https://f11.baidu.com/it/u=1521142320,1782399600&fm=72'},
        {img: 'https://f11.baidu.com/it/u=2987595138,4271236850&fm=72'}
      ]
    }
  },
  methods: {
    handleChange (index) {
      this.bannerindex5 = index + 1
    }
  }
}
</script>

<style lang="less" scoped>
  .bannerItemTitle{
    padding: 10px 0;
    text-align: center;
  }
  .bannerItem{
    width: 100%;
    position: relative;
    padding-bottom: 44%;
    height: 0;
    &:last-child{
      margin-bottom: 40px;
    }
    div{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%!important;
      .mint-swipe-item img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
