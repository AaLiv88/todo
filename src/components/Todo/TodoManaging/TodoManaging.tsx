import React, { FC } from 'react';
import { AnyTodo, TodoTypes } from "../../../modules/Todos/todoTypes";
import { useAction } from "../../../hooks/useAction";

interface TodoManagingProps {
    todo: AnyTodo;
}

const TodoManaging: FC<TodoManagingProps> = ({ todo }) => {
    const { deleteTodo, moveTodo } = useAction();

    // const moveTodo = () => {
    //     deleteTodo(todo);
    //     createTodo({ ...todo, type: TodoTypes.COMPLETED, dateOfCompleted: Date.now() });
    // }

    return (
        <div>
            <button onClick={() => deleteTodo(todo)}>Удалить</button>
            <button onClick={() => moveTodo(todo, TodoTypes.COMPLETED)}>Выполнил</button>
        </div>
    );
};

export default TodoManaging;