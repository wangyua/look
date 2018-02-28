<template>
  <div id="windows">
    <router-view></router-view>
    <div id="bar">
      <router-link to="bookshelf">书架</router-link>
      <router-link to="bookstore">书城</router-link>
      <router-link to="classification">分类</router-link>
      <router-link to="lists">排行榜</router-link>
    </div>
  </div>
</template>

<script>
import bookshelf from './bookshelf.vue'
import bookstore from './bookstore.vue'
import classification from './classification.vue'
import lists from './lists.vue'
export default {
  name:'windows',
  components:{
    bookshelf,
    bookstore,
    classification,
    lists
  }
}
</script>

<style>
#bar{
  width: 100%;
  height: 1rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom:0;
  align-items: center;
  border-top: 1px solid #ddd;
}
</style>
