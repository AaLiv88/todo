import React, { FC, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import cl from "./TodoWrapper.module.scss";
import { PrivateRoutesEnum } from "../../../utils/routes/types";
import { useAppSelector } from "../../../hooks/reduxHooks";

interface ILinks {
    name: string;
    path: string;
}

const links: ILinks[] = [
    { name: "Заметки", path: PrivateRoutesEnum.TODO},
    { name: "Выполенное", path: PrivateRoutesEnum.COMPLETED_TODO},
    { name: "Проваленное", path: PrivateRoutesEnum.FAILED_TODO},
]

const TodoWrapper: FC = () => {
    const { pathname } = useLocation();


    return (
        <div className={cl.root}>

            <ul className={cl.linksList}>
                {links.map(link =>
                    <li key={link.path} className={`${cl.link}`}>
                        <Link
                            className={pathname === link.path ? cl.active : ""}
                            to={link.path}
                        >
                            {link.name}
                        </Link>
                    </li>
                )}
            </ul>

            <div className={cl.todos}>
                <Outlet/>
            </div>
        </div>
    );
};

export default TodoWrapper;