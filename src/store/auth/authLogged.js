import axios from "axios";

const state= {
    logged:false,
};

const getters= {
    getLogged: state => state.logged

};

const mutations= {
    setLogged: (state,value) => { state.logged = value },
};

const actions = {
    async auhtLogged({commit}) {
        const response = await axios.get('logged');
        console.log(response.data.user);
        commit('setLogged',true);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
