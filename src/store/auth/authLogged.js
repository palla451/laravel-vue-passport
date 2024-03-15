import axios from "axios";
import router from "@/router";
import store from "@/store"; // Aggiungi l'import del router

const state= {
    logged:false,
    userAuth:'',
    currentRoute:undefined
};

const getters= {
    getLogged: state => state.logged,
    getUserAuth: state => state.userAuth,
    getCurrentRoute: state => state.currentRoute
};

const mutations= {
    setLogged: (state,value) => { state.logged = value },
    setUserAuth: (state,userAuth) => { state.userAuth = userAuth },
    setCurrentRoute: (state,currentRoute) => { state.currentRoute = currentRoute },
    deleteAccessToken: () => {localStorage.removeItem('access_token')},
    deleteRefreshToken: () => {localStorage.removeItem('refresh_token')},
};

const actions = {
    async authLogged({commit}) {
        try {
            const currentRoute = localStorage.getItem('currentRoute');
            if(currentRoute!=='/login'){
                commit('setCurrentRoute',currentRoute);
            }
            const response = await axios.get('logged');
            console.log(response.data.username);
            commit('setLogged',true);
            commit('setUserAuth',response.data)
            // Riprendi la rotta corrente dal localStorage
            console.log(currentRoute);
            // Reindirizza l'utente alla rotta corrente
            router.push(store.getters['getCurrentRoute']);
        }catch (e){
            console.log(e.message);
        }


    },
    async refreshToken({commit}) {
            // Ottieni il refresh token dalla localStorage
            const refreshToken = localStorage.getItem('refresh_token');
            commit('deleteAccessToken');
            commit('deleteRefreshToken');
            try {
                const response = await axios.post('refresh-token', { refresh_token: refreshToken });
                // Aggiorna l'access token con quello appena ottenuto
                commit('setAccessToken',response.data.access_token);
                commit('setRefreshToken',response.data.refresh_token);
                localStorage.setItem('access_token',response.data.access_token);
                localStorage.setItem('refresh_token',response.data.refresh_token);
                store.dispatch('authLogged');
            }catch (e) {
                router.push('/login');
            }

            }
};

export default {
    state,
    getters,
    mutations,
    actions
}
