<template>
  <div id="bookstore">
    <banner />
    <retui :dat='dat'></retui>
  </div>
</template>

<script>
import banner from './../components/banner.vue'
import retui from './../components/retui.vue'
export default {
 name:'bookstore',
 data(){
   return {
     dat:{},
   }
 },
 components:{
   banner,
   retui
 },
 created(){
   this.axios.get('/api/majax/intellectRec/list?gender=male&_csrfToken=MmQda8jCdW0zfx7cf7BBlTMRhSgioKCJ1cpazP5S').then((response) => {
     this.dat = response.data
  console.log(this.dat.data)
})
 }
}
</script>

<style>

</style>
