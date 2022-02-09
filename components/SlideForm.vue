<template>
  <form>
    <div class="controls">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" v-model="slide.title">
    </div>
    <div class="controls">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" v-model="slide.description">
    </div>
    <div class="controls">
      <label for="author">Author</label>
      <input type="text" name="author" id="author" v-model="slide.author">
    </div>
    <div class="controls">
      <label for="url">Image</label>
      <input
        type="file"
        name="url"
        id="url"
        @change="setImage"
        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
      >
    </div>
    <button @click.prevent="addSlide">Добавить</button>
  </form>
</template>

<script>
  export default {
    data:() => ({
      slide: {
        title: null,
        description: null,
        author: null,
        url: null
      }
    }),
    methods: {
      async setImage(e){
        const file = e.target.files[0];

        if (!file) return;

        const readData = (f) =>  new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
        });

        this.slide.url = await readData(file);
        console.log(this.slide)
      },
      addSlide(){
        let slide = {
          id: Date.now(),
          title: this.slide.title,
          description: this.slide.description,
          author: this.slide.author,
          url: this.slide.url
        }
        this.$emit('addSlideToSlides', slide)
      }
    }
  }
</script>

<style scoped>

</style>
