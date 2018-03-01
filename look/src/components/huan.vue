<template>
  <div class="huan" @click="zhuan">
    <p>换一换
      <img src="./../../static/img/huan.png" alt="" :class="show?'tu':'zhuan tu'">
    </p>
  </div>
</template>

<script>
export default {
  name:'huan',
  data(){
    return {
      show: true
    }
  },
  methods:{
    zhuan(){
      this.show = false;
      setTimeout(function(){
        this.show = true
      },100)
    }
  }
}
</script>

<style>
  .huan{
    height: .7rem;
    border-top: 1px solid #ddd;
    padding-bottom: 7rem;
  }
  .huan p{
    height: 100%;
    font-size: .24rem;
    color:#1196db;
    line-height: .7rem;
  }
  .huan .tu{
    width: .2rem;
  }
  .zhuan{
    transition: 3s;
    transform: rotateZ(360deg);
  }
</style>
