import {axiosService} from "./axios.service";
import {urls} from "../config";

const searchService = {
    getAll: () => axiosService.get(urls.search)
}

export {
    searchService
}