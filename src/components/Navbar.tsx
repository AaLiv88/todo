import React, { FC } from 'react';
import { Layout, Menu } from "antd"
import { useAppSelector } from "../hooks/reduxHooks";
import { Link } from "react-router-dom";
import { PublicRoutesEnum } from "../utils/routes/types";

const Navbar: FC = () => {
    const { user, isAuth } = useAppSelector(state => state.auth)

    return (
        <Layout.Header>
            <div className="logo" />
                {isAuth
                    ?
                    <Menu
                        theme="dark"
                        mode="horizontal"
                    >
                        <div>{user?.username}</div>
                        <Menu.Item key={"exit"}>Выйти</Menu.Item>
                    </Menu>
                    :
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultOpenKeys={["login"]}
                    >
                        <Menu.Item key={"login"}>
                            <Link to={PublicRoutesEnum.LOGIN}>
                                Войти
                            </Link>
                        </Menu.Item>

                        <Menu.Item key={"register"}>
                            <Link to={PublicRoutesEnum.REGISTRATION}>
                                Регистрация
                            </Link>
                        </Menu.Item>
                    </Menu>
                }
        </Layout.Header>
    );
};

export default Navbar;