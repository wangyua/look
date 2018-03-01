<template>
  <div id="app">
    <windows />
  </div>
</template>

<script>
import windows from './pages/windows.vue'
export default {
  name: 'App',
  components: {
    windows
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .2rem;
}
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color:#000;
}
</style>
