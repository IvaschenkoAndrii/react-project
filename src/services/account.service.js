import {axiosService} from "./axios.service";

import {urls} from "../config";

const accountService = {
    getAccountDetails: () => axiosService.get(urls.account)
}

export {
    accountService
}