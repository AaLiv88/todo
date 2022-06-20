import React, { FC } from 'react';
import TodoList from "../components/Todo/TodoList/TodoList";
import { IActiveTodo } from "../modules/Todos/IActiveTodo";
import { TodoTypes } from "../modules/Todos/todoTypes";

const CompletedTodo: FC = () => {
    const todos: IActiveTodo[] = [
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "1" },
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "2" },
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "3" },
        { title: "1", description: "1", createDate: 1111e1, dateBeforeLoss: 1123213, type: TodoTypes.ACTIVE, id: "4" },
    ];

    return (
        <TodoList todos={todos}/>
    );
};

export default CompletedTodo;