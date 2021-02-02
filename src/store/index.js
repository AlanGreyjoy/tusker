import Vue from 'vue'
import Vuex from 'vuex'

import snackbarAlertModule from './modules/snackbarAlert'
import AuthModule from "./modules/AuthModule";
import TuskerFeedModule from "./modules/TuskerFeedModule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snackbarAlertModule: snackbarAlertModule,
    AuthModule: AuthModule,
    TuskerFeedModule: TuskerFeedModule
  },
  state: {

  },
  mutations: {

  },
  actions: {
  },
})
