import { IActiveTodo } from "./IActiveTodo";
import { ICompletedTodo } from "./ICompletedTodo";
import { IFailedTodo } from "./IFailedTodo";

export type AnyTodo = IActiveTodo | ICompletedTodo | IFailedTodo;
export type anyTypeTodo = TodoTypes.ACTIVE | TodoTypes.FAILED | TodoTypes.COMPLETED;

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
    author: string;
}
