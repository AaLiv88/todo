import React, { FC } from 'react';
import List from "../../List";
import { AnyTodo } from "../../../modules/Todos/todoTypes";
import TodoItem from "../TodoItem/TodoItem";
import cl from "./TodoList.module.scss";
import { Row } from "antd";

interface TodoListProps {
    todos: AnyTodo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
    return (
        <div className={cl.root}>
            <Row gutter={[16, 16]}>
                <List items={todos} renderItem={(todo: AnyTodo) => <TodoItem todo={todo}/>}/>
            </Row>
        </div>
    );
};

export default TodoList;