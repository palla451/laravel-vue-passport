import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";
import store from "@/store";


axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;

axios.interceptors.request.use(
    (config)  => {
        const token = localStorage.getItem('access_token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error)
    }
);

// Interceptor per il refresh del token
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 401 && !error.config._retry) {

            error.config._retry = true;
            try {
                debugger
                // const refreshToken = localStorage.getItem('refresh_token');
                debugger
                await  store.dispatch('refreshToken')
                // const response = await axios.post('refresh-token', { refresh_token: refreshToken });
                debugger
                // localStorage.setItem('access_token', response.data.access_token);
                // localStorage.setItem('refresh_token', response.data.refresh_token);
                // error.config.headers.Authorization = `Bearer ${response.data.access_token}`;
                return axios(error.config);
            } catch (e) {
                store.commit('deleteAccessToken');
                store.commit('deleteRefreshToken');
                console.log("Impossibile aggiornare il token di accesso. Effettua nuovamente l'accesso.");
                router.push('/login');
                return Promise.reject(e);
            }
        }
        return Promise.reject(error);
    }
);

export const axiosInstance = axios;

export const VueAxiosPlugin = {
    install(app) {
        app.use(VueAxios, axiosInstance);
    }
};
