import React, { FC } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../utils/routes";
import { PrivateRoutesEnum, PublicRoutesEnum } from "../utils/routes/types";
import AppLayout from "./AppLauout/AppLayout";
import { useAppSelector } from "../hooks/reduxHooks";
import TodoWrapper from "./Todo/TodoWrapper/TodoWrapper";

const AppRouter: FC = () => {
    const { isAuth } = useAppSelector(state => state.auth)

    return (
        <Routes>
            <Route element={<AppLayout/>}>
                {isAuth
                    ?
                    <Route element={<TodoWrapper/>}>
                        {privateRoutes.map(route =>
                            <Route path={route.path} element={route.element} key={route.path}/>
                        )}
                        <Route path="*" element={<Navigate to={PrivateRoutesEnum.TODO}/>}/>
                    </Route>
                    :
                    <>
                        {publicRoutes.map(route =>
                            <Route path={route.path} element={route.element} key={route.path}/>
                        )}
                        <Route path="*" element={<Navigate to={PublicRoutesEnum.LOGIN}/>}/>
                    </>
                }
            </Route>
        </Routes>
    );
};

export default AppRouter;