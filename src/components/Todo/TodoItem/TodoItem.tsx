import React, { FC } from 'react';
import { AnyTodo } from "../../../modules/Todos/todoTypes";
import cl from "./TodoItem.module.scss";
import { Col } from "antd";

interface TodoItemProps {
    todo: AnyTodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const date = (new Date(todo.createDate)).toISOString().slice(0,10)

    return (
        <Col span={8}>
            <article className={cl.activeTodo}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <p>{date}</p>
            </article>
        </Col>
    );
};

export default TodoItem;