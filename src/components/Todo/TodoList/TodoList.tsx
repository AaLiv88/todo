import React, { FC, useEffect } from 'react';
import List from "../../List";
import TodoItem from "../TodoItem/TodoItem";
import cl from "./TodoList.module.scss";
import { Row } from "antd";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useAction } from "../../../hooks/useAction";
import { anyTypeTodo, ITodo } from "../../../modules/Todos/todoTypes";

interface TodoListProps {
    type: anyTypeTodo;
    textIfNoTodos: string,
}

const TodoList: FC<TodoListProps> = ({ type, textIfNoTodos }) => {
    const { getTodos } = useAction();
    const { user } = useAppSelector(state => state.auth)
    const { isLoading, error, todos } = useAppSelector(state => state.todo);

    useEffect(() => {
        if (user?.id) {
            getTodos(user.id, type);
        }
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
                {todos.length
                    ?
                    <List
                        items={todos}
                        renderItem={(todo: ITodo) =>
                            <TodoItem key={todo.id} todo={todo}/>
                        }
                    />
                    :
                    <h2>{textIfNoTodos}</h2>
                }
            </Row>
        </div>
    );
};

export default TodoList;