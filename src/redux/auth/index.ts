import { IUser } from "../../modules/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: IUser | null;
    isAuth: boolean;
    isLoading: boolean;
    error: string;
}

const initialState: AuthState = {
    user: null,
    isAuth: false,
    isLoading: false,
    error: "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser(state: AuthState){
            state.isLoading = true;
            state.error = "";
            state.user = null;
        },
        loginUserSuccess(state: AuthState, action: PayloadAction<IUser>){
            state.isLoading = false;
            state.user = action.payload;
            state.isAuth = true;
        },
        loginUserError(state: AuthState, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export const { loginUser, loginUserSuccess, loginUserError} = authSlice.actions;
export default authSlice.reducer;