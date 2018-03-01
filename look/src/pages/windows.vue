<template>
  <div id="windows">
    <router-view v-bind:style="{height:viewp}"></router-view>
    <div id="bar">
      <router-link @click.native="change1(i)" v-for="(item,i) in bgUrl" :to="item.to" v-bind:style="{backgroundImage:'url('+item.url+')'}">{{i}}</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
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
  },
  data(){
    return {
      viewp:'',
      bgUrl:{
        '书架':{
          url:'./../../static/img/bookshelf.png',
          to:'bookshelf',
        },
        '书城':{
          url:'./../../static/img/bookstore_b.png',
          to:'bookstore',
        },
        '分类':{
          url:'./../../static/img/classification.png',
          to:'classification',
        },
        '排行榜':{
          url:'./../../static/img/lists.png',
          to:'lists',
        }
      },
    }
  },
  methods:{
    change1(i){
      for (var b in this.bgUrl) {
        if(this.bgUrl[b].url.indexOf('_b')!=-1){
          this.bgUrl[b].url = this.bgUrl[b].url.substr(0,this.bgUrl[b].url.indexOf('_b')) + '.png';
        }
      }
        this.bgUrl[i].url = this.bgUrl[i].url.substr(0,this.bgUrl[i].url.indexOf('.png')) + '_b.png';
    }
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
  background:#fff;
}
#bar a{
  width: 25%;
  height: 100%;
  line-height: 1.5rem;
  background-size: .5rem;
  background-repeat: no-repeat;
  background-position: .65rem .1rem;
}
</style>
