import Vue from 'vue'
import vuex, { Store } from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(vuex)

const store = new Store({
  modules: {
    app,
    settings,
    user,
  },
  getters,
})

export default store
