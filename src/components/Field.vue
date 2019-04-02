<template>
  <div class="page-filed">
    <gheader :examplename="examplename"></gheader>
    <div class="page-filed-wrapper">
      <div class="page-part">
        <mt-field
          label="用户名"
          placeholder="请输入用户名"
          :attr="{maxLength: 10}"
          v-model="username">
        </mt-field>
        <mt-field
          label="邮箱"
          placeholder="请输入邮箱"
          type="email"
          v-model="useremail">
        </mt-field>
        <mt-field
          label="密码"
          placeholder="请输入密码"
          type="password"
          v-model="userpwd">
        </mt-field>
        <mt-field
          label="手机号"
          placeholder="请输入手机号"
          type="tel"
          v-model="userphone">
        </mt-field>
        <mt-field
          label="网站"
          placeholder="请输入网站"
          type="url"
          v-model="userurl">
        </mt-field>
        <mt-field
          label="数字"
          placeholder="请输入数字"
          type="number"
          v-model="usernum">
        </mt-field>
        <mt-field
          label="生日"
          placeholder="请输入生日"
          type="date"
          v-model="userdate">
        </mt-field>
        <mt-field
          label="自我评价"
          placeholder="自我评价"
          type="textarea"
          row="4"
          v-model="userinfo">
        </mt-field>
      </div>
      <div class="page-part">
        <mt-field
          placeholder="登录邮箱"
          type="email">
        </mt-field>
        <mt-field
          placeholder="密码"
          type="password">
        </mt-field>
      </div>
      <div class="page-part">
        <mt-field
          label="邮箱"
          placeholder="成功状态"
          state="success">
        </mt-field>
        <mt-field
          label="邮箱"
          placeholder="失败状态"
          state="error">
        </mt-field>
        <mt-field
          label="邮箱"
          placeholder="警告状态"
          state="warning">
        </mt-field>
      </div>
      <div class="page-part">
        <mt-field
          label="验证码"
          placeholder="输入验证码">
          <img src="../assets/imgs/tabbardefault.png" alt="" width="100" height="40"/>
        </mt-field>
      </div>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Filed',
  data () {
    return {
      examplename: 'Filed',
      username: '',
      useremail: '',
      userpwd: '',
      userphone: '',
      userurl: '',
      usernum: '',
      userdate: '',
      userinfo: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .page-filed-wrapper{
    height: calc(100vh - 90px);
    overflow-y: auto;
  }
</style>
