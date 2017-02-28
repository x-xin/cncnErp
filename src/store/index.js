import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'


Vue.use(Vuex)

const state = {
  author:  "Roda",
  currentName: "入门说明"
}

const store = new Vuex.Store({
  state,
  mutations
});

export default store
