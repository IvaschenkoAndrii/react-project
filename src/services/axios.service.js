import axios from "axios";

import {baseURL, token} from "../config";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config
})


export {
    axiosService
}