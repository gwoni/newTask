<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import request from 'request'

export default {
  name: 'App',
  mounted () {
    request('http://localhost:8080/api/login', function (error, response, body) {
      window.console.log('error:', error)
      window.console.log('statusCode: ', response && response.statusCode)
      window.console.log('body', body)
    })
  }
}
</script>
<style lang="scss">
</style>
