import React, { FC, useEffect } from 'react';
import List from "../../List";
import { AnyTodo, anyTypeTodo, TodoTypes } from "../../../modules/Todos/todoTypes";
import TodoItem from "../TodoItem/TodoItem";
import cl from "./TodoList.module.scss";
import { Row } from "antd";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useAction } from "../../../hooks/useAction";

interface TodoListProps {
    type: anyTypeTodo;
}

const TodoList: FC<TodoListProps> = ({ type }) => {
    const { getTodos } = useAction();
    const { user } = useAppSelector(state => state.auth)
    const { isLoading, error, todos } = useAppSelector(state => state.todo);

    let textIfNoTodos: string = "Ничего не найдено";
    switch (type) {
        case TodoTypes.ACTIVE:
            textIfNoTodos = "Создайте свою первую заметку"
            break
        case TodoTypes.COMPLETED:
            textIfNoTodos = "Вы еще не выполнили ни одной заметки"
            break
        case TodoTypes.FAILED:
            textIfNoTodos = "Вы еще не провалили ни одной заметки"
            break
    }

    useEffect(() => {
        if (user?.id) {
            getTodos(user.id, type);
        }
        console.log(todos);
    }, []);

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>ERROR!!!</h1>
    }

    return (
        <div className={cl.root}>
            <Row gutter={[16, 16]}>
                {
                    todos.length
                    ? <List items={todos} renderItem={(todo: AnyTodo) => <TodoItem key={todo.id} todo={todo}/>}/>
                    : <h2>{textIfNoTodos}</h2>
                }
            </Row>
        </div>
    );
};

export default TodoList;