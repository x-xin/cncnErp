import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  author :  "Roda"
}

const store = new Vuex.Store({
  state
  // mutations
});

export default store
