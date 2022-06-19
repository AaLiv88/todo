import React, { FC } from 'react';
import Navbar from "../Navbar";
import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import cl from "./AppLayout.module.scss";

const AppLayout: FC = () => {
    return (
        <Layout className="layout">
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