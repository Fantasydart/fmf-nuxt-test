<template>
  <div class="wrapper">
    <Navigation />
    <Slider :slides="slides"/>
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
      console.log(this.slides)
    },
    methods: {
      ...mapActions(['fetchSlides']),
    }
  }
</script>
