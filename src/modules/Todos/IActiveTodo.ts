import { AbstractTodo, TodoTypes } from "./todoTypes";

export interface IActiveTodo extends AbstractTodo{
    dateBeforeLoss: number;
    type: TodoTypes.ACTIVE;
}