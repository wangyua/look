<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,i) in bannerUrl">
      <img :src="item" alt="">
    </swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  name:'banner',
  components:{
    swiper,
    swiperSlide
  },
  data() {
      return {
        bannerUrl:{
          1:'./static/img/banner1.jpg',
          2:'./static/img/banner2.jpg',
          3:'./static/img/banner3.jpg',
          4:'./static/img/banner4.jpg',
          5:'./static/img/banner5.jpg',
        },
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
            initialSlide :0,
            loop: true,
            speed: 400,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
        }
      }
    }
}
</script>

<style>
  .swiper-container{
    font-size: 0;
  }
  .swiper-slide img{
    width: 100%;
  }
</style>
