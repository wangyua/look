<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,i) in bannerUrl">
      <img :src="item" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
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
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          loop:true,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        }
      }
    }
}
</script>

<style>
  .swiper-slide img{
    width: 100%;
  }
</style>
