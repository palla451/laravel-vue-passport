import axios from "axios";

const state= {
    userLogged:null,
    access_token:null
};

const getters= {
    getUserLogged: state => state.userLogged,
    getAccessToken: state => state.access_token
};

const mutations= {
    setUserLogged: (state,userLogged) => { state.userLogged = userLogged },
    setAccessToken: (state,access_token) => { state.access_token = access_token },
};

const actions = {
    async login({commit},$credentials) {
        const response = await axios.post('login', $credentials);
        console.log(response.data.user);
        console.log(response);
        commit('setUserLogged',response.data.user);
        commit('setAccessToken',response.data.access_token);
        localStorage.setItem('token',response.data.access_token);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
