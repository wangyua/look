<template>
  <div class="booklist retui retui_top">
    <h2>{{dat.title}}</h2>
    <div class="booklist_bottom">
      <div class="booklist_box" v-for="(item,i) in dat.data.data" v-if="i<3">
        <img :src="'//qidian.qpic.cn/qdbimg/349573/'+ item.bid +'/150'" alt="">
        <h3>{{item.bName}}</h3>
        <p>{{item.desc}}</p>
        <p>{{item.bAuth}}</p>
      </div>
    </div>
    <huan />
  </div>
</template>
<script>
import huan from './huan'
export default {
 name:'booklist',
 components:{
   huan
 },
 props:['dat']
}
</script>

<style>
  .booklist_bottom{
    text-align: left;
    overflow: hidden;
  }
  .booklist_box{
    float: left;
    padding: .15rem 0 .15rem 0;
    border-bottom: 1px solid #ddd;
  }
  .booklist_box img{
    float: left;
    margin-left: .3rem;
    width: 28%;
    border-radius: .1rem;
    box-shadow: 2px 2px 5px #ddd;
  }
  .booklist_box p{
    float: left;
    margin-top: .1rem;
    margin-left: .2rem;
  }
  .booklist_box h3{
    text-indent: .2rem;
  }
  .booklist_box p:nth-of-type(1){
    font-size: .1rem;
    width: 60%;
    height: 1.9rem;
    overflow: hidden;
  }
</style>
