import React, { FC } from 'react';
import { TodoTypes } from "../modules/Todos/todoTypes";
import TodoList from "../components/Todo/TodoList/TodoList";

const FailedTodo: FC = () => {
    return (
        <div>
            <TodoList type={TodoTypes.FAILED}/>
        </div>
    );
};

export default FailedTodo;