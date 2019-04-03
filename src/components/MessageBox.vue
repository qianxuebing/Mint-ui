<template>
  <div class="page">
    <gheader :examplename="examplename"></gheader>
    <ul>
      <li>
        <mt-button size="large" @click="alertBox">alert 提示框</mt-button>
      </li>
      <li>
        <mt-button size="large" type="primary" @click="confirmBox">confirm 提示框</mt-button>
      </li>
      <li>
        <mt-button size="large" type="danger" @click="promptBox">prompt 提示框</mt-button>
      </li>
    </ul>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  data () {
    return {
      examplename: 'MessageBox'
    }
  },
  methods: {
    alertBox () {
      this.$messagebox.alert('提示', '操作成功')
    },
    confirmBox () {
      this.$messagebox.confirm('', {
        message: '您还未登录，无法获得分享奖励',
        title: '用户未登录',
        showConfirmButton: true,
        showCancelButton: true,
        closeOnClickModel: false,
        cancelButtonClass: 'cancelButton',
        confirmButtonClass: 'confirmButoon',
        confirmButtonText: '立即登录',
        cancelButtonText: '明天再说'
      }).then(action => {
        if (action === 'confirm') {
          this.$toast('用户选择立即登录')
        }
      }).catch(err => {
        if (err === 'cancel') {
          this.$toast('用户选择明天再说')
        }
      })
    },
    promptBox () {
      this.$messagebox.prompt('请输入姓名').then(({value, action}) => {
        if (action === 'confirm') {
          if (!value || value.trim() === '') {
            this.$toast('用户没有输入')
          } else {
            this.$toast(value)
          }
        }
      }, () => {
        this.$toast('取消')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  ul{
    padding: 10px;
    li{
      margin: 20px 0;
    }
  }

</style>
