import axios from "axios";
import router from "@/router"; // Aggiungi l'import del router

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
            debugger;
            const response = await axios.get('logged');
            console.log(response.data.username);
            commit('setLogged',true);
            commit('setUserAuth',response.data)
            // Riprendi la rotta corrente dal localStorage
            const currentRoute = localStorage.getItem('currentRoute');
            console.log(currentRoute);
            // Reindirizza l'utente alla rotta corrente
            router.push(currentRoute);
        }catch (e) {
                // commit('deleteAccessToken');
                // commit('deleteRefreshToken');
                console.log(e.message);
        }

    },
    async refreshToken({commit}) {
        try {
            debugger
            // Ottieni il refresh token dalla localStorage
            const refreshToken = localStorage.getItem('refresh_token');
            const response = await axios.post('refresh-token', { refresh_token: refreshToken });
            debugger;
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
