import {axiosService} from "./axios.service";

import {urls} from "../config";

const genrieService = {
    getAllGenries: () => axiosService.get(urls.genrie)
}

export {
    genrieService
}