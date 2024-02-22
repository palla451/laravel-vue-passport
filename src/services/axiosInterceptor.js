import axios from "axios";
import VueAxios from "vue-axios";


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

export const axiosInstance = axios;

export const VueAxiosPlugin = {
    install(app) {
        app.use(VueAxios, axiosInstance);
    }
};
