import axios from "axios";

const state= {
    logged:false,
    userAuth:''
};

const getters= {
    getLogged: state => state.logged,
    getUserAuth: state => state.userAuth
};

const mutations= {
    setLogged: (state,value) => { state.logged = value },
    setUserAuth: (state,userAuth) => { state.userAuth = userAuth },
    deleteAccessToken: () => {localStorage.removeItem('access_token')},
    deleteRefreshToken: () => {localStorage.removeItem('refresh_token')},
};

const actions = {
    async authLogged({commit}) {
        try {
            const response = await axios.get('logged');
            console.log(response.data.username);
            commit('setLogged',true);
            commit('setUserAuth',response.data)
        }catch (e) {
            commit('deleteAccessToken');
            commit('deleteRefreshToken');
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
