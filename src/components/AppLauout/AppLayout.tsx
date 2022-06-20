import React, { FC } from 'react';
import Navbar from "../Navbar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import cl from "./AppLayout.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";

const AppLayout: FC = () => {
    const { isAuth } = useAppSelector(state => state.auth)

    return (
        <Layout className={isAuth ? cl.gray : ""}>
            <Navbar/>
            <Layout.Content style={{ padding: '0 50px' }}>

                <div className={cl.content}>
                    <Outlet/>
                </div>

            </Layout.Content>
        </Layout>
    );
};

export default AppLayout;