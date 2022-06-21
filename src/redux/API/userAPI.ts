import { REST_API_USERS } from "../../utils/fakeRestApiUrls";
import axios, {AxiosResponse} from "axios";
import { IUser } from "../../modules/IUser";
import { IEntryData } from "../auth/types";

export class UserAPI {
    static async loginUser(entryData: IEntryData): Promise<AxiosResponse<IUser[]>> {
        return axios.get(REST_API_USERS, {
            params: {
                username: entryData.username,
                password: entryData.password,
            }
        });
    }
    static async registrationUser(user: IUser): Promise<AxiosResponse<IUser>> {
        return axios.post<IUser>(REST_API_USERS, {
            username: user.username,
            password: user.password,
            id: user.id,
        });
    }
    static async getUsersByUsername(username: string): Promise<AxiosResponse<IUser[]>> {
        return axios.get(REST_API_USERS, {
            params: {
                username,
            }
        });
    }
}