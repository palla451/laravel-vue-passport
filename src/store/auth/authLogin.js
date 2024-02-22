import axios from "axios";

const state= {
    userLogged:false,
    access_token:null,
    refresh_token:null
};

const getters= {
    getUserLogged: state => state.userLogged,
    getAccessToken: state => state.access_token,
    getRefreshToken: state => state.refresh_token
};

const mutations= {
    setUserLogged: (state,value) => { state.userLogged = value },
    setAccessToken: (state,access_token) => { state.access_token = access_token },
    setRefreshToken: (state,refresh_token) => { state.refresh_token = refresh_token },
};

const actions = {
    async login({commit},$credentials) {
        const response = await axios.post('login', $credentials);
        console.log(response.data.user);
        console.log(response);
        commit('setUserLogged',response.data.user);
        commit('setAccessToken',response.data.access_token);
        commit('setUserLogged',true);
        localStorage.setItem('access_token',response.data.access_token);

        localStorage.setItem('setRefreshToken',response.data.refresh_token);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
