import { createStore } from 'vuex'

import authLogin from "@/store/auth/authLogin";
import authLogged from "@/store/auth/authLogged";
import userCrud from "@/store/user/userCrud";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
      login: authLogin,
      logged: authLogged,
      users: userCrud
  }
})
