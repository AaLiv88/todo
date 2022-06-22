import { ITodo, TodoTypes } from "../modules/Todos/todoTypes";
import { useEffect } from "react";
import { useAction } from "./useAction";


export const useCheckIsFailed = (todo: ITodo) => {
    const { moveTodo } = useAction();

    const onFailed = () => {
        if (todo.dateBeforeLoss && todo.dateBeforeLoss - Date.now() < 0) {
            moveTodo({
                ...todo,
                dateOfCompleted: null,
                dateBeforeLoss: null,
                dateOfLoss: Date.now(),
                type: TodoTypes.FAILED,
            }, true);
        }
    }

    useEffect(() => {
        if (todo.type === TodoTypes.ACTIVE) {
            const checkIsFailed = setInterval(onFailed, 1000);
            return () => clearInterval(checkIsFailed);
        }
    }, []);
}