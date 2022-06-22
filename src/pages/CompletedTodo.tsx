import React, { FC } from 'react';
import TodoList from "../components/Todo/TodoList/TodoList";
import { TodoTypes } from "../modules/Todos/todoTypes";

const CompletedTodo: FC = () => {

    return (
        <TodoList type={TodoTypes.COMPLETED} textIfNoTodos={"Вы еще не выполнили ни одной заметки"}/>
    );
};

export default CompletedTodo;