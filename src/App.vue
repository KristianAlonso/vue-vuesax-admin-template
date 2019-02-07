<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    const myTheme = ''
    const styleElement = document.createElement('style')
    const textNode = document.createTextNode(myTheme)
    styleElement.appendChild(textNode)
    styleElement.id = 'app-main-theme'
    document.head.appendChild(styleElement)
  }
}
</script>

<style lang="scss">
// @import './styles/theme.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
