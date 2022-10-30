import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    // getAllByPages: (page=1) => axiosService.get(urls.movies,{params:{page}}),
    getMovie:(id)=>axiosService.get(urls.movie+'/'+id),
    getAllByGenrie: (with_genres,page=1) => axiosService.get(urls.movies,{params:{with_genres,page}})
}

export {
    movieService
}