import Vue from 'vue'
import Vuex from 'vuex'
import { AuthStore } from './AuthStore'
import { ShopsStore } from './ShopsStore'
import { OwnersStore } from './OwnersStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthStore,
    ShopsStore,
    OwnersStore
  }
})

export default store
