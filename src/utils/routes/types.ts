import React from "react";


export enum PublicRoutesEnum {
    LOGIN = "/login",
    REGISTRATION = "/registration",
}

export enum PrivateRoutesEnum {
    TODO = "/todo",
    FAILED_TODO = "/failed-todo",
    COMPLETED_TODO = "/completed-todo",
}

export type RoutePath =
    PublicRoutesEnum.LOGIN |
    PublicRoutesEnum.REGISTRATION |
    PrivateRoutesEnum.COMPLETED_TODO |
    PrivateRoutesEnum.TODO |
    PrivateRoutesEnum.FAILED_TODO

export interface Route {
    path: RoutePath;
    element: React.ReactNode;
}