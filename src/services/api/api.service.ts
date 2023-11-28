import axios from 'axios';
import { authStorage } from '../../modules/authModule/helpers/auth';


const BASE_URL = import.meta.env.VITE_API_URL;
let BEARER_TOKEN: any | undefined = authStorage.getStoreAuthState() ? authStorage.getStoreAuthState().token : null;

console.log("BASE_URL", BASE_URL);

let headers: any = {}

const axiosInstance = axios.create({
    url: BASE_URL,
    method: 'GET',
    headers: headers,
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log('BEARER_TOKEN', BEARER_TOKEN);

        if (config.baseURL == BASE_URL && BEARER_TOKEN != undefined) {
            config.headers['Authorization'] = "Bearer " + BEARER_TOKEN;
            console.log(config.headers);
        }
        return config;
    }
)


axiosInstance.interceptors.response.use(

    //successful callback, we don't need to do anything
    (response) => {
        return response
    },

    //check if we received a 404 and redirect
    (error) => {
        if (error.response.status === 404) {
            // router.push({name: 'notfound' })
            return Promise.reject(error)
        }
        else if (error.response.status === 401) {
            return Promise.reject(error)
        }
        else {
            return Promise.reject(error)
        }
    }
)

function setAuthorizationToInterceptor() {
    if (!BEARER_TOKEN) {
        BEARER_TOKEN = authStorage.getStoreAuthState() ? authStorage.getStoreAuthState().token : null;
    }
    axiosInstance.interceptors.request.use(
        function (config) {
            // Do something before request is sent
            console.log('BEARER_TOKEN', BEARER_TOKEN);

            if (config.baseURL == BASE_URL && BEARER_TOKEN != undefined) {
                config.headers['Authorization'] = "Bearer " + BEARER_TOKEN;
                console.log(config.headers);
            }
            return config;
        }
    )
}

setAuthorizationToInterceptor();

export {
    axiosInstance as apiService,
    setAuthorizationToInterceptor
};