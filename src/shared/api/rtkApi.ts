import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_BASE_URL} from "shared/consts/api";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: headers => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
            if (token) {
                headers.set('Authorization', token)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({})
})
