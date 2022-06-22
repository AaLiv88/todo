import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth";
import todo from "./todo"

export const store = configureStore({
    reducer: {
        auth,
        todo,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch