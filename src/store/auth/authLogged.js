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
            debugger;
            console.log(e.response.status);
            console.log(e.response.data.message);
            debugger;
            if (e.response.status === 401 && e.response.data.message === 'Unauthenticated') {
                // Se il token è scaduto, richiedi un nuovo access token utilizzando il refresh token
                await dispatch('refreshToken');
                // Dopo aver ottenuto un nuovo token, riprova l'operazione originale
            } else {
                commit('deleteAccessToken');
                commit('deleteRefreshToken');
                console.log(e.message);
            }
        }

    },
    async refreshToken({ commit }) {
        try {
            // Ottieni il refresh token dalla localStorage
            const refreshToken = localStorage.getItem('refresh_token');
            debugger;
            const response = await axios.post('refresh-token', { refresh_token: refreshToken });
            // Aggiorna l'access token con quello appena ottenuto
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
        } catch (e) {
            console.log("Impossibile aggiornare il token di accesso. Effettua nuovamente l'accesso.");
            commit('deleteAccessToken');
            commit('deleteRefreshToken');
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
