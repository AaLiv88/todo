import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth"
// import { userAPI } from "./API/userAPI";

export const store = configureStore({
    reducer: {
        auth,
        // [userAPI.reducerPath]: userAPI.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware().concat(userAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch