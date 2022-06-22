
export type anyTypeTodo = TodoTypes.ACTIVE | TodoTypes.FAILED | TodoTypes.COMPLETED;

export enum TodoTypes {
    ACTIVE = "ACTIVE",
    FAILED = "FAILED",
    COMPLETED = "COMPLETED",
}

export interface ITodo {
    title: string;
    description: string;
    createDate: number;
    id: string;
    author: string;
    type: anyTypeTodo;
    dateOfCompleted: number | null;
    dateBeforeLoss: number | null;
    dateOfLoss: number | null;
}

