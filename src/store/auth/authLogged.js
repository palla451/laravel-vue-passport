import axios from "axios";

const state= {
    logged:false,
};

const getters= {
    getLogged: state => state.logged

};

const mutations= {
    setLogged: (state,value) => { state.logged = value },
    deleteAccessToken: () => {localStorage.removeItem('access_token')},
    deleteRefreshToken: () => {localStorage.removeItem('refresh_token')},
};

const actions = {
    async authLogged({commit}) {
        try {
            const response = await axios.get('logged');
            console.log(response.data.user);
            commit('setLogged',true);
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
