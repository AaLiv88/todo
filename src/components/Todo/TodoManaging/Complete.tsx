import React, { FC } from 'react';
import { ITodo, TodoTypes } from "../../../modules/Todos/todoTypes";
import { useAction } from "../../../hooks/useAction";
import { Button } from "antd";

interface CompleteProps {
    todo: ITodo
}

const Complete: FC<CompleteProps> = ({ todo }) => {
    const { moveTodo } = useAction();

    return (
        <Button
            style={{background: "#90EE90", color: "#FFF"}}
            onClick={() => moveTodo({
                ...todo,
                dateOfCompleted: Date.now(),
                dateBeforeLoss: null,
                dateOfLoss: null,
                type: TodoTypes.COMPLETED,
            }, true)}
        >
            Выполнил
        </Button>
    );
};

export default Complete;