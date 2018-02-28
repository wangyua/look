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
  created(){
    // 让屏幕高度撑开
    document.body.style.height = document.documentElement.clientHeight + 'px';
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
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
