import React, { FC } from 'react';
import TodoList from "../components/Todo/TodoList/TodoList";
import { TodoTypes } from "../modules/Todos/todoTypes";
import CreateTodo from "../components/Todo/CreateTodo";

const MainTodo: FC = () => {
    return (
        <>
            <CreateTodo/>
            <TodoList type={TodoTypes.ACTIVE} textIfNoTodos={"Создайте свою первую заметку"}/>
        </>
    );
};

export default MainTodo;