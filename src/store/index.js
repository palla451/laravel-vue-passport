import { createStore } from 'vuex'

import authLogin from "@/store/auth/authLogin";
import authLogged from "@/store/auth/authLogged";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
      login: authLogin,
      logged: authLogged
  }
})
