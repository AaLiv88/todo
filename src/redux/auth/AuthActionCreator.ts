import { AppDispatch } from "../index";
import { IEntryData } from "./types";
import { loginUser, loginUserError, loginUserSuccess, logOutUser } from "./index";
import { UserAPI } from "../API/userAPI";
import { LocalStorageKeysEnum } from "../../utils/LocalStorageKeysEnum";
import { IUser } from "../../modules/IUser";

export const AuthActionCreator = {
    setError: (error: string) => async (dispatch: AppDispatch) => { dispatch(loginUserError(error)) },
    setUser: (user: IUser) => async (dispatch: AppDispatch) => { dispatch(loginUserSuccess(user)) },
    login: (entryData: IEntryData) => async (dispatch: AppDispatch) => {
        try {
            dispatch(loginUser());
            const { data } = await UserAPI.loginUser(entryData);
            const user = data[0];
            if (user) {
                localStorage.setItem(LocalStorageKeysEnum.USERNAME, entryData.username);
                localStorage.setItem(LocalStorageKeysEnum.IS_AUTH, "true");
                dispatch(loginUserSuccess(user));
            } else {
                dispatch(loginUserError("Не верное имя пользователя или пароль!"));
            }
        } catch (error) {
            dispatch(loginUserError((error as Error).message));
        }
    },
    registration: (entryData: IEntryData) => async (dispatch: AppDispatch) => {
        try {
            dispatch(loginUser());
            const response = await UserAPI.registrationUser(entryData);
            const user = response.data;
            if (response) {
                dispatch(loginUserSuccess(user));
            }
        } catch (error) {
            dispatch(loginUserError((error as Error).message));
        }
    },
    logOut: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem(LocalStorageKeysEnum.USERNAME);
        localStorage.removeItem(LocalStorageKeysEnum.IS_AUTH);
        dispatch(logOutUser())
    }
}