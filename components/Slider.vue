<template>
  <swiper
    ref="mySwiper"
    :options="swiperOptions">
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <img class="img-preview" :src="slide.url" :alt="slide.title">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:{
      slides: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
  }
</script>

<style scoped>
.img-preview {
  max-width: 100%;
}
</style>
