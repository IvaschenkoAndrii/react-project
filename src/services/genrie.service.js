import {axiosService} from "./axios.service";
import {urls} from "../config";

const genrieService = {
    getAll: () => axiosService.get(urls.genrie)
}

export {
    genrieService
}