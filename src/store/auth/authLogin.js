import axios from "axios";
import router from "@/router";

const state= {
    userLogged:false,
    access_token:null,
    refresh_token:null,
    userLogin:null
};

const getters= {
    getUserLogged: state => state.userLogged,
    getUserLogin: state => state.userLogin,
    getAccessToken: state => state.access_token,
    getRefreshToken: state => state.refresh_token
};

const mutations= {
    setUserLogged: (state,value) => { state.userLogged = value },
    setAccessToken: (state,access_token) => { state.access_token = access_token },
    setRefreshToken: (state,refresh_token) => { state.refresh_token = refresh_token },
    setUserLogin: (state,userLogin) => { state.userLogin = userLogin },
};

const actions = {
    async login({commit},$credentials) {
        try {
            const response = await axios.post('login', $credentials);
            commit('setUserLogged',true);
            commit('setAccessToken',response.data.access_token);
            commit('setRefreshToken',response.data.refresh_token);
            commit('setUserLogged',true);
            commit('setUserLogin',response.data.user);
            localStorage.setItem('access_token',response.data.access_token);
            localStorage.setItem('refresh_token',response.data.refresh_token);
            router.push('dashboard/home');
        }catch (e) {
            console.log(e.message);
        }

    },
    async logout({commit},$credentials) {
        try {
            const response = await axios.get('logout', $credentials);
            console.log(response);
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            commit('setUserLogged',false);
            router.push('/login');
        }catch (e) {
            console.log(e.message);
        }

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
