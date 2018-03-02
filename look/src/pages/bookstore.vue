<template>
  <div id="bookstore">
    <banner />
    <retui :dat='{title:"精品热推",data:dat}'></retui>
    <booklist :dat='{title:"精品新书",data:dat}'></booklist>
    <retui :dat='{title:"超强男频",data:dat}'></retui>
    <booklist :dat='{title:"男频完结好书",data:dat}'></booklist>
    <retui :dat='{title:"最美女频",data:dat}'></retui>
    <booklist :dat='{title:"女频完结好书",data:dat}'></booklist>
  </div>
</template>

<script>
import banner from './../components/banner.vue'
import retui from './../components/retui.vue'
import booklist from './../components/booklist.vue'
export default {
 name:'bookstore',
 data(){
   return {
     dat:{},
   }
 },
 components:{
   banner,
   retui,
   booklist
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
  #bookstore{
    background-color: #dfdfdf;
    padding-bottom: 1rem;
  }
</style>
