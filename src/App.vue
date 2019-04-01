<template>
  <div id="app">
    <!--<gheader :headerIsShow="headerIsShow"></gheader>-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      headerIsShow: true
    }
  }
}
</script>

<style>

</style>
