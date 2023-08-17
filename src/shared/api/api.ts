import axios from "axios";
import {API_BASE_URL} from "shared/consts/api";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";

export const $api = axios.create({
  baseURL: API_BASE_URL
})

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
  return config
})