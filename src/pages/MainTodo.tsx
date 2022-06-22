import React, { FC, useState } from 'react';
import TodoList from "../components/Todo/TodoList/TodoList";
import { Button, Modal } from "antd";
import cl from "../components/Todo/TodoList/TodoList.module.scss";
import TodoForm from "../components/Todo/TodoForm/TodoForm";
import { TodoTypes } from "../modules/Todos/todoTypes";

const MainTodo: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsModalVisible(true)}
                className={cl.btn}
            >
                Создать
            </Button>

            <Modal
                title="Создать заметку"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <TodoForm/>
            </Modal>

            <TodoList type={TodoTypes.ACTIVE}/>
        </>
    );
};

export default MainTodo;