import { AppDispatch } from "../index";
import { IEntryData } from "./types";
import { loginUser, loginUserError, loginUserSuccess } from "./index";
import { UserAPI } from "../API/userAPI";

export const AuthActionCreator = {
    login: (entryData: IEntryData) => async (dispatch: AppDispatch) => {
        try {
            dispatch(loginUser());
            const { data } = await UserAPI.loginUser(entryData);
            const user = data[0];
            if (user) {
                console.log(user);
                dispatch(loginUserSuccess(user));
            } else {
                dispatch(loginUserError("Не верное имя пользователя или пароль!"));
            }
        } catch (error) {
            dispatch(loginUserError((error as Error).message));
        }
    }
}