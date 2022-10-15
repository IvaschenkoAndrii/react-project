import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    getAll: (page=1) => axiosService.get(urls.movie,{params:{page}})
}

export {
    movieService
}