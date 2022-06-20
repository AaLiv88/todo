import { IActiveTodo } from "./IActiveTodo";
import { ICompletedTodo } from "./ICompletedTodo";

export type AnyTodo = IActiveTodo | ICompletedTodo;

export enum TodoTypes {
    ACTIVE = "ACTIVE",
    FAILED = "FAILED",
    COMPLETED = "COMPLETED",
}

export interface AbstractTodo {
    title: string;
    description: string;
    createDate: number;
    id: string;
}
