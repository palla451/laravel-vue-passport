import { createStore } from 'vuex'

import authLogin from "@/store/auth/authLogin";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
      login: authLogin
  }
})
