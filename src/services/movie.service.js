import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    getAllByPages: (page=1) => axiosService.get(urls.movies,{params:{page}}),
    getMovie:(id)=>axiosService.get(urls.movie+'/'+id),
    getAll: (genre_ids='id') => axiosService.get(urls.movies,{params:{genre_ids}})
}

export {
    movieService
}