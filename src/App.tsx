import React, { useEffect } from 'react';
import './scss/index.scss';
import AppRouter from "./components/AppRouter";
import 'antd/dist/antd.css';
import { useAction } from "./hooks/useAction";
import { LocalStorageKeysEnum } from "./utils/LocalStorageKeysEnum";
import { IUser } from "./modules/IUser";


function App() {
    const { setUser } = useAction();

    useEffect(() => {
        if (localStorage.getItem(LocalStorageKeysEnum.USERNAME)) {
            setUser({
                username: localStorage.getItem(LocalStorageKeysEnum.USERNAME),
                id: localStorage.getItem(LocalStorageKeysEnum.USER_ID),
            } as IUser);
        }
    }, []);

    return (
        <AppRouter/>
    );
}

export default App;
