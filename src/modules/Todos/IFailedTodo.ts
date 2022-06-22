import { AbstractTodo, TodoTypes } from "./todoTypes";

export interface IFailedTodo extends AbstractTodo {
    dateOfLoss: number;
    type: TodoTypes.FAILED;
}