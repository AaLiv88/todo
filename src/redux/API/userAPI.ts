// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { REST_API_USERS } from "../../utils/fakeRestApiUrls";
// import { IUser } from "../../modules/IUser";
// import { IEntryData } from "../auth/types";
//
//
// export const userAPI = createApi({
//     reducerPath: 'userAPI',
//     baseQuery: fetchBaseQuery({ baseUrl: REST_API_USERS }),
//     endpoints: (builder) => ({
//         loginUser: builder.query<IUser[], IEntryData>({
//             query: (entryData: IEntryData) => ({
//                 url: "",
//                 params: {
//                     username: entryData.username,
//                     password: entryData.password,
//                     limit: 1
//                 }
//             }),
//         }),
//     }),
// })
//
//
// export const { useLoginUserQuery } = userAPI;

import { REST_API_USERS } from "../../utils/fakeRestApiUrls";
import axios, {AxiosResponse} from "axios";
import { IUser } from "../../modules/IUser";
import { IEntryData } from "../auth/types";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";

export class UserAPI {
    static async loginUser(entryData: IEntryData): Promise<AxiosResponse<IUser[]>> {
        return axios.get(REST_API_USERS, {
            params: {
                username: entryData.username,
                password: entryData.password,
            }
        });
    }
    static async registrationUser(entryData: IEntryData): Promise<AxiosResponse<IUser>> {
        return axios.post<IUser>(REST_API_USERS, {
            username: entryData.username,
            password: entryData.password,
            id: generateUniqueID(),
        })
    }
    static async getUsersByUsername(username: string): Promise<AxiosResponse<IUser[]>> {
        return axios.get(REST_API_USERS, {
            params: {
                username,
            }
        })
    }
}