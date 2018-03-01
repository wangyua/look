<template>
  <div id="retui" class="retui_top">
      <h2>精品热推</h2>
      <div class="retui_bottom">
        <div class="retui_box" v-for="(item,i) in dat.data" v-if="i<6">
          <img :src="'//qidian.qpic.cn/qdbimg/349573/'+ item.bid +'/150'" alt="">
          <p>{{item.bName}}</p>
          <p>{{item.bAuth}}</p>
        </div>
      </div>
      <huan />
  </div>
</template>

<script>
import huan from './huan'
export default {
  name:'retui',
  components:{
    huan
  },
  props:['dat']
}
</script>

<style>
  .retui_top h2{
    border-left: 3px solid skyblue;
    text-align: left;
    margin: .2rem .2rem;
    padding-left: .2rem;
    height: .3rem;
    line-height: .3rem;
  }
  .retui_bottom{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .retui_box{
    width: 28%;
    margin-bottom: .2rem;
  }
  .retui_box img{
    width: 100%;
    border-radius: .1rem;
    box-shadow: 2px 5px 5px #ddd;
  }
  .retui_box p{
    text-align: left;
  }
  .retui_box p:nth-of-type(2){
    color:#aaa;
    font-size: .1rem;
  }
</style>
