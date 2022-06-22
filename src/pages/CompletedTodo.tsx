import React, { FC } from 'react';
import TodoList from "../components/Todo/TodoList/TodoList";
import { IActiveTodo } from "../modules/Todos/IActiveTodo";
import { anyTypeTodo, TodoTypes } from "../modules/Todos/todoTypes";

const CompletedTodo: FC = () => {

    return (
        <TodoList type={TodoTypes.COMPLETED}/>
    );
};

export default CompletedTodo;