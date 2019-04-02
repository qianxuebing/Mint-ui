<template>
  <div class="load-more">
    <gheader :examplename="examplename"></gheader>
    <div class="page-loadmore-wrapper">
      <mt-spinner></mt-spinner>
      <mt-loadmore
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        ref="loadmore">
        <div class="hot-list">
          <div class="hot-one hot-item">
            <a href="javascript:;" class="show clearfix">
              <div class="img-box">
                <img src="http://p18nr20h5.bkt.clouddn.com/o_1caahtfg41c9s1tv41hatr9718o4a.jpeg!180x120" class="fl">
              </div>
              <h5 class="white-space">别让错误的认知毁掉我们的人生</h5>
              <p>
                女孩天生就不擅长数学、女孩学不好数学是正常的。因为
                <span class="color_e85647">...详情</span>
              </p>
              <p class="read">
                <span class="fa fa-eye"></span>391 &nbsp;&nbsp;&nbsp;
                <span class="fa fa-pencil-square-o"></span> 10
              </p>
            </a>
          </div>
        </div>
        <div slot="top" class="mint-loadmore-top" style="text-align: center;">
          <span></span>
          <mt-spinner></mt-spinner>
        </div>
        <div>没有更多数据了</div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span></span>
          <span>
            <mt-spinner></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'LoadMore',
  data () {
    return {
      examplename: 'Loadmore'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
