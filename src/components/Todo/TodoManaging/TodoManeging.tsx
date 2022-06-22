import React, { FC } from 'react';
import { ITodo, TodoTypes } from "../../../modules/Todos/todoTypes";
import { useAction } from "../../../hooks/useAction";
import { useCheckIsFailed } from "../../../hooks/useCheckIsFailed";
import Complete from "./Complete";
import { Button } from "antd";
import Restore from "./Restore";
import cl from "./TodoManeging.module.scss";
import Edit from "./Edit";

interface TodoManagingProps {
    todo: ITodo;
}

const TodoManeging: FC<TodoManagingProps> = ({ todo }) => {
    const { deleteTodo } = useAction();
    useCheckIsFailed(todo);

    return (
        <div className={cl.root}>
            <Button
                onClick={() => deleteTodo(todo)}
            >
                Удалить
            </Button>

            {todo.type === TodoTypes.ACTIVE &&
                <Edit todo={todo}/>
            }
            {todo.type === TodoTypes.ACTIVE &&
                <Complete todo={todo}/>
            }
            {todo.type === TodoTypes.FAILED &&
                <Restore todo={todo}/>
            }
        </div>
    );
};

export default TodoManeging;