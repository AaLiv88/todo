import { AbstractTodo, TodoTypes } from "./todoTypes";

export interface ICompletedTodo extends AbstractTodo{
    dateOfCompleted: number;
    type: TodoTypes.COMPLETED;
}