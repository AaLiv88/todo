import React, { FC } from 'react';
import { ITodo, TodoTypes } from "../../../modules/Todos/todoTypes";
import cl from "./TodoItem.module.scss";
import { Col } from "antd";
import TodoManeging from "../TodoManaging/TodoManeging";
import { getFormatDateToString } from "../../../utils/getFormateDate";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const className =
        todo.type === TodoTypes.ACTIVE ? cl.activeTodo :
            todo.type === TodoTypes.COMPLETED ? cl.completeTodo :
                todo.type === TodoTypes.FAILED ? cl.failedTodo : "";

    return (
        <Col span={8}>
            <article className={className}>
                <h2>{todo.title}</h2>
                <p className={cl.description}>
                    {todo.description}
                </p>
                <p className={cl.date}>Дата создания: {getFormatDateToString(todo.createDate)}</p>
                <p className={cl.date}>
                    {todo.dateBeforeLoss &&
                        <>выполнить до: {getFormatDateToString(todo.dateBeforeLoss)}</>
                    }
                    {todo.dateOfCompleted &&
                        <>выполненно: {getFormatDateToString(todo.dateOfCompleted)}</>
                    }
                    {todo.dateOfLoss &&
                        <>проваленно: {getFormatDateToString(todo.dateOfLoss)}</>
                    }
                </p>
                <TodoManeging todo={todo}/>
            </article>
        </Col>
    );
};

export default TodoItem;