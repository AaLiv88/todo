import React, { FC, useState } from 'react';
import { Button, Modal } from "antd";
import cl from "./TodoList/TodoList.module.scss";
import TodoForm from "./TodoForm/TodoForm";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useAction } from "../../hooks/useAction";
import { ITodo, TodoTypes } from "../../modules/Todos/todoTypes";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";

const CreateTodo: FC = () => {
    const { user } = useAppSelector(state => state.auth);
    const { createTodo } = useAction();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [todo, setTodo] = useState<ITodo>({
        title: "",
        description: "",
        createDate: Date.now(),
        id: "",
        author: "",
        type: TodoTypes.ACTIVE,
        dateBeforeLoss: null,
        dateOfCompleted: null,
        dateOfLoss: null,
    });

    const submit = (todo: ITodo) => {
        if (user) {
            createTodo({
                ...todo,
                author: user.id,
                id: generateUniqueID(),
            });
            setIsModalVisible(false);
        }
    }

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
                <TodoForm submit={submit} todo={todo} setTodo={setTodo} submitText="Создать"/>
            </Modal>
        </>
    );
};

export default CreateTodo;