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
            const refreshToken = (localStorage.getItem('refresh_token'));
            if(refreshToken===null || refreshToken==='undefined'){
                store.commit('deleteAccessToken');
                store.commit('deleteRefreshToken');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('refresh_token');
                router.push('/login');
            }else {
                await store.dispatch('refreshToken');
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
