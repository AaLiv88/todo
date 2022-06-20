import React, { FC, useState } from 'react';
import { IActiveTodo } from "../modules/Todos/IActiveTodo";
import { TodoTypes } from "../modules/Todos/todoTypes";
import TodoList from "../components/Todo/TodoList/TodoList";
import { Button, Modal } from "antd";
import cl from "../components/Todo/TodoList/TodoList.module.scss";
import TodoForm from "../components/Todo/TodoForm/TodoForm";

const MainTodo: FC = () => {
    const todos: IActiveTodo[] = [
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "1" },
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "2" },
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "3" },
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "4" },
    ];
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

            <TodoList todos={todos}/>
        </>
    );
};

export default MainTodo;