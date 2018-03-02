<template>
  <div class="huan" @click="zhuan()">
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
      if(this.show){
        this.show = !this.show;
        setTimeout(()=>{
          this.show = !this.show;
        },3000)
      }
    }
  }
}
</script>

<style>
  .huan{
    height: .7rem;
    margin-bottom: 0.2rem;
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
