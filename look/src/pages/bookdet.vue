<template>
  <div id="bookdet">
    <div class="bookdet_top" v-bind:style="{backgroundImage:'url(//qidian.qpic.cn/qdbimg/349573/'+ dat.data.bid +'/150)'}">
      <img :src="'//qidian.qpic.cn/qdbimg/349573/'+ dat.data.bid +'/150'" alt="">
      <h2>{{dat.data.bName}}</h2>
      <p>{{dat.data.bAuth}}</p>
      <p>{{dat.data.state}} | {{dat.data.cat}}</p>
    </div>
    <div class="bookdet_des">
      <p>{{dat.data.desc}}</p>
    </div>
  </div>
</template>
<script>
export default{
  name:'bookdet',
  data(){
    return {
      dat:{}
    }
  },
  created(){
    this.dat = this.$route.query;
    console.log(this.dat);
  },
}
</script>

<style>
  #bookdet{
    text-align:left

  }
  .bookdet_top{
    padding-top: 1px;
    height: 4rem;
    background-color: skyblue;
    position: relative;
    background-repeat: no-repeat;
    background-size: 1000%;
    background-position: right;
  }
  .bookdet_top h2{
    margin-top: 1rem;
  }
  .bookdet_top p{
    margin-top: .1rem;
  }
  .bookdet_top p,.bookdet_top h2{
    text-indent: 3.5rem;
    color:#fff;
  }
  .bookdet_top img{
    width: 38%;
    position: absolute;
    top: .8rem;
    left: .3rem;
    border-radius: .1rem;
  }
</style>
