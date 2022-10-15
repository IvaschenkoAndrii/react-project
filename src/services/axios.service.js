import axios from "axios";

import {baseURL} from "../config";

let axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmJiNzk4Zjk1ODliOGY4ZThlZmNhMzRiNDRlYmIxZCIsInN1YiI6IjYzNDlhOTY3YjA0NjA1MDA3ZTc3NWJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HmkDe8k_3NFNgji13CrIVvmyYlfCCb50jEH6NQAwJ4A';

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config
})


export {
    axiosService
}