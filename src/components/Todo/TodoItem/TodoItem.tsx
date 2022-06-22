import React, { FC } from 'react';
import { AnyTodo, TodoTypes } from "../../../modules/Todos/todoTypes";
import cl from "./TodoItem.module.scss";
import { Col } from "antd";
import TodoManaging from "../TodoManaging/TodoManaging";

interface TodoItemProps {
    todo: AnyTodo;
}

//переделать отображение даты
const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const date = (new Date(todo.createDate)).toISOString().slice(0, 10);

    return (
        <Col span={8}>
            <article className={cl.activeTodo}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <p>Дата создания: {date}</p>
                <p>
                    {
                        todo.type === TodoTypes.ACTIVE &&
                        <p>выполнить до{new Date(todo.dateBeforeLoss).toISOString().slice(0, 10)}</p>
                    }
                    {
                        todo.type === TodoTypes.COMPLETED &&
                        <p>выполненно{new Date(todo.dateOfCompleted).toISOString().slice(0, 10)}</p>
                    }
                    {
                        todo.type === TodoTypes.FAILED &&
                        <p>выполненно{new Date(todo.dateOfLoss).toISOString().slice(0, 10)}</p>
                    }
                </p>
                <TodoManaging todo={todo}/>
            </article>
        </Col>
    );
};

export default TodoItem;