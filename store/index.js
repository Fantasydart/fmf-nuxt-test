import axios from "axios";

export const state = () => ({
  slides: []
})

//getters
export const getters = {
  getSlides(state){
    return state.slides
  }
}

//actions
export const actions = {
  async fetchSlides({ commit }){
   axios.get('https://jsonplaceholder.typicode.com/photos?_limit=3').then(response => {
     const slides = response.data
     commit('addSlides',  slides)
   })
  },
  addSlideAction({commit}, slide){
    commit('addSlide',  slide)
  }
}

//mutations
export const mutations = {
  addSlides(state, slides){
    state.slides.push(...slides)
  },
  addSlide(state, slide){
    state.slides.push(slide)
  }
}


