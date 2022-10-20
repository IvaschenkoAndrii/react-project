import {axiosService} from "./axios.service";
import {urls} from "../config";

const searchService = {
    getSearchedMovies: (query,page=1) => axiosService.get(urls.search, {params:{query,page}})
}

export {
    searchService
}