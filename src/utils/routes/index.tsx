import { PrivateRoutesEnum, PublicRoutesEnum, Route } from "./types";
import Registration from "../../pages/Registration";
import Login from "../../pages/Login";
import FailedTodo from "../../pages/FailedTodo";
import CompletedTodo from "../../pages/CompletedTodo";
import MainTodo from "../../pages/MainTodo";


export const publicRoutes: Route[] = [
    { path: PublicRoutesEnum.REGISTRATION, element: <Registration/> },
    { path: PublicRoutesEnum.LOGIN, element: <Login/> },
];

export const privateRoutes: Route[] = [
    { path: PrivateRoutesEnum.FAILED_TODO, element: <FailedTodo/> },
    { path: PrivateRoutesEnum.COMPLETED_TODO, element: <CompletedTodo/> },
    { path: PrivateRoutesEnum.TODO, element: <MainTodo/> },
];