import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies,{params:{page}}),
    getMovie:(id)=>axiosService.get(urls.movie+'/'+id)
}

export {
    movieService
}