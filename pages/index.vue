<template>
  <div class="wrapper">
    <Navigation />
    <Slider :slides="slides"/>
    <SlideForm @addSlideToSlides="addSlideToSlides" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed:{
      ...mapGetters({
          slides: 'getSlides',
      })
    },
    created() {
      this.fetchSlides()
    },
    methods: {
      ...mapActions(['fetchSlides','addSlideAction']),
      addSlideToSlides(slide){
        this.addSlideAction(slide);
      }
    }
  }
</script>
