import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";


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

axios.interceptors.response.use(
    (response) => {
        // Se la risposta è stata ricevuta con successo, restituisci la risposta
        return response;
    },
    (error) => {
        // Se c'è stato un errore nella risposta
        if (error.response.status === 401) {
            // Reindirizza l'utente alla pagina di accesso o gestisci l'errore in base alle tue esigenze
            router.push('/login');
        }
        // Se ci sono altri tipi di errori, passali così come sono
        return Promise.reject(error);
    }
);

export const axiosInstance = axios;

export const VueAxiosPlugin = {
    install(app) {
        app.use(VueAxios, axiosInstance);
    }
};
