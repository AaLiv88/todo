import { ITodo } from "../../../modules/Todos/todoTypes";
import React, { FC, useState } from "react";
import { useAction } from "../../../hooks/useAction";
import { Button, Modal } from "antd";
import TodoForm from "../TodoForm/TodoForm";
import { useAppSelector } from "../../../hooks/reduxHooks";

interface EditProps {
    todo: ITodo
}

const Edit: FC<EditProps> = ({ todo }) => {
    const { moveTodo } = useAction();
    const { user } = useAppSelector(state => state.auth)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editTodo, setEditTodo] = useState(todo);

    const submit = (todo: ITodo) => {
        if (user) {
            moveTodo(todo, false);
        }
        setIsModalVisible(false);
    }

    return (
        <>
            <Modal
                title="Изменить"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <TodoForm submit={submit} todo={editTodo} setTodo={setEditTodo} submitText="Ок"/>
            </Modal>

            <Button
                onClick={() => setIsModalVisible(true)}
            >
                Изменить
            </Button>
        </>
    );
};

export default Edit;